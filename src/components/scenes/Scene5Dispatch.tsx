import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { DISPATCH_STAGES, SMALL_ORDER_SAMPLE } from '../../data/mockData';
import { 
  Truck, 
  CheckCircle, 
  Clock, 
  ArrowRight, 
  Navigation,
  FileCheck2
} from 'lucide-react';

export const Scene5Dispatch = () => {
  const [activeStep, setActiveStep] = useState<number>(3); // 0 to 3

  // Progression animation over time
  useEffect(() => {
    const timer1 = setTimeout(() => setActiveStep(1), 1000);
    const timer2 = setTimeout(() => setActiveStep(2), 2500);
    const timer3 = setTimeout(() => setActiveStep(3), 4000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  return (
    <div className="w-full h-full flex flex-col justify-between p-6 max-w-7xl mx-auto overflow-hidden">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 pb-3 border-b border-slate-200">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200 text-[10px] font-mono tracking-wider uppercase font-semibold">
              SCENE 05 • JUST-IN-TIME DISPATCH
            </span>
            <span className="text-[10px] font-mono text-slate-500">
              AUTOMATED WEIGHBRIDGE & GATE CLEARANCE
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Integrated Yard-to-Gate Dispatch
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            Automated handoff from mill reservation to optical weighbridge tare verification and outbound gate clearance
          </p>
        </div>

        {/* Illustrative Disclaimer */}
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-100 border border-slate-200 text-[11px] font-mono text-slate-700">
          <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
          <span>SIMULATED OUTBOUND WORKFLOW</span>
        </div>
      </div>

      {/* Main Section: 4-Stage Horizontal Progression Bar */}
      <div className="my-auto py-2">
        
        {/* Step Progress Line */}
        <div className="relative mb-6 px-4">
          {/* Background Track */}
          <div className="absolute top-5 left-10 right-10 -translate-y-1/2 h-1 bg-slate-200 -z-10" />
          
          {/* Active Highlight Track */}
          <motion.div 
            className="absolute top-5 left-10 -translate-y-1/2 h-1 bg-blue-600 -z-10"
            initial={{ width: '0%' }}
            animate={{ width: `${(activeStep / (DISPATCH_STAGES.length - 1)) * 90}%` }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
          />

          <div className="grid grid-cols-4 gap-2">
            {DISPATCH_STAGES.map((stage, idx) => {
              const isPast = idx < activeStep;
              const isCurrent = idx === activeStep;
              
              return (
                <div key={stage.id} className="flex flex-col items-center text-center">
                  {/* Step Bubble */}
                  <motion.div
                    animate={{
                      scale: isCurrent ? [1, 1.06, 1] : 1,
                    }}
                    transition={{ repeat: isCurrent ? Infinity : 0, duration: 2 }}
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-mono text-xs font-bold border-2 transition-all ${
                      isPast
                        ? 'bg-emerald-600 border-emerald-600 text-white shadow-xs'
                        : isCurrent
                        ? 'bg-blue-600 border-blue-600 text-white ring-4 ring-blue-100 shadow-sm'
                        : 'bg-white border-slate-300 text-slate-400'
                    }`}
                  >
                    {isPast ? <CheckCircle className="w-5 h-5" /> : `0${stage.id}`}
                  </motion.div>

                  {/* Stage Title */}
                  <div className="mt-2 text-xs font-bold font-mono text-slate-900 max-w-[160px]">
                    {stage.title}
                  </div>
                  <div className="text-[10px] font-mono text-blue-700 font-semibold mt-0.5">
                    {stage.timestamp}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Detailed Status Panels Grid (Dispatch Request vs Vehicle Gate Pass) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 mt-3">
          
          {/* Left: Dispatch Request & Stock Reservation Details (6 cols) */}
          <div className="lg:col-span-6 rounded-2xl border border-slate-200/90 bg-white p-5 shadow-xs space-y-3.5">
            
            <div className="flex items-center justify-between pb-2.5 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <FileCheck2 className="w-4 h-4 text-blue-700" />
                <h3 className="text-sm font-bold text-slate-900 uppercase font-mono">
                  Dispatch Request Manifest
                </h3>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-800 border border-emerald-200 font-bold">
                STATUS: DISPATCH SCHEDULED
              </span>
            </div>

            <div className="grid grid-cols-2 gap-2.5 text-xs font-mono">
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                <span className="text-[10px] text-slate-500 block">PURCHASE ORDER</span>
                <span className="text-slate-900 font-bold">{SMALL_ORDER_SAMPLE.simulatedPoNumber}</span>
                <span className="text-[10px] text-blue-700 block mt-0.5 font-medium">Tier-1 OEM Ancillary</span>
              </div>

              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                <span className="text-[10px] text-slate-500 block">RESERVED ALLOCATION</span>
                <span className="text-emerald-800 font-bold">{SMALL_ORDER_SAMPLE.orderedQuantityKg} kg (Exact)</span>
                <span className="text-[10px] text-slate-500 block mt-0.5">25 Strapped Bars</span>
              </div>

              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                <span className="text-[10px] text-slate-500 block">WEIGHBRIDGE LOG</span>
                <span className="text-slate-900 font-bold">Net 750.00 kg</span>
                <span className="text-[10px] text-emerald-700 block mt-0.5 font-semibold">Variance: 0.0 kg (0%)</span>
              </div>

              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                <span className="text-[10px] text-slate-500 block">MTC CERTIFICATE</span>
                <span className="text-blue-800 font-bold">EN 10204 3.1 OK</span>
                <span className="text-[10px] text-slate-500 block mt-0.5">Encrypted QR Sealed</span>
              </div>
            </div>

            {/* Current Stage Highlight Box */}
            <div className="p-3 rounded-xl bg-blue-50/80 border border-blue-200 text-xs">
              <div className="flex items-center gap-2 text-blue-900 font-bold font-mono mb-1">
                <Clock className="w-4 h-4 text-blue-700" />
                Active Stage: Outbound Loading Slot Assigned (Gate 02)
              </div>
              <p className="text-slate-600 text-[11px] leading-relaxed">
                Dedicated carrier assigned and loading slot verified at Sriperumbudur Plant Bay 04. Tamper-evident digital security seal recorded.
              </p>
            </div>

          </div>

          {/* Right: Simulated Logistics Gate Pass & Telematics (6 cols) */}
          <div className="lg:col-span-6 rounded-2xl border border-slate-200/90 bg-white p-5 shadow-xs space-y-3.5">
            
            <div className="flex items-center justify-between pb-2.5 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <Truck className="w-4 h-4 text-blue-700" />
                <h3 className="text-sm font-bold text-slate-900 uppercase font-mono">
                  Outbound Logistics & Gate Pass
                </h3>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-blue-50 text-blue-800 border border-blue-200 font-bold">
                GATE PASS #GP-8821
              </span>
            </div>

            <div className="grid grid-cols-2 gap-2.5 text-xs font-mono">
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                <span className="text-[10px] text-slate-500 block">ASSIGNED VEHICLE</span>
                <span className="text-slate-900 font-bold">TN-20-CZ-4419</span>
                <span className="text-[10px] text-slate-500 block mt-0.5">TBI Dedicated Express Carrier</span>
              </div>

              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                <span className="text-[10px] text-slate-500 block">GATE & BAY SLOT</span>
                <span className="text-blue-800 font-bold">Bay 04 → Gate 02</span>
                <span className="text-[10px] text-slate-500 block mt-0.5">Slot: 14:30 IST Today</span>
              </div>
            </div>

            {/* Simulated Live Route & Telematics */}
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-slate-800 font-bold flex items-center gap-1.5">
                  <Navigation className="w-3.5 h-3.5 text-blue-700" />
                  Route Telematics (JIT Highway Corridor)
                </span>
                <span className="text-emerald-700 font-bold">ETA: 45 Mins</span>
              </div>

              <div className="flex items-center justify-between text-[11px] font-mono text-slate-600 pt-0.5">
                <span>Origin: TBI Sriperumbudur Plant</span>
                <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
                <span>Dest: Auto Cluster Hub</span>
              </div>

              {/* Progress visual */}
              <div className="w-full h-1.5 rounded-full bg-slate-200 overflow-hidden">
                <motion.div 
                  className="h-full bg-blue-600 rounded-full"
                  initial={{ width: '25%' }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
                />
              </div>

              <div className="text-[10px] text-slate-500 font-mono flex items-center justify-between pt-1">
                <span>Avg Speed: 48 km/h</span>
                <span>FASTag RFID: Authenticated</span>
                <span>E-Way Bill: Validated</span>
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* Footer Pill */}
      <div className="pt-2.5 border-t border-slate-200 flex items-center justify-between text-[11px] text-slate-500 font-mono">
        <div>• Fully compliant with National GST E-Way Bill and FASTag automated weighbridge gates</div>
        <div className="text-slate-500">TBI OUTBOUND DISPATCH ARCHITECTURE</div>
      </div>

    </div>
  );
};
