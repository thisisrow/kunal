import React from "react";

const testimonials = [
  {
    name: "Zakirhusen Pinjari",
    role: "Manager | Geniusacademy.com",
    img: "/sol1.png",
    badge: "10K+ students taught",
    description: "This Graphy platform is very user friendly and easy to use...",
  },
  {
    name: "Manil",
    role: "Founder | Manil",
    img: "/sol1.png",
    badge: "100+ Instagram followers",
    description: "I want to thank team at Graphy for the amazing support...",
  },
  {
    name: "Rahul Deshmukh",
    role: "Creator | School for Minds",
    img: "/sol1.png",
    badge: "5K+ launches done",
    description: "Graphy helped me reach students in just one click...",
  },
  {
    name: "Sneha Kapoor",
    role: "Educator | LearnHub",
    img: "/sol1.png",
    badge: "1K+ paid users",
    description: "Graphy's tools made it easy to host courses and webinars efficiently.",
  },
];

export default function Cslide() {
  return (
    <div className="overflow-hidden relative bg-white py-20">
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
        Feedback from our creators
      </h2>
      <div className="overflow-hidden">
        <div className="flex gap-6 w-max animate-slide ">
          {testimonials.map((t, i) => (
            <div key={i} className="flex-shrink-0 flex items-start gap-4 px-2 items-end">
              <img src={t.img} alt="User" className="w-50 h-50  object-cover" />
              <div className="min-w-[300px] max-w-[300px] bg-white  border border-indigo-200 shadow p-4 text-sm ">
                <div className="flex items-center gap-3 mb-2">
                  <div>
                    <p className="font-semibold">{t.name}</p>
                    <p className="text-gray-500">{t.role}</p>
                  </div>
                  <span className="ml-auto text-indigo-600 font-semibold text-right text-xs">
                    {t.badge}
                  </span>
                </div>
                <p className="text-gray-600">{t.description}</p>
              </div>
            </div>
          ))}
          {/* Duplicate for seamless loop */}
          {testimonials.map((t, i) => (
            <div key={"duplicate-" + i} className="flex-shrink-0 flex items-start gap-4 px-2">
              <img src={t.img} alt="User" className="w-50 h-50  object-cover" />
              <div className="min-w-[300px] max-w-[300px] bg-white rounded-2xl border border-indigo-200 shadow p-4 text-sm">
                <div className="flex items-center gap-3 mb-2">
                  <div>
                    <p className="font-semibold">{t.name}</p>
                    <p className="text-gray-500">{t.role}</p>
                  </div>
                  <span className="ml-auto text-indigo-600 font-semibold text-right text-xs">
                    {t.badge}
                  </span>
                </div>
                <p className="text-gray-600">{t.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
