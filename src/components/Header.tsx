import { useState } from "react";
import { Menu, X, Phone, MessageCircle } from "lucide-react";
import logo from "@/assets/eritage-logo.png";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#specialist", label: "Specialist" },
    { href: "#blog", label: "Blog" },
    { href: "#appointment", label: "Contact" },
  ];

  return (
    <header className="bg-background border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4">
        {/* Top bar with phone numbers */}
        <div className="flex items-center justify-between py-2 border-b border-border/50">
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span>0740166778</span>
            <span className="hidden sm:inline">|</span>
            <span className="hidden sm:inline">0769616091</span>
          </div>
          <div className="flex items-center gap-2">
            <Button 
              size="sm" 
              variant="outline"
              asChild
            >
              <a href="tel:0740166778">
                <Phone className="h-4 w-4" />
                <span className="hidden sm:inline ml-2">Call Now</span>
              </a>
            </Button>
            <Button 
              size="sm" 
              className="bg-[#25D366] hover:bg-[#25D366]/90 text-white"
              asChild
            >
              <a href="https://wa.me/256740166778" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-4 w-4" />
                <span className="hidden sm:inline ml-2">WhatsApp</span>
              </a>
            </Button>
          </div>
        </div>
        
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-3">
            <img src={logo} alt="ERITAGE ENT CARE" className="h-12 w-auto" />
            <span className="text-xl font-bold text-primary hidden sm:inline">
              ERITAGE ENT CARE
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a 
                key={item.href} 
                href={item.href}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                {item.label}
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
