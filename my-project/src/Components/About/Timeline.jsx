import React from "react";

export default function HistorySection() {
  const timeline = [
    {
      year: "1987",
      title: "Open my Farm",
      desc: "Corrupti ut consequatur magni minus! Iusto eos consectetur similique minus culpa odio temporibus.",
    },
    {
      year: "1995",
      title: "Farm Remodelacion",
      desc: "Majority have suffered alteration in some form by injected humor culpa odio temporibus.",
    },
    {
      year: "2000",
      title: "Grainfarmers Formed",
      desc: "Always parties but trying she shewing of moment minus Velit ratione hic corporis veritatis odit.",
    },
    {
      year: "1910",
      title: "Start of Agriculture",
      desc: "Consequatur magni Corrupti ut minus! Iusto eos consectetur similique minus culpa odio temporibus.",
    },
  ];

  return (
    <section className="bg-[#f8f9f3] py-16 px-10 rounded-lg font-poppins">
      {/* Section Label */}
      <div className="inline-flex items-center space-x-2 bg-blue-50 border border-blue-100 text-blue-600 text-xs px-3 py-1 rounded-full mb-4">
        <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
        <span>Our History</span>
      </div>

      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 leading-snug">
            Farming have been since <br /> 1866
          </h2>
        </div>
        <p className="max-w-md text-gray-600 mt-4 md:mt-0">
          There are many variations of passages of Lorem Ipsum available,
          but the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Connecting line */}
        <div className="absolute top-5 left-0 right-0 h-[2px] bg-gray-200"></div>

        {/* Items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 relative z-10">
          {timeline.map((item, index) => (
            <div key={index} className="flex flex-col items-start text-left">
              {/* Year */}
              <div className="flex items-center mb-2">
                <span className="text-4xl font-bold text-gray-400">{item.year}</span>
                <span className="w-2 h-2 bg-green-600 rounded-full ml-2"></span>
              </div>

              {/* Title & Description */}
              <h4 className="font-semibold text-gray-800 mb-1">{item.title}</h4>
              <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
