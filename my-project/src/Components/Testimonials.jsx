
// import React from 'react';

// const testimonials = [
//   {
//     name: 'Mata Ridley',
//     title: 'Customer',
//     feedback: 'I would recommend grimo farmers at this rate to everyone! They are great to work with and are excellent farmers. Thank you all!',
//     image: '/images/customer1.jpg', // Replace with your actual image path
//   },
//   {
//     name: 'Lamus Greed',
//     title: 'Customer',
//     feedback: 'I would recommend grimo farmers at this rate to everyone! They are great to work with and are excellent farmers. Thank you all!',
//     image: '/images/customer2.jpg',
//   },
//   {
//     name: 'Donald Craig',
//     title: 'Customer',
//     feedback: 'I would recommend grimo farmers at this rate to everyone! They are great to work with and are excellent farmers. Thank you all!',
//     image: '/images/customer3.jpg',
//   },
// ];

// const Testimonials = () => {
//   return (
//     <section className="bg-[#fdfcf6] py-16 px-6">
//       <div className="max-w-6xl mx-auto text-center">
//         <h2 className="text-3xl font-semibold mb-12">What our customers say</h2>

//         <div className="grid md:grid-cols-3 gap-8">
//           {testimonials.map((item, index) => (
//             <div

// key={index}
//               className="bg-white shadow rounded-lg p-6 text-left"
//             >
//               <div className="text-yellow-400 text-xl mb-4">“”</div>
//               <p className="text-gray-600 mb-6">{item.feedback}</p>
//               <div className="flex items-center space-x-4">
//                 <img
//                   src={item.image}
//                   alt={item.name}
//                   className="w-12 h-12 rounded-full object-cover"
//                 />
//                 <div>
//                   <h4 className="font-bold">{item.name}</h4>
//                   <p className="text-sm text-gray-500">{item.title}</p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Arrows Placeholder */}
//         <div className="mt-8 flex justify-center gap-4">
//           <button className="border px-3 py-1 rounded hover:bg-gray-100">‹</button>
//           <button className="border px-3 py-1 rounded hover:bg-gray-100">›</button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Testimonials;


import React from "react";
import { FaStar, FaQuoteRight } from "react-icons/fa";

const testimonials = [
  {
    name: "Martin Bailey",
    role: "SUPERVISOR",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    text: "I would recommend practitioners at this center to everyone! They are great to work with and are excellent trainers. Thank you all!",
  },
  {
    name: "Emma Greed",
    role: "CUSTOMER",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    text: "I would recommend practitioners at this center to everyone! They are great to work with and are excellent trainers. Thank you all!",
  },
  {
    name: "Daniel Craig",
    role: "CO FOUNDER",
    image: "https://randomuser.me/api/portraits/men/14.jpg",
    text: "I would recommend practitioners at this center to everyone! They are great to work with and are excellent trainers. Thank you all!",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-[#f7f6ef] py-16 px-6 md:px-20">
      {/* Heading */}
      <div className="flex justify-between items-center mb-12">
        <div>
          <span className="bg-white text-gray-700 text-sm px-3 py-1 rounded-full border"># Testimonial</span>
          <h2 className="text-3xl font-bold text-gray-800 mt-4">What our customers say</h2>
        </div>

        {/* Arrows */}
        <div className="flex gap-2">
          <button className="w-9 h-9 flex items-center justify-center border rounded hover:bg-gray-100">&lt;</button>
          <button className="w-9 h-9 flex items-center justify-center border rounded hover:bg-gray-100">&gt;</button>
        </div>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((t, idx) => (
          <div key={idx} className="bg-white rounded-2xl p-8 shadow-sm relative">
            {/* Stars */}
            <div className="flex text-yellow-400 mb-4">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>

            {/* Quote */}
            <FaQuoteRight className="absolute top-6 right-6 text-yellow-500 text-3xl" />

            {/* Text */}
            <p className="text-gray-600 text-sm leading-relaxed mb-6">{t.text}</p>

            {/* Author */}
            <div className="flex items-center gap-3">
              <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full object-cover" />
              <div>
                <h4 className="font-semibold text-gray-800">{t.name}</h4>
                <p className="text-xs text-gray-500">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
