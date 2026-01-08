import Image from "next/image";

export default function Venue() {
  return (
    <section
      id="venue"
      className="relative w-full py-40 px-6 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0b0f2a] to-black" />

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

        {/* Earth Image */}
        <div className="relative flex justify-center">
          <div className="relative w-[320px] md:w-[420px] aspect-square">
            <Image
              src="/ui/earth-venue.png"
              alt="Venue Location Earth View"
              fill
              className="object-contain drop-shadow-[0_0_60px_rgba(168,85,247,0.35)]"
              priority
            />

            {/* Glowing Pin */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                <div className="w-6 h-6 rounded-full bg-purple-500 animate-ping absolute" />
                <div className="w-6 h-6 rounded-full bg-purple-500 shadow-[0_0_30px_rgba(168,85,247,0.9)] relative z-10" />
              </div>
            </div>
          </div>
        </div>

        {/* Venue Info */}
        <div className="text-center lg:text-left">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Venue
          </h2>

          <p className="mt-6 text-white/70 text-lg max-w-xl">
            The mission unfolds at our home base — where ideas launch,
            code accelerates, and innovation lands.
          </p>

          <div className="mt-10 space-y-4 text-white/80">
            <p>
              📍 <span className="font-semibold">College Name</span>
            </p>
            <p>
              🏫 Main Auditorium & Innovation Labs
            </p>
            <p>
              🗓️ <span className="font-semibold">Date:</span> DD–DD Month, 2026
            </p>
          </div>

          {/* Map Button */}
          <div className="mt-10">
            <a
              href="https://maps.google.com"
              target="_blank"
              className="inline-block px-8 py-3 rounded-xl bg-white/10 border border-white/20 backdrop-blur-md hover:bg-white/20 transition"
            >
              View on Google Maps
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
