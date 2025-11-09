import { CreditCard, Shield, Sparkles } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur border-b border-white/10 bg-black/30">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-cyan-500 to-purple-500 grid place-items-center shadow-lg shadow-cyan-500/30">
            <CreditCard className="h-5 w-5 text-white" />
          </div>
          <span className="text-white font-semibold tracking-tight text-lg">BlueBeam Cards</span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm text-white/80">
          <a href="#features" className="hover:text-white transition">Features</a>
          <a href="#process" className="hover:text-white transition">Process</a>
          <a href="#pricing" className="hover:text-white transition">Pricing</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
        </nav>
        <div className="flex items-center gap-3">
          <button className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-white/15 text-white/90 hover:text-white hover:border-white/30 transition">
            <Shield className="h-4 w-4" />Secure Login
          </button>
          <button className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-violet-600 text-white hover:from-blue-500 hover:to-violet-500 transition shadow-lg shadow-violet-500/25">
            <Sparkles className="h-4 w-4" /> Get Started
          </button>
        </div>
      </div>
    </header>
  );
}
