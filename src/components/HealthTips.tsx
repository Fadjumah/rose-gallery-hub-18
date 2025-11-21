import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Heart, Shield, Sparkles } from "lucide-react";

const articles = [
  {
    icon: BookOpen,
    title: "Understanding Ear Infections",
    description: "Learn about the causes, symptoms, and treatment options for common ear infections in children and adults."
  },
  {
    icon: Heart,
    title: "Preventing Hearing Loss",
    description: "Discover effective strategies to protect your hearing and maintain ear health throughout your life."
  },
  {
    icon: Shield,
    title: "Managing Allergies Naturally",
    description: "Explore natural remedies and lifestyle changes that can help reduce nasal allergy symptoms."
  },
  {
    icon: Sparkles,
    title: "Voice Care Tips",
    description: "Essential tips for maintaining vocal health, especially important for teachers, singers, and public speakers."
  }
];

const HealthTips = () => {
  return (
    <section id="blog" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Health Articles & Tips</h2>
          <p className="text-lg text-muted-foreground">
            Expert advice for better ENT health
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {articles.map((article, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                  <article.icon className="w-5 h-5 text-primary" />
                </div>
                <CardTitle className="text-xl">{article.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{article.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HealthTips;
