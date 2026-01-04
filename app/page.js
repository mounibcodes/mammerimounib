'use client';

import Navbar from "./components/Navbar";
import { newwake } from './fonts';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  return (
    <>
      <div ref={containerRef} className="min-h-screen bg-black relative overflow-hidden">
        {/* Grid background pattern */}
        <div className="fixed inset-0 bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-[0.1]" />
        
        {/* Hero Section */}
        <section className="pt-32 pb-24 px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-12 gap-4">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                style={{ opacity, scale }}
                className="col-span-12 md:col-span-8 md:col-start-3 text-center"
              >
                <h1 className={`${newwake.className} font-black text-7xl md:text-8xl mb-6 text-white`}>
                  MOUNIB MAMMERI
                </h1>
                <h2 className={`${newwake.className} text-2xl md:text-4xl font-bold mb-6 text-white`}>
                  WEB DEVELOPER / WEB DESIGNER
                </h2>
                <p className={`${newwake.className} text-lg md:text-xl text-white/70 mb-16 max-w-3xl mx-auto leading-relaxed`}>
                  IN 2025 YOU DON&apos;T NEED JUST A WEBSITE, YOU NEED A DIGITAL IDENTITY, AND THAT&apos;S EXACTLY WHAT MOUNIB DOES!
                </p>
              </motion.div>
            </div>
            
            {/* Social Links */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 max-w-4xl mx-auto"
            >
              <motion.a 
                href="https://linkedin.com/in/mounib-mammeri" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className={`${newwake.className} bg-white text-black px-6 py-4 border-2 border-white text-sm md:text-base font-bold text-center hover:bg-black hover:text-white transition-colors`}
              >
                LINKEDIN
              </motion.a>
              <motion.a 
                href="mailto:mounibcodes@gmail.com"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className={`${newwake.className} bg-white text-black px-6 py-4 border-2 border-white text-sm md:text-base font-bold text-center hover:bg-black hover:text-white transition-colors`}
              >
                EMAIL
              </motion.a>
              <motion.a 
                href="https://github.com/mounibcodes" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className={`${newwake.className} bg-white text-black px-6 py-4 border-2 border-white text-sm md:text-base font-bold text-center hover:bg-black hover:text-white transition-colors`}
              >
                GITHUB
              </motion.a>
              <motion.a 
                href="https://x.com/pg_mouu" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className={`${newwake.className} bg-white text-black px-6 py-4 border-2 border-white text-sm md:text-base font-bold text-center hover:bg-black hover:text-white transition-colors`}
              >
                X
              </motion.a>
            </motion.div>

            {/* Contact Info */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ scale: 1.01 }}
              className="grid grid-cols-12 gap-4 max-w-4xl mx-auto border-2 border-white p-8 md:p-10 shadow-[0_0_30px_rgba(255,255,255,0.1)]"
            >
              <div className="col-span-12 md:col-span-4 border-r-0 md:border-r-2 border-white pr-0 md:pr-8">
                <h3 className={`${newwake.className} text-2xl md:text-3xl font-bold mb-8 text-white`}>
                  GET IN TOUCH
                </h3>
              </div>
              <div className="col-span-12 md:col-span-8 space-y-5">
                <motion.p 
                  whileHover={{ x: 5 }}
                  className={`${newwake.className} text-base md:text-lg text-white flex items-center gap-3`}
                >
                  <span className="text-2xl">📧</span> EMAIL: MOUNIBCODES@GMAIL.COM
                </motion.p>
                <motion.p 
                  whileHover={{ x: 5 }}
                  className={`${newwake.className} text-base md:text-lg text-white flex items-center gap-3`}
                >
                  <span className="text-2xl">📱</span> PHONE: +213 668 313 256 
                </motion.p>
                <motion.p 
                  whileHover={{ x: 5 }}
                  className={`${newwake.className} text-base md:text-lg text-white flex items-center gap-3`}
                >
                  <span className="text-2xl">📍</span> LOCATION: ALGERIA
                </motion.p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 px-8 relative z-10 bg-black">
          <div className="max-w-7xl mx-auto">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className={`${newwake.className} text-4xl md:text-5xl font-bold text-center mb-16 text-white`}
            >
              ABOUT MOUNIB MAMMERI
            </motion.h2>
            <div className="grid grid-cols-12 gap-4 mb-8">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: 0.2 }}
                whileHover={{ scale: 1.01 }}
                className="col-span-12 md:col-span-6 border-2 border-white p-8 shadow-[0_0_30px_rgba(255,255,255,0.1)]"
              >
                <h3 className={`${newwake.className} text-2xl font-bold mb-4 text-white`}>
                  WHO I AM
                </h3>
                <p className={`${newwake.className} text-white/70 leading-relaxed`}>
                  FRONTEND-FOCUSED SOFTWARE DEVELOPER AND ENGINEERING STUDENT SKILLED IN REACT, NEXT.JS, AND MODERN WEB DESIGN. I BUILD MULTIPLE RESPONSIVE AND ANIMATED WEBSITES WITH PERFORMANCE OPTIMIZATION AND CLEAN UX/UI PRINCIPLES.
                </p>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: 0.2 }}
                whileHover={{ scale: 1.01 }}
                className="col-span-12 md:col-span-6 border-2 border-white p-8 shadow-[0_0_30px_rgba(255,255,255,0.1)]"
              >
                <h3 className={`${newwake.className} text-2xl font-bold mb-4 text-white`}>
                  EDUCATION
                </h3>
                <p className={`${newwake.className} text-white/70 leading-relaxed`}>
                  MASTER&apos;S OF ENGINEERING AT ÉCOLE NATIONALE SUPÉRIEURE DE TECHNOLOGIE AVANCÉE (ENSTA), ALGIERS, ALGERIA. EXPECTED GRADUATION: 2029
                </p>
              </motion.div>
            </div>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ scale: 1.01 }}
              className="grid grid-cols-12 gap-4 border-2 border-white p-8 shadow-[0_0_30px_rgba(255,255,255,0.1)]"
            >
              <div className="col-span-12">
                <h3 className={`${newwake.className} text-2xl font-bold mb-4 text-white text-center`}>
                  MY MISSION
                </h3>
                <p className={`${newwake.className} text-lg text-center text-white/70 leading-relaxed`}>
                  IN 2025 YOU DON&apos;T NEED JUST A WEBSITE, YOU NEED A DIGITAL IDENTITY, AND THAT&apos;S EXACTLY WHAT MOUNIB DOES! I&apos;M EAGER TO JOIN A DYNAMIC TEAM OR INTERNSHIP TO APPLY SKILLS IN REAL-WORLD PROJECTS AND CONTINUE GROWING AS A DEVELOPER.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-24 px-8 relative z-10 bg-black">
          <div className="max-w-7xl mx-auto">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className={`${newwake.className} text-4xl md:text-5xl font-bold text-center mb-20 text-white`}
            >
              WHAT I CAN DO FOR YOU
            </motion.h2>
            <div className="grid grid-cols-12 gap-4">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="col-span-12 md:col-span-4 border-2 border-white p-8 shadow-[0_0_30px_rgba(255,255,255,0.1)]"
              >
                <h3 className={`${newwake.className} text-2xl font-bold mb-4 text-white`}>
                  WEB DEVELOPMENT
                </h3>
                <p className={`${newwake.className} text-white/70`}>
                  CUSTOM WEBSITES THAT CONVERT VISITORS INTO CUSTOMERS
                </p>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: 0.2 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="col-span-12 md:col-span-4 border-2 border-white p-8 shadow-[0_0_30px_rgba(255,255,255,0.1)]"
              >
                <h3 className={`${newwake.className} text-2xl font-bold mb-4 text-white`}>
                  WEB DESIGN
                </h3>
                <p className={`${newwake.className} text-white/70`}>
                  BEAUTIFUL DESIGNS THAT MAKE YOUR BRAND STAND OUT
                </p>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: 0.3 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="col-span-12 md:col-span-4 border-2 border-white p-8 shadow-[0_0_30px_rgba(255,255,255,0.1)]"
              >
                <h3 className={`${newwake.className} text-2xl font-bold mb-4 text-white`}>
                  DIGITAL IDENTITY
                </h3>
                <p className={`${newwake.className} text-white/70`}>
                  COMPLETE DIGITAL PRESENCE THAT BUILDS TRUST
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" className="py-24 px-8 relative z-10 bg-black">
          <div className="max-w-7xl mx-auto">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className={`${newwake.className} text-4xl md:text-5xl font-bold text-center mb-20 text-white`}
            >
              MY RECENT WORK
            </motion.h2>
            <div className="grid grid-cols-12 gap-4">
              {/* Coached by Kareem Website */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="col-span-12 md:col-span-6 border-2 border-white p-6 shadow-[0_0_30px_rgba(255,255,255,0.1)]"
              >
                <motion.a 
                  href="https://coachedbykareem.vercel.app" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  className="block"
                >
                  <div className="h-48 mb-4 overflow-hidden cursor-pointer border-2 border-white shadow-[0_0_20px_rgba(255,255,255,0.15)]">
                    <Image 
                      src="/Coach Karrem Your Number One Coaching Online - Brave 12_24_2025 8_29_56 PM.png" 
                      alt="Coached by Kareem Website Project" 
                      width={400}
                      height={192}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    <div className="bg-white h-full flex items-center justify-center" style={{display: 'none'}}>
                      <span className={`${newwake.className} text-black text-2xl font-bold`}>COACHED BY KAREEM</span>
                    </div>
                  </div>
                </motion.a>
                <h3 className={`${newwake.className} text-xl font-bold mb-3 text-white`}>
                  COACHED BY KAREEM WEBSITE
                </h3>
                <p className={`${newwake.className} text-white/70 mb-4 leading-relaxed`}>
                  DESIGNED AND DEVELOPED A PRODUCTION-READY WEBSITE FOR A COACHING BRAND WITH A MOBILE-FIRST APPROACH, CLEAN UI/UX, AND PERFORMANCE OPTIMIZATION TO ENHANCE ONLINE PRESENCE.
                </p>
                <div className="flex gap-2 flex-wrap">
                  <span className={`${newwake.className} bg-white text-black px-3 py-1 text-sm border-2 border-white`}>
                    NEXT.JS
                  </span>
                  <span className={`${newwake.className} bg-white text-black px-3 py-1 text-sm border-2 border-white`}>
                    TAILWIND CSS
                  </span>
                </div>
              </motion.div>

              {/* Audax Club Website */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: 0.2 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="col-span-12 md:col-span-6 border-2 border-white p-6 shadow-[0_0_30px_rgba(255,255,255,0.1)]"
              >
                <motion.a 
                  href="https://audaxclub.vercel.app" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  className="block"
                >
                  <div className="h-48 mb-4 overflow-hidden cursor-pointer border-2 border-white shadow-[0_0_20px_rgba(255,255,255,0.15)]">
                    <Image 
                      src="/audax.png" 
                      alt="Audax Club Website Project" 
                      width={400}
                      height={192}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    <div className="bg-white h-full flex items-center justify-center" style={{display: 'none'}}>
                      <span className={`${newwake.className} text-black text-2xl font-bold`}>AUDAX CLUB</span>
                    </div>
                  </div>
                </motion.a>
                <h3 className={`${newwake.className} text-xl font-bold mb-3 text-white`}>
                  AUDAX CLUB WEBSITE
                </h3>
                <p className={`${newwake.className} text-white/70 mb-4 leading-relaxed`}>
                  DEVELOPED A DYNAMIC UNIVERSITY CLUB WEBSITE WITH GSAP ANIMATIONS, SCROLL-TRIGGERED EFFECTS, AND A FULLY RESPONSIVE LAYOUT TO INCREASE USER ENGAGEMENT.
                </p>
                <div className="flex gap-2 flex-wrap">
                  <span className={`${newwake.className} bg-white text-black px-3 py-1 text-sm border-2 border-white`}>
                    NEXT.JS
                  </span>
                  <span className={`${newwake.className} bg-white text-black px-3 py-1 text-sm border-2 border-white`}>
                    TAILWIND
                  </span>
                  <span className={`${newwake.className} bg-white text-black px-3 py-1 text-sm border-2 border-white`}>
                    GSAP
                  </span>
                </div>
              </motion.div>

              {/* Zemzem Travel Agency Website */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: 0.3 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="col-span-12 md:col-span-6 border-2 border-white p-6 shadow-[0_0_30px_rgba(255,255,255,0.1)]"
              >
                <motion.a 
                  href="https://zemzemtravel.vercel.app" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  className="block"
                >
                  <div className="h-48 mb-4 overflow-hidden cursor-pointer border-2 border-white shadow-[0_0_20px_rgba(255,255,255,0.15)]">
                    <Image 
                      src="/Zemzem Tourisme & Voyage - Agence de Voyage et Tourisme - Brave 12_26_2025 9_42_54 PM.png" 
                      alt="Zemzem Travel Agency Website Project" 
                      width={400}
                      height={192}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    <div className="bg-white h-full flex items-center justify-center" style={{display: 'none'}}>
                      <span className={`${newwake.className} text-black text-2xl font-bold`}>ZEMZEM TRAVEL</span>
                    </div>
                  </div>
                </motion.a>
                <h3 className={`${newwake.className} text-xl font-bold mb-3 text-white`}>
                  ZEMZEM TRAVEL AGENCY WEBSITE
                </h3>
                <p className={`${newwake.className} text-white/70 mb-4 leading-relaxed`}>
                  BUILT A MODERN TRAVEL AGENCY WEBSITE FEATURING ANIMATED TRANSITIONS, OPTIMIZED ROUTING, AND A CLEAN UI SHOWCASING DESTINATIONS AND SERVICES.
                </p>
                <div className="flex gap-2 flex-wrap">
                  <span className={`${newwake.className} bg-white text-black px-3 py-1 text-sm border-2 border-white`}>
                    NEXT.JS
                  </span>
                  <span className={`${newwake.className} bg-white text-black px-3 py-1 text-sm border-2 border-white`}>
                    TAILWIND
                  </span>
                  <span className={`${newwake.className} bg-white text-black px-3 py-1 text-sm border-2 border-white`}>
                    FRAMER MOTION
                  </span>
                </div>
              </motion.div>

              {/* Digital Agency Website */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: 0.4 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="col-span-12 md:col-span-6 border-2 border-white p-6 shadow-[0_0_30px_rgba(255,255,255,0.1)]"
              >
                <motion.a 
                  href="https://mounibcodes.vercel.app" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  className="block"
                >
                  <div className="h-48 mb-4 overflow-hidden cursor-pointer border-2 border-white shadow-[0_0_20px_rgba(255,255,255,0.15)]">
                    <Image 
                      src="/nextgen.png" 
                      alt="Digital Agency Website Project" 
                      width={400}
                      height={192}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    <div className="bg-white h-full flex items-center justify-center" style={{display: 'none'}}>
                      <span className={`${newwake.className} text-black text-2xl font-bold`}>DIGITAL AGENCY</span>
                    </div>
                  </div>
                </motion.a>
                <h3 className={`${newwake.className} text-xl font-bold mb-3 text-white`}>
                  DIGITAL AGENCY WEBSITE
                </h3>
                <p className={`${newwake.className} text-white/70 mb-4 leading-relaxed`}>
                  DESIGNED AND BUILT A RESPONSIVE AGENCY WEBSITE HIGHLIGHTING SERVICES AND PORTFOLIO WITH SMOOTH SCROLLING AND STRONG VISUAL HIERARCHY.
                </p>
                <div className="flex gap-2 flex-wrap">
                  <span className={`${newwake.className} bg-white text-black px-3 py-1 text-sm border-2 border-white`}>
                    HTML
                  </span>
                  <span className={`${newwake.className} bg-white text-black px-3 py-1 text-sm border-2 border-white`}>
                    CSS
                  </span>
                  <span className={`${newwake.className} bg-white text-black px-3 py-1 text-sm border-2 border-white`}>
                    JAVASCRIPT
                  </span>
                </div>
              </motion.div>
          


            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-24 px-8 relative z-10 bg-black">
          <div className="max-w-7xl mx-auto">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className={`${newwake.className} text-4xl md:text-5xl font-bold text-center mb-20 text-white`}
            >
              WHAT PEOPLE SAY ABOUT ME
            </motion.h2>
            <div className="grid grid-cols-12 gap-4">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="col-span-12 md:col-span-6 border-2 border-white p-8 shadow-[0_0_30px_rgba(255,255,255,0.1)]"
              >
                <p className={`${newwake.className} text-xl text-white italic text-center mb-4`}>
                  &ldquo;MOUNIB TRANSFORMED OUR ONLINE PRESENCE COMPLETELY!&rdquo;
                </p>
                <p className={`${newwake.className} text-center text-white/70`}>
                  - SATISFIED CLIENT
                </p>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: 0.2 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="col-span-12 md:col-span-6 border-2 border-white p-8 shadow-[0_0_30px_rgba(255,255,255,0.1)]"
              >
                <p className={`${newwake.className} text-xl text-white italic text-center mb-4`}>
                  &ldquo;THE BEST WEB DEVELOPER I&apos;VE EVER WORKED WITH!&rdquo;
                </p>
                <p className={`${newwake.className} text-center text-white/70`}>
                  - HAPPY CUSTOMER
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="contact" className="py-24 px-8 relative z-10 bg-black">
          <div className="max-w-7xl mx-auto text-center">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className={`${newwake.className} text-4xl md:text-5xl font-bold mb-8 text-white`}
            >
              READY TO START YOUR PROJECT?
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className={`${newwake.className} text-xl text-white/70 mb-12`}
            >
              LET&apos;S CREATE SOMETHING AMAZING TOGETHER
            </motion.p>
            <motion.a 
              href="https://wa.me/213668313256" 
              target="_blank" 
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className={`${newwake.className} bg-white text-black px-10 py-5 border-2 border-white text-lg font-bold inline-block hover:bg-black hover:text-white transition-colors shadow-[0_0_40px_rgba(255,255,255,0.2)] hover:shadow-[0_0_50px_rgba(255,255,255,0.3)]`}
            >
              CALL ME RIGHT NOW
            </motion.a>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 px-8 bg-black border-t-2 border-white relative z-10">
          <div className="max-w-7xl mx-auto text-center">
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`${newwake.className} text-lg text-white/70`}
            >
              © 2025 MOUNIB MAMMERI - WEB DEV / WEB DESIGNER
            </motion.p>
          </div>
        </footer>

        <Navbar />
      </div>
    </>
  );
}
