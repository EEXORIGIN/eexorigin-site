import { useEffect } from "react";

const SITE_URL = "https://eexorigin.com";
const SITE_NAME = "EEX Origin";
const DEFAULT_DESCRIPTION =
  "EEX Origin is an energy trading and advisory firm helping businesses navigate electricity procurement, power purchase agreements (PPAs), RPO compliance, and carbon credit advisory in India.";
const DEFAULT_IMAGE = `${SITE_URL}/og-image.jpg`;

function setMeta(attr, key, value) {
  let el = document.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", value);
}

/**
 * Updates the document title, meta description, canonical link, and
 * Open Graph/Twitter tags for the current route.
 *
 * Note: because this is a client-rendered SPA with no server-side
 * rendering, these per-page tags update after JavaScript runs. Real
 * browsers and Google's crawler (which executes JS) see them fine, so
 * this improves the browser tab title and how pages get indexed. Link
 * previews on platforms that DON'T execute JavaScript (some chat apps,
 * older scrapers) will still fall back to the static defaults baked
 * into index.html. Fixing that fully would require server-side
 * rendering or a prerendering step — a bigger change, flagged
 * separately rather than silently left half-solved.
 */
export default function Seo({ title, description, path = "/", noindex = false }) {
  useEffect(() => {
    const fullTitle = title ? `${title} | ${SITE_NAME}` : `${SITE_NAME} — Electricity Procurement & Energy Advisory`;
    const desc = description || DEFAULT_DESCRIPTION;
    const url = `${SITE_URL}${path}`;

    document.title = fullTitle;

    setMeta("name", "description", desc);
    setMeta("property", "og:title", fullTitle);
    setMeta("property", "og:description", desc);
    setMeta("property", "og:url", url);
    setMeta("property", "og:image", DEFAULT_IMAGE);
    setMeta("name", "twitter:title", fullTitle);
    setMeta("name", "twitter:description", desc);
    setMeta("name", "twitter:image", DEFAULT_IMAGE);

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", url);

    if (noindex) {
      setMeta("name", "robots", "noindex, nofollow");
    } else {
      setMeta("name", "robots", "index, follow");
    }
  }, [title, description, path, noindex]);

  return null;
}
