import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContactButtons from "@/components/FloatingContactButtons";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  MapPin, 
  Phone, 
  MessageCircle,
  Clock,
  Mail,
  ArrowRight,
  Stethoscope
} from "lucide-react";
import { Link } from "react-router-dom";

const Contact = () => {
  const contactMethods = [
    {
      icon: Phone,
      title: "Phone",
      primary: "+256 740 166 778",
      secondary: "+256 769 616 091",
      action: "tel:+256740166778",
      actionText: "Call Now"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      primary: "+256 740 166 778",
      secondary: "Quick responses during clinic hours",
      action: "https://wa.me/256740166778",
      actionText: "Message on WhatsApp"
    },
    {
      icon: Mail,
      title: "Email",
      primary: "info@trendexhub.com",
      secondary: "For inquiries and appointments",
      action: "mailto:info@trendexhub.com",
      actionText: "Send Email"
    },
    {
      icon: MapPin,
      title: "Location",
      primary: "Along Entebbe Road",
      secondary: "Entebbe, Central Region, Uganda",
      action: "https://maps.app.goo.gl/jyV5xBRkD95u2i4B8",
      actionText: "Get Directions"
    }
  ];

  const clinicHours = [
    { day: "Monday", hours: "Open 24 hours" },
    { day: "Tuesday", hours: "Open 24 hours" },
    { day: "Wednesday", hours: "Open 24 hours" },
    { day: "Thursday", hours: "Open 24 hours" },
    { day: "Friday", hours: "Open 24 hours" },
    { day: "Saturday", hours: "Open 24 hours" },
    { day: "Sunday", hours: "Open 24 hours" }
  ];

  // JSON-LD Schema for Local Business
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": "Eritage ENT Care – Entebbe",
    "description": "Professional ENT clinic in Entebbe, Uganda offering expert ear, nose, and throat care.",
    "url": "https://eritageentcare.com/contact",
    "telephone": "+256740166778",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Along Entebbe Road",
      "addressLocality": "Entebbe",
      "addressRegion": "Central Region",
      "addressCountry": "UG"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "0.0512",
      "longitude": "32.4637"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "00:00",
        "closes": "23:59"
      }
    ],
    "medicalSpecialty": "Otolaryngology",
    "sameAs": [
      "https://maps.app.goo.gl/jyV5xBRkD95u2i4B8"
    ]
  };

  return (
    <>
      <Helmet>
        <title>Contact Us | Eritage ENT Care – Entebbe | Book ENT Appointment</title>
        <meta name="description" content="Contact Eritage ENT Care in Entebbe for ear, nose, and throat consultations. Call +256 740 166 778, WhatsApp us, or visit our clinic along Entebbe Road, Uganda." />
        <meta property="og:title" content="Contact Eritage ENT Care – Entebbe | ENT Clinic" />
        <meta property="og:description" content="Get in touch with Eritage ENT Care for professional ear, nose, and throat services in Entebbe, Uganda. Multiple contact options available." />
        <meta property="og:type" content="website" />
        <meta name="keywords" content="contact ENT clinic Entebbe, ENT doctor phone number Uganda, book ENT appointment Entebbe, Eritage ENT Care contact" />
        <link rel="canonical" href="https://eritageentcare.com/contact" />
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />

        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                Contact Eritage ENT Care – Entebbe
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                We're here to help with your ear, nose, and throat health concerns. Reach out to book an appointment or get answers to your questions.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
                Get in Touch
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {contactMethods.map((method, index) => (
                  <Card key={index} className="bg-secondary/10 border-border hover:shadow-lg transition-shadow">
                    <CardContent className="p-6 text-center">
                      <method.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="font-bold text-foreground text-lg mb-2">{method.title}</h3>
                      <p className="text-foreground font-medium mb-1">{method.primary}</p>
                      <p className="text-muted-foreground text-sm mb-4">{method.secondary}</p>
                      <Button asChild variant="outline" className="w-full">
                        <a 
                          href={method.action} 
                          target={method.title === "Location" ? "_blank" : undefined}
                          rel={method.title === "Location" ? "noopener noreferrer" : undefined}
                        >
                          {method.actionText}
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Clinic Hours */}
        <section className="py-16 bg-secondary/20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <div className="flex items-center justify-center gap-3 mb-6">
                <Clock className="h-8 w-8 text-primary" />
                <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                  Clinic Hours
                </h2>
              </div>
              <Card className="bg-background">
                <CardContent className="p-6">
                  <div className="space-y-3">
                    {clinicHours.map((schedule, index) => (
                      <div key={index} className="flex justify-between items-center py-2 border-b border-border last:border-0">
                        <span className="text-foreground font-medium">{schedule.day}</span>
                        <span className="text-muted-foreground">{schedule.hours}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              <p className="text-sm text-muted-foreground mt-4">
                We are available 24/7 for your ENT needs. For urgent guidance, visit our{" "}
                <Link to="/urgent-ent-guidance" className="text-primary hover:underline font-medium">
                  urgent ENT guidance service
                </Link>.
              </p>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 text-center">
                Find Our Clinic
              </h2>
              <div className="aspect-video rounded-lg overflow-hidden shadow-lg mb-6">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.7582621366!2d32.4637!3d0.0512!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMMKwMDMnMDQuMyJOIDMywrAyNyc0OS4zIkU!5e0!3m2!1sen!2sug!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Eritage ENT Care Location - Entebbe Road, Uganda"
                ></iframe>
              </div>
              <div className="text-center">
                <Button asChild size="lg" className="gap-2">
                  <a 
                    href="https://maps.app.goo.gl/jyV5xBRkD95u2i4B8" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <MapPin className="h-5 w-5" />
                    Open in Google Maps
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Primary CTA */}
        <section className="py-16 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Ready to Book Your ENT Consultation?
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Contact us today for expert ear, nose, and throat care. Our specialist is ready to help you with personalized treatment.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="gap-2" asChild>
                  <a href="https://wa.me/256740166778" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="h-5 w-5" />
                    Book via WhatsApp
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="gap-2" asChild>
                  <a href="tel:+256740166778">
                    <Phone className="h-5 w-5" />
                    Call: +256 740 166 778
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Related Links Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-xl font-bold text-foreground mb-6 text-center">
                Explore Our Services
              </h2>
              <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
                <Link to="/ent-services" className="block">
                  <Card className="hover:shadow-md transition-shadow h-full">
                    <CardContent className="p-4 flex items-center gap-3">
                      <Stethoscope className="h-5 w-5 text-primary" />
                      <span className="text-foreground">ENT Services</span>
                    </CardContent>
                  </Card>
                </Link>
                <Link to="/hearing-tests" className="block">
                  <Card className="hover:shadow-md transition-shadow h-full">
                    <CardContent className="p-4 flex items-center gap-3">
                      <ArrowRight className="h-5 w-5 text-primary" />
                      <span className="text-foreground">Hearing Tests</span>
                    </CardContent>
                  </Card>
                </Link>
                <Link to="/urgent-ent-guidance" className="block">
                  <Card className="hover:shadow-md transition-shadow h-full">
                    <CardContent className="p-4 flex items-center gap-3">
                      <ArrowRight className="h-5 w-5 text-primary" />
                      <span className="text-foreground">Urgent ENT Help</span>
                    </CardContent>
                  </Card>
                </Link>
                <Link to="/about" className="block">
                  <Card className="hover:shadow-md transition-shadow h-full">
                    <CardContent className="p-4 flex items-center gap-3">
                      <ArrowRight className="h-5 w-5 text-primary" />
                      <span className="text-foreground">About Us</span>
                    </CardContent>
                  </Card>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <Footer />
        <FloatingContactButtons />
      </div>
    </>
  );
};

export default Contact;