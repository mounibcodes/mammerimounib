'use client';

import React from 'react';
import { newwake } from '../fonts';
import { motion } from 'framer-motion';

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
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1 }}
        className={`${newwake.className} fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-black flex items-center justify-center p-2 border-2 border-white z-50 shadow-[0_0_40px_rgba(255,255,255,0.2)]`}
      >
        <ul className="flex gap-1 md:gap-2">
          {Links.map((link, index) => (
            <motion.li
              key={link.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 1.2 + index * 0.1 }}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="text-white text-xs md:text-sm font-medium px-3 md:px-4 py-2 cursor-pointer hover:bg-white hover:text-black transition-all duration-300 whitespace-nowrap border-2 border-transparent hover:border-white"
              onMouseDown={(e) => e.preventDefault()}
              onTouchStart={(e) => e.preventDefault()}
              onClick={() => scrollToSection(link.href)}
            >
              {link.name}
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </nav>
  );
}
