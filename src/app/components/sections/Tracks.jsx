import PlanetCard from "@/components/ui/PlanetCard";

export default function Tracks() {
  return (
    <section
      id="tracks"
      className="relative min-h-screen w-full flex flex-col items-center justify-center px-6 py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0b0f2a] to-black" />

      {/* Stars overlay */}
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.1),transparent_70%)]" />

      {/* Heading */}
      <div className="relative z-10 text-center mb-20">
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
          Hackathon Tracks
        </h2>
        <p className="mt-4 text-white/60 max-w-xl mx-auto">
          Choose your planet. Define your mission. Build the future.
        </p>
      </div>

      {/* Planet Grid */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-x-32 gap-y-24">
        <PlanetCard
          title="AI & ML"
          subtitle="Intelligence Beyond Code"
          image="/planets/ai.png"
          delay="0s"
        />

        <PlanetCard
          title="Web & App"
          subtitle="Interfaces of Tomorrow"
          image="/planets/web.png"
          delay="0.2s"
        />

        <PlanetCard
          title="Blockchain"
          subtitle="Trust Without Borders"
          image="/planets/blockchain.png"
          delay="0.4s"
        />

        <PlanetCard
          title="Cyber Security"
          subtitle="Defend the Digital Galaxy"
          image="/planets/cyber.png"
          delay="0.6s"
        />
      </div>
    </section>
  );
}
