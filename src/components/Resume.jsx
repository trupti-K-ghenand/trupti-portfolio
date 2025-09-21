import React from "react";

export default function Resume() {
  return (
    <section id="resume" className="bg-blue-50 py-16">
      <div className="container mx-auto text-center">
        <h3 className="text-2xl font-bold text-blue-700 mb-6">Resume</h3>
        <p className="text-gray-700 mb-4">
          Download my detailed resume showcasing my education, skills, and projects.
        </p>
        <a
          href="/resume.pdf"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700"
        >
          Download Resume
        </a>
      </div>
    </section>
  );
}