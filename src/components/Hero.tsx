import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
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
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 text-foreground">
            Expert ENT Care in <span className="text-primary">Entebbe</span>
          </h1>
          <p className="text-lg md:text-xl mb-8 text-muted-foreground max-w-2xl">
            Professional treatment for ear, nose, and throat conditions. 
            Experienced specialist care for adults and children in a modern, comfortable clinic environment.
          </p>
          <Button 
            size="lg" 
            onClick={scrollToAppointment}
            className="text-lg px-8 py-6 mb-6"
          >
            Book Appointment
          </Button>
          
          {/* Phone numbers below button */}
          <div className="space-y-3 mt-6">
            <div className="flex items-center gap-3 text-foreground">
              <Phone className="h-5 w-5 text-primary" />
              <span className="text-xl font-semibold">0740166778</span>
            </div>
            <div className="flex items-center gap-3 text-foreground">
              <Phone className="h-5 w-5 text-primary" />
              <span className="text-xl font-semibold">0769616091</span>
            </div>
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
