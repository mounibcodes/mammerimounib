'use client';

import React from 'react';
import { newwake } from '../fonts';


export default function Navbar() {
  const Links = [
    { name: "ABOUT", id: "about", href: "#about" },
    { name: "SERVICES", id: "services", href: "#services" },
    { name: "WORK", id: "portfolio", href: "#portfolio" },
    { name: "CONTACT", id: "contact", href: "#contact" },
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <nav>
      <div className={`${newwake.className} fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-white/90 backdrop-blur-md flex items-center justify-center p-2 rounded-2xl shadow-xl border border-gray-200/50`}>
        <ul className="flex gap-1 md:gap-2">
          {Links.map((link) => (
            <li
              className="text-gray-700 text-xs font-medium px-2 py-1 cursor-pointer hover:bg-gray-100 hover:text-gray-900 hover:rounded-xl transition-all duration-300 hover:scale-105 whitespace-nowrap"
              key={link.id}
              onClick={() => scrollToSection(link.href)}
            >
              {link.name}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
