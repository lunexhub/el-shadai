import { Phone, Mail, Clock, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["082 718 1167"],
      action: "tel:0827181167",
      actionLabel: "Call Now",
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      details: ["27 63 064 3681"],
      action: "https://wa.me/27630643681?text=Hello!%20I%20would%20like%20to%20book%20an%20appointment.",
      actionLabel: "Chat Now",
    },
    {
      icon: Mail,
      title: "Email",
      details: ["Elshadaiadonamaternity@gmail.com"],
      action: "mailto:Elshadaiadonamaternity@gmail.com",
      actionLabel: "Send Email",
    },
    {
      icon: Clock,
      title: "Hours",
      details: ["Monday - Friday", "08:00 - 17:00"],
      action: null,
      actionLabel: null,
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-peach/30">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-accent font-semibold mb-4 animate-fade-in">
              Get In Touch
            </p>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6 animate-slide-up">
              Contact <span className="text-primary">Us</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed animate-slide-up" style={{ animationDelay: "0.1s" }}>
              Book your appointment directly via WhatsApp or phone call. We're here to help you every step of the way.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl p-6 shadow-card text-center card-hover"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <info.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-serif text-lg font-semibold text-foreground mb-3">
                  {info.title}
                </h3>
                <div className="space-y-1 mb-4">
                  {info.details.map((detail, i) => (
                    <p 
                      key={i} 
                      className={`text-muted-foreground ${
                        info.title === "Email" 
                          ? "text-xs sm:text-sm break-words hyphens-auto px-2" 
                          : ""
                      }`}
                      style={info.title === "Email" ? { wordBreak: "break-word", overflowWrap: "anywhere" } : {}}
                    >
                      {detail}
                    </p>
                  ))}
                </div>
                {info.action && (
                  <a
                    href={info.action}
                    target={info.action.startsWith("http") ? "_blank" : undefined}
                    rel={info.action.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="inline-block text-primary font-semibold hover:text-coral transition-colors"
                  >
                    {info.actionLabel} →
                  </a>
                )}
              </div>
            ))}
          </div>

          {/* Booking Section */}
          <div className="max-w-3xl mx-auto">
            <div className="bg-card rounded-2xl p-8 md:p-12 shadow-card text-center">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
                Book Your <span className="text-primary">Appointment</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Choose your preferred method to book an appointment. We're here to assist you.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* WhatsApp Booking */}
                <a
                  href="https://wa.me/27630643681?text=Hello!%20I%20would%20like%20to%20book%20an%20appointment%20at%20El%20Shadai%20Adonai%20Maternity%20Services."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group h-full flex"
                >
                  <div className="bg-whatsapp/10 hover:bg-whatsapp/20 rounded-2xl p-8 transition-all duration-300 border-2 border-whatsapp/20 hover:border-whatsapp/40 hover:shadow-lg w-full flex flex-col">
                    <div className="w-16 h-16 bg-whatsapp rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <MessageCircle className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-serif text-xl font-semibold text-foreground mb-2 text-center">
                      Book via WhatsApp
                    </h3>
                    <p className="text-muted-foreground mb-6 text-sm text-center flex-grow">
                      Quick and easy booking through WhatsApp
                    </p>
                    <Button className="w-full bg-whatsapp hover:bg-whatsapp-hover text-white mt-auto">
                      Chat on WhatsApp
                    </Button>
                  </div>
                </a>

                {/* Phone Call Booking */}
                <a
                  href="tel:0827181167"
                  className="group h-full flex"
                >
                  <div className="bg-call/10 hover:bg-call/20 rounded-2xl p-8 transition-all duration-300 border-2 border-call/20 hover:border-call/40 hover:shadow-lg w-full flex flex-col">
                    <div className="w-16 h-16 bg-call rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <Phone className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-serif text-xl font-semibold text-foreground mb-2 text-center">
                      Book via Phone Call
                    </h3>
                    <p className="text-muted-foreground mb-6 text-sm text-center flex-grow">
                      Speak directly with our team
                    </p>
                    <Button className="w-full bg-call hover:bg-call-hover text-white mt-auto">
                      Call: 082 718 1167
                    </Button>
                  </div>
                </a>
              </div>

              <div className="mt-8 pt-8 border-t border-border">
                <p className="text-sm text-muted-foreground">
                  Please contact us directly for any questions or to book your appointment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
