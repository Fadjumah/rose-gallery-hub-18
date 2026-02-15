import React from "react";

// Import images directly from src/assets
import img1 from "../assets/gallery1.jpg";
import img2 from "../assets/gallery2.jpg";
import img3 from "../assets/gallery3.jpg";
import img4 from "../assets/gallery4.jpg";
import img5 from "../assets/gallery5.jpg";
import img6 from "../assets/gallery6.jpg";

const images = [img1, img2, img3, img4, img5, img6];

const Gallery: React.FC = () => {
  return (
    <section className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {images.map((src, index) => (
        <div key={index} className="overflow-hidden rounded-lg shadow-lg">
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
