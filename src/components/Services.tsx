import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Ear, Activity, Stethoscope, Wind, Pill, Search } from "lucide-react";

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
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-accent">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our ENT Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive ear, nose, and throat care with state-of-the-art facilities and experienced specialists.
          </p>
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
      </div>
    </section>
  );
};

export default Services;
