import { Cpu, Radio, Fingerprint, ShieldCheck, Sparkles, Layers } from "lucide-react";

const items = [
  {
    icon: Cpu,
    title: "EMV & NFC Ready",
    desc: "Certified chips and dual-interface antennas for seamless tap and insert payments.",
  },
  {
    icon: Fingerprint,
    title: "Advanced Security",
    desc: "Holograms, CVV printing, UV inks, hot-stamping and laser engraving options.",
  },
  {
    icon: Layers,
    title: "Premium Materials",
    desc: "PVC, PETG and brushed metal cores with durable scratch-resistant overlays.",
  },
  {
    icon: ShieldCheck,
    title: "Compliance First",
    desc: "PCI, ISO/IEC 7810 and 7816 compliant processes with full QC traceability.",
  },
  {
    icon: Radio,
    title: "Fast Turnarounds",
    desc: "Rapid prototyping and batch runs delivered in as little as 2 weeks.",
  },
  {
    icon: Sparkles,
    title: "Custom Finishes",
    desc: "Glass-morphic, matte, soft-touch, gradient foils, and raised spot UV.",
  },
];

export default function Features() {
  return (
    <section id="features" className="relative bg-gradient-to-b from-black via-slate-950 to-black text-white py-24">
      <div className="pointer-events-none absolute inset-0 opacity-60">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
      </div>
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Engineered for performance and trust</h2>
          <p className="mt-3 text-white/70">Every card is built in certified facilities with end‑to‑end quality control, so you can launch with confidence.</p>
        </div>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="relative rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur hover:bg-white/[0.06] transition group">
              <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-blue-500/0 via-violet-500/0 to-fuchsia-500/0 opacity-0 group-hover:opacity-20 blur-lg" />
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-blue-600 to-violet-600 grid place-items-center">
                  <Icon className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-lg font-medium">{title}</h3>
              </div>
              <p className="mt-3 text-white/70">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
