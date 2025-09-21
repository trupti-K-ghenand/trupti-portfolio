import React from "react";

export default function Hero() {
  return (
    <section id="hero" className="bg-white text-center py-20">
      <h2 className="text-4xl font-bold text-blue-700">Hi, I’m Trupti 👋</h2>
      <p className="mt-4 text-lg text-gray-600">
        Cybersecurity Enthusiast | Full-Stack Developer | Digital Forensics Learner
      </p>
      <a
        href="#contact"
        className="mt-6 inline-block bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700"
      >
        Get in Touch
      </a>
    </section>
  );
}