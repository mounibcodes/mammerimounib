'use client';

import Navbar from "./components/Navbar";
import { newwake } from './fonts';

export default function Home() {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-8">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className={`${newwake.className} font-black text-6xl mb-8 text-gray-900`}>
              MOUNIB MAMMERI
            </h1>
            <h2 className={`${newwake.className} text-3xl font-bold mb-4 text-gray-700`}>
              WEB DEVELOPER / WEB DESIGNER
            </h2>
            <p className={`${newwake.className} text-xl text-gray-600 mb-12 max-w-3xl mx-auto`}>
              IN 2025 YOU DON'T NEED JUST A WEBSITE, YOU NEED A DIGITAL IDENTITY, AND THAT'S EXACTLY WHAT MOUNIB DOES!
            </p>
            
            {/* Social Links */}
            <div className="flex flex-wrap justify-center gap-3 md:gap-6 mb-12 px-4">
              <a 
                href="https://linkedin.com/in/mounib-mammeri" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`${newwake.className} bg-blue-600 text-white px-4 md:px-6 py-2 md:py-3 rounded-xl md:rounded-2xl text-sm md:text-base font-bold hover:bg-blue-700 transition-colors duration-300 hover:scale-105 transform`}
              >
                LINKEDIN
              </a>
              <a 
                href="mailto:mounibcodes@gmail.com" 
                className={`${newwake.className} bg-gray-900 text-white px-4 md:px-6 py-2 md:py-3 rounded-xl md:rounded-2xl text-sm md:text-base font-bold hover:bg-gray-800 transition-colors duration-300 hover:scale-105 transform`}
              >
                EMAIL
              </a>
              <a 
                href="https://github.com/mounibcodes" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`${newwake.className} bg-gray-800 text-white px-4 md:px-6 py-2 md:py-3 rounded-xl md:rounded-2xl text-sm md:text-base font-bold hover:bg-gray-700 transition-colors duration-300 hover:scale-105 transform`}
              >
                GITHUB
              </a>
              <a 
                href="https://x.com/pg_mouu" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`${newwake.className} bg-blue-400 text-white px-4 md:px-6 py-2 md:py-3 rounded-xl md:rounded-2xl text-sm md:text-base font-bold hover:bg-blue-500 transition-colors duration-300 hover:scale-105 transform`}
              >
                X
              </a>
            </div>

            {/* Contact Info */}
            <div className="bg-white/70 backdrop-blur-sm p-8 rounded-3xl shadow-lg border border-gray-200/50 max-w-2xl mx-auto">
              <h3 className={`${newwake.className} text-2xl font-bold mb-6 text-gray-900`}>
                GET IN TOUCH
              </h3>
              <div className="space-y-4">
                <p className={`${newwake.className} text-lg text-gray-700`}>
                  📧 EMAIL: MOUNIBCODES@GMAIL.COM
                </p>
                <p className={`${newwake.className} text-lg text-gray-700`}>
                  📱 PHONE: +213 552 098 401
                </p>
                <p className={`${newwake.className} text-lg text-gray-700`}>
                  📍 LOCATION: ALGERIA
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 px-8 bg-white/50">
          <div className="max-w-4xl mx-auto">
            <h2 className={`${newwake.className} text-4xl font-bold text-center mb-12 text-gray-900`}>
              ABOUT MOUNIB MAMMERI
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white/70 backdrop-blur-sm p-8 rounded-3xl shadow-lg border border-gray-200/50">
                <h3 className={`${newwake.className} text-2xl font-bold mb-4 text-gray-900`}>
                  WHO I AM
                </h3>
                <p className={`${newwake.className} text-gray-700 leading-relaxed`}>
                  FRONTEND-FOCUSED SOFTWARE DEVELOPER AND ENGINEERING STUDENT SKILLED IN REACT, NEXT.JS, AND MODERN WEB DESIGN. I BUILD MULTIPLE RESPONSIVE AND ANIMATED WEBSITES WITH PERFORMANCE OPTIMIZATION AND CLEAN UX/UI PRINCIPLES.
                </p>
              </div>
              <div className="bg-white/70 backdrop-blur-sm p-8 rounded-3xl shadow-lg border border-gray-200/50">
                <h3 className={`${newwake.className} text-2xl font-bold mb-4 text-gray-900`}>
                  EDUCATION
                </h3>
                <p className={`${newwake.className} text-gray-700 leading-relaxed`}>
                  MASTER'S OF ENGINEERING AT ÉCOLE NATIONALE SUPÉRIEURE DE TECHNOLOGIE AVANCÉE (ENSTA), ALGIERS, ALGERIA. EXPECTED GRADUATION: 2029
                </p>
              </div>
            </div>
            <div className="mt-8 bg-white/70 backdrop-blur-sm p-8 rounded-3xl shadow-lg border border-gray-200/50">
              <h3 className={`${newwake.className} text-2xl font-bold mb-4 text-gray-900 text-center`}>
                MY MISSION
              </h3>
              <p className={`${newwake.className} text-lg text-center text-gray-700 leading-relaxed`}>
                IN 2025 YOU DON'T NEED JUST A WEBSITE, YOU NEED A DIGITAL IDENTITY, AND THAT'S EXACTLY WHAT MOUNIB DOES! I'M EAGER TO JOIN A DYNAMIC TEAM OR INTERNSHIP TO APPLY SKILLS IN REAL-WORLD PROJECTS AND CONTINUE GROWING AS A DEVELOPER.
              </p>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-16 px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className={`${newwake.className} text-4xl font-bold text-center mb-16 text-gray-900`}>
              WHAT I CAN DO FOR YOU
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white/70 backdrop-blur-sm p-8 rounded-3xl shadow-lg border border-gray-200/50">
                <h3 className={`${newwake.className} text-2xl font-bold mb-4 text-gray-900`}>
                  WEB DEVELOPMENT
                </h3>
                <p className={`${newwake.className} text-gray-700`}>
                  CUSTOM WEBSITES THAT CONVERT VISITORS INTO CUSTOMERS
                </p>
              </div>
              <div className="bg-white/70 backdrop-blur-sm p-8 rounded-3xl shadow-lg border border-gray-200/50">
                <h3 className={`${newwake.className} text-2xl font-bold mb-4 text-gray-900`}>
                  WEB DESIGN
                </h3>
                <p className={`${newwake.className} text-gray-700`}>
                  BEAUTIFUL DESIGNS THAT MAKE YOUR BRAND STAND OUT
                </p>
              </div>
              <div className="bg-white/70 backdrop-blur-sm p-8 rounded-3xl shadow-lg border border-gray-200/50">
                <h3 className={`${newwake.className} text-2xl font-bold mb-4 text-gray-900`}>
                  DIGITAL IDENTITY
                </h3>
                <p className={`${newwake.className} text-gray-700`}>
                  COMPLETE DIGITAL PRESENCE THAT BUILDS TRUST
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" className="py-16 px-8 bg-white/50">
          <div className="max-w-6xl mx-auto">
            <h2 className={`${newwake.className} text-4xl font-bold text-center mb-16 text-gray-900`}>
              MY RECENT WORK
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Audax Club Website */}
              <div className="bg-white/70 backdrop-blur-sm p-6 rounded-3xl shadow-lg border border-gray-200/50 hover:shadow-xl transition-shadow duration-300">
                <a 
                  href="https://audaxclub.vercel.app" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block"
                >
                  <div className="h-48 rounded-2xl mb-4 overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-300">
                    <img 
                      src="/audax.png" 
                      alt="Audax Club Website Project" 
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    <div className="bg-gradient-to-br from-orange-500 to-red-600 h-full flex items-center justify-center" style={{display: 'none'}}>
                      <span className={`${newwake.className} text-white text-2xl font-bold`}>AUDAX CLUB</span>
                    </div>
                  </div>
                </a>
                <h3 className={`${newwake.className} text-xl font-bold mb-3 text-gray-900`}>
                  AUDAX CLUB WEBSITE
                </h3>
                <p className={`${newwake.className} text-gray-700 mb-4`}>
                  DEVELOPED A DYNAMIC WEBSITE FOR THE UNIVERSITY'S AUDAX CLUB WITH SMOOTH GSAP ANIMATIONS, SCROLL-TRIGGERED EFFECTS, AND A RESPONSIVE LAYOUT. INCREASED ENGAGEMENT THROUGH FLUID MOTION DESIGN.
                </p>
                <div className="flex gap-2 flex-wrap">
                  <span className={`${newwake.className} bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm`}>
                    NEXT.JS
                  </span>
                  <span className={`${newwake.className} bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm`}>
                    TAILWIND
                  </span>
                  <span className={`${newwake.className} bg-pink-100 text-pink-800 px-3 py-1 rounded-full text-sm`}>
                    GSAP
                  </span>
                </div>
              </div>
              {/* NextGen Digital Agency Website */}
              <div className="bg-white/70 backdrop-blur-sm p-6 rounded-3xl shadow-lg border border-gray-200/50 hover:shadow-xl transition-shadow duration-300">
                <a 
                  href="https://mounibcodes.vercel.app" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block"
                >
                  <div className="h-48 rounded-2xl mb-4 overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-300">
                    <img 
                      src="/nextgen.png" 
                      alt="NextGen Digital Agency Website Project" 
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    <div className="bg-gradient-to-br from-purple-500 to-pink-600 h-full flex items-center justify-center" style={{display: 'none'}}>
                      <span className={`${newwake.className} text-white text-2xl font-bold`}>NEXTGEN</span>
                    </div>
                  </div>
                </a>
                <h3 className={`${newwake.className} text-xl font-bold mb-3 text-gray-900`}>
                  NEXTGEN DIGITAL AGENCY
                </h3>
                <p className={`${newwake.className} text-gray-700 mb-4`}>
                  DESIGNED AND BUILT A RESPONSIVE DIGITAL AGENCY WEBSITE HIGHLIGHTING SERVICES AND PORTFOLIO, WITH SMOOTH SCROLL EFFECTS AND A FOCUS ON CLEAN VISUAL HIERARCHY.
                </p>
                <div className="flex gap-2 flex-wrap">
                  <span className={`${newwake.className} bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm`}>
                    HTML
                  </span>
                  <span className={`${newwake.className} bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm`}>
                    CSS
                  </span>
                  <span className={`${newwake.className} bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm`}>
                    JAVASCRIPT
                  </span>
                </div>
              </div>
              {/* Notion CMS Blog */}
              <div className="bg-white/70 backdrop-blur-sm p-6 rounded-3xl shadow-lg border border-gray-200/50 hover:shadow-xl transition-shadow duration-300">
                
                <div className="h-48 rounded-2xl mb-4 overflow-hidden">
                  <img 
                    src="/notion.jpg" 
                    alt="Notion CMS Blog Project" 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className="bg-gradient-to-br from-blue-500 to-purple-600 h-full flex items-center justify-center" style={{display: 'none'}}>
                    <span className={`${newwake.className} text-white text-2xl font-bold`}>NOTION CMS</span>
                  </div>
                </div>
                <h3 className={`${newwake.className} text-xl font-bold mb-3 text-gray-900`}>
                  NOTION CMS BLOG
                </h3>
                <p className={`${newwake.className} text-gray-700 mb-4`}>
                  DEVELOPED A CMS-POWERED BLOG USING NOTION API WITH DYNAMIC ROUTING, MARKDOWN RENDERING, AND SEO OPTIMIZATION. DEPLOYED ON VERCEL WITH A 95+ LIGHTHOUSE PERFORMANCE SCORE.
                </p>
                <div className="flex gap-2 flex-wrap">
                  <span className={`${newwake.className} bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm`}>
                    NEXT.JS
                  </span>
                  <span className={`${newwake.className} bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm`}>
                    TAILWIND
                  </span>
                  <span className={`${newwake.className} bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm`}>
                    NOTION API
                  </span>
                </div>
              </div>

              {/* Analytics Dashboard */}
              <div className="bg-white/70 backdrop-blur-sm p-6 rounded-3xl shadow-lg border border-gray-200/50 hover:shadow-xl transition-shadow duration-300">
                <a 
                  href="https://vercel-dashboard-mounib.vercel.app/login" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block"
                >
                  <div className="h-48 rounded-2xl mb-4 overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-300">
                    <img 
                      src="/Acme Dashboard - Brave 10_21_2025 10_01_54 PM.png" 
                      alt="Analytics Dashboard Project" 
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    <div className="bg-gradient-to-br from-green-500 to-teal-600 h-full flex items-center justify-center" style={{display: 'none'}}>
                      <span className={`${newwake.className} text-white text-2xl font-bold`}>ANALYTICS</span>
                    </div>
                  </div>
                </a>
                <h3 className={`${newwake.className} text-xl font-bold mb-3 text-gray-900`}>
                  ANALYTICS DASHBOARD
                </h3>
                <p className={`${newwake.className} text-gray-700 mb-4`}>
                  BUILT AN INTERACTIVE DASHBOARD FOR REAL-TIME DATA VISUALIZATION USING CHART.JS AND NEXT.JS, FEATURING REUSABLE COMPONENTS AND API INTEGRATION. IMPROVED PERFORMANCE BY OPTIMIZING RE-RENDERS AND CACHING.
                </p>
                <div className="flex gap-2 flex-wrap">
                  <span className={`${newwake.className} bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm`}>
                    NEXT.JS
                  </span>
                  <span className={`${newwake.className} bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm`}>
                    CHART.JS
                  </span>
                </div>
              </div>


            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-16 px-8 bg-white/50">
          <div className="max-w-4xl mx-auto">
            <h2 className={`${newwake.className} text-4xl font-bold text-center mb-16 text-gray-900`}>
              WHAT PEOPLE SAY ABOUT ME
            </h2>
            <div className="space-y-8">
              <div className="bg-white/70 backdrop-blur-sm p-8 rounded-3xl shadow-lg border border-gray-200/50">
                <p className={`${newwake.className} text-xl text-gray-800 italic text-center mb-4`}>
                  "MOUNIB TRANSFORMED OUR ONLINE PRESENCE COMPLETELY!"
                </p>
                <p className={`${newwake.className} text-center text-gray-600`}>
                  - SATISFIED CLIENT
                </p>
              </div>
              <div className="bg-white/70 backdrop-blur-sm p-8 rounded-3xl shadow-lg border border-gray-200/50">
                <p className={`${newwake.className} text-xl text-gray-800 italic text-center mb-4`}>
                  "THE BEST WEB DEVELOPER I'VE EVER WORKED WITH!"
                </p>
                <p className={`${newwake.className} text-center text-gray-600`}>
                  - HAPPY CUSTOMER
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="contact" className="py-16 px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className={`${newwake.className} text-4xl font-bold mb-8 text-gray-900`}>
              READY TO START YOUR PROJECT?
            </h2>
            <p className={`${newwake.className} text-xl text-gray-700 mb-12`}>
              LET'S CREATE SOMETHING AMAZING TOGETHER
            </p>
            <a 
              href="https://wa.me/213552098401" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`${newwake.className} bg-green-600 text-white px-8 py-4 rounded-2xl text-lg font-bold hover:bg-green-700 transition-colors duration-300 hover:scale-105 transform cursor-pointer inline-block`}
            >
              CALL ME RIGHT NOW
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 px-8 bg-gray-900 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <p className={`${newwake.className} text-lg`}>
              © 2025 MOUNIB MAMMERI - WEB DEV / WEB DESIGNER
            </p>
          </div>
        </footer>

        <Navbar />
      </div>
    </>
  );
}
