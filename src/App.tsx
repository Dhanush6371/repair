import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import RepairBooking from './components/RepairBooking';

function App() {
  const [showBooking, setShowBooking] = useState(false);

  if (showBooking) {
    return (
      <div className="min-h-screen">
        <Header />
        <RepairBooking />
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;