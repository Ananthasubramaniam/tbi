import React from 'react';

export const BackgroundGrid: React.FC = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden select-none -z-10">
      {/* Base clean light background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#f8fafc] via-[#f1f5f9] to-[#edf2f7]" />

      {/* Subtle warm steel ambient gradient */}
      <div className="absolute -top-[20%] -left-[10%] w-[50vw] h-[50vw] rounded-full bg-blue-100/40 blur-[130px]" />
      <div className="absolute top-[35%] -right-[10%] w-[45vw] h-[45vw] rounded-full bg-slate-200/50 blur-[140px]" />
      <div className="absolute -bottom-[20%] left-[25%] w-[45vw] h-[45vw] rounded-full bg-sky-100/35 blur-[120px]" />

      {/* Architectural Dot Matrix Pattern */}
      <div className="absolute inset-0 architectural-dots opacity-80" />

      {/* Precision Engineering Hairline Grid */}
      <div className="absolute inset-0 engineering-grid opacity-60" />

      {/* High-precision Top and Bottom Boundary Rules */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-blue-600/40 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-slate-200" />

      {/* Subtle CAD Crosshair Coordinates on corners */}
      <div className="absolute top-4 left-6 text-[9px] font-mono text-slate-400 tracking-wider flex items-center gap-1.5 hidden md:flex">
        <span className="text-blue-600 font-bold">+</span>
        <span>TAMIL NADU MANUFACTURING CORRIDOR • SRIPERUMBUDUR HUB</span>
      </div>
      <div className="absolute top-4 right-6 text-[9px] font-mono text-slate-400 tracking-wider flex items-center gap-1.5 hidden md:flex">
        <span>EN 10277 / IS 5517 SPECIFICATION • 100% EDDY CURRENT TESTED</span>
        <span className="text-blue-600 font-bold">+</span>
      </div>
      <div className="absolute bottom-3 left-6 text-[9px] font-mono text-slate-400 tracking-wider hidden lg:block">
        TBI ENTERPRISE SUPPLY-CHAIN PLATFORM v3.2 • CERTIFIED IATF 16949 / ISO 9001:2015
      </div>
      <div className="absolute bottom-3 right-6 text-[9px] font-mono text-slate-400 tracking-wider hidden lg:block">
        MILL DISPATCH AUTOMATION & LIVE STOCK TELEMETRY
      </div>
    </div>
  );
};
