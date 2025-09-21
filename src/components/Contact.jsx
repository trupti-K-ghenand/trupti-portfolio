import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="bg-white py-16">
      <div className="container mx-auto text-center">
        <h3 className="text-2xl font-bold text-blue-700 mb-6">Contact Me</h3>
        <form className="max-w-md mx-auto space-y-4">
          <input type="text" placeholder="Your Name" className="w-full border p-3 rounded" />
          <input type="email" placeholder="Your Email" className="w-full border p-3 rounded" />
          <textarea placeholder="Your Message" className="w-full border p-3 rounded"></textarea>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}