import Spline from '@splinetool/react-spline';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] overflow-hidden bg-black text-white">
      {/* Background Beams */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-20 -left-20 h-[60rem] w-[60rem] bg-gradient-to-br from-blue-600/30 via-cyan-400/20 to-transparent rounded-full blur-3xl" />
        <div className="absolute top-40 -right-40 h-[50rem] w-[50rem] bg-gradient-to-br from-violet-600/30 via-fuchsia-400/20 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs md:text-sm text-white/80 ring-1 ring-white/15 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            ISO-certified Card Manufacturing
          </span>
          <h1 className="mt-6 text-4xl md:text-6xl font-semibold leading-tight tracking-tight">
            Premium ATM & Bank Cards with a modern, glass-morphic finish
          </h1>
          <p className="mt-5 text-white/80 max-w-xl">
            We design and manufacture high-security EMV, contactless and metal cards for banks and fintechs. From concept to production—done in weeks, not months.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#contact" className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-violet-600 px-5 py-3 text-white shadow-lg shadow-violet-500/25 hover:from-blue-500 hover:to-violet-500 transition">
              Get a quote <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#features" className="inline-flex items-center justify-center rounded-lg px-5 py-3 ring-1 ring-white/20 text-white/90 hover:text-white hover:ring-white/40 transition">
              Explore features
            </a>
          </div>
        </div>
      </div>

      {/* Glass overlay to ensure readability, does not block 3D */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
    </section>
  );
}
