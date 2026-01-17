import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Specialist from "@/components/Specialist";
import HealthTips from "@/components/HealthTips";
import AppointmentForm from "@/components/AppointmentForm";
import GoogleMap from "@/components/GoogleMap";
import FAQSection from "@/components/FAQSection";
import AskENTQuestion from "@/components/AskENTQuestion";
import Footer from "@/components/Footer";
import FloatingContactButtons from "@/components/FloatingContactButtons";

const Index = () => {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalOrganization",
    "name": "Eritage ENT Care",
    "description": "Specialist-led ENT education and evidence-based ear, nose, and throat care. Expert diagnosis and treatment for patients worldwide.",
    "url": "https://www.trendexhub.com",
    "logo": "https://www.trendexhub.com/eritage-logo.png",
    "medicalSpecialty": "Otolaryngology",
    "sameAs": [
      "https://maps.app.goo.gl/jyV5xBRkD95u2i4B8"
    ]
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": "Eritage ENT Care – Entebbe",
    "description": "Professional ENT clinic in Entebbe, Uganda offering expert ear, nose, and throat care including hearing tests, sinus treatment, and emergency ENT services.",
    "url": "https://www.trendexhub.com",
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
        <title>Eritage ENT Care | Expert Ear, Nose & Throat Specialists</title>
        <meta name="description" content="Evidence-based ENT care from experienced specialists. Expert diagnosis and treatment for ear, nose, and throat conditions. Book your consultation today." />
        <meta property="og:title" content="Eritage ENT Care | Expert ENT Specialists" />
        <meta property="og:description" content="Specialist-led ENT education and evidence-based care. Expert treatment for ear, nose, and throat conditions." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://www.trendexhub.com/" />
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
        <Services />
        <About />
        <Specialist />
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
