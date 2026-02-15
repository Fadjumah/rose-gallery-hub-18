import React from "react";

// Sample images: replace with your actual assets in src/assets or public folder
const images = [
  "/assets/gallery1.jpg",
  "/assets/gallery2.jpg",
  "/assets/gallery3.jpg",
  "/assets/gallery4.jpg",
  "/assets/gallery5.jpg",
  "/assets/gallery6.jpg",
];

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
