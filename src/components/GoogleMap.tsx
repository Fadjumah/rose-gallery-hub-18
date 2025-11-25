const GoogleMap = () => {
  return (
    <section className="py-12 bg-accent">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Visit Our Clinic</h2>
          <p className="text-lg text-muted-foreground">
            Along Entebbe Road, Entebbe, Central Region, Uganda
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto rounded-lg overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63836.89843940836!2d32.43986649999999!3d0.054389000000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dba3c7e5e5555%3A0x5555555555555555!2sEritage%20ENT%20Care!5e0!3m2!1sen!2sug!4v1234567890123!5m2!1sen!2sug"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Eritage ENT Care Location"
          ></iframe>
        </div>
        
        <div className="text-center mt-6">
          <a
            href="https://maps.app.goo.gl/3zxRWd4YfZDah94eA"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline font-semibold"
          >
            Open in Google Maps →
          </a>
        </div>
      </div>
    </section>
  );
};

export default GoogleMap;