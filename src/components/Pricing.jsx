import { motion } from 'framer-motion';

const tiers = [
  { name: 'Starter', price: '1.5% + 20¢', features: ['No monthly fees', 'Basic analytics', 'Email support'] },
  { name: 'Scale', price: '1.2% + 20¢', features: ['Volume discounts', 'Advanced analytics', 'Priority support'] },
  { name: 'Enterprise', price: 'Custom', features: ['Custom pricing', 'Dedicated CSM', 'SLA & SSO'] },
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-24">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-3">
          {tiers.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 text-white/90 backdrop-blur">
              <div className="flex items-baseline justify-between">
                <h3 className="text-xl font-semibold text-white">{t.name}</h3>
                <span className="text-white/80">{t.price}</span>
              </div>
              <ul className="mt-4 space-y-2 text-sm text-white/70">
                {t.features.map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 inline-block" /> {f}
                  </li>
                ))}
              </ul>
              <button className="mt-6 w-full rounded-xl bg-gradient-to-r from-blue-500 to-cyan-400 px-4 py-2 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(56,189,248,0.35)] hover:brightness-110 transition">
                Choose {t.name}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
