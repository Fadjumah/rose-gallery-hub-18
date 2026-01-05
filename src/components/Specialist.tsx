import { Card, CardContent } from "@/components/ui/card";
import { Award, Clock } from "lucide-react";
import entSpecialistImage from "@/assets/ent-specialist-doctor.jpg";

const Specialist = () => {
  return (
    <section id="specialist" className="py-20 bg-accent">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Meet Our ENT Specialist</h2>
          <p className="text-lg text-muted-foreground">
            Expert care from highly qualified professionals
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <div className="grid md:grid-cols-2 gap-0">
                {/* Doctor Image */}
                <div className="relative h-80 md:h-auto">
                  <img 
                    src={entSpecialistImage} 
                    alt="ENT Specialist Doctor Fahad Juma at ERITAGE ENT CARE Clinic Entebbe Uganda - Ear Nose Throat Expert" 
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                
                {/* Doctor Info */}
                <div className="p-8 flex flex-col justify-center">
                  <h3 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-2">
                    ENT Specialist
                  </h3>
                  <p className="text-2xl font-serif font-semibold text-foreground mb-8">Fahad Juma</p>
                  
                  <div className="space-y-4 max-w-2xl">
                    <div className="flex items-start gap-3">
                      <Award className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold">Specialization</p>
                        <p className="text-sm text-muted-foreground">
                          Ear, Nose & Throat Surgery and Treatment
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <Clock className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold">Experience</p>
                        <p className="text-sm text-muted-foreground">
                          Over 10 years of clinical practice
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <p className="mt-6 text-muted-foreground max-w-2xl">
                    Lubega Fahad is dedicated to providing exceptional ENT care with a patient-first approach, 
                    ensuring comfort and optimal treatment outcomes.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Specialist;
