import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Heart, Shield, Sparkles, LucideIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { getArticleMetadata } from "@/utils/blogLoader";

const iconMap: Record<string, LucideIcon> = {
  BookOpen,
  Heart,
  Shield,
  Sparkles,
};

const HealthTips = () => {
  const navigate = useNavigate();
  const articles = getArticleMetadata();

  const handleArticleClick = (slug: string) => {
    navigate(`/blog/${slug}`);
  };

  return (
    <section id="blog" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Health Articles & Tips</h2>
          <p className="text-lg text-muted-foreground">
            Expert advice for better ENT health
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {articles.map((article) => {
            const IconComponent = iconMap[article.icon] || BookOpen;
            
            return (
              <Card 
                key={article.slug} 
                className="hover:shadow-md transition-all cursor-pointer hover:scale-[1.02]"
                onClick={() => handleArticleClick(article.slug)}
              >
                <CardHeader>
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                    <IconComponent className="w-5 h-5 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{article.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{article.description}</CardDescription>
                  <div className="mt-4 text-sm text-primary font-medium">
                    Read more →
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HealthTips;
