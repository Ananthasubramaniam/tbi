import React from 'react';
import { motion } from 'framer-motion';
import { LogoPlaceholder } from '../common/LogoPlaceholder';
import { ShieldCheck, Layers, ShoppingBag, Truck, CheckCircle2 } from 'lucide-react';

export const Scene1BrandIntro: React.FC = () => {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center px-6 overflow-hidden">
      
      {/* Subtle Engineering Concentric Watermarks */}
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
        {/* Enterprise Demonstration Pill */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.15, duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-800 mb-6 shadow-xs"
        >
          <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
          <span className="text-xs font-mono font-bold tracking-wider uppercase">
            Platform Vision • Architecture Demonstration
          </span>
        </motion.div>

        {/* Official TBI Corporate Crest Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mb-7 w-full max-w-xl"
        >
          <LogoPlaceholder size="lg" />
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.6 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15] max-w-3xl"
        >
          The Future of{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-indigo-700 to-blue-800">
            Steel Supply Chains
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.6 }}
          className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl font-normal leading-relaxed"
        >
          A unified enterprise operating model for precision bright steel procurement, mill-to-machine batch traceability, and dynamic multi-hub dispatch.
        </motion.p>

        {/* 4 Architectural Pillars */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-3 w-full max-w-3xl"
        >
          {[
            {
              icon: ShoppingBag,
              title: 'Direct Procurement',
              sub: 'Precision Grade Configurator & Instant POs'
            },
            {
              icon: Layers,
              title: 'Multi-Hub Inventory',
              sub: 'Live 1,420 MT Stock Across 3 Plant Yards'
            },
            {
              icon: ShieldCheck,
              title: 'Digital Traceability',
              sub: 'Verified EN 10204 3.1 Mill Certificates'
            },
            {
              icon: Truck,
              title: 'Just-In-Time Dispatch',
              sub: 'Automated Weighbridge & Fast-Track Gate'
            }
          ].map((item, idx) => (
            <div
              key={idx}
              className="p-3.5 rounded-xl bg-white border border-slate-200/90 shadow-xs hover:shadow-md transition-all text-left"
            >
              <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-700 mb-2">
                <item.icon className="w-4 h-4" />
              </div>
              <h4 className="text-xs font-bold text-slate-900">{item.title}</h4>
              <p className="text-[11px] text-slate-500 mt-0.5 leading-snug">{item.sub}</p>
            </div>
          ))}
        </motion.div>

        {/* Footnote Disclaimers */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.85, duration: 0.6 }}
          className="mt-6 flex items-center gap-1.5 text-[11px] font-mono text-slate-500"
        >
          <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
          <span>Interactive Architectural Demo • Thirupathy Bright Industries</span>
        </motion.div>

      </motion.div>
    </div>
  );
};
