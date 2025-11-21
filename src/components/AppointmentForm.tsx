import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const AppointmentForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.fullName || !formData.phone) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    // Here you would typically send the form data to a backend
    // For now, we'll just show a success message
    toast({
      title: "Appointment Request Received!",
      description: "We'll get back to you shortly to confirm your appointment.",
    });

    // Reset form
    setFormData({
      fullName: "",
      phone: "",
      email: "",
      message: ""
    });
  };

  return (
    <section id="appointment" className="py-20 bg-accent">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Book Your Appointment</h2>
            <p className="text-lg text-muted-foreground">
              Fill out the form and we'll get back to you shortly
            </p>
          </div>
          
          <div className="bg-card rounded-lg shadow-lg p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="fullName">Full Name *</Label>
                <Input
                  id="fullName"
                  placeholder="John Doe"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number *</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="0700000000"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message">Message / Reason for Visit</Label>
                <Textarea
                  id="message"
                  placeholder="Please describe your symptoms or reason for consultation..."
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>
              
              <Button type="submit" className="w-full" size="lg">
                Request Appointment
              </Button>
            </form>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-muted-foreground mb-4">You can also reach us at:</p>
            <div className="space-y-2">
              <p className="font-semibold">Phone: +256769616091</p>
              <p className="font-semibold">Email: info@eritageentcare.com</p>
              <p className="font-semibold">Location: Entebbe, Uganda</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppointmentForm;
