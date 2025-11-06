import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function About() {
  return (
    <section id="about" className="relative h-[calc(100vh-72px)] w-screen flex-shrink-0 snap-start overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/hnVIeQw4z4I1q7Lx/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-white/50 via-[#BDE0FE]/60 to-transparent" />

      <div className="relative z-10 h-full flex items-center">
        <div className="px-8 md:px-16 lg:px-24 max-w-3xl">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-[#03045E]"
          >
            Tentang Website
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 text-[#03045E]/80 text-lg leading-relaxed"
          >
            Glogenix dibuat untuk mempererat kebersamaan kelas XI.G, mewakili semangat maju, elegan, dan perfeksionis. Setiap detail dirancang agar terasa mewah dan modern — meluncur halus dari satu bagian ke bagian lainnya.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
