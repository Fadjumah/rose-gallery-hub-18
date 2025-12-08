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
  return (
    <>
      <Helmet>
        <title>ERITAGE ENT CARE | Expert ENT Care in Entebbe</title>
        <meta name="description" content="Professional ENT care in Entebbe. Expert treatment for ear, nose, and throat conditions. Book your appointment with our experienced ENT specialists today." />
        <meta property="og:title" content="ERITAGE ENT CARE | Expert ENT Care in Entebbe" />
        <meta property="og:description" content="Professional ENT care in Entebbe. Expert treatment for ear, nose, and throat conditions." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://yourdomain.com/" />
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
