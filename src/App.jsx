import React from 'react';
import Navbar from './components/Navbar';
import WatchChapterNav from './components/WatchChapterNav';
import Series10Hero from './components/Series10Hero';
import Ultra2Hero from './components/Ultra2Hero';
import SEHero from './components/SEHero';
import CompareTable from './components/CompareTable';
import StudioSection from './components/StudioSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* 1. Global Navbar */}
      <Navbar />

      {/* 2. Apple Watch Chapter Navigation (Subnav) */}
      <WatchChapterNav />

      {/* 3. Main Product Showcase */}
      <main className="flex-grow">
        {/* Apple Watch Series 10 */}
        <Series10Hero />

        {/* Apple Watch Ultra 2 */}
        <Ultra2Hero />

        {/* Apple Watch SE */}
        <SEHero />

        {/* Interactive Apple Watch Studio */}
        <StudioSection />

        {/* Direct Comparison Table */}
        <CompareTable />
      </main>

      {/* 4. Apple Global Footer */}
      <Footer />
    </div>
  );
}
