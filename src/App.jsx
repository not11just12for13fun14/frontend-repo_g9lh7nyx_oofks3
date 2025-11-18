import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Pricing from './components/Pricing';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      <Hero />
      <Features />
      <Pricing />

      <footer className="relative py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-white/70 backdrop-blur">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
              <p className="text-sm">Built for modern online businesses. Secure, reliable, and fast.</p>
              <div className="flex items-center gap-3">
                <button className="inline-flex items-center rounded-xl border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-white/90 hover:bg-white/20 transition">
                  Contact sales
                </button>
                <button className="inline-flex items-center rounded-xl bg-gradient-to-r from-blue-500 to-cyan-400 px-4 py-2 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(56,189,248,0.35)] hover:brightness-110 transition">
                  Start now
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
