'use client';

export default function About() {
  return (
    <section className="w-full py-20 px-4 bg-black/50">
      <div className="max-w-6xl mx-auto">
        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - Image */}
          <div className="relative h-96 lg:h-full min-h-96">
            {/* Subtle glow accent */}
            <div className="absolute -inset-2 bg-linear-to-r from-purple-500/20 to-transparent rounded-lg blur-xl" />
            
            {/* Image Container */}
            <div className="relative rounded-lg overflow-hidden backdrop-blur-sm border border-purple-500/30">
              <img
                src="/assets/images/mission-base.webp"
                alt="Mission base"
                className="w-full h-full object-cover"
              />
              {/* Subtle glass effect overlay */}
              <div className="absolute inset-0 bg-linear-to-tr from-black/20 via-transparent to-purple-500/10" />
            </div>
          </div>

          {/* Right Side - Text Content */}
          <div className="flex flex-col justify-center">
            {/* Heading */}
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
              The Mission
            </h2>

            {/* Mission Paragraph */}
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              Hack The Chain 4.0 is a 48-hour journey into the future of blockchain technology. 
              We believe that innovation thrives when brilliant minds collaborate. Our mission is to 
              push the boundaries of what's possible on the blockchain, create groundbreaking solutions, 
              and foster a community of developers who dare to dream big.
            </p>

            {/* Subtle accent line */}
            <div className="w-16 h-1 bg-linear-to-r from-purple-600 to-transparent rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
}
