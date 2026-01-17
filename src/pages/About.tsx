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
      title: "Evidence-Based Practice",
      description: "Over 10 years of specialized ENT experience with continuous professional development and medical education."
    },
    {
      icon: Users,
      title: "Global Accessibility",
      description: "Extending expert ENT guidance beyond borders through digital consultations and health education resources."
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

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalOrganization",
    "name": "Eritage ENT Care",
    "description": "Specialist-led ENT platform providing evidence-based ear, nose, and throat care with over 10 years of clinical experience.",
    "url": "https://www.trendexhub.com/about",
    "medicalSpecialty": "Otolaryngology",
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
    "sameAs": [
      "https://maps.app.goo.gl/jyV5xBRkD95u2i4B8"
    ]
  };

  const locationSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": "Eritage ENT Care – Entebbe",
    "description": "Professional ENT clinic in Entebbe providing comprehensive ear, nose, and throat care.",
    "url": "https://www.trendexhub.com/about",
    "telephone": "+256740166778",
    "email": "info@trendexhub.com",
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
    "parentOrganization": {
      "@type": "MedicalOrganization",
      "name": "Eritage ENT Care"
    },
    "sameAs": [
      "https://maps.app.goo.gl/jyV5xBRkD95u2i4B8"
    ]
  };

  return (
    <>
      <Helmet>
        <title>About Us | Eritage ENT Care | Expert ENT Specialists</title>
        <meta name="description" content="Meet the specialists behind Eritage ENT Care. Over 10 years of clinical experience delivering evidence-based ear, nose, and throat care to patients worldwide." />
        <meta property="og:title" content="About Eritage ENT Care | ENT Specialists" />
        <meta property="og:description" content="Specialist-led ENT platform with over 10 years of clinical experience. Evidence-based care and patient education for all ages." />
        <meta property="og:type" content="website" />
        <meta name="keywords" content="about Eritage ENT Care, ENT specialists, ear nose throat experts, Fahad Juma ENT, evidence-based ENT care" />
        <link rel="canonical" href="https://www.trendexhub.com/about" />
        <script type="application/ld+json">
          {JSON.stringify(organizationSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(locationSchema)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />

        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-sm font-medium text-primary mb-3 uppercase tracking-wide">
                Our Mission & Values
              </p>
              <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                About Eritage ENT Care
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Specialist-led ENT education and evidence-based care. Trusted by patients for expert diagnosis and treatment.
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
                  Our Approach to ENT Care
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p className="text-base leading-relaxed">
                    <span className="font-semibold text-foreground">Eritage ENT Care</span> is a specialist-led medical platform dedicated to evidence-based diagnosis and treatment of ear, nose, and throat conditions. We combine clinical expertise with patient education to empower informed healthcare decisions.
                  </p>
                  <p className="text-base leading-relaxed">
                    Our team delivers personalized treatment plans designed to improve quality of life. Through digital consultations and comprehensive health resources, we extend expert ENT guidance to patients worldwide while maintaining the highest standards of medical care.
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
                Meet Our Lead Specialist
              </h2>
              <Card className="bg-background max-w-2xl mx-auto">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 justify-center mb-4">
                    <Stethoscope className="h-8 w-8 text-primary" />
                    <h3 className="text-xl font-bold text-foreground">Fahad Juma</h3>
                  </div>
                  <p className="text-primary font-medium mb-4">ENT Specialist | Clinical Otolaryngology</p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    With over 10 years of clinical experience in ear, nose, and throat medicine, Fahad Juma leads our specialist team in delivering evidence-based diagnosis and treatment. His approach combines thorough clinical assessment with patient education to ensure informed healthcare decisions.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Specializing in both medical and procedural treatments, he provides expert care through in-person consultations and digital health guidance for patients worldwide.
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

        {/* Entebbe Location */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-8">
                <p className="text-sm font-medium text-primary mb-2 uppercase tracking-wide">
                  Our Physical Location
                </p>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  Eritage ENT Care – Entebbe
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Visit our flagship clinic in Entebbe, Uganda for in-person consultations, examinations, and procedures.
                </p>
              </div>
              <Card className="max-w-xl mx-auto">
                <CardContent className="p-6 text-center">
                  <div className="flex items-center justify-center gap-3 mb-4">
                    <MapPin className="h-6 w-6 text-primary" />
                    <p className="text-lg text-foreground font-medium">
                      Along Entebbe Road, Entebbe, Central Region, Uganda
                    </p>
                  </div>
                  <p className="text-muted-foreground mb-4">Open 24 hours, 7 days a week</p>
                  <a 
                    href="https://maps.app.goo.gl/jyV5xBRkD95u2i4B8" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:underline font-medium"
                  >
                    Get Directions on Google Maps →
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Start Your Consultation
              </h2>
              <p className="text-muted-foreground mb-8">
                Connect with our ENT specialists today. Whether you prefer an in-person visit or digital consultation, we're here to help with all your ear, nose, and throat concerns.
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
