import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Process from './components/Process';
import CTA from './components/CTA';

function Footer() {
  return (
    <footer className="bg-black text-white/70 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm">© {new Date().getFullYear()} BlueBeam Cards. All rights reserved.</p>
        <div className="text-sm flex items-center gap-4">
          <a href="#" className="hover:text-white">Privacy</a>
          <a href="#" className="hover:text-white">Terms</a>
          <a href="#" className="hover:text-white">Security</a>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-black font-sans">
      <Navbar />
      <Hero />
      <Features />
      <Process />
      <CTA />
      <Footer />
    </div>
  );
}
