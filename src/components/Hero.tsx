import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, ArrowRight, Users, Award } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-doctor-patient.jpg";

const Hero = () => {
  const scrollToAppointment = () => {
    document.getElementById('appointment')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative bg-background">
      {/* Hero Image with Overlay */}
      <div className="relative min-h-[600px] md:min-h-[700px]">
        <img 
          src={heroImage} 
          alt="ENT specialist providing compassionate care to a young patient" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
        
        {/* Content */}
        <div className="relative container mx-auto px-4 py-16 md:py-24 flex flex-col justify-center min-h-[600px] md:min-h-[700px]">
          <div className="max-w-2xl">
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Award className="h-4 w-4" />
              Specialist-Led ENT Care
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 text-foreground leading-tight">
              <span className="text-primary">Eritage</span> ENT Care
            </h1>
            
            <p className="text-lg md:text-xl mb-4 text-muted-foreground max-w-xl leading-relaxed">
              Expert diagnosis and treatment for ear, nose, and throat conditions. Personalized care for adults and children nationwide.
            </p>
            
            {/* Trust Signals */}
            <div className="flex items-center gap-2 mb-8 text-sm text-muted-foreground">
              <Users className="h-4 w-4 text-primary" />
              <span className="font-medium">1,000+ patients treated across Uganda</span>
              <span className="mx-2">•</span>
              <span>Specialist-led care</span>
            </div>
            
            {/* CTAs */}
            <div className="flex flex-wrap gap-4 mb-8">
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
            
            {/* Contact Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <Button 
                variant="ghost" 
                size="sm"
                className="gap-2 text-foreground hover:text-primary"
                asChild
              >
                <a href="tel:+256740166778">
                  <Phone className="h-4 w-4" />
                  +256 740 166 778
                </a>
              </Button>
              <Button 
                size="sm"
                className="bg-[#25D366] hover:bg-[#25D366]/90 text-white gap-2"
                asChild
              >
                <a href="https://wa.me/256740166778" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp Us
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
