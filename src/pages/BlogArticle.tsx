import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { ArrowLeft, Calendar, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingContactButtons from '@/components/FloatingContactButtons';
import { getArticleBySlug } from '@/utils/blogLoader';
import { Helmet } from 'react-helmet-async';

const BlogArticle = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const article = slug ? getArticleBySlug(slug) : undefined;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!article) {
    return (
      <div className="min-h-screen">
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1241677876393680"
     crossOrigin="anonymous"></script>
        <Header />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl font-serif font-bold mb-4">Article Not Found</h1>
          <p className="text-muted-foreground mb-8">The article you're looking for doesn't exist.</p>
          <Button onClick={() => navigate('/#blog')}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  // Extract FAQ data from article content for schema markup
  const extractFAQs = (content: string) => {
    const faqSection = content.match(/## Frequently Asked Questions[\s\S]*?(?=## |---\s*$|$)/);
    if (!faqSection) return [];
    
    const faqs: { question: string; answer: string }[] = [];
    const faqText = faqSection[0];
    
    // Match ### questions and their answers
    const questionMatches = faqText.matchAll(/### ([^\n]+)\n\n([\s\S]*?)(?=### |$)/g);
    
    for (const match of questionMatches) {
      const question = match[1].trim();
      // Clean up the answer - remove markdown formatting
      const answer = match[2]
        .replace(/\*\*([^*]+)\*\*/g, '$1') // Remove bold
        .replace(/- /g, '') // Remove list markers
        .replace(/\n+/g, ' ') // Replace newlines with spaces
        .trim();
      
      if (question && answer) {
        faqs.push({ question, answer });
      }
    }
    
    return faqs;
  };

  const faqs = extractFAQs(article.content);

  const breadcrumbSchemaData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.trendexhub.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Blog",
        "item": "https://www.trendexhub.com/blog"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": article.title,
        "item": `https://www.trendexhub.com/blog/${article.slug}`
      }
    ]
  };

  const articleSchemaData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": article.title,
    "description": article.description,
    "datePublished": article.date,
    "dateModified": article.date,
    "author": {
      "@type": "Person",
      "name": article.author,
      "jobTitle": "ENT Specialist",
      "worksFor": {
        "@type": "MedicalBusiness",
        "name": "Eritage ENT Care – Entebbe"
      }
    },
    "publisher": {
      "@type": "Organization",
      "name": "Eritage ENT Care – Entebbe",
      "url": "https://www.trendexhub.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.trendexhub.com/favicon.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://www.trendexhub.com/blog/${article.slug}`
    },
    "url": `https://www.trendexhub.com/blog/${article.slug}`,
    "isPartOf": {
      "@type": "Blog",
      "name": "Eritage ENT Care Health Blog",
      "url": "https://www.trendexhub.com/blog"
    },
    "about": {
      "@type": "MedicalSpecialty",
      "name": "Otolaryngology"
    }
  };

  const faqSchemaData = faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  } : null;

  return (
    <>
      <Helmet>
        <title>{article.title} | ERITAGE ENT CARE Blog</title>
        <meta name="description" content={article.description} />
        <meta property="og:title" content={article.title} />
        <meta property="og:description" content={article.description} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://www.trendexhub.com/blog/${article.slug}`} />
        <meta property="article:published_time" content={article.date} />
        <meta property="article:author" content={article.author} />
        <link rel="canonical" href={`https://www.trendexhub.com/blog/${article.slug}`} />
        <script type="application/ld+json">
          {JSON.stringify(articleSchemaData)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchemaData)}
        </script>
        {faqSchemaData && (
          <script type="application/ld+json">
            {JSON.stringify(faqSchemaData)}
          </script>
        )}
      </Helmet>

      <div className="min-h-screen">
        <Header />
        
        <article className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* Back Button */}
              <Button 
                variant="ghost" 
                onClick={() => navigate('/#blog')}
                className="mb-8"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blog
              </Button>

              {/* Article Header */}
              <header className="mb-12">
                <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
                  {article.title}
                </h1>
                <p className="text-xl text-muted-foreground mb-6">
                  {article.description}
                </p>
              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <time dateTime={article.date} className="font-serif">
                      {new Date(article.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </time>
                  </div>
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    <span className="font-serif">{article.author}</span>
                  </div>
                </div>
              </header>

              {/* Article Content */}
              <div className="prose prose-lg max-w-none">
                <ReactMarkdown 
                  remarkPlugins={[remarkGfm]}
                  components={{
                    h1: ({node, ...props}) => <h1 className="text-3xl font-serif font-bold mt-8 mb-4" {...props} />,
                    h2: ({node, ...props}) => <h2 className="text-2xl font-serif font-bold mt-8 mb-4" {...props} />,
                    h3: ({node, ...props}) => <h3 className="text-xl font-serif font-bold mt-6 mb-3" {...props} />,
                    h4: ({node, ...props}) => <h4 className="text-lg font-serif font-bold mt-4 mb-2" {...props} />,
                    p: ({node, ...props}) => <p className="mb-4 text-foreground leading-relaxed" {...props} />,
                    ul: ({node, ...props}) => <ul className="list-disc list-inside mb-4 space-y-2" {...props} />,
                    ol: ({node, ...props}) => <ol className="list-decimal list-inside mb-4 space-y-2" {...props} />,
                    li: ({node, ...props}) => <li className="text-foreground" {...props} />,
                    strong: ({node, ...props}) => <strong className="font-bold text-foreground" {...props} />,
                    blockquote: ({node, ...props}) => (
                      <blockquote className="border-l-4 border-primary pl-4 italic my-4 text-muted-foreground" {...props} />
                    ),
                    hr: ({node, ...props}) => <hr className="my-8 border-border" {...props} />,
                    a: ({node, ...props}) => <a className="text-primary hover:underline" {...props} />,
                  }}
                >
                  {article.content}
                </ReactMarkdown>
              </div>

              {/* Back to Blog */}
              <div className="mt-12 pt-8 border-t">
                <Button 
                  variant="outline" 
                  onClick={() => navigate('/blog')}
                  className="w-full sm:w-auto"
                >
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Read More Articles
                </Button>
              </div>

              {/* Related Services Section */}
              <div className="mt-12 pt-8 border-t">
                <h2 className="text-xl font-serif font-bold mb-4">Related ENT Services</h2>
                <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
                  <a href="/ent-services" className="block p-4 bg-secondary/50 rounded-lg hover:bg-secondary transition-colors">
                    <span className="font-medium text-foreground">ENT Services in Entebbe</span>
                  </a>
                  <a href="/hearing-tests" className="block p-4 bg-secondary/50 rounded-lg hover:bg-secondary transition-colors">
                    <span className="font-medium text-foreground">Hearing Tests & Audiology</span>
                  </a>
                  <a href="/urgent-ent-guidance" className="block p-4 bg-secondary/50 rounded-lg hover:bg-secondary transition-colors">
                    <span className="font-medium text-foreground">Urgent ENT Guidance</span>
                  </a>
                  <a href="/about" className="block p-4 bg-secondary/50 rounded-lg hover:bg-secondary transition-colors">
                    <span className="font-medium text-foreground">About Our ENT Clinic</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </article>

        <Footer />
        <FloatingContactButtons />
      </div>
    </>
  );
};

export default BlogArticle;
