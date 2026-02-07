import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Specialist from "@/components/Specialist";
import Locations from "@/components/Locations";
import HealthTips from "@/components/HealthTips";
import AppointmentForm from "@/components/AppointmentForm";
import GoogleMap from "@/components/GoogleMap";
import FAQSection from "@/components/FAQSection";
import AskENTQuestion from "@/components/AskENTQuestion";
import Footer from "@/components/Footer";
import FloatingContactButtons from "@/components/FloatingContactButtons";
import AnimatedImageShowcase from "@/components/AnimatedImageShowcase";

const Index = () => {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalOrganization",
    "name": "Eritage ENT Care",
    "description": "Specialist-led ENT education and evidence-based ear, nose, and throat care. Expert diagnosis and treatment for patients across Uganda.",
    "url": "https://www.eritageentcare.com",
    "logo": "https://www.eritageentcare.com/eritage-logo.png",
    "medicalSpecialty": "Otolaryngology",
    "areaServed": {
      "@type": "Country",
      "name": "Uganda"
    },
    "sameAs": [
      "https://maps.app.goo.gl/jyV5xBRkD95u2i4B8"
    ]
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": "Eritage ENT Care",
    "description": "Professional ENT clinic offering expert ear, nose, and throat care including hearing tests, sinus treatment, and emergency ENT services across Uganda.",
    "url": "https://www.eritageentcare.com",
    "telephone": "+256740166778",
    "email": "info@eritageentcare.com",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "UG"
    },
    "areaServed": {
      "@type": "Country",
      "name": "Uganda"
    },
    "medicalSpecialty": "Otolaryngology",
    "priceRange": "$$",
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
        <title>Eritage ENT Care | Expert Ear, Nose & Throat Specialists in Uganda</title>
        <meta name="description" content="Evidence-based ENT care from experienced specialists across Uganda. Expert diagnosis and treatment for ear, nose, and throat conditions for adults and children. Book your consultation today." />
        <meta property="og:title" content="Eritage ENT Care | Expert ENT Specialists in Uganda" />
        <meta property="og:description" content="Specialist-led ENT education and evidence-based care. Expert treatment for ear, nose, and throat conditions across Uganda." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://www.eritageentcare.com/" />
        <script type="application/ld+json">
          {JSON.stringify(organizationSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(localBusinessSchema)}
        </script>
      </Helmet>
      
      <div className="min-h-screen">
        <Header />
        <Hero />
        
        {/* Animated ENT Procedures Showcase */}
        <section className="py-12 bg-secondary/30">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-center text-foreground mb-8">
              Expert ENT Care in Action
            </h2>
            <AnimatedImageShowcase variant="staggered" />
          </div>
        </section>
        
        <Services />
        <About />
        <Specialist />
        
        {/* Second Image Showcase - Grid Style */}
        <section className="py-12 bg-muted/50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-center text-foreground mb-2">
              Our ENT Procedures
            </h2>
            <p className="text-center text-muted-foreground mb-8">
              Advanced diagnostic and treatment equipment for ear, nose & throat conditions
            </p>
            <AnimatedImageShowcase variant="grid" />
          </div>
        </section>
        
        <Locations />
        <HealthTips />
        <AppointmentForm />
        <GoogleMap />
        <FAQSection variant="compact" />
        <AskENTQuestion />
        <Footer />
        <FloatingContactButtons />
      </div>
    </>
  );
};

export default Index;
