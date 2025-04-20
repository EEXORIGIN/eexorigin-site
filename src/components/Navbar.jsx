import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/services", label: "Services" },
    { path: "/contact", label: "Contact us" },
  ];

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-2">
        <div className="flex justify-between h-16 items-center">
          {/* Logo and Brand Name */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-0"
          >
            <img
              src={logo}
              alt="Logo"
              className="flex items-center h-16 w-20 object-contain"
            />

            <span className="text-2xl font-bold text-primary">
              ENERGY EXCHANGE ORIGIN
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-primary text-primary-foreground"
                      : "text-gray-700 hover:bg-gray-100"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-md text-base font-medium ${
                    isActive
                      ? "bg-primary text-primary-foreground"
                      : "text-gray-700 hover:bg-gray-100"
                  }`
                }
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
