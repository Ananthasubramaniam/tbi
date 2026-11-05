import React from 'react';
import { motion } from 'framer-motion';
import { LogoPlaceholder } from '../common/LogoPlaceholder';
import { 
  RotateCcw, 
  Maximize2, 
  ShoppingBag, 
  Layers, 
  ShieldCheck, 
  Truck
} from 'lucide-react';

interface Scene7ClosingProps {
  onReplay: () => void;
  onSelectScene: (idx: number) => void;
  togglePresentationMode: () => void;
  isPresentationMode: boolean;
}

export const Scene7Closing: React.FC<Scene7ClosingProps> = ({
  onReplay,
  onSelectScene,
  togglePresentationMode,
  isPresentationMode,
}) => {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center px-6 overflow-hidden">
      
      {/* Background Engineering Concentric Guides */}
      <div className="absolute inset-0 flex items-center justify-center opacity-30 pointer-events-none">
        <div className="w-[700px] h-[700px] rounded-full border border-slate-200" />
        <div className="absolute w-[500px] h-[500px] rounded-full border border-dashed border-slate-300" />
        <div className="absolute w-[300px] h-[300px] rounded-full border border-slate-200" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="max-w-4xl mx-auto flex flex-col items-center text-center z-10"
      >
        {/* Top Concept Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.15, duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-800 mb-5 shadow-xs"
        >
          <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
          <span className="text-xs font-mono font-bold tracking-wider uppercase">
            Platform Demonstration Summary
          </span>
        </motion.div>

        {/* Return to Official TBI Crest */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mb-6 w-full max-w-xl"
        >
          <LogoPlaceholder size="lg" />
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.6 }}
          className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15] max-w-3xl"
        >
          Building a Connected{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-indigo-700 to-blue-800">
            Steel Supply Chain
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.6 }}
          className="mt-3 text-sm sm:text-base text-slate-600 max-w-2xl font-normal leading-relaxed"
        >
          Transforming bright steel manufacturing, yard visibility, and precision automotive supply lines
        </motion.p>

        {/* Summary Value Pillars Pills */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3 w-full max-w-2xl text-left"
        >
          {[
            { icon: ShoppingBag, label: 'Direct Procurement', sub: 'Instant PO & 750kg MOQ', sceneIdx: 1 },
            { icon: Layers, label: 'Real-Time Inventory', sub: '1,420 MT Across 3 Yards', sceneIdx: 2 },
            { icon: ShieldCheck, label: 'Full Traceability', sub: 'EN 10204 3.1 Certified', sceneIdx: 3 },
            { icon: Truck, label: 'JIT Gate Dispatch', sub: 'Automated Weighbridge', sceneIdx: 4 },
          ].map((item, idx) => (
            <div 
              key={idx} 
              onClick={() => onSelectScene(item.sceneIdx)}
              className="p-3 rounded-xl bg-white border border-slate-200/90 hover:border-blue-300 hover:shadow-md cursor-pointer transition-all shadow-xs"
              title={`Jump to Scene: ${item.label}`}
            >
              <item.icon className="w-4 h-4 text-blue-700 mb-1" />
              <div className="text-xs font-bold text-slate-900">{item.label}</div>
              <div className="text-[10px] text-slate-500 mt-0.5">{item.sub}</div>
            </div>
          ))}
        </motion.div>

        {/* Interactive Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85, duration: 0.6 }}
          className="mt-6 flex flex-wrap items-center justify-center gap-3"
        >
          <button
            onClick={onReplay}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-wider shadow-sm transition-all cursor-pointer"
          >
            <RotateCcw className="w-4 h-4" />
            Replay Demonstration (R)
          </button>

          <button
            onClick={togglePresentationMode}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white hover:bg-slate-50 text-slate-700 hover:text-slate-900 border border-slate-200 text-xs font-semibold shadow-xs transition-all cursor-pointer"
          >
            <Maximize2 className="w-4 h-4 text-slate-600" />
            {isPresentationMode ? 'Exit Presentation Mode' : 'Toggle Presentation Mode (F)'}
          </button>
        </motion.div>

        {/* Footnote Disclaimers */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.95, duration: 0.6 }}
          className="mt-6 p-2.5 rounded-xl bg-slate-100/90 border border-slate-200 text-[11px] font-mono text-slate-600 max-w-xl text-center leading-relaxed"
        >
          <span className="text-slate-800 font-bold block mb-0.5">ILLUSTRATIVE ARCHITECTURAL DEMO</span>
          Proposed digital operating platform for Thirupathy Bright Industries. All product grades, batch numbers, heat records, prices, and test certificates shown are mockups for concept demonstration.
        </motion.div>

      </motion.div>
    </div>
  );
};
