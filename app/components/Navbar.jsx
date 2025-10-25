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
      <div className={`${newwake.className} fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-black backdrop-blur-md flex items-center justify-center p-2 rounded-2xl shadow-[0_0_30px_rgba(255,255,255,0.1)] border border-white/20`}>
        <ul className="flex gap-1 md:gap-2">
          {Links.map((link) => (
            <li
              className="text-white text-xs font-medium px-2 py-1 cursor-pointer hover:bg-white hover:text-black hover:rounded-xl transition-all duration-300 hover:scale-105 whitespace-nowrap"
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
