import React from 'react';

export default function ProgressDots({ count, activeIndex, onJump, orientation = 'horizontal' }) {
  const isVertical = orientation === 'vertical';

  if (isVertical) {
    return (
      <div className="pointer-events-none fixed right-4 inset-y-0 flex items-center justify-center z-40">
        <div className="px-2 py-3 rounded-full backdrop-blur-md bg-white/40 border border-white/50 shadow-lg flex flex-col items-center gap-2">
          {Array.from({ length: count }).map((_, idx) => (
            <button
              key={idx}
              aria-label={`Go to section ${idx + 1}`}
              onClick={() => onJump(idx)}
              className={`pointer-events-auto h-2.5 w-2.5 rounded-full transition-all duration-300 ${
                idx === activeIndex ? 'bg-[#03045E] h-6' : 'bg-[#03045E]/40 hover:bg-[#03045E]/70'
              }`}
            />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="pointer-events-none fixed bottom-4 left-0 right-0 flex items-center justify-center gap-3 z-40">
      <div className="px-3 py-2 rounded-full backdrop-blur-md bg-white/40 border border-white/50 shadow-lg flex items-center gap-2">
        {Array.from({ length: count }).map((_, idx) => (
          <button
            key={idx}
            aria-label={`Go to section ${idx + 1}`}
            onClick={() => onJump(idx)}
            className={`pointer-events-auto h-2.5 w-2.5 rounded-full transition-all duration-300 ${
              idx === activeIndex ? 'bg-[#03045E] w-6' : 'bg-[#03045E]/40 hover:bg-[#03045E]/70'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
