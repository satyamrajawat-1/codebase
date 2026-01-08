'use client';

export default function Hero() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/assets/images/hero-bg.webp')",
        }}
      />

      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-black/80 via-black/60 to-black/90" />

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full px-4">
        <div className="text-center max-w-3xl">
          {/* Title */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight drop-shadow-[0_0_30px_rgba(155,92,255,0.35)]">
            Hack The Chain 4.0
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-gray-200 mb-10 leading-relaxed">
            A 48-hour interstellar hackathon where innovation, code, and creativity collide.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* Primary CTA */}
            <button
              data-scroll-to="register"
              aria-label="Register for the hackathon"
              className="px-8 py-3 bg-purple-600 text-white font-semibold rounded-lg transition-all duration-300
                         hover:bg-purple-700 hover:shadow-[0_0_25px_rgba(155,92,255,0.6)]"
            >
              Register Now
            </button>

            {/* Secondary CTA */}
            <button
              data-scroll-to="tracks"
              aria-label="View hackathon tracks"
              className="px-8 py-3 border-2 border-purple-600 text-purple-400 font-semibold rounded-lg transition-all duration-300
                         hover:text-white hover:bg-purple-600/10 hover:shadow-[0_0_20px_rgba(155,92,255,0.5)]"
            >
              View Tracks
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
