import React from 'react';
import { ChevronLeft, ChevronRight, ChevronUp, ChevronDown } from 'lucide-react';

export default function ScrollHints({ onPrev, onNext, orientation = 'horizontal' }) {
  const isVertical = orientation === 'vertical';

  if (isVertical) {
    return (
      <div className="pointer-events-none fixed inset-0 z-30">
        <div className="absolute left-1/2 -translate-x-1/2 top-[88px]">{/* just below header */}
          <button
            aria-label="Scroll up"
            onClick={onPrev}
            className="pointer-events-auto p-2 rounded-full bg-white/40 backdrop-blur-md border border-white/50 shadow hover:bg-white/60 transition"
          >
            <ChevronUp className="h-5 w-5 text-[#03045E]" />
          </button>
        </div>
        <div className="absolute left-1/2 -translate-x-1/2 bottom-4">
          <button
            aria-label="Scroll down"
            onClick={onNext}
            className="pointer-events-auto p-2 rounded-full bg-white/40 backdrop-blur-md border border-white/50 shadow hover:bg-white/60 transition"
          >
            <ChevronDown className="h-5 w-5 text-[#03045E]" />
          </button>
        </div>
      </div>
    );
  }

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
