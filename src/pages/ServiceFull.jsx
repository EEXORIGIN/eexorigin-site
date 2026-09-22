import React from "react";
import Seo from "@/components/Seo";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const ServiceFull = () => {
  return (
    <div className="min-h-screen flex items-center justify-center py-20">
      <Seo title="Services" path="/services/full" noindex />
      <div className="text-center px-4">
        <h1 className="heading-serif text-3xl mb-4">Looking for our services?</h1>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          We've reorganised our services into dedicated pages for a better experience.
        </p>
        <Link
          to="/services"
          className="btn-primary inline-flex items-center"
        >
          View All Services <ArrowRight className="ml-2 w-4 h-4" />
        </Link>
      </div>
    </div>
  );
};

export default ServiceFull;
