import { ArrowRight, PhoneCall } from "lucide-react";

export default function CTA() {
  return (
    <section id="contact" className="relative bg-gradient-to-b from-black to-slate-950 text-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 md:p-12 backdrop-blur relative overflow-hidden">
          <div className="pointer-events-none absolute -top-20 -right-10 h-80 w-80 rounded-full bg-gradient-to-br from-blue-600/30 to-violet-600/30 blur-3xl" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-2">
              <h3 className="text-2xl md:text-3xl font-semibold tracking-tight">Ready to mint your next-gen cards?</h3>
              <p className="mt-2 text-white/70 max-w-2xl">Share your volumes, materials and timeline. Our team will get you a precise quote and a realistic schedule within 24 hours.</p>
              <form onSubmit={(e)=>e.preventDefault()} className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
                <input className="rounded-lg bg-black/40 border border-white/10 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-blue-600/50" placeholder="Work email" type="email" required />
                <input className="rounded-lg bg-black/40 border border-white/10 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-blue-600/50" placeholder="Company" type="text" />
                <button className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-violet-600 px-5 py-3 text-white shadow-lg shadow-violet-500/25 hover:from-blue-500 hover:to-violet-500 transition">
                  Request quote <ArrowRight className="h-4 w-4" />
                </button>
              </form>
            </div>
            <div className="md:justify-self-end">
              <div className="rounded-2xl border border-white/10 bg-black/40 p-5">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-blue-600 to-violet-600 grid place-items-center">
                    <PhoneCall className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-white/60">Talk to sales</p>
                    <p className="font-medium">+1 (555) 012-3456</p>
                  </div>
                </div>
                <p className="mt-3 text-sm text-white/60">Mon–Fri, 9am–6pm (EST)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
