import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import entClinicImage from "@/assets/ent-clinic-interior.jpg";

const About = () => {
  const highlights = [
    "Evidence-based diagnosis and treatment",
    "Personalized care for adults and children",
    "Advanced diagnostic equipment",
    "Specialist-led consultations"
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Clinic Image */}
          <div className="relative rounded-2xl overflow-hidden shadow-xl order-2 lg:order-1">
            <img 
              src={entClinicImage} 
              alt="Eritage ENT Care Modern Medical Facility - Advanced ENT Diagnostic Equipment" 
              className="w-full h-80 lg:h-96 object-cover"
              loading="lazy"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
              <p className="text-white font-semibold text-lg">Clinical Excellence</p>
              <p className="text-white/80 text-sm">Advanced diagnostics for precise treatment</p>
            </div>
          </div>

          {/* Text Content */}
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">About Eritage ENT Care</h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Eritage ENT Care is a specialist-led medical platform dedicated to providing evidence-based 
              ear, nose, and throat healthcare across Uganda. We combine clinical expertise with patient 
              education to deliver treatment plans that address each individual's unique needs.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Our team of experienced ENT specialists brings years of clinical practice to every consultation. 
              From routine examinations to complex conditions, we're committed to improving quality of life 
              through accurate diagnosis and personalized care—whether you visit us in person or connect digitally.
            </p>
            
            {/* Highlights */}
            <div className="grid sm:grid-cols-2 gap-3 mb-8">
              {highlights.map((item) => (
                <div key={item} className="flex items-center gap-2 text-muted-foreground">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <Button asChild variant="outline" className="gap-2">
              <Link to="/about">
                Meet Our Specialists
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
