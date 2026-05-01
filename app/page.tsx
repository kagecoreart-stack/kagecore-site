import LiquidGlassShard from '../components/LiquidGlassShard';

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      <LiquidGlassShard />
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <div className="text-center p-12 bg-black/50 backdrop-blur-2xl border border-white/10 max-w-xl">
          <h1 className="text-7xl font-black italic uppercase tracking-tighter mb-4">KAGECORE</h1>
          <p className="text-zinc-500 uppercase tracking-[0.5em] text-xs mb-10">Shadow Engine v2.0</p>
          <input type="text" placeholder="DESCRIBE YOUR VIBE..." className="w-full bg-transparent border-b border-zinc-800 py-4 text-center focus:outline-none focus:border-white transition-all mb-8" />
          <button className="w-full bg-white text-black font-bold py-4 uppercase tracking-widest hover:invert transition-all">Initiate Scan</button>
        </div>
      </div>
    </main>
  );
}
