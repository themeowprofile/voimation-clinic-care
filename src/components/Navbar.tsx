import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import voimationLogo from "@/assets/voimation-logo.jpg";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Pricing", path: "/pricing" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isContactPage = location.pathname === "/contact";

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 border-b ${isContactPage ? "bg-white border-gray-200" : "bg-background border-border/50"}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src={voimationLogo} alt="Voimation" className="h-10 md:h-12" />
          </Link>

          {/* Desktop Navigation - Moved to left */}
          <div className="hidden md:flex items-center gap-8 ml-8 mr-auto">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors duration-200 ${
                  location.pathname === link.path
                    ? "text-primary"
                    : isContactPage
                    ? "text-gray-600 hover:text-gray-900"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>


          {/* CTA Button */}
          <div className="hidden md:block">
            <a
              href="https://calendly.com/voimation/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-glow !py-2.5 !px-5 text-sm"
            >
              <span>Book a Call</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 ${isContactPage ? "text-gray-900" : "text-foreground"}`}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className={`md:hidden border-b ${isContactPage ? "bg-white border-gray-200" : "bg-background/95 backdrop-blur-xl border-border"}`}
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`text-base font-medium py-2 transition-colors ${
                    location.pathname === link.path
                      ? "text-primary"
                      : isContactPage
                      ? "text-gray-600"
                      : "text-muted-foreground"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <a
                href="https://calendly.com/voimation/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-glow text-center mt-2"
              >
                <span>Book a Call</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
