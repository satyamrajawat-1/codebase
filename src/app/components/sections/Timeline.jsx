export default function Timeline() {
  const steps = [
    {
      title: "Registrations Open",
      date: "Day 1",
      desc: "Team registrations and idea exploration begins",
    },
    {
      title: "Idea Submission",
      date: "Day 7",
      desc: "Submit problem statement & approach",
    },
    {
      title: "Shortlisting",
      date: "Day 10",
      desc: "Teams selected for final hackathon",
    },
    {
      title: "Hackathon Day",
      date: "Day 15",
      desc: "24-hour on-campus coding sprint",
    },
    {
      title: "Evaluation",
      date: "Day 16",
      desc: "Judging & mentor reviews",
    },
    {
      title: "Results",
      date: "Day 16",
      desc: "Winners announced & closing ceremony",
    },
  ];

  return (
    <section
      id="timeline"
      className="relative w-full py-40 px-6 overflow-hidden"
    >
      {/* Base background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0b0f2a] to-black" />

      {/* HUD Image */}
      <div className="absolute inset-0 opacity-40">
        <img
          src="/ui/timeline-hud.png"
          alt="Mission Timeline HUD"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto">
        
        {/* Heading */}
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Mission Timeline
          </h2>
          <p className="mt-4 text-white/60 max-w-2xl mx-auto">
            From launch to landing — every milestone mapped.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Line */}
          <div className="absolute left-1/2 top-0 h-full w-[2px] bg-gradient-to-b from-purple-400/60 to-cyan-400/60 transform -translate-x-1/2" />

          <div className="space-y-20">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`relative flex ${
                  index % 2 === 0 ? "justify-start" : "justify-end"
                }`}
              >
                {/* Node */}
                <div className="absolute left-1/2 top-3 w-4 h-4 rounded-full bg-purple-400 shadow-[0_0_20px_rgba(168,85,247,0.9)] transform -translate-x-1/2" />

                {/* Card */}
                <div className="w-full md:w-[45%] bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-white/20 transition">
                  <span className="text-xs uppercase tracking-widest text-purple-300">
                    {step.date}
                  </span>
                  <h3 className="text-xl font-semibold mt-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-white/70 mt-2">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
