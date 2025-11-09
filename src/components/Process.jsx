import { CheckCircle2, Cog, Package, Truck } from "lucide-react";

const steps = [
  {
    icon: Cog,
    title: "Design & Spec",
    desc: "Collaborate on materials, chipsets, finishes and brand textures. Receive 3D renders and proofs.",
  },
  {
    icon: Package,
    title: "Prototype",
    desc: "We produce pilot cards for testing: embossing, encoding, antenna performance, and durability.",
  },
  {
    icon: CheckCircle2,
    title: "Certification",
    desc: "Optional scheme certification and compliance audits to meet regional and partner standards.",
  },
  {
    icon: Truck,
    title: "Production & Fulfillment",
    desc: "Scaled runs with secure packaging, personalization, and global logistics handled end‑to‑end.",
  },
];

export default function Process() {
  return (
    <section id="process" className="relative bg-black text-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">From concept to card in four steps</h2>
          <p className="mt-3 text-white/70">A streamlined, secure pipeline to move from idea to cards-in-hand—fast.</p>
        </div>
        <ol className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {steps.map(({ icon: Icon, title, desc }, idx) => (
            <li key={title} className="relative rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur">
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 shrink-0 rounded-xl bg-gradient-to-br from-blue-600 to-violet-600 grid place-items-center">
                  <Icon className="h-5 w-5 text-white" />
                </div>
                <div>
                  <div className="flex items-center gap-3">
                    <span className="text-sm text-white/50">Step {idx + 1}</span>
                    <h3 className="text-lg font-medium">{title}</h3>
                  </div>
                  <p className="mt-2 text-white/70">{desc}</p>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
