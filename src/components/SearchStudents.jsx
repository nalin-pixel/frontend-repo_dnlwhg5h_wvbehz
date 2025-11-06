import { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const STUDENTS = [
  { id: 1, name: 'Alya Prameswari', hobby: 'Membaca', motto: 'Ilmu adalah cahaya.' },
  { id: 2, name: 'Bima Sakti', hobby: 'Basket', motto: 'Kerja keras kalahkan bakat.' },
  { id: 3, name: 'Citra Lestari', hobby: 'Desain', motto: 'Seni ada dalam detail.' },
  { id: 4, name: 'Dewa Pratama', hobby: 'Coding', motto: 'Build, measure, learn.' },
  { id: 5, name: 'Eka Putri', hobby: 'Fotografi', motto: 'Tangkap momen.' },
  { id: 6, name: 'Fajar Nugraha', hobby: 'Sepak bola', motto: 'Tetap fokus.' },
  { id: 7, name: 'Gita Rahma', hobby: 'Musik', motto: 'Nada hidupku.' },
  { id: 8, name: 'Hana Dwi', hobby: 'Menulis', motto: 'Kata membentuk dunia.' },
  { id: 9, name: 'Ivan K', hobby: 'Game', motto: 'Belajar dari kegagalan.' },
  { id: 10, name: 'Jasmine Noor', hobby: 'Tari', motto: 'Gerak adalah bahasa.' },
];

function Card({ name, hobby, motto }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 12 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      className="min-w-[260px] max-w-[260px] p-4 rounded-2xl bg-white/60 backdrop-blur-xl border border-white/50 shadow-lg shadow-[#03045E]/10 hover:shadow-[#03045E]/20 hover:scale-[1.02] transition-transform"
    >
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-full bg-gradient-to-br from-[#A2D2FF] to-[#03045E]" />
        <div>
          <p className="font-semibold text-[#03045E] tracking-wide">{name}</p>
          <p className="text-sm text-[#03045E]/70">Hobi: {hobby}</p>
        </div>
      </div>
      <p className="mt-3 text-sm text-[#03045E]/80">“{motto}”</p>
    </motion.div>
  );
}

export default function SearchStudents() {
  const [q, setQ] = useState('');

  const results = useMemo(() => {
    if (!q) return STUDENTS;
    const s = q.toLowerCase();
    return STUDENTS.filter((st) => st.name.toLowerCase().includes(s));
  }, [q]);

  return (
    <section id="search" className="h-[calc(100vh-72px)] w-screen flex-shrink-0 snap-start flex items-center">
      <div className="px-8 md:px-16 lg:px-24 w-full">
        <h2 className="text-3xl md:text-4xl font-bold text-[#03045E]">Cari Siswa</h2>
        <p className="text-[#03045E]/70 mt-2">Ketik nama siswa untuk menelusuri daftar kelas XI.G.</p>

        <div className="mt-6 relative max-w-xl">
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Cari nama..."
            className="w-full rounded-full px-5 py-3 bg-white/70 border border-white/60 shadow-inner focus:outline-none focus:ring-2 focus:ring-[#A2D2FF] text-[#03045E] placeholder-[#03045E]/40"
          />
          <div className="absolute inset-y-0 right-2 flex items-center">
            <span className="text-sm text-[#03045E]/60 mr-3">{results.length}</span>
          </div>
        </div>

        <div className="mt-8 flex gap-4 overflow-x-auto no-scrollbar pb-2">
          <AnimatePresence initial={false}>
            {results.map((s) => (
              <Card key={s.id} name={s.name} hobby={s.hobby} motto={s.motto} />)
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
