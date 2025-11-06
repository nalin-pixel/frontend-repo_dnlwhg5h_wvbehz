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
      const left = el.offsetLeft;
      rail.scrollTo({ left, behavior: 'smooth' });
    }
  }, []);

  const scrollToIndex = useCallback(
    (index) => {
      const rail = railRef.current;
      if (!rail) return;
      const clamped = Math.max(0, Math.min(index, sections.length - 1));
      const targetId = sections[clamped].id;
      scrollToKey(targetId);
    },
    [sections, scrollToKey]
  );

  // Map vertical wheel scrolling to horizontal with smooth behavior
  useEffect(() => {
    const rail = railRef.current;
    if (!rail) return;

    const onWheel = (e) => {
      // Allow pinch zoom / trackpad natural horizontal
      const dominantVertical = Math.abs(e.deltaY) > Math.abs(e.deltaX);
      if (dominantVertical) {
        e.preventDefault();
        rail.scrollBy({ left: e.deltaY, behavior: 'smooth' });
      }
    };

    rail.addEventListener('wheel', onWheel, { passive: false });
    return () => rail.removeEventListener('wheel', onWheel);
  }, []);

  // Keyboard navigation for accessibility
  useEffect(() => {
    const rail = railRef.current;
    if (!rail) return;
    const onKey = (e) => {
      if (['ArrowRight', 'PageDown'].includes(e.key)) {
        e.preventDefault();
        scrollToIndex(activeIndex + 1);
      } else if (['ArrowLeft', 'PageUp'].includes(e.key)) {
        e.preventDefault();
        scrollToIndex(activeIndex - 1);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [activeIndex, scrollToIndex]);

  // Track active section and global progress for parallax
  useEffect(() => {
    const rail = railRef.current;
    if (!rail) return;

    const update = () => {
      const w = rail.clientWidth;
      const x = rail.scrollLeft;
      const idx = Math.round(x / w);
      setActiveIndex(idx);
      const total = (sections.length - 1) * w || 1;
      const p = Math.max(0, Math.min(1, x / total));
      setProgress(p);
    };

    update();
    rail.addEventListener('scroll', update, { passive: true });

    // Also react on resize to keep indices accurate
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
        className="pt-[72px] h-screen overflow-x-auto overflow-y-hidden snap-x snap-mandatory flex gap-0 scroll-smooth"
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

      {/* Scroll hints arrows */}
      <ScrollHints
        onPrev={() => scrollToIndex(activeIndex - 1)}
        onNext={() => scrollToIndex(activeIndex + 1)}
      />

      {/* Progress dots */}
      <ProgressDots
        count={sections.length}
        activeIndex={activeIndex}
        onJump={(i) => scrollToIndex(i)}
      />
    </div>
  );
}
