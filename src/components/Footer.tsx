import { Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">ERITAGE ENT CARE</h3>
          <p className="mb-4 max-w-2xl mx-auto">
            Professional ear, nose, and throat care in Entebbe. Your trusted partner for ENT health.
          </p>
          <p className="mb-6 text-sm opacity-90">
            Along Entebbe Road, Entebbe, Central Region, Uganda
          </p>
          
          <div className="mb-6">
            <div className="flex items-center justify-center gap-4 text-sm mb-4">
              <span>+256 740 166 778</span>
              <span>|</span>
              <span>+256 769 616 091</span>
              <span>|</span>
              <span>+256 742 017 229</span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <Button 
                variant="outline"
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                asChild
              >
                <a href="tel:+256740166778">
                  <Phone className="h-4 w-4 mr-2" />
                  Call Now
                </a>
              </Button>
              <Button 
                className="bg-[#25D366] hover:bg-[#25D366]/90 text-white border-0"
                asChild
              >
                <a href="https://wa.me/256740166778" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  WhatsApp
                </a>
              </Button>
            </div>
          </div>
          
          <div className="border-t border-primary-foreground/20 pt-6">
            <p className="text-sm opacity-80">
              © {new Date().getFullYear()} ERITAGE ENT CARE. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
