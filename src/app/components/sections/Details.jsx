import Image from "next/image";
import GlassCard from "@/app/components/ui/GlassCard";

export default function Details() {
  return (
    <section
      id="details"
      className="relative w-full py-36 px-6 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0a0f2c] to-black" />

      {/* subtle hologram texture */}
      <div className="absolute inset-0 opacity-[0.035] bg-[radial-gradient(circle_at_center,white,transparent_65%)]" />

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* SECTION START IMAGE */}
        <div className="flex justify-center mb-20">
          <div className="relative w-[280px] md:w-[360px] aspect-square">
            <Image
              src="/ui/details-panel.png"
              alt="Mission Control Panel"
              fill
              className="object-contain drop-shadow-[0_0_40px_rgba(168,85,247,0.35)]"
              priority
            />
          </div>
        </div>

        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Mission Details
          </h2>
          <p className="mt-4 text-white/60 max-w-2xl mx-auto">
            All operational parameters before launch are listed below.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          
          <GlassCard title="📜 Rules">
            • Original ideas only<br />
            • No plagiarism<br />
            • All code written during the hackathon<br />
            • Track rules must be followed
          </GlassCard>

          <GlassCard title="👥 Team Size">
            • Minimum: 2 members<br />
            • Maximum: 4 members<br />
            • Cross-branch teams allowed
          </GlassCard>

          <GlassCard title="🎓 Eligibility">
            • Open to all college students<br />
            • Any year / department<br />
            • Valid college ID required
          </GlassCard>

          <GlassCard title="🏆 Prizes">
            • Winner: ₹XX,XXX<br />
            • Runner-up: ₹XX,XXX<br />
            • Track & sponsor prizes
          </GlassCard>

          <GlassCard title="🛠️ Tech Stack">
            • Any tech stack allowed<br />
            • Open-source & APIs allowed<br />
            • AI / Web / Blockchain / Cyber friendly
          </GlassCard>

          <GlassCard title="⏱️ Evaluation">
            • Innovation & impact<br />
            • Technical depth<br />
            • UI/UX & presentation<br />
            • Feasibility
          </GlassCard>

        </div>
      </div>
    </section>
  );
}
