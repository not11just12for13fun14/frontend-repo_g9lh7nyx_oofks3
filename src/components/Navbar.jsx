import { Menu } from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-lg">
          <div className="flex items-center gap-3">
            <div className="relative h-9 w-9 overflow-hidden rounded-xl bg-gradient-to-tr from-blue-500 to-cyan-400 shadow-[0_10px_30px_rgba(56,189,248,0.35)]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.6),transparent_40%)]" />
            </div>
            <span className="text-white/90 text-lg font-semibold tracking-tight">
              FluxPay
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm text-white/70">
            <a href="#features" className="hover:text-white transition-colors">Features</a>
            <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
            <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
          </nav>

          <div className="flex items-center gap-3">
            <button className="hidden sm:inline-flex items-center rounded-xl border border-white/10 bg-white/10 px-4 py-2 text-sm font-medium text-white/90 hover:bg-white/20 transition">
              Sign in
            </button>
            <button className="inline-flex items-center rounded-xl bg-gradient-to-r from-blue-500 to-cyan-400 px-4 py-2 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(56,189,248,0.35)] hover:brightness-110 transition">
              Start now
            </button>
            <button className="md:hidden p-2 rounded-lg border border-white/10 text-white/80">
              <Menu size={18} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
