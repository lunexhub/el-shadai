import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ServiceCard from "@/components/ServiceCard";
import antenatalCare from "@/assets/antenatal-care.jpg";
import deliveryRoom from "@/assets/delivery-room.jpg";
import postnatalCare from "@/assets/postnatal-care.jpg";
import babyImmunization from "@/assets/baby-immunization.jpg";
import familyPlanning from "@/assets/family-planning.jpg";
import babyFeet from "@/assets/baby-feet.jpg";

const Services = () => {
  const services = [
    {
      title: "Antenatal Clinic",
      description:
        "Our comprehensive antenatal care program monitors your pregnancy progress with regular check-ups, ultrasounds, and health screenings to ensure both mother and baby are healthy throughout the pregnancy journey.",
      image: antenatalCare,
      features: [
        "Regular pregnancy check-ups",
        "Ultrasound scans and monitoring",
        "Blood tests and health screenings",
        "Nutritional counseling",
        "Birth preparation classes",
      ],
    },
    {
      title: "Delivery Services",
      description:
        "Experience safe and supportive delivery with our experienced midwives and medical staff. We provide a comfortable, modern environment for both natural births and cesarean sections.",
      image: deliveryRoom,
      features: [
        "Experienced midwives",
        "Modern delivery facilities",
        "Pain management options",
        "Comprehensive care",
      ],
    },
    {
      title: "Postnatal Care",
      description:
        "Our dedicated postnatal care ensures both mother and baby receive the best attention during the crucial postpartum period, including breastfeeding support and recovery monitoring.",
      image: postnatalCare,
      features: [
        "Mother and baby check-ups",
        "Breastfeeding support",
        "Recovery monitoring",
        "Newborn care guidance",
        "Emotional support",
      ],
    },
    {
      title: "Baby Immunization",
      description:
        "Protect your little one with our comprehensive immunization program. We follow the national immunization schedule to ensure your baby is protected against preventable diseases.",
      image: babyImmunization,
      features: [
        "Complete vaccination schedule",
        "Growth monitoring",
        "Developmental assessments",
        "Health record keeping",
        "Parental education",
      ],
    },
    {
      title: "Family Planning",
      description:
        "Our family planning services offer personalized counseling and a range of contraceptive options to help you make informed decisions about your reproductive health.",
      image: familyPlanning,
      features: [
        "Contraceptive counseling",
        "Various contraceptive options",
        "Fertility awareness",
        "Preconception care",
        "Confidential consultations",
      ],
    },
    {
      title: "Pap Smear",
      description:
        "Regular Pap smear screenings are essential for women's health. Our professional team provides comfortable, confidential cervical cancer screening services.",
      image:
        "https://res.cloudinary.com/dctg16g9q/image/upload/v1770722020/WhatsApp_Image_2026-02-09_at_17.27.08_ore8me.jpg",
      features: [
        "Cervical cancer screening",
        "Women's health check-ups",
        "Professional consultation",
        "Follow-up care",
        "Health education",
      ],
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-peach/30">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-accent font-semibold mb-4 animate-fade-in">
              What We Offer
            </p>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6 animate-slide-up">
              Our <span className="text-primary">Services</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed animate-slide-up" style={{ animationDelay: "0.1s" }}>
              At El Shadai Adonai Maternity Services, we provide comprehensive
              care for every stage of your motherhood journey. From pregnancy to
              postpartum and beyond, our dedicated team is here for you.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                image={service.image}
                features={service.features}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-secondary/50">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-accent font-semibold mb-4">Why Choose Us</p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              The El Shadai Adonai <span className="text-primary">Difference</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              {
                title: "Experienced Team",
                description: "Our qualified healthcare professionals bring years of experience in maternity care.",
              },
              {
                title: "Personalized Care",
                description: "We treat every mother as an individual, tailoring our care to your specific needs.",
              },
              {
                title: "Modern Facilities",
                description: "Our clinic is equipped with modern medical equipment for safe, effective care.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl p-6 shadow-card text-center"
              >
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-serif font-bold text-primary">
                    {index + 1}
                  </span>
                </div>
                <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary/10">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ready to Experience <span className="text-primary">Our Care?</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Book your appointment today and let us take care of you and your
              little one. Our friendly team is ready to welcome you.
            </p>
            <Link to="/contact">
              <Button className="bg-primary hover:bg-coral text-primary-foreground px-8 py-6 text-lg font-semibold rounded-full transition-all duration-300 hover:shadow-lg hover:scale-105">
                Book Your Appointment
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
