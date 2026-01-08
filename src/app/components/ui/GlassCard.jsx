export default function GlassCard({ title, children }) {
  return (
    <div className="relative rounded-2xl p-6 bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 transition">
      
      {/* subtle glow */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500/10 to-cyan-500/10 opacity-0 hover:opacity-100 transition" />

      <div className="relative z-10">
        <h3 className="text-lg font-semibold mb-3 tracking-wide">
          {title}
        </h3>
        <div className="text-sm text-white/70 leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
}
