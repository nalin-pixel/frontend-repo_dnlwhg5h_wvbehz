import { useMemo, useRef, useCallback, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import SearchStudents from './components/SearchStudents';
import RandomBiodata from './components/RandomBiodata';
import About from './components/About';
import Footer from './components/Footer';

export default function App() {
  const railRef = useRef(null);
  const sections = useMemo(
    () => [
      { id: 'home' },
      { id: 'search' },
      { id: 'biodata' },
      { id: 'about' },
      { id: 'footer' },
    ],
    []
  );

  const scrollToKey = useCallback((key) => {
    const rail = railRef.current;
    if (!rail) return;

    const el = rail.querySelector(`#${key}`);
    if (el) {
      const left = el.offsetLeft;
      rail.scrollTo({ left, behavior: 'smooth' });
    }
  }, []);

  // Map vertical wheel scrolling to horizontal for a true horizontal experience
  useEffect(() => {
    const rail = railRef.current;
    if (!rail) return;

    const onWheel = (e) => {
      // Allow pinch zoom / trackpad natural horizontal
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        e.preventDefault();
        rail.scrollBy({ left: e.deltaY, behavior: 'auto' });
      }
    };

    rail.addEventListener('wheel', onWheel, { passive: false });
    return () => rail.removeEventListener('wheel', onWheel);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#BDE0FE] via-[#A2D2FF] to-white text-[#03045E]">
      <Header onNavigate={scrollToKey} />

      <main
        ref={railRef}
        className="pt-[72px] h-screen overflow-x-auto overflow-y-hidden snap-x snap-mandatory flex gap-0"
        style={{ scrollSnapType: 'x mandatory' }}
      >
        <Hero onExplore={() => scrollToKey('search')} />
        <SearchStudents />
        <RandomBiodata />
        <About />
        <section id="footer" className="h-[calc(100vh-72px)] w-screen flex-shrink-0 snap-start">
          <Footer />
        </section>
      </main>
    </div>
  );
}
