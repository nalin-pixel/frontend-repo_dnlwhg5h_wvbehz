import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function ScrollHints({ onPrev, onNext }) {
  return (
    <div className="pointer-events-none fixed inset-0 z-30">
      <div className="absolute left-3 top-1/2 -translate-y-1/2">
        <button
          aria-label="Previous section"
          onClick={onPrev}
          className="pointer-events-auto p-2 rounded-full bg-white/40 backdrop-blur-md border border-white/50 shadow hover:bg-white/60 transition"
        >
          <ChevronLeft className="h-5 w-5 text-[#03045E]" />
        </button>
      </div>
      <div className="absolute right-3 top-1/2 -translate-y-1/2">
        <button
          aria-label="Next section"
          onClick={onNext}
          className="pointer-events-auto p-2 rounded-full bg-white/40 backdrop-blur-md border border-white/50 shadow hover:bg-white/60 transition"
        >
          <ChevronRight className="h-5 w-5 text-[#03045E]" />
        </button>
      </div>
    </div>
  );
}
