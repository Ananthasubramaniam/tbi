import React from 'react';
import { LogoPlaceholder } from './LogoPlaceholder';
import { Eye, Clock } from 'lucide-react';
import { SCENES } from '../../data/mockData';

interface HeaderProps {
  currentSceneIndex: number;
  totalTimeElapsed: number;
  totalPresentationDuration: number;
  isPresentationMode: boolean;
  togglePresentationMode: () => void;
  isPlaying: boolean;
}

export const Header: React.FC<HeaderProps> = ({
  currentSceneIndex,
  totalTimeElapsed,
  totalPresentationDuration,
  isPresentationMode,
  togglePresentationMode,
  isPlaying,
}) => {
  const currentScene = SCENES[currentSceneIndex] || SCENES[0];
  
  // Format mm:ss
  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  return (
    <header className={`w-full z-40 transition-all duration-500 ${
      isPresentationMode ? 'opacity-0 -translate-y-full pointer-events-none' : 'opacity-100 translate-y-0'
    }`}>
      <div className="max-w-[1920px] mx-auto px-6 py-3 flex items-center justify-between border-b border-slate-200/90 bg-white/90 backdrop-blur-xl shadow-xs">
        {/* Brand & Concept Identification */}
        <div className="flex items-center gap-6">
          <LogoPlaceholder size="sm" />
          
          <div className="h-5 w-[1px] bg-slate-200 hidden sm:block" />

          {/* Clean Enterprise Concept Badge */}
          <div className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-200 text-slate-700">
            <span className="relative flex h-2 w-2">
              <span className={`absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75 ${isPlaying ? 'animate-ping' : ''}`}></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
            </span>
            <span className="text-[11px] font-mono tracking-wider text-slate-700 font-semibold uppercase">
              Production Demo • Digital Supply Chain
            </span>
          </div>
        </div>

        {/* Center Scene Title & Indicator */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-xs font-mono text-slate-700 shadow-xs">
            <span className="font-bold text-blue-700">0{currentSceneIndex + 1}</span>
            <span className="text-slate-300">/</span>
            <span className="text-slate-500">0{SCENES.length}</span>
            <span className="hidden md:inline-block text-slate-800 font-sans font-semibold pl-2 border-l border-slate-200">
              {currentScene.title}
            </span>
          </div>
        </div>

        {/* Right Tools & Presentation Clock */}
        <div className="flex items-center gap-3">
          {/* Time display */}
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-xs font-mono text-slate-700">
            <Clock className="w-3.5 h-3.5 text-blue-600" />
            <span className="font-semibold text-slate-900">{formatTime(totalTimeElapsed)}</span>
            <span className="text-slate-400">/</span>
            <span className="text-slate-500">{formatTime(totalPresentationDuration)}</span>
          </div>

          {/* Presentation Mode Button */}
          <button
            onClick={togglePresentationMode}
            title="Toggle Clean Presentation Mode (Press 'F')"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white hover:bg-slate-50 text-slate-700 hover:text-slate-900 border border-slate-200 text-xs font-medium transition-all shadow-xs hover:border-slate-300 cursor-pointer"
          >
            <Eye className="w-3.5 h-3.5 text-slate-600" />
            <span className="hidden sm:inline">Presentation Mode</span>
            <kbd className="px-1.5 py-0.5 rounded bg-slate-100 text-[10px] font-mono text-slate-600 border border-slate-200 font-semibold">F</kbd>
          </button>
        </div>
      </div>

      {/* Top 90s Presentation Progress Bar */}
      <div className="w-full h-1 bg-slate-200/80 relative overflow-hidden flex">
        {SCENES.map((scene, idx) => {
          const isPast = idx < currentSceneIndex;
          const isCurrent = idx === currentSceneIndex;
          
          return (
            <div 
              key={scene.id} 
              className="h-full border-r border-white/60 relative transition-all"
              style={{ width: `${100 / SCENES.length}%` }}
            >
              {isPast && (
                <div className="h-full w-full bg-blue-600" />
              )}
              {isCurrent && (
                <div 
                  className="h-full bg-blue-600"
                  style={{
                    width: '100%',
                    animation: isPlaying ? `progressFill ${scene.durationSeconds}s linear infinite` : 'none'
                  }}
                />
              )}
            </div>
          );
        })}
      </div>
    </header>
  );
};
