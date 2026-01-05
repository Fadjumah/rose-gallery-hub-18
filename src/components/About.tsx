import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import entClinicImage from "@/assets/ent-clinic-interior.jpg";

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Clinic Image */}
          <div className="relative rounded-2xl overflow-hidden shadow-xl order-2 lg:order-1">
            <img 
              src={entClinicImage} 
              alt="ERITAGE ENT CARE Modern Clinic Interior Entebbe Uganda - State of the Art ENT Medical Facility with Advanced Equipment" 
              className="w-full h-80 lg:h-96 object-cover"
              loading="lazy"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
              <p className="text-white font-semibold text-lg">Modern ENT Facility</p>
              <p className="text-white/80 text-sm">State-of-the-art equipment for precise diagnosis</p>
            </div>
          </div>

          {/* Text Content */}
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">About ERITAGE ENT CARE</h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              ERITAGE ENT CARE is a premier medical facility specializing in ear, nose, and throat healthcare 
              in Entebbe. Our state-of-the-art clinic combines advanced medical technology with compassionate 
              care to provide the best treatment outcomes for our patients.
            </p>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              With years of experience and a commitment to excellence, we serve the community with 
              comprehensive ENT services, from routine check-ups to complex surgical procedures. 
              Our mission is to improve the quality of life for every patient who walks through our doors.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              We believe in patient-centered care, taking the time to listen, diagnose accurately, 
              and create personalized treatment plans that address each patient's unique needs.
            </p>
            <Button asChild variant="outline" className="gap-2">
              <Link to="/about">
                Learn More About Us
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
