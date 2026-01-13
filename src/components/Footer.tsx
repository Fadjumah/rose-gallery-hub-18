import { Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand & Contact */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-4">ERITAGE ENT CARE</h3>
            <p className="mb-4 max-w-md">
              Professional ear, nose, and throat care in Entebbe. Your trusted partner for ENT health.
            </p>
            <p className="text-sm opacity-90 mb-2">
              Along Entebbe Road, Entebbe, Central Region, Uganda
            </p>
            <p className="text-sm font-medium">
              Open 24 hours, 7 days a week
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <nav className="space-y-2">
              <Link to="/ent-services" className="block hover:underline opacity-90 hover:opacity-100">
                ENT Services in Entebbe
              </Link>
              <Link to="/hearing-tests" className="block hover:underline opacity-90 hover:opacity-100">
                Hearing Tests & Audiology
              </Link>
              <Link to="/urgent-ent-guidance" className="block hover:underline opacity-90 hover:opacity-100">
                Urgent ENT Guidance
              </Link>
              <Link to="/about" className="block hover:underline opacity-90 hover:opacity-100">
                About Us
              </Link>
              <Link to="/contact" className="block hover:underline opacity-90 hover:opacity-100">
                Contact Us
              </Link>
              <Link to="/blog" className="block hover:underline opacity-90 hover:opacity-100">
                Health Articles
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div className="text-center md:text-right">
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <div className="space-y-2 text-sm mb-4">
              <p>+256 740 166 778</p>
              <p>+256 769 616 091</p>
              <a href="mailto:info@trendexhub.com" className="block hover:underline">info@trendexhub.com</a>
            </div>
            <div className="flex items-center justify-center md:justify-end gap-3">
              <Button 
                variant="outline"
                size="sm"
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                asChild
              >
                <a href="tel:+256740166778">
                  <Phone className="h-4 w-4 mr-2" />
                  Call
                </a>
              </Button>
              <Button 
                size="sm"
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
        </div>
        
        <div className="border-t border-primary-foreground/20 pt-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm opacity-80">
              © {new Date().getFullYear()} ERITAGE ENT CARE. All rights reserved.
            </p>
            <nav className="flex items-center gap-4 text-sm">
              <Link to="/privacy-policy" className="opacity-80 hover:opacity-100 hover:underline">
                Privacy Policy
              </Link>
              <span className="opacity-50">|</span>
              <Link to="/terms-of-service" className="opacity-80 hover:opacity-100 hover:underline">
                Terms of Service
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
