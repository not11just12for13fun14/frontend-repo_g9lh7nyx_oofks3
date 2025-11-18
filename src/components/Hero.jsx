import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] w-full overflow-hidden">
      <div className="absolute inset-0" aria-hidden>
        <Spline scene="https://prod.spline.design/IKzHtP5ThSO83edK/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950/35 to-slate-950 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-40 pb-28">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs text-white/80 backdrop-blur">
            <div className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
            Modern Stripe-style payments platform
          </div>

          <h1 className="mt-6 text-5xl sm:text-6xl font-semibold leading-tight tracking-tight text-white">
            Accept payments globally with
            <span className="block bg-gradient-to-r from-cyan-300 via-blue-300 to-indigo-300 bg-clip-text text-transparent"> beautiful experiences</span>
          </h1>

          <p className="mt-6 text-lg text-white/80">
            Build sleek checkout flows, manage subscriptions, and reduce fraud with our developer-first APIs and delightful UIs.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <button className="inline-flex items-center rounded-xl bg-gradient-to-r from-blue-500 to-cyan-400 px-5 py-3 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(56,189,248,0.35)] hover:brightness-110 transition">
              Get started
            </button>
            <button className="inline-flex items-center rounded-xl border border-white/15 bg-white/10 px-5 py-3 text-sm font-medium text-white/90 hover:bg-white/20 transition">
              View docs
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
