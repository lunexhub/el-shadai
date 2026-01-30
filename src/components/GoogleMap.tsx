const GoogleMap = () => {
  // Coordinates for 18 Taaibos Street, Leondale, Germiston
  // Using a more generic Leondale, Germiston location
  return (
    <div className="rounded-2xl overflow-hidden shadow-card h-[400px]">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14318.84425773895!2d28.16!3d-26.19!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e950e8c5b7f8c3d%3A0x1234567890abcdef!2sLeondale%2C%20Germiston!5e0!3m2!1sen!2sza!4v1706097600000!5m2!1sen!2sza"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="El Shadai Adonai Maternity Services Location - 18 Taaibos Street, Leondale, Germiston"
        className="grayscale-[20%] hover:grayscale-0 transition-all duration-500"
      ></iframe>
    </div>
  );
};

export default GoogleMap;
