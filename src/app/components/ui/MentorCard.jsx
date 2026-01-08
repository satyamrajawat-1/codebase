import Image from "next/image";

export default function MentorCard({ name, role, photo }) {
  return (
    <div className="relative flex flex-col items-center group">
      
      {/* Helmet */}
      <div className="relative w-72 aspect-square">
        <Image
          src="/ui/helmet.png"
          alt="Astronaut Helmet"
          fill
          className="object-contain z-10"
        />

        {/* Visor photo */}
        <div className="absolute inset-[18%] rounded-full overflow-hidden z-0">
          <Image
            src={photo}
            alt={name}
            fill
            className="object-cover"
          />
        </div>

        {/* Glow */}
        <div className="absolute inset-0 rounded-full blur-2xl opacity-0 group-hover:opacity-60 transition bg-purple-500/40" />
      </div>

      {/* Text */}
      <div className="mt-6 text-center">
        <h3 className="text-lg font-semibold">
          {name}
        </h3>
        <p className="text-sm text-white/60 mt-1">
          {role}
        </p>
      </div>
    </div>
  );
}
