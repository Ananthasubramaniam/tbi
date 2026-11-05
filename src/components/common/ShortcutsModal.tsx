import React from 'react';
import { X, Video } from 'lucide-react';

interface ShortcutsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ShortcutsModal: React.FC<ShortcutsModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const shortcuts = [
    { key: 'Spacebar', desc: 'Pause or resume automatic playback' },
    { key: '← / Left Arrow', desc: 'Navigate to previous scene' },
    { key: '→ / Right Arrow', desc: 'Navigate to next scene' },
    { key: 'F', desc: 'Toggle Presentation Mode (Hides all UI for clean screen-recording)' },
    { key: 'R', desc: 'Replay demo from Scene 1' },
    { key: '1 to 7', desc: 'Direct jump to Scene 1 through Scene 7' },
    { key: 'Esc', desc: 'Exit modal or exit presentation mode' },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-xs">
      <div className="relative w-full max-w-lg p-6 rounded-2xl bg-white border border-slate-200 shadow-[0_20px_60px_-15px_rgba(15,23,42,0.2)] text-slate-900">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-100">
          <div>
            <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-600"></span>
              Presentation & Recording Shortcuts
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Optimized for browser capture and seamless 90-second executive demonstration
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-all cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Shortcuts list */}
        <div className="mt-4 space-y-2">
          {shortcuts.map((s, idx) => (
            <div key={idx} className="flex items-center justify-between py-2 px-3 rounded-lg bg-slate-50 border border-slate-200/80">
              <span className="text-xs text-slate-700 font-medium">{s.desc}</span>
              <kbd className="px-2 py-1 rounded bg-white border border-slate-300 text-xs font-mono font-bold text-slate-800 shadow-xs">
                {s.key}
              </kbd>
            </div>
          ))}
        </div>

        {/* Tip for recording */}
        <div className="mt-5 p-3.5 rounded-xl bg-blue-50/80 border border-blue-200/80 text-xs text-blue-900 flex gap-3 items-start">
          <Video className="w-4 h-4 text-blue-700 shrink-0 mt-0.5" />
          <div>
            <p className="font-bold text-blue-950 mb-0.5">Screen Recording Tip:</p>
            <p className="text-slate-700 text-[11px] leading-relaxed">
              Press <kbd className="px-1.5 py-0.5 rounded bg-white border border-blue-200 font-mono text-blue-800 font-semibold">F</kbd> to activate <strong>Presentation Mode</strong>. All navigation bars and chrome disappear, leaving a clean, distraction-free view for high-definition video capture.
            </p>
          </div>
        </div>

        <div className="mt-5 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs transition-all shadow-xs cursor-pointer"
          >
            Got It
          </button>
        </div>

      </div>
    </div>
  );
};
