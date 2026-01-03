import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
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
    </section>
  );
};

export default About;
