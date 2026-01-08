"use client";

import Image from "next/image";

export default function PlanetCard({ title, subtitle, image, delay }) {
  return (
    <div
      className="relative group cursor-pointer"
      style={{ animationDelay: delay }}
    >
      {/* Glow */}
      <div className="absolute inset-0 rounded-full blur-2xl opacity-40 group-hover:opacity-70 transition bg-purple-500/40"></div>

      {/* Planet */}
      <div className="relative w-56 h-56 rounded-full overflow-hidden animate-float">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Text */}
      <div className="mt-6 text-center">
        <h3 className="text-xl font-semibold tracking-wide">
          {title}
        </h3>
        <p className="text-sm text-white/60 mt-1">
          {subtitle}
        </p>
      </div>
    </div>
  );
}
