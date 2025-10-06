import React from "react";

const timelineData = [
  { year: "1986", text: "Started farming with a small piece of land", color: "text-green-700" },
  { year: "1996", text: "Expanded to multiple crops and dairy", color: "text-gray-300" },
  { year: "2006", text: "Became certified organic farm", color: "text-gray-300" },
  { year: "2020", text: "Leading organic farm in the region", color: "text-gray-300" },
];

export default function Timeline() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-4">
          Farming from been since
          <br />
          1986
        </h2>
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {timelineData.map((item) => (
            <div key={item.year}>
              <div className={`text-5xl font-bold ${item.color} mb-2`}>{item.year}</div>
              <p className="text-gray-600">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
