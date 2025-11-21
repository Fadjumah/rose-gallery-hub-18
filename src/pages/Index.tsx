import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Specialist from "@/components/Specialist";
import HealthTips from "@/components/HealthTips";
import AppointmentForm from "@/components/AppointmentForm";
import Footer from "@/components/Footer";
import FloatingContactButtons from "@/components/FloatingContactButtons";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <About />
      <Specialist />
      <HealthTips />
      <AppointmentForm />
      <Footer />
      <FloatingContactButtons />
    </div>
  );
};

export default Index;
