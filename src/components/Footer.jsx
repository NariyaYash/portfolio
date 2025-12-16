import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-purple-700 to-purple-500  text-white py-6">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-3">
        
        {/* Logo / Brand */}
        <h1 className="text-2xl font-bold tracking-wide">
          Yash<span className="text-purple-200">.</span>
        </h1>

        {/* Copyright */}
        <p className="text-sm text-center md:text-left opacity-80">
          © {new Date().getFullYear()} Yash Nariya. All rights reserved.
        </p>

      </div>
    </footer>
  );
}
