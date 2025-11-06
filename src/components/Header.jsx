import { Home, Search, Info } from 'lucide-react';

const navItems = [
  { key: 'home', label: 'Home', icon: Home },
  { key: 'search', label: 'Cari Siswa', icon: Search },
  { key: 'about', label: 'Tentang Website', icon: Info },
];

export default function Header({ onNavigate }) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/20 backdrop-blur-xl border-b border-white/30">
      <div className="mx-auto max-w-7xl px-5 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3 select-none">
          <svg
            width="36"
            height="36"
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden
            className="drop-shadow-sm"
          >
            <defs>
              <linearGradient id="glogo" x1="0" x2="1" y1="0" y2="1">
                <stop offset="0%" stopColor="#A2D2FF" />
                <stop offset="100%" stopColor="#03045E" />
              </linearGradient>
            </defs>
            <path
              d="M42 10c-6 0-10 5-12 9-2-1-6-1-8 3-1 2-1 5 1 7-4 6-3 13 2 18 7 7 18 6 24-1 6-7 5-17-2-23 1-3 0-6-2-8-1-1-2-2-3-2z"
              fill="url(#glogo)"
            />
            <circle cx="38" cy="19" r="2" fill="#0b1f5e" />
          </svg>
          <div className="leading-tight">
            <p className="text-xs md:text-sm tracking-[0.2em] text-[#03045E]/80">XI.G</p>
            <p className="text-base md:text-lg font-semibold text-[#03045E]">Glogenix</p>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-1 bg-white/40 rounded-full px-1 py-1 border border-white/50 shadow-sm">
          {navItems.map(({ key, label, icon: Icon }) => (
            <button
              key={key}
              onClick={() => onNavigate(key)}
              className="flex items-center gap-2 px-4 py-2 rounded-full text-[#03045E] hover:bg-white/70 transition-colors"
            >
              <Icon size={18} />
              <span className="text-sm font-medium tracking-wide">{label}</span>
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}
