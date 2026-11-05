import React from 'react';
import { 
  Play, 
  Pause, 
  ChevronLeft, 
  ChevronRight, 
  RotateCcw, 
  Maximize2, 
  Minimize2, 
  Keyboard, 
  Gauge
} from 'lucide-react';
import { SCENES } from '../../data/mockData';

interface ControlBarProps {
  currentSceneIndex: number;
  totalScenes: number;
  isPlaying: boolean;
  onTogglePlay: () => void;
  onNext: () => void;
  onPrev: () => void;
  onSelectScene: (index: number) => void;
  onReplay: () => void;
  isPresentationMode: boolean;
  onTogglePresentationMode: () => void;
  playbackSpeed: number;
  onChangeSpeed: (speed: number) => void;
  onOpenShortcuts: () => void;
  sceneTimeLeft: number;
}

export const ControlBar: React.FC<ControlBarProps> = ({
  currentSceneIndex,
  totalScenes,
  isPlaying,
  onTogglePlay,
  onNext,
  onPrev,
  onSelectScene,
  onReplay,
  isPresentationMode,
  onTogglePresentationMode,
  playbackSpeed,
  onChangeSpeed,
  onOpenShortcuts,
  sceneTimeLeft,
}) => {
  return (
    <div 
      className={`fixed bottom-5 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ease-out ${
        isPresentationMode 
          ? 'opacity-0 translate-y-16 hover:opacity-100 hover:translate-y-0 pointer-events-none hover:pointer-events-auto' 
          : 'opacity-100 translate-y-0'
      }`}
    >
      <div className="flex items-center gap-2 p-1.5 rounded-2xl bg-white/95 backdrop-blur-xl border border-slate-200/90 shadow-[0_16px_45px_-10px_rgba(15,23,42,0.14)]">
        
        {/* Playback Controls */}
        <div className="flex items-center gap-1 pr-2 border-r border-slate-200">
          <button
            onClick={onPrev}
            disabled={currentSceneIndex === 0}
            title="Previous Scene (← Left Arrow)"
            className="p-2 rounded-xl text-slate-600 hover:text-slate-900 hover:bg-slate-100 disabled:opacity-30 disabled:pointer-events-none transition-all cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <button
            onClick={onTogglePlay}
            title={isPlaying ? "Pause Demo (Space)" : "Play Demo (Space)"}
            className="p-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white shadow-sm transition-all cursor-pointer"
          >
            {isPlaying ? (
              <Pause className="w-4 h-4 fill-white" />
            ) : (
              <Play className="w-4 h-4 fill-white" />
            )}
          </button>

          <button
            onClick={onNext}
            disabled={currentSceneIndex === totalScenes - 1}
            title="Next Scene (→ Right Arrow)"
            className="p-2 rounded-xl text-slate-600 hover:text-slate-900 hover:bg-slate-100 disabled:opacity-30 disabled:pointer-events-none transition-all cursor-pointer"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Scene Jump Pills */}
        <div className="hidden sm:flex items-center gap-1 px-1">
          {SCENES.map((scene, idx) => {
            const isCurrent = idx === currentSceneIndex;
            return (
              <button
                key={scene.id}
                onClick={() => onSelectScene(idx)}
                title={`${scene.badge}: ${scene.title}`}
                className={`relative px-2.5 py-1.5 rounded-lg text-xs font-mono transition-all flex items-center gap-1.5 cursor-pointer ${
                  isCurrent 
                    ? 'bg-blue-50 text-blue-700 border border-blue-200 font-bold shadow-xs' 
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-transparent'
                }`}
              >
                <span>{idx + 1}</span>
                <span className="hidden xl:inline text-[11px] font-sans font-medium">
                  {scene.navLabel}
                </span>
                {isCurrent && (
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse"></span>
                )}
              </button>
            );
          })}
        </div>

        {/* Scene Countdown Pill */}
        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-50 border border-slate-200 text-[11px] font-mono text-slate-700">
          <span className="text-slate-400">Timer:</span>
          <span className="font-bold text-slate-900">{Math.ceil(sceneTimeLeft)}s</span>
        </div>

        {/* Speed & Auxiliary Tools */}
        <div className="flex items-center gap-1 pl-2 border-l border-slate-200">
          {/* Speed Selector */}
          <button
            onClick={() => {
              const speeds = [1, 1.5, 0.5];
              const nextIdx = (speeds.indexOf(playbackSpeed) + 1) % speeds.length;
              onChangeSpeed(speeds[nextIdx]);
            }}
            title="Adjust Concept Video Pace"
            className="flex items-center gap-1 px-2 py-1.5 rounded-lg text-xs font-mono text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-all cursor-pointer font-medium"
          >
            <Gauge className="w-3.5 h-3.5 text-blue-600" />
            <span>{playbackSpeed}x</span>
          </button>

          {/* Replay Entire Flow */}
          <button
            onClick={onReplay}
            title="Replay from Scene 1 (Press 'R')"
            className="p-2 rounded-xl text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-all cursor-pointer"
          >
            <RotateCcw className="w-4 h-4" />
          </button>

          {/* Presentation Mode */}
          <button
            onClick={onTogglePresentationMode}
            title={isPresentationMode ? "Exit Presentation Mode (Press 'F')" : "Enter Presentation Mode (Press 'F')"}
            className="p-2 rounded-xl text-slate-600 hover:text-blue-700 hover:bg-slate-100 transition-all cursor-pointer"
          >
            {isPresentationMode ? (
              <Minimize2 className="w-4 h-4 text-blue-700" />
            ) : (
              <Maximize2 className="w-4 h-4" />
            )}
          </button>

          {/* Shortcuts Info */}
          <button
            onClick={onOpenShortcuts}
            title="Keyboard Shortcuts (?)"
            className="p-2 rounded-xl text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-all cursor-pointer"
          >
            <Keyboard className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};
