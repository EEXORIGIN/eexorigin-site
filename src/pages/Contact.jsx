import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { MapPin, Phone, Mail } from "lucide-react";
import { db } from "../firebaseConfig"; // Import Firebase config
import { addDoc, collection } from "firebase/firestore"; // Import Firebase functions
import { ClipLoader } from "react-spinners"; // Import loading spinner

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    queryType: "",
    queryBrief: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false); // State for loading
  const [isSubmitted, setIsSubmitted] = useState(false); // State for successful submission
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  // Update window dimensions for confetti
  React.useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setWindowHeight(window.innerHeight);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true); // Start loading when the form is submitted

    try {
      const docRef = await addDoc(collection(db, "customerQueries"), {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        queryType: formData.queryType,
        queryBrief: formData.queryBrief,
        timestamp: new Date(),
      });

      console.log("Document written with ID: ", docRef.id);
      setIsSubmitted(true); // Set to true after successful submission
      toast({
        title: "Message Sent!",
        description: "We'll get back to you as soon as possible.",
      });

      // Reset form data after successful submission
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
        title: "Error",
        description: "Something went wrong. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false); // Stop loading after form submission attempt
    }
  };

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Get in touch with us. We'd love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info & Form Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
                <p className="text-gray-600 mb-8">
                  Have a question or want to work together? We'd love to hear
                  from you. Send us a message and we'll respond as soon as
                  possible.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center">
                  <MapPin className="h-6 w-6 text-primary mr-4" />
                  <div>
                    <h3 className="font-semibold">Address</h3>
                    <p className="text-gray-600">
                      ENERGY EXCHANGE ORIGIN PVT LTD
                    </p>
                    <p className="text-gray-600">
                      36 Kasturi nagar, Sundharapuram, Coimbatore, Tamilnadu -
                      641024
                    </p>
                  </div>
                </div>

                <div className="flex items-center">
                  <Phone className="h-6 w-6 text-primary mr-4" />
                  <div>
                    <h3 className="font-semibold">Phone</h3>
                    <p className="text-gray-600">+91 88381 97744</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <Mail className="h-6 w-6 text-primary mr-4" />
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-gray-600">eexorigin@gmail.com</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-lg shadow-lg p-8"
            >
              <center>
                {!isSubmitted && (
                  <h1 className="text-3xl font-bold mb-6">Send Your Query</h1>
                )}
              </center>

              {isSubmitted ? (
                <div className="text-center space-y-6">
                  <h2 className="text-3xl font-semibold text-green-600">
                    Thank You! Your message has been sent.
                  </h2>
                  <p className="text-xl text-gray-600">
                    We appreciate your query. Our team will get back to you
                    shortly.
                  </p>
                  <Button onClick={() => setIsSubmitted(false)}>
                    For more query
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-2"
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
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700 mb-2"
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
                          "Enter exactly ten digits in phone number"
                        )
                      }
                      onInput={(e) => e.target.setCustomValidity("")}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Choose a Query Type
                    </label>
                    <select
                      name="queryType"
                      value={formData.queryType}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    >
                      <option value="">Select a Query</option>
                      <option value="pricing">LONG TERM PPA</option>
                      <option value="technical">MEDIUM TERM PPA</option>
                      <option value="partnership">
                        SHORT TERM ENERGY TRADING
                      </option>
                      <option value="service">RPO OBLIGATIONS</option>
                      <option value="others">Other</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="queryBrief"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Query in Brief
                    </label>
                    <textarea
                      id="queryBrief"
                      name="queryBrief"
                      value={formData.queryBrief}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>

                  <Button type="submit" className="w-full">
                    {isSubmitting ? (
                      <div className="flex justify-center">
                        <ClipLoader size={24} color="#ffffff" />
                      </div>
                    ) : (
                      "Send Message"
                    )}
                  </Button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
