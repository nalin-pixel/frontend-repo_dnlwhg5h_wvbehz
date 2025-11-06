import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function Hero({ onExplore }) {
  return (
    <section
      id="home"
      className="relative h-[calc(100vh-72px)] w-screen flex-shrink-0 snap-start overflow-hidden"
      style={{ scrollSnapAlign: 'start' }}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-[#BDE0FE] via-[#A2D2FF] to-white opacity-90" />
        <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-[#A2D2FF]/60 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-[28rem] w-[28rem] rounded-full bg-[#03045E]/20 blur-3xl" />
      </div>

      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4nP1g4mXl8Vh0m7X/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 h-full flex items-center">
        <div className="px-8 md:px-16 lg:px-24 max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#03045E]"
          >
            Grow With Glogenix
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.7, ease: 'easeOut' }}
            className="mt-4 text-[#03045E]/80 text-lg md:text-xl leading-relaxed"
          >
            Kelas XI.G dengan semangat elegan, futuristik, dan presisi. Rasakan pengalaman meluncur yang halus dan premium.
          </motion.p>

          <motion.button
            onClick={onExplore}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#03045E] text-white px-6 py-3 shadow-lg shadow-[#03045E]/20"
          >
            Jelajahi
          </motion.button>
        </div>
      </div>
    </section>
  );
}
