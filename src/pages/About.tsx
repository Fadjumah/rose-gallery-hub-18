import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContactButtons from "@/components/FloatingContactButtons";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Heart, 
  Award, 
  Users, 
  Stethoscope, 
  MapPin, 
  Phone, 
  MessageCircle,
  ArrowRight,
  CheckCircle2
} from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Patient-Centered Care",
      description: "Every treatment plan is tailored to your unique needs, ensuring personalized and compassionate care."
    },
    {
      icon: Award,
      title: "Clinical Excellence",
      description: "Over 10 years of specialized ENT experience with continuous professional development."
    },
    {
      icon: Users,
      title: "Community Trust",
      description: "Serving families in Entebbe and across Uganda with reliable, accessible ENT healthcare."
    }
  ];

  const services = [
    "Comprehensive ear examinations and treatment",
    "Nasal and sinus care",
    "Throat and voice disorders",
    "Hearing assessments and audiology referrals",
    "Pediatric and adult ENT care",
    "ENT emergency guidance"
  ];

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": "Eritage ENT Care – Entebbe",
    "description": "Trusted ENT clinic in Entebbe with over 10 years of experience providing comprehensive ear, nose, and throat care for families in Uganda.",
    "url": "https://www.trendexhub.com/about",
    "telephone": "+256740166778",
    "email": "info@trendexhub.com",
    "founder": {
      "@type": "Person",
      "name": "Fahad Juma",
      "jobTitle": "ENT Specialist",
      "description": "ENT specialist with over 10 years of clinical experience in ear, nose, and throat medicine."
    },
    "employee": {
      "@type": "Physician",
      "name": "Fahad Juma",
      "medicalSpecialty": "Otolaryngology",
      "description": "ENT specialist providing expert diagnosis and treatment for a wide range of ENT conditions."
    },
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
    "areaServed": {
      "@type": "Place",
      "name": "Entebbe, Central Region, Uganda"
    },
    "sameAs": [
      "https://maps.app.goo.gl/jyV5xBRkD95u2i4B8"
    ]
  };

  return (
    <>
      <Helmet>
        <title>About Us | Eritage ENT Care – Entebbe | Trusted ENT Specialist</title>
        <meta name="description" content="Learn about Eritage ENT Care in Entebbe – your trusted ENT clinic with over 10 years of experience. Expert ear, nose, and throat care for families in Uganda." />
        <meta property="og:title" content="About Eritage ENT Care – Entebbe | ENT Specialist" />
        <meta property="og:description" content="Trusted ENT specialist in Entebbe with over 10 years of clinical experience. Comprehensive ear, nose, and throat care for all ages." />
        <meta property="og:type" content="website" />
        <meta name="keywords" content="about Eritage ENT Care, ENT clinic Entebbe, ENT specialist Uganda, ear nose throat doctor Entebbe, Fahad Juma ENT" />
        <link rel="canonical" href="https://www.trendexhub.com/about" />
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1241677876393680"
          crossOrigin="anonymous"></script>
        <Header />

        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                About Eritage ENT Care – Entebbe
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Your trusted partner for comprehensive ear, nose, and throat healthcare in Entebbe and across Uganda.
              </p>
            </div>
          </div>
        </section>

        {/* About Introduction */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                  Dedicated ENT Care in Entebbe
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p className="text-base leading-relaxed">
                    <span className="font-semibold text-foreground">Eritage ENT Care – Entebbe</span> is a specialized medical facility dedicated to diagnosing and treating conditions of the ear, nose, and throat. Located along Entebbe Road, we provide accessible, high-quality ENT care to patients of all ages.
                  </p>
                  <p className="text-base leading-relaxed">
                    Our clinic combines clinical expertise with compassionate patient care. Whether you're experiencing hearing difficulties, chronic sinus problems, or throat conditions, our team delivers personalized treatment plans designed to improve your quality of life.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Meet the Specialist */}
        <section className="py-16 bg-secondary/20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
                Meet Our ENT Specialist
              </h2>
              <Card className="bg-background max-w-2xl mx-auto">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 justify-center mb-4">
                    <Stethoscope className="h-8 w-8 text-primary" />
                    <h3 className="text-xl font-bold text-foreground">Fahad Juma</h3>
                  </div>
                  <p className="text-primary font-medium mb-4">ENT Specialist</p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    With over 10 years of clinical experience in ear, nose, and throat medicine, Fahad Juma provides expert diagnosis and treatment for a wide range of ENT conditions. His patient-centered approach ensures that every individual receives the care and attention they deserve.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Specializing in both medical and procedural treatments, he serves patients across Entebbe and the greater Central Region of Uganda.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
                Our Values
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {values.map((value, index) => (
                  <Card key={index} className="bg-secondary/10 border-border">
                    <CardContent className="p-6 text-center">
                      <value.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="font-semibold text-foreground mb-2">{value.title}</h3>
                      <p className="text-muted-foreground text-sm">{value.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-16 bg-secondary/20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
                What We Offer
              </h2>
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {services.map((service, index) => (
                  <div key={index} className="flex items-center gap-3 p-4 bg-background rounded-lg">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{service}</span>
                  </div>
                ))}
              </div>
              <div className="text-center">
                <Button asChild className="gap-2">
                  <Link to="/ent-services">
                    Explore All ENT Services
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Location */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                Visit Our Clinic
              </h2>
              <div className="flex items-center justify-center gap-3 mb-4">
                <MapPin className="h-6 w-6 text-primary" />
                <p className="text-lg text-muted-foreground">
                  Along Entebbe Road, Entebbe, Central Region, Uganda
                </p>
              </div>
              <a 
                href="https://maps.app.goo.gl/jyV5xBRkD95u2i4B8" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:underline font-medium"
              >
                Get Directions on Google Maps →
              </a>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-muted-foreground mb-8">
                Book a consultation with our ENT specialist today. We're here to help with all your ear, nose, and throat concerns.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="gap-2" asChild>
                  <a href="tel:+256740166778">
                    <Phone className="h-5 w-5" />
                    Call: +256 740 166 778
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="gap-2" asChild>
                  <a href="https://wa.me/256740166778" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="h-5 w-5" />
                    WhatsApp Us
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
                Explore More
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
                <Link to="/blog" className="block">
                  <Card className="hover:shadow-md transition-shadow h-full">
                    <CardContent className="p-4 flex items-center gap-3">
                      <ArrowRight className="h-5 w-5 text-primary" />
                      <span className="text-foreground">Health Articles</span>
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

export default About;
