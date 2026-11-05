import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MOCK_MTC } from '../../data/mockData';
import { 
  Scan, 
  AlertCircle, 
  Microscope, 
  FileText, 
  BadgeCheck,
  CheckCircle2
} from 'lucide-react';

export const Scene4Traceability = () => {
  const [isScanned, setIsScanned] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsScanned(true);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full h-full flex flex-col justify-between p-6 max-w-7xl mx-auto overflow-hidden">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 pb-3 border-b border-slate-200">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200 text-[10px] font-mono tracking-wider uppercase font-semibold">
              SCENE 04 • MATERIAL TRACEABILITY
            </span>
            <span className="text-[10px] font-mono text-slate-500">
              MILL TEST CERTIFICATE (EN 10204 3.1)
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            End-to-End Mill Batch Provenance
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            Instant cryptographic verification of metallurgical chemistry, mechanical properties, and non-destructive testing
          </p>
        </div>

        {/* Mandatory Prompt Disclaimer */}
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-amber-50 border border-amber-200 text-[11px] font-mono text-amber-900">
          <AlertCircle className="w-3.5 h-3.5 text-amber-600 shrink-0" />
          <span>SAMPLE CERTIFICATE — ILLUSTRATIVE DATA</span>
        </div>
      </div>

      {/* Main Grid: QR Tag Physical Bundle (Left) + Digital MTC (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 my-auto py-1">
        
        {/* Left: Weatherproof Steel Bundle Tag (4 cols) */}
        <div className="lg:col-span-4 flex flex-col justify-between space-y-3">
          
          <div className="rounded-2xl border border-slate-200/90 bg-white p-5 shadow-xs relative overflow-hidden">
            
            {/* Tag Eyelet & Header */}
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-700">
                  <Scan className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs font-bold text-slate-900 font-mono uppercase tracking-wider block">
                    Steel Bundle Passport
                  </span>
                  <span className="text-[10px] text-slate-500 font-mono">TBI TYVEK BUNDLE TAG</span>
                </div>
              </div>
              <div className="w-4 h-4 rounded-full border-2 border-slate-300 bg-slate-100" title="Wire Binding Eyelet" />
            </div>

            {/* Simulated Steel Bar Cross Section & QR Code */}
            <div className="mt-3.5 flex flex-col items-center">
              <div className="relative p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex flex-col items-center">
                
                {/* QR Code Container */}
                <div className="relative w-36 h-36 bg-white p-2 rounded-lg border border-slate-200 flex items-center justify-center overflow-hidden shadow-xs">
                  {/* Clean High-Contrast SVG QR Code */}
                  <svg viewBox="0 0 100 100" className="w-full h-full text-slate-900 fill-current">
                    <path d="M0,0 h30 v30 h-30 z M10,10 h10 v10 h-10 z" />
                    <path d="M70,0 h30 v30 h-30 z M80,10 h10 v10 h-10 z" />
                    <path d="M0,70 h30 v30 h-30 z M10,80 h10 v10 h-10 z" />
                    <rect x="35" y="5" width="8" height="8" />
                    <rect x="50" y="5" width="12" height="8" />
                    <rect x="35" y="20" width="15" height="8" />
                    <rect x="55" y="20" width="8" height="8" />
                    <rect x="5" y="35" width="15" height="8" />
                    <rect x="25" y="35" width="8" height="15" />
                    <rect x="40" y="35" width="20" height="8" />
                    <rect x="65" y="35" width="8" height="8" />
                    <rect x="80" y="35" width="15" height="8" />
                    <rect x="5" y="55" width="8" height="8" />
                    <rect x="20" y="50" width="8" height="15" />
                    <rect x="35" y="50" width="12" height="12" />
                    <rect x="55" y="50" width="15" height="8" />
                    <rect x="75" y="50" width="20" height="8" />
                    <rect x="40" y="70" width="8" height="25" />
                    <rect x="55" y="65" width="15" height="10" />
                    <rect x="75" y="65" width="20" height="8" />
                    <rect x="55" y="80" width="8" height="15" />
                    <rect x="70" y="80" width="12" height="15" />
                  </svg>

                  {/* Animated Laser Scanning Beam */}
                  <motion.div
                    animate={{
                      top: ['0%', '100%', '0%']
                    }}
                    transition={{
                      duration: 2.2,
                      repeat: Infinity,
                      ease: 'easeInOut'
                    }}
                    className="absolute left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-600 to-transparent shadow-[0_0_8px_#2563eb]"
                  />
                </div>

                {/* Scan Status */}
                <div className="mt-2.5 flex items-center gap-2 text-xs font-mono">
                  <span className={`w-2 h-2 rounded-full ${isScanned ? 'bg-emerald-600' : 'bg-blue-600 animate-ping'}`}></span>
                  <span className={isScanned ? 'text-emerald-800 font-bold' : 'text-blue-700 font-semibold'}>
                    {isScanned ? 'DECRYPTED: EN 10204 3.1 AUTHENTICATED' : 'NFC / OPTICAL SCAN ACTIVE'}
                  </span>
                </div>
              </div>
            </div>

            {/* Batch Info on Tag */}
            <div className="mt-3.5 p-3 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5 text-[11px] font-mono">
              <div className="flex justify-between text-slate-600">
                <span>Heat Batch ID:</span>
                <span className="text-slate-900 font-bold">{MOCK_MTC.heatNo}</span>
              </div>
              <div className="flex justify-between text-slate-600">
                <span>Allocated Bundle:</span>
                <span className="text-blue-800 font-bold">{MOCK_MTC.batchNo}</span>
              </div>
              <div className="flex justify-between text-slate-600">
                <span>Grade Standard:</span>
                <span className="text-slate-800 font-medium">EN8D (080M40)</span>
              </div>
              <div className="flex justify-between text-slate-600">
                <span>Cryptographic Match:</span>
                <span className="text-emerald-700 font-bold flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> 100% Verified
                </span>
              </div>
            </div>

          </div>

          <div className="p-2.5 rounded-xl bg-white border border-slate-200 text-[11px] text-slate-500 font-mono shadow-xs">
            Directly scanned from bar bundle tag via handheld barcode terminal or mobile app.
          </div>

        </div>

        {/* Right: Digital Mill Test Certificate (8 cols) */}
        <div className="lg:col-span-8 rounded-2xl border border-slate-200/90 bg-white p-5 shadow-xs flex flex-col justify-between relative overflow-hidden">
          
          <div>
            {/* Certificate Header Banner */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-200">
              <div>
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-blue-700" />
                  <h3 className="text-sm sm:text-base font-extrabold text-slate-900 tracking-wide uppercase font-mono">
                    Mill Test Certificate (EN 10204 3.1)
                  </h3>
                </div>
                <div className="text-[11px] font-mono text-slate-600 mt-0.5">
                  Cert No: <span className="font-bold text-slate-800">{MOCK_MTC.certificateNo}</span> • Dispatch Date: {MOCK_MTC.dispatchDate}
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className="px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-800 border border-emerald-200 text-[10px] font-mono font-bold flex items-center gap-1">
                  <BadgeCheck className="w-3.5 h-3.5 text-emerald-600" /> QA CERTIFIED
                </span>
              </div>
            </div>

            {/* Spec & Grade Meta Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 py-2.5 border-b border-slate-100 text-xs font-mono bg-slate-50/60 px-2 rounded-lg mt-2">
              <div>
                <span className="text-slate-500 text-[10px] block">MATERIAL GRADE</span>
                <span className="font-bold text-slate-900">EN8D (AISI 1045)</span>
              </div>
              <div>
                <span className="text-slate-500 text-[10px] block">BAR DIMENSIONS</span>
                <span className="text-slate-800">Ø 25.00 mm × 6,000 mm</span>
              </div>
              <div>
                <span className="text-slate-500 text-[10px] block">TOLERANCE CLASS</span>
                <span className="text-blue-800 font-bold">ISO 286-2 h9</span>
              </div>
              <div>
                <span className="text-slate-500 text-[10px] block">MELT PROCESS</span>
                <span className="text-slate-800">Induction + VD Melted</span>
              </div>
            </div>

            {/* Metallurgical Chemical Composition (Table) */}
            <div className="mt-3">
              <div className="flex items-center justify-between text-[11px] font-mono text-slate-600 mb-1">
                <span className="text-slate-900 font-bold flex items-center gap-1.5">
                  <Microscope className="w-3.5 h-3.5 text-blue-700" /> CHEMICAL ANALYSIS (%)
                </span>
                <span className="text-slate-500">Optical Emission Spectrometry</span>
              </div>

              <div className="overflow-x-auto rounded-lg border border-slate-200 bg-white">
                <table className="w-full text-center text-xs font-mono">
                  <thead>
                    <tr className="bg-slate-50 text-slate-600 text-[10px] border-b border-slate-200">
                      <th className="py-1.5 px-2 text-left font-semibold">Element</th>
                      <th className="py-1.5 px-2 font-semibold">Carbon (C)</th>
                      <th className="py-1.5 px-2 font-semibold">Silicon (Si)</th>
                      <th className="py-1.5 px-2 font-semibold">Manganese (Mn)</th>
                      <th className="py-1.5 px-2 font-semibold">Phosphorus (P)</th>
                      <th className="py-1.5 px-2 font-semibold">Sulphur (S)</th>
                      <th className="py-1.5 px-2 font-semibold">Chromium (Cr)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="text-slate-600 text-[11px] border-b border-slate-100">
                      <td className="py-1.5 px-2 text-left font-semibold text-slate-500">Standard Spec</td>
                      <td className="py-1.5 px-2">0.40 - 0.48</td>
                      <td className="py-1.5 px-2">0.10 - 0.35</td>
                      <td className="py-1.5 px-2">0.70 - 0.90</td>
                      <td className="py-1.5 px-2">≤ 0.045</td>
                      <td className="py-1.5 px-2">≤ 0.045</td>
                      <td className="py-1.5 px-2">≤ 0.25</td>
                    </tr>
                    <tr className="bg-blue-50/70 font-bold text-blue-900">
                      <td className="py-1.5 px-2 text-left text-slate-900">Actual Mill Result</td>
                      <td className="py-1.5 px-2 text-emerald-800">0.43%</td>
                      <td className="py-1.5 px-2 text-emerald-800">0.22%</td>
                      <td className="py-1.5 px-2 text-emerald-800">0.79%</td>
                      <td className="py-1.5 px-2 text-emerald-800">0.021%</td>
                      <td className="py-1.5 px-2 text-emerald-800">0.016%</td>
                      <td className="py-1.5 px-2 text-emerald-800">0.12%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Mechanical Properties & NDT Testing */}
            <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3">
              
              {/* Mechanical Properties */}
              <div className="p-2.5 rounded-lg border border-slate-200 bg-slate-50/50">
                <div className="text-[10px] font-mono font-bold text-slate-900 uppercase mb-1.5 flex items-center justify-between">
                  <span>Mechanical Test Results</span>
                  <span className="text-emerald-700 font-bold">ALL PARAMETERS PASSED</span>
                </div>
                <div className="space-y-1 text-xs font-mono">
                  {MOCK_MTC.mechanicalProperties.map((mech, idx) => (
                    <div key={idx} className="flex justify-between items-center text-[11px] py-0.5 border-b border-slate-200/60 last:border-0">
                      <span className="text-slate-600">{mech.property}</span>
                      <div className="flex items-center gap-2">
                        <span className="text-slate-500 text-[10px]">{mech.standard}</span>
                        <span className="font-bold text-emerald-800">{mech.actual} {mech.unit}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Non-Destructive Testing */}
              <div className="p-2.5 rounded-lg border border-slate-200 bg-slate-50/50">
                <div className="text-[10px] font-mono font-bold text-slate-900 uppercase mb-1.5 flex items-center justify-between">
                  <span>NDT & Quality Approvals</span>
                  <span className="text-blue-700 font-bold">ISO 9001:2015</span>
                </div>
                <div className="space-y-1.5 text-[11px] font-mono">
                  {MOCK_MTC.ndtTesting.map((ndt, idx) => (
                    <div key={idx} className="p-1 rounded bg-white border border-slate-200">
                      <div className="flex justify-between text-slate-800 font-semibold">
                        <span>{ndt.test}</span>
                        <span className="text-emerald-700 text-[10px] font-bold">VERIFIED PASS</span>
                      </div>
                      <div className="text-[10px] text-slate-500 mt-0.5">{ndt.result}</div>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>

          {/* Certificate Footer Signature & Verification */}
          <div className="mt-3 pt-2.5 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-[10px] font-mono text-slate-500">
            <div className="flex items-center gap-2">
              <span className="text-blue-700 font-semibold">SHA256: 7f83b1657ff1...d49a</span>
              <span className="text-slate-400">•</span>
              <span>Signed by Head of Metallurgical QA, TBI</span>
            </div>
            <div className="text-slate-600 font-medium">
              EN 10204 TYPE 3.1 INSPECTION CERTIFICATE
            </div>
          </div>

        </div>

      </div>

      {/* Footer Pill */}
      <div className="pt-2.5 border-t border-slate-200 flex items-center justify-between text-[11px] text-slate-500 font-mono">
        <div>• Fully compliant with Tier-1 Automotive APQP & PPAP Level 3 documentation standards</div>
        <div className="text-slate-500">TBI QUALITY ASSURANCE SYSTEM</div>
      </div>

    </div>
  );
};
