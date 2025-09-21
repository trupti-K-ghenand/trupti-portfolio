import React from "react";

const projects = [
  { title: "Cybersecurity Awareness Session", desc: "Conducted a lecture on digital safety.", link: "#" },
  { title: "Forensics Lab Work", desc: "Hands-on with memory & network forensics tools.", link: "#" },
  { title: "Portfolio Website", desc: "This React + Tailwind portfolio project.", link: "#" },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="bg-white py-16">
      <div className="container mx-auto">
        <h3 className="text-2xl font-bold text-blue-700 text-center mb-8">Portfolio</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <div key={i} className="border rounded-lg shadow p-6 hover:shadow-lg transition">
              <h4 className="text-xl font-semibold">{p.title}</h4>
              <p className="text-gray-600 mt-2">{p.desc}</p>
              <a href={p.link} className="text-blue-600 hover:underline mt-3 inline-block">
                View More →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}