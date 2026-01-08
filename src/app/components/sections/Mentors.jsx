import MentorCard from "@/components/ui/MentorCard";

export default function Mentors() {
  const mentors = [
    {
      name: "Dr. A. Sharma",
      role: "AI Researcher",
      photo: "/mentors/mentor1.jpg",
    },
    {
      name: "Ms. R. Verma",
      role: "Full Stack Engineer",
      photo: "/mentors/mentor2.jpg",
    },
    {
      name: "Mr. K. Singh",
      role: "Cyber Security Expert",
      photo: "/mentors/mentor3.jpg",
    },
    {
      name: "Mrs. P. Mehta",
      role: "Blockchain Architect",
      photo: "/mentors/mentor4.jpg",
    },
  ];

  return (
    <section
      id="mentors"
      className="relative w-full py-40 px-6 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0b0f2a] to-black" />

      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* Heading */}
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Mentors & Judges
          </h2>
          <p className="mt-4 text-white/60 max-w-2xl mx-auto">
            The astronauts guiding this mission to success.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-20 place-items-center">
          {mentors.map((mentor, i) => (
            <MentorCard key={i} {...mentor} />
          ))}
        </div>

      </div>
    </section>
  );
}
