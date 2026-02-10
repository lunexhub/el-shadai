import { Link } from "react-router-dom";
import { useState } from "react";
import { ArrowRight, Baby, Heart, Shield, Users, Star, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { scrollToElement } from "@/lib/utils";
import heroImage from "@/assets/hero-image.jpg";
import motherBaby from "@/assets/mother-baby.jpg";
import babyFeet from "@/assets/baby-feet.jpg";
import antenatalCare from "@/assets/antenatal-care.jpg";

const Index = () => {
  // Video is hosted on Cloudinary
  const [showVideo] = useState(true); // Video is available from Cloudinary

  const services = [
    {
      icon: Baby,
      title: "Antenatal Clinic",
      description: "Comprehensive prenatal care and monitoring throughout your pregnancy journey.",
    },
    {
      icon: Heart,
      title: "Delivery Services",
      description: "Safe and supportive delivery with experienced midwives and medical staff.",
    },
    {
      icon: Shield,
      title: "Postnatal Care",
      description: "Expert care for mother and baby during the crucial postpartum period.",
    },
    {
      icon: Users,
      title: "Family Planning",
      description: "Personalized counseling and services for your family planning needs.",
    },
  ];

  const stats = [
    { number: "1000+", label: "Happy Mothers" },
    { number: "10+", label: "Years Experience" },
    { number: "100%", label: "Dedication" },
  ];

  const testimonials = [
    {
      name: "Thandi M.",
      text: "El Shadai Adonai made my pregnancy journey so special. The staff was caring and professional throughout.",
      rating: 5,
    },
    {
      name: "Nomsa K.",
      text: "I felt so safe and supported during my delivery. I highly recommend their maternity services to all expecting mothers.",
      rating: 5,
    },
    {
      name: "Lerato P.",
      text: "The postnatal care was exceptional. They truly care about both mother and baby's wellbeing.",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Maternity care"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-transparent"></div>
        </div>

        <div className="container-custom relative z-10 px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Text Content */}
            <div className="max-w-2xl">
              <p className="text-accent font-semibold mb-4 animate-fade-in">
                Welcome to El Shadai Adonai Maternity Services
              </p>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight animate-slide-up">
                Your Journey to{" "}
                <span className="text-primary">Motherhood</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed animate-slide-up" style={{ animationDelay: "0.1s" }}>
                Empowering mothers every step of the way with our comprehensive
                care. Experience the difference with dedicated professionals who
                truly care about you and your baby.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 animate-slide-up" style={{ animationDelay: "0.2s" }}>
                <Link to="/contact">
                  <Button className="bg-primary hover:bg-coral text-primary-foreground px-8 py-6 text-lg font-semibold rounded-full transition-all duration-300 hover:shadow-lg hover:scale-105">
                    Book Appointment
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <a 
                  href="#our-premises"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToElement('our-premises', 80, 'smooth');
                  }}
                >
                  <Button variant="outline" className="border-2 border-primary/30 text-foreground px-8 py-6 text-lg font-semibold rounded-full transition-all duration-300 hover:bg-primary/10">
                    Our Premises
                  </Button>
                </a>
              </div>
            </div>

            {/* Video Content */}
            <div className="relative rounded-2xl overflow-hidden shadow-elevated animate-slide-up" style={{ animationDelay: "0.3s" }}>
              <video
                src="https://res.cloudinary.com/dctg16g9q/video/upload/v1770267529/WhatsApp_Video_2026-02-03_at_22.21.29_z249xr.mp4"
                controls
                className="w-full h-auto"
                style={{ maxHeight: "600px" }}
                playsInline
                preload="metadata"
                aria-label="El Shadai Adonai Maternity Services video"
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-gentle">
          <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-primary rounded-full animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-primary/10 py-12">
        <div className="container-custom px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center"
              >
                <p className="font-serif text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </p>
                <p className="text-muted-foreground font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-elevated">
                <img
                  src={motherBaby}
                  alt="Mother and baby"
                  className="w-full h-[500px] object-cover"
                />
              </div>
            </div>

            <div>
              <p className="text-accent font-semibold mb-4">About Us</p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
                Experience the Difference with{" "}
                <span className="text-primary">El Shadai Adonai</span>
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                At El Shadai Adonai Maternity Services, we believe every mother
                deserves exceptional care during one of life's most precious
                moments. Our dedicated team of healthcare professionals is
                committed to providing personalized and compassionate care
                throughout your pregnancy journey.
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Located in the heart of Leondale, Germiston, we offer a full
                range of maternity services from antenatal care to postnatal
                support, ensuring you and your baby receive the best possible
                care every step of the way.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 bg-secondary px-4 py-2 rounded-full">
                  <Heart className="w-4 h-4 text-rose" />
                  <span className="text-sm font-medium">Compassionate Care</span>
                </div>
                <div className="flex items-center gap-2 bg-secondary px-4 py-2 rounded-full">
                  <Shield className="w-4 h-4 text-accent" />
                  <span className="text-sm font-medium">Safe Environment</span>
                </div>
                <div className="flex items-center gap-2 bg-secondary px-4 py-2 rounded-full">
                  <Users className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium">Expert Team</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Premises Section */}
      <section id="our-premises" className="section-padding bg-secondary/50 scroll-mt-20">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-accent font-semibold mb-4">Take a Tour</p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our <span className="text-primary">Premises</span>
            </h2>
            <p className="text-muted-foreground">
              See our modern facilities and welcoming environment designed for your comfort
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative rounded-2xl overflow-hidden shadow-elevated">
              {showVideo ? (
                <video
                  src="https://res.cloudinary.com/dctg16g9q/video/upload/v1769803904/WhatsApp_Video_2026-01-24_at_15.25.38_njham4.mp4"
                  controls
                  className="w-full h-auto"
                  style={{ maxHeight: "600px" }}
                  playsInline
                  preload="metadata"
                  aria-label="Video tour of El Shadai Adonai Maternity Services premises"
                >
                  Your browser does not support the video tag.
                </video>
              ) : (
                <div className="w-full h-[400px] bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center rounded-2xl">
                  <div className="text-center p-8">
                    <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Heart className="w-10 h-10 text-primary" />
                    </div>
                    <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                      Welcome to Our Premises
                    </h3>
                    <p className="text-muted-foreground">
                      Visit us at 18 Taaibos Street, Leondale, Germiston to see our modern facilities
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-accent font-semibold mb-4">What We Offer</p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our <span className="text-primary">Services</span>
            </h2>
            <p className="text-muted-foreground">
              Comprehensive maternity care tailored to your unique needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl p-6 shadow-card card-hover text-center group"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:bg-primary/20">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/services">
              <Button className="bg-primary hover:bg-coral text-primary-foreground px-8 py-6 text-lg font-semibold rounded-full transition-all duration-300 hover:shadow-lg">
                View All Services
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-accent font-semibold mb-4">Testimonials</p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              What Our <span className="text-primary">Mothers Say</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl p-6 shadow-card card-hover"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-coral fill-coral"
                    />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
                <p className="font-semibold text-foreground">
                  {testimonial.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-brown text-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src={babyFeet}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-black mb-6">
              Ready to Begin Your <span className="text-coral">Journey?</span>
            </h2>
            <p className="text-black/90 text-lg mb-8">
              Book your appointment today and experience the El Shadai Adonai
              difference. Our caring team is ready to welcome you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button className="bg-coral hover:bg-coral-light text-brown px-8 py-6 text-lg font-semibold rounded-full transition-all duration-300 hover:shadow-lg">
                  Book Online
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <a href="tel:0827181167">
                <Button variant="outline" className="border-2 border-black/30 text-black hover:bg-black/10 px-8 py-6 text-lg font-semibold rounded-full">
                  <Phone className="w-5 h-5 mr-2" />
                  Call: 082 718 1167
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
