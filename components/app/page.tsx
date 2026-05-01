import LiquidGlassShard from '../components/LiquidGlassShard';

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <LiquidGlassShard />
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <div className="text-center p-10 bg-black/40 backdrop-blur-md border border-white/10 max-w-lg">
          <h1 className="text-6xl font-black italic uppercase tracking-tighter text-white mb-4">
            KAGECORE
          </h1>
          <p className="text-zinc-500 uppercase tracking-widest text-xs mb-8">
            Frequency Analysis v2.0
          </p>
          <input 
            type="text" 
            placeholder="TYPE YOUR VIBE..." 
            className="w-full bg-transparent border-b border-zinc-700 py-3 text-center text-white focus:outline-none focus:border-green-400 transition-all mb-6"
          />
          <button className="w-full bg-white text-black font-bold py-4 uppercase tracking-widest hover:bg-green-400 transition-all">
            Initiate Scan
          </button>
        </div>
      </div>
    </main>
  );
}
