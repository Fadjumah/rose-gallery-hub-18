import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContactButtons from "@/components/FloatingContactButtons";
import FAQSection from "@/components/FAQSection";
import AskENTQuestion from "@/components/AskENTQuestion";

const FAQ = () => {
  return (
    <>
      <Helmet>
        <title>FAQ – Eritage ENT Care Entebbe | Common Questions About ENT Services</title>
        <meta name="description" content="Find answers to frequently asked questions about Eritage ENT Care in Entebbe. Learn about our ENT services, hearing tests, appointments, and clinic location." />
        <meta name="keywords" content="ENT FAQ Entebbe, Eritage EntCare questions, hearing test FAQ Uganda, ENT clinic questions, ENT services information" />
        <meta property="og:title" content="FAQ – Eritage ENT Care Entebbe" />
        <meta property="og:description" content="Find answers to common questions about our ENT services in Entebbe." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://yourdomain.com/faq" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1241677876393680"
     crossOrigin="anonymous"></script>
        <Header />

        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary/10 via-secondary to-accent/20 py-20 md:py-28">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Everything you need to know about our ENT services in Entebbe
            </p>
          </div>
        </section>

        {/* Full FAQ Section */}
        <FAQSection variant="full" className="bg-background" />

        {/* Ask ENT Question Form */}
        <AskENTQuestion />

        {/* Map Section */}
        <section className="py-16 bg-accent/20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-center text-foreground mb-8">
                Find Us on the Map
              </h2>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.7584444444444!2d32.4580556!3d0.0527778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177d8a4b5c6d7e8f%3A0x1234567890abcdef!2sEritage%20Ear%2C%20Nose%20and%20throat%20home%20%E2%80%93Entebbe%20road!5e0!3m2!1sen!2sug!4v1701907200000!5m2!1sen!2sug"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Eritage ENT Care Location"
                ></iframe>
              </div>
              <div className="text-center mt-6">
                <a
                  href="https://maps.app.goo.gl/jyV5xBRkD95u2i4B8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline font-semibold"
                >
                  Open in Google Maps →
                </a>
              </div>
            </div>
          </div>
        </section>

        <Footer />
        <FloatingContactButtons />
      </div>
    </>
  );
};

export default FAQ;
