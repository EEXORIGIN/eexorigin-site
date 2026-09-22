import React, { useState } from "react";
import Seo from "@/components/Seo";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail } from "lucide-react";
import { db } from "../firebaseConfig";
import { addDoc, collection } from "firebase/firestore";
import { ClipLoader } from "react-spinners";
import { useToast } from "@/components/ui/use-toast";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1 },
  }),
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    queryType: "",
    queryBrief: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await addDoc(collection(db, "customerQueries"), {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        queryType: formData.queryType,
        queryBrief: formData.queryBrief,
        timestamp: new Date(),
      });

      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        queryType: "",
        queryBrief: "",
      });
    } catch (error) {
      console.error("Error adding document: ", error);
      toast({
        title: "Something went wrong",
        description: "We couldn't send your query. Please try again in a moment.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const inputClass =
    "w-full px-4 py-3 border border-gray-200 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-green-deep/20 focus:border-green-deep transition-colors";

  return (
    <div className="min-h-screen">
      <Seo title="Contact Us" description="Get in touch with EEX Origin\u2019s energy consultants for PPAs, RPO compliance, or carbon credit advisory questions." path="/contact" />
      {/* Hero */}
      <section className="bg-green-pale py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="section-eyebrow"
          >
            Get in Touch
          </motion.p>
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={1}
            className="heading-serif text-4xl md:text-5xl lg:text-6xl mt-4"
          >
            Let's talk <span className="italic text-green-deep">energy.</span>
          </motion.h1>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={2}
            className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Have a question about PPAs, RPO compliance, or carbon credits? Our
            team typically responds within 24 hours.
          </motion.p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 lg:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Left — Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2 space-y-10"
            >
              <div>
                <h2 className="heading-serif text-2xl mb-4">
                  Contact Information
                </h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Reach out directly or fill in the form and our energy
                  consultants will get back to you.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-green-light flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-4 h-4 text-green-deep" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">
                      Office
                    </p>
                    <p className="text-sm text-gray-600 mt-0.5">
                      Energy Exchange Origin LLP
                    </p>
                    <p className="text-sm text-gray-600">
                      703-1, 3rd Floor, Oppanakara Street,
                      <br />
                      Coimbatore, Tamil Nadu — 641001
                    </p>
                    <p className="text-sm text-gray-600 mt-2">
                      Also serving Bangalore, Karnataka.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-green-light flex items-center justify-center flex-shrink-0">
                    <Phone className="w-4 h-4 text-green-deep" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">Phone</p>
                    <a
                      href="tel:+918838197744"
                      className="text-sm text-gray-600 hover:text-green-deep transition-colors"
                    >
                      +91 88381 97744
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-green-light flex items-center justify-center flex-shrink-0">
                    <Mail className="w-4 h-4 text-green-deep" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">Email</p>
                    <a
                      href="https://mail.google.com/mail/?view=cm&fs=1&to=info@eexorigin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-gray-600 hover:text-green-deep transition-colors"
                    >
                      info@eexorigin.com
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right — Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-3"
            >
              <div className="card-premium p-8 lg:p-10">
                {isSubmitted ? (
                  <div className="text-center py-12 space-y-5">
                    <div className="w-16 h-16 bg-green-light rounded-full flex items-center justify-center mx-auto">
                      <svg
                        className="w-8 h-8 text-green-deep"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <h3 className="heading-serif text-2xl">
                      Thank you for reaching out!
                    </h3>
                    <p className="text-gray-600 text-sm max-w-sm mx-auto">
                      We've received your query and our team will get back to
                      you within 24 hours.
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="btn-primary mt-4"
                    >
                      Send Another Query
                    </button>
                  </div>
                ) : (
                  <>
                    <h2 className="heading-serif text-2xl mb-6">
                      Send us your query
                    </h2>
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label
                            htmlFor="name"
                            className="block text-sm font-medium text-gray-700 mb-1.5"
                          >
                            Full Name
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            placeholder="Your name"
                            className={inputClass}
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-700 mb-1.5"
                          >
                            Email
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            placeholder="you@company.com"
                            className={inputClass}
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label
                            htmlFor="phone"
                            className="block text-sm font-medium text-gray-700 mb-1.5"
                          >
                            Phone
                          </label>
                          <input
                            type="text"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            pattern="\d{10}"
                            onInvalid={(e) =>
                              e.target.setCustomValidity(
                                "Enter exactly ten digits",
                              )
                            }
                            onInput={(e) => e.target.setCustomValidity("")}
                            placeholder="10-digit number"
                            className={inputClass}
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="queryType"
                            className="block text-sm font-medium text-gray-700 mb-1.5"
                          >
                            Service Interest
                          </label>
                          <select
                            id="queryType"
                            name="queryType"
                            value={formData.queryType}
                            onChange={handleChange}
                            required
                            className={inputClass}
                          >
                            <option value="">Select a service</option>
                            <option value="long-term-ppa">Long Term PPA</option>
                            <option value="medium-term-ppa">Medium Term PPA</option>
                            <option value="short-term-trading">
                              Short Term Energy Trading
                            </option>
                            <option value="renewable-advisory">
                              Renewable Purchase Obligation
                            </option>
                            <option value="carbon-advisory">
                              Carbon Credit Advisory
                            </option>
                            <option value="energy-dashboard">
                              Energy Dashboard
                            </option>
                            <option value="price-forecast">
                              Electricity Price Forecast
                            </option>
                            <option value="other">Other</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="queryBrief"
                          className="block text-sm font-medium text-gray-700 mb-1.5"
                        >
                          Tell us about your requirement
                        </label>
                        <textarea
                          id="queryBrief"
                          name="queryBrief"
                          value={formData.queryBrief}
                          onChange={handleChange}
                          required
                          rows={4}
                          placeholder="Briefly describe your energy needs or question..."
                          className={inputClass + " resize-none"}
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="btn-primary w-full disabled:opacity-60 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? (
                          <span className="flex items-center justify-center gap-2">
                            <ClipLoader size={18} color="#ffffff" />
                            Sending...
                          </span>
                        ) : (
                          "Send Message"
                        )}
                      </button>
                    </form>
                  </>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
