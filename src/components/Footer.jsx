import React from "react";

export default function Footer() {
  return (
    <footer className="bg-blue-600 text-white py-6 text-center">
      <p>© {new Date().getFullYear()} Trupti Ghenand. All rights reserved.</p>
    </footer>
  );
}