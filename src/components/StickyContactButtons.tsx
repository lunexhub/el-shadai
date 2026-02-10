import { Phone, MessageCircle } from "lucide-react";

const StickyContactButtons = () => {
  const phoneNumber = "27630643681";
  const whatsappNumber = "27630643681";
  const whatsappMessage = encodeURIComponent(
    "Hello! I would like to book an appointment at El Shadai Adonai Maternity Services."
  );

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {/* WhatsApp Button */}
      <a
        href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-3 bg-whatsapp text-accent-foreground p-4 rounded-full shadow-elevated transition-all duration-300 hover:bg-whatsapp-hover hover:scale-110 hover:shadow-2xl"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-6 h-6 fill-current" />
        <span className="hidden group-hover:inline font-semibold whitespace-nowrap pr-2 animate-fade-in">
          WhatsApp
        </span>
      </a>

      {/* Call Button */}
      <a
        href="tel:0827181167"
        className="group flex items-center gap-3 bg-call text-accent-foreground p-4 rounded-full shadow-elevated transition-all duration-300 hover:bg-call-hover hover:scale-110 hover:shadow-2xl"
        aria-label="Call us"
      >
        <Phone className="w-6 h-6" />
        <span className="hidden group-hover:inline font-semibold whitespace-nowrap pr-2 animate-fade-in">
          Call Now
        </span>
      </a>
    </div>
  );
};

export default StickyContactButtons;
