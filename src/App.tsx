import React from "react";
import SEO from "./components/SEO";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery"; // <- new gallery

const schema = { /* keep your existing schema here */ };

const App: React.FC = () => {
  return (
    <>
      <SEO
        title="Eritage ENT Care – ENT Specialist Clinic in Entebbe, Uganda"
        description="Leading ENT specialist clinic in Uganda providing 24/7 advanced care for ear, nose, throat, sinus, allergy and hearing conditions. Based in Entebbe."
        url="https://www.eritageentcare.com/locations/entebbe"
        canonical="https://www.eritageentcare.com/locations/entebbe"
        image="https://www.eritageentcare.com/clinic.jpg"
        schema={schema}
      />

      <Header />

      <main className="px-4 md:px-12 lg:px-24 py-8">
        <h1 className="text-3xl font-bold text-center">
          Welcome to Eritage ENT Care – Entebbe
        </h1>

        <p className="mt-4 text-center text-lg text-gray-700 dark:text-gray-300">
          Your trusted ENT specialists in Uganda, providing expert 24/7 care
          for ear, nose, throat, sinus, allergy, and hearing disorders across
          the country.
        </p>

        {/* Gallery Section */}
        <Gallery />

        {/* Urgent care CTA */}
        <div className="mt-12 text-center">
          <a
            href="https://wa.me/256740166778"
            className="bg-green-600 text-white px-6 py-3 rounded-lg text-lg font-semibold"
          >
            Book Urgent ENT Care
          </a>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default App;
