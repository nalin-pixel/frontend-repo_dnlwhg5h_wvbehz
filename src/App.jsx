import { useMemo, useRef, useCallback, useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import SearchStudents from './components/SearchStudents';
import RandomBiodata from './components/RandomBiodata';
import About from './components/About';
import Footer from './components/Footer';
import ProgressDots from './components/ProgressDots';
import ScrollHints from './components/ScrollHints';
import ParallaxHorses from './components/ParallaxHorses';

export default function App() {
  const railRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);

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
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  const scrollToIndex = useCallback(
    (index) => {
      const clamped = Math.max(0, Math.min(index, sections.length - 1));
      const targetId = sections[clamped].id;
      scrollToKey(targetId);
    },
    [sections, scrollToKey]
  );

  // Keyboard navigation for accessibility (vertical)
  useEffect(() => {
    const onKey = (e) => {
      if (['ArrowDown', 'PageDown'].includes(e.key)) {
        e.preventDefault();
        scrollToIndex(activeIndex + 1);
      } else if (['ArrowUp', 'PageUp'].includes(e.key)) {
        e.preventDefault();
        scrollToIndex(activeIndex - 1);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [activeIndex, scrollToIndex]);

  // Track active section and global progress for parallax (vertical)
  useEffect(() => {
    const rail = railRef.current;
    if (!rail) return;

    const update = () => {
      const h = rail.clientHeight;
      const y = rail.scrollTop;
      const idx = Math.round(y / h);
      setActiveIndex(idx);
      const total = (sections.length - 1) * h || 1;
      const p = Math.max(0, Math.min(1, y / total));
      setProgress(p);
    };

    update();
    rail.addEventListener('scroll', update, { passive: true });

    const ro = new ResizeObserver(update);
    ro.observe(rail);

    return () => {
      rail.removeEventListener('scroll', update);
      ro.disconnect();
    };
  }, [sections.length]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#BDE0FE] via-[#A2D2FF] to-white text-[#03045E]">
      <Header onNavigate={scrollToKey} />

      {/* Premium parallax horses overlay */}
      <ParallaxHorses progress={progress} />

      <main
        ref={railRef}
        className="pt-[72px] h-screen overflow-y-auto overflow-x-hidden snap-y snap-mandatory flex flex-col gap-0 scroll-smooth"
        style={{ scrollSnapType: 'y mandatory' }}
      >
        <Hero onExplore={() => scrollToKey('search')} />
        <SearchStudents />
        <RandomBiodata />
        <About />
        <section id="footer" className="h-[calc(100vh-72px)] w-screen snap-start">
          <Footer />
        </section>
      </main>

      {/* Scroll hints arrows (vertical) */}
      <ScrollHints
        orientation="vertical"
        onPrev={() => scrollToIndex(activeIndex - 1)}
        onNext={() => scrollToIndex(activeIndex + 1)}
      />

      {/* Progress dots (vertical) */}
      <ProgressDots
        orientation="vertical"
        count={sections.length}
        activeIndex={activeIndex}
        onJump={(i) => scrollToIndex(i)}
      />
    </div>
  );
}
