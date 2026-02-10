interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  features: string[];
}

const ServiceCard = ({ title, description, image, features }: ServiceCardProps) => {
  return (
    <div className="bg-card rounded-2xl overflow-hidden shadow-card card-hover group">
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brown/60 to-transparent"></div>
        <h3 className="absolute bottom-4 left-4 right-4 font-serif text-xl font-semibold text-cream">
          {title}
        </h3>
      </div>
      <div className="p-6">
        <p className="text-muted-foreground mb-4 leading-relaxed">
          {description}
        </p>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li
              key={index}
              className="flex items-center gap-2 text-sm text-foreground"
            >
              <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ServiceCard;
