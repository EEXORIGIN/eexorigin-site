// Canvas effects for the animated EEXORIGIN logo (ported from
// eexorigin-logo-v2-newbolt.html, "Minimal" version): floating background
// particles, current flowing along the wires, electric arcs, bolt crackle
// and the spark burst when the bolt strikes. Coordinates are in the logo's
// 500x580 SVG space and mapped onto the canvases.

export function startLogoEffects(bgCvs, sparkCvs, { strikeAt = 480 } = {}) {
  const bgCtx = bgCvs.getContext("2d");
  const sparkCtx = sparkCvs.getContext("2d");
  const dpr = window.devicePixelRatio || 1;
  let cW = 0, cH = 0;

  function resize() {
    const r = sparkCvs.parentElement.getBoundingClientRect();
    cW = r.width; cH = r.height;
    [sparkCvs, bgCvs].forEach((c) => {
      c.width = cW * dpr; c.height = cH * dpr;
      c.style.width = cW + "px"; c.style.height = cH + "px";
      c.getContext("2d").setTransform(dpr, 0, 0, dpr, 0, 0);
    });
  }
  resize();
  window.addEventListener("resize", resize);

  const mapX = (x) => x * (cW / 500);
  const mapY = (y) => y * (cH / 580);

  function drawArc(ctx, x1, y1, x2, y2, segments, jitter, color, width, alpha) {
    ctx.save();
    ctx.globalAlpha = alpha;
    ctx.strokeStyle = color;
    ctx.lineWidth = width;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.shadowColor = color;
    ctx.shadowBlur = 8;
    ctx.beginPath();
    ctx.moveTo(mapX(x1), mapY(y1));
    const dx = (x2 - x1) / segments, dy = (y2 - y1) / segments;
    for (let i = 1; i < segments; i++) {
      ctx.lineTo(mapX(x1 + dx * i + (Math.random() - 0.5) * jitter), mapY(y1 + dy * i + (Math.random() - 0.5) * jitter));
    }
    ctx.lineTo(mapX(x2), mapY(y2));
    ctx.stroke();
    ctx.restore();
  }

  /* sparks */
  let sparks = [];
  class Spark {
    constructor(x, y, vx, vy, color) {
      Object.assign(this, { x, y, vx, vy, color });
      this.life = 0.3 + Math.random() * 0.6;
      this.maxLife = this.life;
      this.size = 1 + Math.random() * 2;
      this.gravity = 40 + Math.random() * 30;
    }
    update(dt) { this.x += this.vx * dt; this.y += this.vy * dt; this.vy += this.gravity * dt; this.life -= dt; }
    draw(ctx) {
      ctx.save();
      ctx.globalAlpha = Math.max(0, this.life / this.maxLife);
      ctx.fillStyle = this.color; ctx.shadowColor = this.color; ctx.shadowBlur = 6;
      ctx.beginPath(); ctx.arc(mapX(this.x), mapY(this.y), this.size, 0, Math.PI * 2); ctx.fill();
      ctx.restore();
    }
  }
  function emitSparks(x, y, count, color) {
    for (let i = 0; i < count; i++) {
      const a = Math.random() * Math.PI * 2, s = 30 + Math.random() * 80;
      sparks.push(new Spark(x, y, Math.cos(a) * s, Math.sin(a) * s - 20, color));
    }
  }

  /* floating background particles */
  class BgParticle {
    constructor() { this.reset(); }
    reset() {
      const a = Math.random() * Math.PI * 2, r = 80 + Math.random() * 130;
      this.x = 250 + Math.cos(a) * r; this.y = 210 + Math.sin(a) * r;
      this.size = 0.8 + Math.random() * 2;
      this.speedX = (Math.random() - 0.5) * 0.6; this.speedY = (Math.random() - 0.5) * 0.6;
      this.life = 0.8 + Math.random() * 2; this.maxLife = this.life;
      this.color = Math.random() > 0.5 ? "#0768A1" : "#0FA98A";
    }
    update(dt) { this.x += this.speedX; this.y += this.speedY; this.life -= dt; if (this.life <= 0) this.reset(); }
    draw(ctx) {
      ctx.save();
      ctx.globalAlpha = Math.max(0, (this.life / this.maxLife) * 0.5);
      ctx.fillStyle = this.color;
      ctx.beginPath(); ctx.arc(mapX(this.x), mapY(this.y), this.size, 0, Math.PI * 2); ctx.fill();
      ctx.restore();
    }
  }
  const bgParticles = Array.from({ length: 50 }, () => new BgParticle());

  /* current flowing along the wires */
  const bezier = (t, p0, p1, p2, p3) => { const u = 1 - t; return u*u*u*p0 + 3*u*u*t*p1 + 3*u*t*t*p2 + t*t*t*p3; };
  const wirePathsL = [
    { x: [120, 160, 190, 230], y: [160, 158, 180, 195] },
    { x: [124, 160, 195, 235], y: [182, 182, 192, 205] },
  ];
  const wirePathsR = [
    { x: [280, 310, 340, 381], y: [195, 178, 160, 155] },
    { x: [275, 310, 345, 381], y: [205, 192, 172, 165] },
  ];
  let wireParticles = [];
  class WireParticle {
    constructor(paths, color, dir) {
      this.path = paths[Math.floor(Math.random() * paths.length)];
      this.t = dir > 0 ? 0 : 1;
      this.speed = (0.4 + Math.random() * 0.5) * dir;
      this.color = color; this.size = 2 + Math.random() * 2; this.alive = true;
    }
    update(dt) { this.t += this.speed * dt; if (this.t > 1 || this.t < 0) this.alive = false; }
    draw(ctx) {
      const p = this.path;
      ctx.save();
      ctx.globalAlpha = 0.8; ctx.fillStyle = this.color; ctx.shadowColor = this.color; ctx.shadowBlur = 8;
      ctx.beginPath();
      ctx.arc(mapX(bezier(this.t, ...p.x)), mapY(bezier(this.t, ...p.y)), this.size, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }
  }

  let active = false;
  let arcTimer = 0, wireSpawnTimer = 0, boltCrackleTimer = 0;
  let lastT = performance.now();
  let rafId = null;

  const strikeTimer = setTimeout(() => {
    active = true;
    emitSparks(255, 195, 12, "#0768A1");
  }, strikeAt);

  function loop() {
    const now = performance.now();
    const dt = Math.min((now - lastT) / 1000, 0.05);
    lastT = now;
    sparkCtx.clearRect(0, 0, cW, cH);
    bgCtx.clearRect(0, 0, cW, cH);

    bgParticles.forEach((p) => { p.update(dt); p.draw(bgCtx); });

    if (active) {
      wireSpawnTimer -= dt;
      if (wireSpawnTimer <= 0) {
        wireSpawnTimer = 0.08 + Math.random() * 0.12;
        wireParticles.push(new WireParticle(wirePathsL, "#0768A1", 1));
        wireParticles.push(new WireParticle(wirePathsR, "#0FA98A", -1));
      }
      wireParticles.forEach((p) => { p.update(dt); p.draw(sparkCtx); });
      wireParticles = wireParticles.filter((p) => p.alive);

      arcTimer -= dt;
      if (arcTimer <= 0) {
        arcTimer = 0.15 + Math.random() * 0.4;
        if (Math.random() > 0.5) drawArc(sparkCtx, 120, 160, 230, 195, 8, 12, "#0768A1", 1.5, 0.6);
        else drawArc(sparkCtx, 280, 195, 381, 155, 8, 12, "#0FA98A", 1.5, 0.6);
      }

      boltCrackleTimer -= dt;
      if (boltCrackleTimer <= 0) {
        boltCrackleTimer = 0.1 + Math.random() * 0.25;
        const t = Math.random();
        const bx = t < 0.5 ? 370 + (262 - 370) * t * 2 : 262 + (137 - 262) * (t * 2 - 1);
        const by = t < 0.5 ? 40 + (196 - 40) * t * 2 : 196 + (365 - 196) * (t * 2 - 1);
        drawArc(sparkCtx, bx, by, bx + (Math.random() - 0.5) * 50, by + (Math.random() - 0.5) * 40, 4, 8,
          Math.random() > 0.5 ? "#0768A1" : "#0FA98A", 1, 0.4);
      }
    }

    sparks.forEach((s) => { s.update(dt); s.draw(sparkCtx); });
    sparks = sparks.filter((s) => s.life > 0);

    rafId = requestAnimationFrame(loop);
  }
  loop();

  return function stop() {
    clearTimeout(strikeTimer);
    if (rafId) cancelAnimationFrame(rafId);
    window.removeEventListener("resize", resize);
  };
}
