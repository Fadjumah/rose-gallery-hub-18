import React from "react";
import clinicBuilding from "../assets/clinic-building.jpg";
import entClinicInterior from "../assets/ent-clinic-interior.jpg";
import entExamination from "../assets/ent-examination.jpg";
import entSpecialist from "../assets/ent-specialist-doctor.jpg";
import entThroatExam from "../assets/ent-throat-exam.jpg";
import heroDoctorPatient from "../assets/hero-doctor-patient.jpg";

const images = [
  clinicBuilding,
  entClinicInterior,
  entExamination,
  entSpecialist,
  entThroatExam,
  heroDoctorPatient,
];

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
