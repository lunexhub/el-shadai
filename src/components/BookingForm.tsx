import { useState } from "react";
import { Calendar, Clock, User, Phone, Mail, FileText, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";

const BookingForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    date: "",
    time: "",
    message: "",
  });

  const services = [
    "Antenatal Clinic",
    "Delivery Services",
    "Postnatal Care",
    "Pap Smear",
    "Baby Immunization",
    "Family Planning",
  ];

  const timeSlots = [
    "08:00",
    "09:00",
    "10:00",
    "11:00",
    "12:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
    toast.success("Booking request submitted successfully! We will contact you shortly.");
  };

  if (isSubmitted) {
    return (
      <div className="bg-card rounded-2xl p-8 shadow-card text-center">
        <div className="w-20 h-20 bg-whatsapp/20 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-10 h-10 text-whatsapp" />
        </div>
        <h3 className="font-serif text-2xl font-semibold text-foreground mb-4">
          Booking Request Submitted!
        </h3>
        <p className="text-muted-foreground mb-6">
          Thank you for choosing El Shadai Adonai Maternity Services. We will
          contact you within 24 hours to confirm your appointment.
        </p>
        <Button
          onClick={() => {
            setIsSubmitted(false);
            setFormData({
              name: "",
              phone: "",
              email: "",
              service: "",
              date: "",
              time: "",
              message: "",
            });
          }}
          className="bg-primary hover:bg-coral text-primary-foreground"
        >
          Book Another Appointment
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-card rounded-2xl p-8 shadow-card space-y-6"
    >
      <div className="text-center mb-8">
        <h3 className="font-serif text-2xl font-semibold text-foreground mb-2">
          Book Your Appointment
        </h3>
        <p className="text-muted-foreground">
          Fill in the form below and we'll get back to you shortly
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Name */}
        <div className="space-y-2">
          <label className="flex items-center gap-2 text-sm font-medium text-foreground">
            <User className="w-4 h-4 text-primary" />
            Full Name
          </label>
          <Input
            type="text"
            placeholder="Your full name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
            className="bg-secondary/50 border-border focus:border-primary"
          />
        </div>

        {/* Phone */}
        <div className="space-y-2">
          <label className="flex items-center gap-2 text-sm font-medium text-foreground">
            <Phone className="w-4 h-4 text-primary" />
            Phone Number
          </label>
          <Input
            type="tel"
            placeholder="Your phone number"
            value={formData.phone}
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
            required
            className="bg-secondary/50 border-border focus:border-primary"
          />
        </div>

        {/* Email */}
        <div className="space-y-2">
          <label className="flex items-center gap-2 text-sm font-medium text-foreground">
            <Mail className="w-4 h-4 text-primary" />
            Email Address
          </label>
          <Input
            type="email"
            placeholder="Your email address"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className="bg-secondary/50 border-border focus:border-primary"
          />
        </div>

        {/* Service */}
        <div className="space-y-2">
          <label className="flex items-center gap-2 text-sm font-medium text-foreground">
            <FileText className="w-4 h-4 text-primary" />
            Select Service
          </label>
          <Select
            value={formData.service}
            onValueChange={(value) =>
              setFormData({ ...formData, service: value })
            }
          >
            <SelectTrigger className="bg-secondary/50 border-border">
              <SelectValue placeholder="Choose a service" />
            </SelectTrigger>
            <SelectContent>
              {services.map((service) => (
                <SelectItem key={service} value={service}>
                  {service}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Date */}
        <div className="space-y-2">
          <label className="flex items-center gap-2 text-sm font-medium text-foreground">
            <Calendar className="w-4 h-4 text-primary" />
            Preferred Date
          </label>
          <Input
            type="date"
            value={formData.date}
            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
            required
            min={new Date().toISOString().split("T")[0]}
            className="bg-secondary/50 border-border focus:border-primary"
          />
        </div>

        {/* Time */}
        <div className="space-y-2">
          <label className="flex items-center gap-2 text-sm font-medium text-foreground">
            <Clock className="w-4 h-4 text-primary" />
            Preferred Time
          </label>
          <Select
            value={formData.time}
            onValueChange={(value) =>
              setFormData({ ...formData, time: value })
            }
          >
            <SelectTrigger className="bg-secondary/50 border-border">
              <SelectValue placeholder="Choose a time" />
            </SelectTrigger>
            <SelectContent>
              {timeSlots.map((time) => (
                <SelectItem key={time} value={time}>
                  {time}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Message */}
      <div className="space-y-2">
        <label className="flex items-center gap-2 text-sm font-medium text-foreground">
          <FileText className="w-4 h-4 text-primary" />
          Additional Notes (Optional)
        </label>
        <Textarea
          placeholder="Any additional information we should know..."
          value={formData.message}
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
          rows={4}
          className="bg-secondary/50 border-border focus:border-primary resize-none"
        />
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-primary hover:bg-coral text-primary-foreground py-6 text-lg font-semibold rounded-full transition-all duration-300 hover:shadow-lg"
      >
        {isSubmitting ? (
          <span className="flex items-center gap-2">
            <span className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin"></span>
            Submitting...
          </span>
        ) : (
          "Submit Booking Request"
        )}
      </Button>
    </form>
  );
};

export default BookingForm;
