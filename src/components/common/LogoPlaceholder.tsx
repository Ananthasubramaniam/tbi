import React from 'react';
import { Award, ShieldCheck } from 'lucide-react';

interface LogoPlaceholderProps {
  size?: 'sm' | 'md' | 'lg';
  showSubtitle?: boolean;
  className?: string;
}

export const LogoPlaceholder: React.FC<LogoPlaceholderProps> = ({
  size = 'md',
  showSubtitle = true,
  className = ''
}) => {
  if (size === 'sm') {
    return (
      <div className={`flex items-center gap-3 ${className}`}>
        {/* Production Corporate Emblem */}
        <div className="relative w-9 h-9 rounded-lg bg-gradient-to-br from-slate-900 via-slate-800 to-blue-950 text-white flex items-center justify-center p-1.5 shadow-md border border-slate-700/30">
          <svg viewBox="0 0 40 40" className="w-full h-full text-blue-400" fill="none" stroke="currentColor" strokeWidth="2">
            <polygon points="20,3 35,11.5 35,28.5 20,37 5,28.5 5,11.5" stroke="#94a3b8" strokeWidth="1.5" />
            <circle cx="20" cy="20" r="11" strokeWidth="2" stroke="#ffffff" />
            <circle cx="20" cy="20" r="4.5" fill="#38bdf8" />
          </svg>
        </div>

        <div className="flex flex-col">
          <div className="flex items-center gap-2">
            <span className="text-sm font-extrabold tracking-tight text-slate-900 font-sans">
              THIRUPATHY <span className="text-blue-700">BRIGHT</span>
            </span>
            <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-200 font-semibold tracking-wider">
              TBI
            </span>
          </div>
          <span className="text-[10px] text-slate-500 tracking-wider uppercase font-medium">
            Industries • Digital Supply Chain
          </span>
        </div>
      </div>
    );
  }

  // Medium / Large prominent enterprise crest for intro and closing scenes
  const isLarge = size === 'lg';

  return (
    <div className={`relative flex flex-col items-center justify-center text-center ${className}`}>
      {/* Enterprise Corporate Card */}
      <div className="relative group p-6 sm:p-8 rounded-2xl border border-slate-200/90 bg-white shadow-[0_12px_40px_-10px_rgba(15,23,42,0.08)] backdrop-blur-md max-w-xl w-full">
        
        {/* Subtle corner registration marks */}
        <div className="absolute top-2.5 left-2.5 w-2 h-2 border-t-2 border-l-2 border-slate-300" />
        <div className="absolute top-2.5 right-2.5 w-2 h-2 border-t-2 border-r-2 border-slate-300" />
        <div className="absolute bottom-2.5 left-2.5 w-2 h-2 border-b-2 border-l-2 border-slate-300" />
        <div className="absolute bottom-2.5 right-2.5 w-2 h-2 border-b-2 border-r-2 border-slate-300" />

        {/* Central Geometric Corporate Emblem */}
        <div className="flex items-center justify-center mb-4">
          <div className="relative w-20 h-20 sm:w-22 sm:h-22 rounded-2xl bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 p-4 shadow-xl border border-slate-800 flex items-center justify-center">
            <svg viewBox="0 0 60 60" className="w-full h-full text-blue-400" fill="none" stroke="currentColor">
              {/* Cold drawn hexagonal profile */}
              <polygon points="30,4 53,17 53,43 30,56 7,43 7,17" strokeWidth="2" stroke="#64748b" />
              {/* Precision round bright bar */}
              <circle cx="30" cy="30" r="18" strokeWidth="2.5" stroke="#ffffff" />
              {/* Core metallurgical axis */}
              <circle cx="30" cy="30" r="7" strokeWidth="2" stroke="#38bdf8" fill="#0284c7" />
              <line x1="30" y1="4" x2="30" y2="56" stroke="rgba(255,255,255,0.25)" strokeWidth="1" strokeDasharray="2 2" />
              <line x1="7" y1="30" x2="53" y2="30" stroke="rgba(255,255,255,0.25)" strokeWidth="1" strokeDasharray="2 2" />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <span className="text-xl sm:text-2xl font-black text-white font-mono tracking-tighter drop-shadow-sm">
                TBI
              </span>
            </div>
          </div>
        </div>

        {/* Brand Name Typography */}
        <h2 className={`${isLarge ? 'text-2xl sm:text-3xl' : 'text-xl'} font-extrabold tracking-tight text-slate-900 uppercase`}>
          Thirupathy Bright Industries
        </h2>

        {showSubtitle && (
          <p className="mt-1 text-xs sm:text-sm text-slate-600 font-medium">
            Manufacturer of Precision Cold Drawn Bright Steel Bars & Ground Shafts
          </p>
        )}

        {/* Production Plant & Credentials Badges */}
        <div className="mt-4 flex flex-wrap items-center justify-center gap-2 pt-3 border-t border-slate-100 text-xs text-slate-600">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 font-medium text-[11px]">
            <ShieldCheck className="w-3.5 h-3.5 text-blue-700" />
            ISO 9001:2015 & IATF 16949 Certified
          </span>
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-blue-50 text-blue-800 font-medium text-[11px] border border-blue-100">
            <Award className="w-3.5 h-3.5 text-blue-600" />
            Established 1998 • Tamil Nadu, India
          </span>
        </div>
      </div>
    </div>
  );
};
