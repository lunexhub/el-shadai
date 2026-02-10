import { Link } from "react-router-dom";
import { Phone, Mail, Clock } from "lucide-react";
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

const Footer = () => {
  return (
    <footer className="bg-brown text-cream">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <img
                src={logo}
                alt="El Shadai Adonai Maternity Services"
                className="h-12 w-auto object-contain"
              />
              <div className="flex flex-col">
                <span className="font-serif text-lg font-semibold text-sky leading-tight">
                  El Shadai Adonai
                </span>
                <span className="text-xs font-semibold text-coral uppercase tracking-wider">
                  Maternity Services
                </span>
              </div>
            </Link>
            <p className="text-cream/80 text-sm leading-relaxed">
              Empowering mothers every step of the way with our comprehensive
              care. Your journey to motherhood starts here.
            </p>
            {/* Social Media Icons */}
            <div className="flex items-center gap-4 pt-2">
              <a
                href="https://www.instagram.com/elshadaiadoniamaternityservice?igsh=ajducGxrMHE0NWZt&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-opacity duration-300 hover:opacity-80"
                aria-label="Follow us on Instagram"
              >
                <InstagramIcon className="w-6 h-6" />
              </a>
              <a
                href="https://www.facebook.com/share/16cPqq3hPb/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-opacity duration-300 hover:opacity-80"
                aria-label="Follow us on Facebook"
              >
                <FacebookIcon className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-xl font-semibold mb-6 text-coral-light">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { name: "Home", path: "/" },
                { name: "Our Services", path: "/services" },
                { name: "Book Appointment", path: "/contact" },
                { name: "Contact Us", path: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-cream/80 hover:text-coral transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-serif text-xl font-semibold mb-6 text-coral-light">
              Our Services
            </h4>
            <ul className="space-y-3 text-cream/80">
              <li>Antenatal Clinic</li>
              <li>Delivery Services</li>
              <li>Postnatal Care</li>
              <li>Baby Immunization</li>
              <li>Family Planning</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-xl font-semibold mb-6 text-coral-light">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-coral shrink-0" />
                <div className="text-cream/80">
                  <a href="tel:0827181167" className="hover:text-coral block">
                    082 718 1167
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-coral shrink-0 mt-0.5" />
                <a
                  href="mailto:Elshadaiadonamaternity@gmail.com"
                  className="text-cream/80 hover:text-coral break-words text-xs sm:text-sm leading-relaxed"
                  style={{ wordBreak: "break-word", overflowWrap: "anywhere" }}
                >
                  Elshadaiadonamaternity@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-cream/20 flex flex-col md:flex-row items-center gap-4 w-full">
          <p className="text-cream/60 text-sm text-center break-words md:flex-1 md:text-left">
            © {new Date().getFullYear()} El Shadai Adonai Maternity Services.
            All rights reserved.
          </p>
          <p className="text-cream/60 text-sm text-center break-words md:flex-1 md:text-center">
            Built by{" "}
            <a
              href="https://www.lunexweb.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 hover:text-coral transition-colors duration-300"
            >
              lunexweb
            </a>
          </p>
          <p className="text-cream/60 text-sm text-center break-words md:flex-1 md:text-right">Reg: 2024/264125/07</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
