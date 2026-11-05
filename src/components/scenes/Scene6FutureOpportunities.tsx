import { motion } from 'framer-motion';
import { 
  Repeat, 
  Banknote, 
  AlertCircle
} from 'lucide-react';

export const Scene6FutureOpportunities = () => {
  return (
    <div className="w-full h-full flex flex-col justify-between p-6 max-w-7xl mx-auto overflow-hidden">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 pb-3 border-b border-slate-200">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200 text-[10px] font-mono tracking-wider uppercase font-semibold">
              SCENE 06 • FUTURE EXPANSION
            </span>
            <span className="text-[10px] font-mono text-slate-500">
              NEXT-GENERATION ECOSYSTEM CAPABILITIES
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Ecosystem Expansion & Value Creation
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            Conceptual architecture for downstream secondary liquidation and embedded supply-chain working capital finance
          </p>
        </div>

        {/* Mandatory Prompt Disclaimer */}
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-amber-50 border border-amber-200 text-[11px] font-mono text-amber-900">
          <AlertCircle className="w-3.5 h-3.5 text-amber-600 shrink-0" />
          <span>PROPOSED FUTURE CAPABILITIES</span>
        </div>
      </div>

      {/* Main Grid: 2 Clean, Production Enterprise Feature Panels */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-auto py-2">
        
        {/* Panel 1: Surplus Inventory Marketplace */}
        <motion.div
          initial={{ opacity: 0, x: -15 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl border border-slate-200/90 bg-white p-6 shadow-xs flex flex-col justify-between relative group hover:border-blue-300 hover:shadow-md transition-all"
        >
          <div>
            {/* Panel Top Badge */}
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-700">
                  <Repeat className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900">
                    Surplus Inventory Marketplace
                  </h3>
                  <p className="text-xs text-slate-500">Secondary Bright Bar & Off-Cut Exchange</p>
                </div>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-blue-50 text-blue-800 border border-blue-200 font-bold">
                PHASE II
              </span>
            </div>

            {/* Description */}
            <p className="mt-3.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
              A verified B2B secondary exchange enabling precision CNC machine shops and Tier-1 ancillaries to monetize slow-moving inventory and certified bright bar off-cuts.
            </p>

            {/* Feature Bullets */}
            <div className="mt-4 space-y-2">
              {[
                {
                  title: 'Guaranteed MTC Provenance',
                  desc: 'Every listed surplus lot retains full original heat number and chemical test records.'
                },
                {
                  title: 'Precision Off-Cut Matching',
                  desc: 'Automated algorithm matches remnant bar lengths to CNC machining jobs across regional clusters.'
                },
                {
                  title: 'Working Capital Recovery',
                  desc: 'Eliminates dead inventory write-downs while offering discount procurement for small shops.'
                }
              ].map((feat, idx) => (
                <div key={idx} className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-2.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5 shrink-0" />
                  <div>
                    <div className="text-xs font-bold text-slate-900">{feat.title}</div>
                    <div className="text-[11px] text-slate-600 mt-0.5">{feat.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Illustrative Micro-Mockup Card */}
          <div className="mt-4 p-3 rounded-xl bg-blue-50/70 border border-blue-200 flex items-center justify-between text-xs font-mono">
            <div>
              <span className="text-[10px] text-slate-500 block">CONCEPT SPECIMEN</span>
              <span className="text-slate-900 font-bold">3.2 MT EN1A Remnants (L: 1.8m - 2.4m)</span>
            </div>
            <div className="text-right">
              <span className="text-[10px] text-slate-500 block">INDICATIVE BID</span>
              <span className="text-emerald-800 font-bold">₹64,500 / MT</span>
            </div>
          </div>
        </motion.div>

        {/* Panel 2: Financing Against Eligible Warehouse Inventory */}
        <motion.div
          initial={{ opacity: 0, x: 15 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl border border-slate-200/90 bg-white p-6 shadow-xs flex flex-col justify-between relative group hover:border-indigo-300 hover:shadow-md transition-all"
        >
          <div>
            {/* Panel Top Badge */}
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-700">
                  <Banknote className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900">
                    Warehouse Inventory Financing
                  </h3>
                  <p className="text-xs text-slate-500">Digital Collateral & Working Capital Credit</p>
                </div>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-indigo-50 text-indigo-800 border border-indigo-200 font-bold">
                FINTECH
              </span>
            </div>

            {/* Description */}
            <p className="mt-3.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
              Instantaneous credit line integration for MSME component manufacturers, using verified physical bright steel stock held in TBI warehouse yards as collateral.
            </p>

            {/* Feature Bullets */}
            <div className="mt-4 space-y-2">
              {[
                {
                  title: 'Electronic Warehouse Receipts (e-NWR)',
                  desc: 'Digitally attested stock certificates recognized by scheduled commercial banks and NBFCs.'
                },
                {
                  title: 'Up to 75% LTV Liquidity',
                  desc: 'Pre-approved drawdown against verified ready-to-dispatch steel batches within 4 hours.'
                },
                {
                  title: 'Automated Lien Management',
                  desc: 'Seamless smart-contract lien release as finished parts are dispatched to Tier-1 OEMs.'
                }
              ].map((feat, idx) => (
                <div key={idx} className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-2.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-indigo-600 mt-1.5 shrink-0" />
                  <div>
                    <div className="text-xs font-bold text-slate-900">{feat.title}</div>
                    <div className="text-[11px] text-slate-600 mt-0.5">{feat.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Illustrative Micro-Mockup Card */}
          <div className="mt-4 p-3 rounded-xl bg-indigo-50/70 border border-indigo-200 flex items-center justify-between text-xs font-mono">
            <div>
              <span className="text-[10px] text-slate-500 block">COLLATERALIZED STOCK</span>
              <span className="text-slate-900 font-bold">50 MT Verified EN8D Bar Stock</span>
            </div>
            <div className="text-right">
              <span className="text-[10px] text-slate-500 block">INDICATIVE CREDIT</span>
              <span className="text-indigo-800 font-bold">₹28 Lakhs @ 9.5%</span>
            </div>
          </div>
        </motion.div>

      </div>

      {/* Footer Pill */}
      <div className="pt-2.5 border-t border-slate-200 flex items-center justify-between text-[11px] text-slate-500 font-mono">
        <div>• Subject to future banking partnerships and Indian financial services regulatory clearances</div>
        <div className="text-slate-500">TBI STRATEGIC ROADMAP</div>
      </div>

    </div>
  );
};
