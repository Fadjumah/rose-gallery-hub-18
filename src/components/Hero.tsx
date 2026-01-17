import { Button } from "@/components/ui/button";
import { Phone, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import clinicBuilding from "@/assets/clinic-building.jpg";

const Hero = () => {
  const scrollToAppointment = () => {
    document.getElementById('appointment')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="bg-background">
      {/* Text content above the image */}
      <div className="container mx-auto px-4 pt-12 pb-8">
        <div className="max-w-3xl">
          <p className="text-sm font-medium text-primary mb-3 uppercase tracking-wide">
            Specialist-Led ENT Education & Care
          </p>
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 text-foreground">
            Evidence-Based <span className="text-primary">ENT Care</span> You Can Trust
          </h1>
          <p className="text-lg md:text-xl mb-8 text-muted-foreground max-w-2xl">
            Expert diagnosis and treatment for ear, nose, and throat conditions. 
            Combining clinical excellence with patient education to deliver personalized care for adults and children worldwide.
          </p>
          <div className="flex flex-wrap gap-4 mb-6">
            <Button 
              size="lg" 
              onClick={scrollToAppointment}
              className="text-lg px-8 py-6"
            >
              Book Consultation
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              asChild
              className="gap-2"
            >
              <Link to="/ent-services">
                Explore ENT Services
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
          
          {/* Contact info */}
          <div className="flex flex-wrap items-center gap-6 mt-6 text-muted-foreground">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-primary" />
              <span className="font-medium">+256 740 166 778</span>
            </div>
            <span className="hidden sm:inline text-border">|</span>
            <span className="text-sm">Available 24/7 for consultations</span>
          </div>
        </div>
      </div>
      
      {/* Clinic image below the text */}
      <div className="relative min-h-[400px] overflow-hidden">
        <img 
          src={clinicBuilding} 
          alt="Eritage ENT Care Clinic Building" 
          className="w-full h-[400px] object-cover"
        />
      </div>
    </section>
  );
};

export default Hero;
