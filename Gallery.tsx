import React from "react";

// Import all images from src/assets
import gallery1 from "../assets/gallery1.jpg";
import gallery2 from "../assets/gallery2.jpg";
import gallery3 from "../assets/gallery3.jpg";
import gallery4 from "../assets/gallery4.jpg";
import gallery5 from "../assets/gallery5.jpg";
import gallery6 from "../assets/gallery6.jpg";

const images = [gallery1, gallery2, gallery3, gallery4, gallery5, gallery6];

const Gallery: React.FC = () => {
  return (
    <section className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {images.map((src, index) => (
        <div
          key={index}
          className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
        >
          <img
            src={src}
            alt={`Eritage ENT Care image ${index + 1}`}
            className="w-full h-60 object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      ))}
    </section>
  );
};

export default Gallery;
