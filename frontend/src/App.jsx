import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Achievements from './components/Achievements';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import ScrollToTop from './components/ScrollToTop';


function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-dark-950 via-dark-900 to-dark-800 text-white overflow-x-hidden">
        {/* Animated background particles */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 via-transparent to-secondary-500/5"></div>
          {[...Array(100)].map((_, i) => (
            <div
              key={i}
              className={`absolute rounded-full ${
                i % 3 === 0 ? 'w-1 h-1 bg-primary-400/40' :
                i % 3 === 1 ? 'w-2 h-2 bg-secondary-400/30' :
                'w-0.5 h-0.5 bg-primary-300/50'
              } animate-pulse`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${2 + Math.random() * 6}s`
              }}
            />
          ))}
          
          {/* Floating geometric shapes */}
          {[...Array(20)].map((_, i) => (
            <div
              key={`shape-${i}`}
              className={`absolute ${
                i % 4 === 0 ? 'w-8 h-8 bg-gradient-to-r from-primary-500/10 to-secondary-500/10 rounded-full' :
                i % 4 === 1 ? 'w-6 h-6 bg-primary-400/5 rotate-45' :
                i % 4 === 2 ? 'w-4 h-4 bg-secondary-400/10 rounded-full' :
                'w-3 h-3 bg-primary-300/15 rotate-12'
              } animate-float`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 10}s`,
                animationDuration: `${8 + Math.random() * 8}s`
              }}
            />
          ))}
        </div>
        
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Achievements />
        <Certificates />
        <Contact />
        <ScrollToTop />

      </div>
    </Router>
  );
}

export default App;