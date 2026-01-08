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
  const schemaData = {
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
    "sameAs": [
      "https://maps.app.goo.gl/jyV5xBRkD95u2i4B8"
    ]
  };

  return (
    <>
      <Helmet>
        <title>ERITAGE ENT CARE | Expert ENT Care in Entebbe</title>
        <meta name="description" content="Professional ENT care in Entebbe. Expert treatment for ear, nose, and throat conditions. Book your appointment with our experienced ENT specialists today." />
        <meta property="og:title" content="ERITAGE ENT CARE | Expert ENT Care in Entebbe" />
        <meta property="og:description" content="Professional ENT care in Entebbe. Expert treatment for ear, nose, and throat conditions." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://www.trendexhub.com/" />
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      </Helmet>
      
      <div className="min-h-screen">
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1241677876393680"
     crossOrigin="anonymous"></script>
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
