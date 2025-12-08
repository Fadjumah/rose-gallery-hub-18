import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { MessageCircle, Send } from "lucide-react";

const AskENTQuestion = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    question: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.phone || !formData.question) {
      toast({
        title: "Missing Information",
        description: "Please fill in all fields before submitting.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    const message = `*New ENT Question from Website*%0A%0A*Name:* ${encodeURIComponent(formData.name)}%0A*Phone:* ${encodeURIComponent(formData.phone)}%0A%0A*Question:*%0A${encodeURIComponent(formData.question)}`;
    
    const whatsappUrl = `https://wa.me/256740166778?text=${message}`;
    
    window.open(whatsappUrl, "_blank");

    toast({
      title: "Question Sent!",
      description: "Your question has been sent via WhatsApp. We'll respond shortly.",
    });

    setFormData({ name: "", phone: "", question: "" });
    setIsSubmitting(false);
  };

  return (
    <section className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
              <MessageCircle className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-3xl font-bold text-foreground mb-3">
              Ask an ENT Question
            </h2>
            <p className="text-muted-foreground">
              Have a question about ear, nose, or throat health? Submit your question and our ENT specialist will respond promptly.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-card rounded-2xl shadow-lg p-8 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="ask-name" className="text-foreground font-medium">
                  Full Name
                </Label>
                <Input
                  id="ask-name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-background border-input"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="ask-phone" className="text-foreground font-medium">
                  Phone Number
                </Label>
                <Input
                  id="ask-phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="bg-background border-input"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="ask-question" className="text-foreground font-medium">
                Your Question
              </Label>
              <Textarea
                id="ask-question"
                value={formData.question}
                onChange={(e) => setFormData({ ...formData, question: e.target.value })}
                className="bg-background border-input min-h-[120px]"
                placeholder="Describe your ENT concern or question..."
                required
              />
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-6 text-lg"
            >
              <Send className="w-5 h-5 mr-2" />
              {isSubmitting ? "Sending..." : "Submit Question via WhatsApp"}
            </Button>

            <p className="text-center text-sm text-muted-foreground">
              Your question will be sent directly to our ENT specialist via WhatsApp for a quick response.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AskENTQuestion;
