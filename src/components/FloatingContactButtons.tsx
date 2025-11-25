import { Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const FloatingContactButtons = () => {
  return (
    <>
      {/* Fixed Call Button - Left */}
      <div className="fixed left-4 bottom-8 z-50">
        <Button 
          size="lg"
          className="rounded-full shadow-lg hover:shadow-xl transition-shadow"
          asChild
        >
          <a href="tel:+256740166778" aria-label="Call Now">
            <Phone className="h-5 w-5" />
          </a>
        </Button>
      </div>

      {/* Fixed WhatsApp Button - Right */}
      <div className="fixed right-4 bottom-8 z-50">
        <Button 
          size="lg"
          className="bg-[#25D366] hover:bg-[#25D366]/90 text-white rounded-full shadow-lg hover:shadow-xl transition-shadow"
          asChild
        >
          <a href="https://wa.me/256740166778" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
            <MessageCircle className="h-5 w-5" />
          </a>
        </Button>
      </div>
    </>
  );
};

export default FloatingContactButtons;
