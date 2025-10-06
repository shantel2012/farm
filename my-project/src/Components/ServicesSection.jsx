import React from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import "../index.css"; // make sure the .card-shape class is imported
import cv from "../assets/cv.jpg";
import track from "../assets/track.png";
import boy from "../assets/boy.png";

const ServicesSection = () => {
  const services = [
    {
      id: 1,
      title: "Harvest Concepts",
      category: "Category",
      description:
        "Farming and animal husbandry and discuss with farmers and scientists.",
      image:
       cv ,
    },
    {
      id: 2,
      title: "Farming Products",
      category: "Category",
      description:
        "Farming and animal husbandry and discuss with farmers and scientists.",
      image:
        track,
    },
    {
      id: 3,
      title: "Soil Fertilization",
      category: "Category",
      description:
        "Farming and animal husbandry and discuss with farmers and scientists.",
      image:
        boy,
    },
  ];

  return (
    <section className="bg-green-700 px-6 md:px-20 py-16 text-white relative">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-10">
          <div>
            <p className="text-sm font-semibold uppercase bg-white text-green-700 px-3 py-1 rounded-full inline-block mb-3">
              Our Services
            </p>
            <h2 className="text-2xl md:text-3xl font-bold">
              Best Agriculture Services
            </h2>
          </div>

          {/* Navigation Arrows */}
          <div className="flex gap-3">
            <button className="w-9 h-9 flex items-center justify-center border rounded hover:bg-black-100">&lt;</button>
            <button className="w-9 h-9 flex items-center justify-center border rounded hover:bg-black-100">&gt;</button>
          </div>
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white text-gray-800 rounded-2xl shadow-md overflow-hidden relative card-shape"
            >
              {/* Image */}
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-48 object-cover"
              />

              {/* Card Content */}
              <div className="p-5">
                <p className="text-xs uppercase text-gray-500 font-semibold mb-2">
                  {service.category}
                </p>
                <h3 className="text-lg font-bold mb-2">{service.title}</h3>
                <p className="text-sm text-gray-600">{service.description}</p>
              </div>

              {/* Yellow Button */}
              <button className="absolute bottom-4 right-4 bg-yellow-300 w-8 h-8 flex items-center justify-center rounded-full shadow-md hover:bg-yellow-400">
                <ArrowRight size={16} className="text-gray-800" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
