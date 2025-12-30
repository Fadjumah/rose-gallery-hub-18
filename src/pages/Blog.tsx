import { Helmet } from "react-helmet-async";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Heart, Shield, Sparkles, Activity, LucideIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { getArticleMetadata } from "@/utils/blogLoader";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContactButtons from "@/components/FloatingContactButtons";

const iconMap: Record<string, LucideIcon> = {
  BookOpen,
  Heart,
  Shield,
  Sparkles,
  Activity,
};

const Blog = () => {
  const navigate = useNavigate();
  const articles = getArticleMetadata();

  const handleArticleClick = (slug: string) => {
    navigate(`/blog/${slug}`);
  };

  return (
    <>
      <Helmet>
        <title>Health Articles & Tips | Eritage ENT Care Entebbe</title>
        <meta name="description" content="Expert ENT health articles and tips from Eritage ENT Care in Entebbe. Learn about ear infections, hearing loss prevention, allergies, and voice care." />
        <meta property="og:title" content="Health Articles & Tips | Eritage ENT Care Entebbe" />
        <meta property="og:description" content="Expert ENT health articles and tips from Eritage ENT Care in Entebbe." />
        <link rel="canonical" href="https://eritageentcare.com/blog" />
      </Helmet>

      <div className="min-h-screen">
       
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1241677876393680"
     crossorigin="anonymous"></script>
        <Header />
        <main className="pt-24 pb-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Health Articles & Tips</h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Expert advice and insights from our ENT specialists to help you maintain better ear, nose, and throat health
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {articles.map((article) => {
                const IconComponent = iconMap[article.icon] || BookOpen;
                
                return (
                  <Card 
                    key={article.slug} 
                    className="hover:shadow-lg transition-all cursor-pointer hover:scale-[1.02]"
                    onClick={() => handleArticleClick(article.slug)}
                  >
                    <CardHeader>
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                        <IconComponent className="w-6 h-6 text-primary" />
                      </div>
                      <CardTitle className="text-xl">{article.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base">{article.description}</CardDescription>
                      <div className="mt-4 flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">{article.date}</span>
                        <span className="text-sm text-primary font-medium">Read more →</span>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </main>
        
        <Footer />
        <FloatingContactButtons />
      </div>
    </>
  );
};

export default Blog;
