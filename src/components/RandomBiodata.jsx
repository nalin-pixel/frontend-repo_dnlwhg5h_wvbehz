import { useMemo } from 'react';
import { motion } from 'framer-motion';

const ALL = [
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
  { id: 11, name: 'Kirana', hobby: 'Menggambar', motto: 'Garis jadi cerita.' },
  { id: 12, name: 'Lazuardi', hobby: 'Renang', motto: 'Tenang dan konsisten.' },
];

function pickRandomFive(arr) {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy.slice(0, 5);
}

export default function RandomBiodata() {
  const five = useMemo(() => pickRandomFive(ALL), []);

  return (
    <section id="biodata" className="h-[calc(100vh-72px)] w-screen flex-shrink-0 snap-start flex items-center">
      <div className="px-8 md:px-16 lg:px-24 w-full">
        <h2 className="text-3xl md:text-4xl font-bold text-[#03045E]">Biodata Acak</h2>
        <p className="text-[#03045E]/70 mt-2">Lima profil muncul setiap refresh untuk mengenal teman-teman XI.G.</p>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {five.map((s, idx) => (
            <motion.div
              key={s.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="p-4 rounded-2xl bg-white/70 backdrop-blur-xl border border-white/60 shadow-lg hover:shadow-xl hover:scale-[1.02] transition"
            >
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-full bg-gradient-to-br from-[#A2D2FF] to-[#03045E]" />
                <div>
                  <p className="font-semibold text-[#03045E] tracking-wide">{s.name}</p>
                  <p className="text-sm text-[#03045E]/70">Hobi: {s.hobby}</p>
                </div>
              </div>
              <p className="mt-3 text-sm text-[#03045E]/80">“{s.motto}”</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
