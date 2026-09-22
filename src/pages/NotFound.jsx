import React from "react";
import Seo from "@/components/Seo";
import { Link } from "react-router-dom";
import { ArrowRight, Zap } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center py-24 px-4" style={{ minHeight: "70vh" }}>
      <Seo title="Page Not Found" noindex />
      <div className="text-center max-w-md mx-auto">
        <div
          className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
          style={{ background: "var(--green-light)" }}
        >
          <Zap className="w-7 h-7" style={{ color: "var(--green-deep)" }} strokeWidth={1.5} />
        </div>
        <p className="section-eyebrow">Error 404</p>
        <h1 className="heading-serif text-3xl md:text-4xl mt-3 mb-4">
          This page doesn&apos;t exist.
        </h1>
        <p className="text-gray-600 text-sm leading-relaxed mb-8">
          The page you're looking for may have been moved or the link may be
          out of date. Head back to the homepage or explore our services.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link to="/" className="btn-primary inline-flex items-center">
            Back to Home <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
          <Link to="/services" className="btn-secondary inline-flex items-center">
            View Services
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
