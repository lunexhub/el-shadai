import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { scrollToTop } from "@/lib/utils";
import logo from "@/assets/WhatsApp Image 2026-01-30 at 18.04.12.jpeg";

// Instagram Icon Component
const InstagramIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="#E4405F"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

// Facebook Icon Component
const FacebookIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="#1877F2"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md shadow-soft">
      <div className="container-custom">
        <div className="flex items-center justify-between h-20 px-4 md:px-8">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img
              src={logo}
              alt="El Shadai Adonai Maternity Services"
              className="h-12 w-auto object-contain"
            />
            <div className="flex flex-col">
              <span className="font-serif text-lg font-semibold text-accent leading-tight">
                El Shadai Adonai
              </span>
              <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                Maternity Services
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-medium transition-colors duration-300 link-hover ${
                  isActive(link.path)
                    ? "text-primary"
                    : "text-foreground/70 hover:text-primary"
                }`}
              >
                {link.name}
              </Link>
            ))}
            {/* Social Media Icons */}
            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com/elshadaiadoniamaternityservice?igsh=ajducGxrMHE0NWZt&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-opacity duration-300 hover:opacity-80"
                aria-label="Follow us on Instagram"
              >
                <InstagramIcon className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/share/16cPqq3hPb/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-opacity duration-300 hover:opacity-80"
                aria-label="Follow us on Facebook"
              >
                <FacebookIcon className="w-5 h-5" />
              </a>
            </div>
            <a
              href="tel:0827181167"
              className="flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-full font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105"
            >
              <Phone className="w-4 h-4" />
              <span>Book Now</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-foreground"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

          {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-card border-t border-border animate-slide-up">
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => {
                    setIsOpen(false);
                    // Small delay to ensure menu closes before scroll
                    setTimeout(() => {
                      scrollToTop('smooth');
                    }, 100);
                  }}
                  className={`block py-2 font-medium transition-colors ${
                    isActive(link.path)
                      ? "text-primary"
                      : "text-foreground/70 hover:text-primary"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              {/* Social Media Icons */}
              <div className="flex items-center justify-center gap-4 pt-2">
                <a
                  href="https://www.instagram.com/elshadaiadoniamaternityservice?igsh=ajducGxrMHE0NWZt&utm_source=qr"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="transition-opacity duration-300 hover:opacity-80"
                  aria-label="Follow us on Instagram"
                >
                  <InstagramIcon className="w-6 h-6" />
                </a>
                <a
                  href="https://www.facebook.com/share/16cPqq3hPb/?mibextid=wwXIfr"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="transition-opacity duration-300 hover:opacity-80"
                  aria-label="Follow us on Facebook"
                >
                  <FacebookIcon className="w-6 h-6" />
                </a>
              </div>
              <a
                href="tel:0827181167"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-2 bg-primary text-primary-foreground px-5 py-3 rounded-full font-semibold mt-4"
              >
                <Phone className="w-4 h-4" />
                <span>Book Now</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
