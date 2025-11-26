import { Card, CardContent } from "@/components/ui/card";
import { Award, Clock } from "lucide-react";

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
            <CardContent className="p-8">
              <div className="text-left">
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
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Specialist;
