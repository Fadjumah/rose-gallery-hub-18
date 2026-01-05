import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Ear, Activity, Stethoscope, Wind, Pill, Search, RotateCcw, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import entExaminationImage from "@/assets/ent-examination.jpg";

const services = [
  {
    icon: Ear,
    title: "Ear Care",
    description: "Comprehensive ear examinations, hearing tests, and treatment for ear infections and disorders."
  },
  {
    icon: Search,
    title: "Nasal Care",
    description: "Treatment for sinusitis, nasal allergies, and breathing difficulties. Expert care for nasal health."
  },
  {
    icon: Activity,
    title: "Throat Care",
    description: "Diagnosis and treatment of throat conditions, voice disorders, and swallowing difficulties."
  },
  {
    icon: Stethoscope,
    title: "ENT Surgery",
    description: "Advanced surgical procedures for complex ear, nose, and throat conditions."
  },
  {
    icon: Wind,
    title: "Allergy Testing",
    description: "Comprehensive allergy testing and personalized treatment plans for respiratory allergies."
  },
  {
    icon: Pill,
    title: "Medical Treatment",
    description: "Evidence-based medical management for all ENT conditions with follow-up care."
  },
  {
    icon: Search,
    title: "Foreign Body Removal (Ear, Nose & Throat)",
    description: "Safe and precise removal of common foreign bodies such as insects, beads, seeds, cotton swabs, paper, and other objects stuck in the ear or nose. Quick relief, no trauma, and handled with proper ENT equipment."
  },
  {
    icon: RotateCcw,
    title: "Balance & Dizziness Treatment",
    description: "Expert diagnosis and treatment for vertigo, Meniere's disease, and other vestibular disorders causing balance problems and frequent dizziness."
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-accent">
      <div className="container mx-auto px-4">
        {/* Hero Image Banner */}
        <div className="relative rounded-2xl overflow-hidden shadow-xl mb-16 max-w-5xl mx-auto">
          <img 
            src={entExaminationImage} 
            alt="ENT Doctor Performing Ear Examination with Otoscope at ERITAGE ENT CARE Clinic Entebbe Uganda - Professional Ear Nose Throat Healthcare" 
            className="w-full h-64 md:h-80 object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/40 flex items-center">
            <div className="p-8 md:p-12 text-white max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Our ENT Services</h2>
              <p className="text-lg text-white/90">
                Comprehensive ear, nose, and throat care with state-of-the-art facilities and experienced specialists in Entebbe, Uganda.
              </p>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button asChild variant="outline" className="gap-2">
            <Link to="/ent-services">
              View All ENT Services in Entebbe
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
