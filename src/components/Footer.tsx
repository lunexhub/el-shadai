import { Link } from "react-router-dom";
import { Phone, Mail, Clock } from "lucide-react";
import logo from "@/assets/WhatsApp Image 2026-01-30 at 18.04.12.jpeg";

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
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-coral shrink-0" />
                <a
                  href="mailto:info@elshadaiadonai.co.za"
                  className="text-cream/80 hover:text-coral"
                >
                  info@elshadaiadonai.co.za
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
