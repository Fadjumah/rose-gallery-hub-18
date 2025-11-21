import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import clinicBuilding from "@/assets/clinic-building.jpg";

const Hero = () => {
  const scrollToAppointment = () => {
    document.getElementById('appointment')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${clinicBuilding})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/85 to-background/70" />
      </div>
      
      <div className="container relative z-10 px-4 py-20 mx-auto">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
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
    </section>
  );
};

export default Hero;
