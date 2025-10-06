import React from "react";

export default function Timeline() {
  const events = [
    {
      year: "1987",
      title: "Open my Farm",
      description: "Corrupti ut consequatur magni minus! Iusto eos consectetur similique minus culpa odio temporibus.",
    },
    {
      year: "1995",
      title: "Farm Remodelacion",
      description: "Majority have suffered alteration in some form by injected humor culpa odio temporibus.",
    },
    {
      year: "2000",
      title: "Grainfarmers Formed",
      description: "Always parties but trying she showing of moment minus Velit ratione hic corporis veritatis odit.",
    },
    {
      year: "1910",
      title: "Start of Agriculture",
      description: "Consequatur magni Corrupti ut minus! Iusto eos consectetur similique minus culpa odio temporibus.",
    },
  ];

  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-6xl mx-auto flex justify-between items-start space-x-4">
        {events.map((event, index) => (
          <div key={index} className="flex-1 text-center">
            <h2 className="text-3xl font-bold text-gray-700">{event.year}</h2>
            <h3 className="mt-2 text-xl font-semibold text-gray-900">{event.title}</h3>
            <p className="mt-1 text-gray-500 text-sm">{event.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
