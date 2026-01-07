import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Heart, Shield, Sparkles, Activity, Search, Droplets, Wind, LucideIcon, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { getArticleMetadata } from "@/utils/blogLoader";

const iconMap: Record<string, LucideIcon> = {
  BookOpen,
  Heart,
  Shield,
  Sparkles,
  Activity,
  Search,
  Droplets,
  Wind,
};

const HealthTips = () => {
  const navigate = useNavigate();
  const articles = getArticleMetadata();
  const displayedArticles = articles.slice(0, 3);

  const handleArticleClick = (slug: string) => {
    navigate(`/blog/${slug}`);
  };

  return (
    <section id="blog" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-3">Health Articles</h2>
          <p className="text-muted-foreground">
            Expert advice for better ENT health
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {displayedArticles.map((article) => {
            const IconComponent = iconMap[article.icon] || BookOpen;
            
            return (
              <Card 
                key={article.slug} 
                className="hover:shadow-md transition-all cursor-pointer hover:scale-[1.02]"
                onClick={() => handleArticleClick(article.slug)}
              >
                <CardHeader className="pb-3">
                  <div className="w-9 h-9 bg-primary/10 rounded-lg flex items-center justify-center mb-2">
                    <IconComponent className="w-4 h-4 text-primary" />
                  </div>
                  <CardTitle className="text-lg leading-tight">{article.title}</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <CardDescription className="text-sm line-clamp-2">{article.description}</CardDescription>
                  <div className="mt-3 text-sm text-primary font-medium">
                    Read more →
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        {articles.length > 3 && (
          <div className="text-center mt-8">
            <Button 
              variant="outline" 
              onClick={() => navigate('/blog')}
              className="gap-2"
            >
              View All Articles
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default HealthTips;
