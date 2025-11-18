import { motion } from 'framer-motion';
import { Shield, Globe, Zap, CreditCard } from 'lucide-react';

const features = [
  {
    icon: CreditCard,
    title: 'Unified Payments',
    desc: 'Cards, wallets, bank debits, and more with one simple integration.',
  },
  {
    icon: Shield,
    title: 'Advanced Fraud',
    desc: 'Adaptive risk engine that learns from billions of data points.',
  },
  {
    icon: Globe,
    title: 'Global Coverage',
    desc: '135+ currencies, 50+ payment methods, localized experiences.',
  },
  {
    icon: Zap,
    title: 'Blazing Fast',
    desc: 'Edge-optimized APIs and webhooks for near-instant processing.',
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(56,189,248,0.12),transparent_50%)]" />
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 text-white/90 backdrop-blur">
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-tr from-blue-500 to-cyan-400 text-white shadow-[0_10px_30px_rgba(56,189,248,0.35)]">
                <f.icon size={20} />
              </div>
              <h3 className="text-lg font-semibold text-white">{f.title}</h3>
              <p className="mt-1 text-sm text-white/70">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
