import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MOCK_PRODUCTS, 
  SMALL_ORDER_SAMPLE 
} from '../../data/mockData';
import { 
  ShoppingCart, 
  CheckCircle, 
  AlertCircle, 
  Package, 
  Scale, 
  Clock, 
  Check
} from 'lucide-react';

export const Scene2Procurement = () => {
  const [selectedProductId, setSelectedProductId] = useState<string>(SMALL_ORDER_SAMPLE.productId);
  const [orderStage, setOrderStage] = useState<'idle' | 'allocating' | 'confirmed'>('idle');
  const quantityKg = 750;

  const selectedProduct = MOCK_PRODUCTS.find(p => p.id === selectedProductId) || MOCK_PRODUCTS[0];

  // Auto-simulate order confirmation after 3s for seamless presentation
  useEffect(() => {
    const timer1 = setTimeout(() => {
      setOrderStage('allocating');
    }, 2500);

    const timer2 = setTimeout(() => {
      setOrderStage('confirmed');
    }, 4200);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  const calculateSubtotal = (kg: number, ratePerMT: number) => {
    return Math.round((kg / 1000) * ratePerMT);
  };

  const currentPrice = calculateSubtotal(quantityKg, selectedProduct.pricePerMT);

  return (
    <div className="w-full h-full flex flex-col justify-between p-6 max-w-7xl mx-auto overflow-hidden">
      
      {/* Scene Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 pb-3 border-b border-slate-200">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200 text-[10px] font-mono tracking-wider uppercase font-semibold">
              SCENE 02 • DIGITAL PROCUREMENT
            </span>
            <span className="text-[10px] font-mono text-slate-500">
              DIRECT MILL CATALOG & DYNAMIC ALLOCATION
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Direct Mill Bright Steel Ordering
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            Real-time catalog with transparent spot rates, standard ISO tolerances, and flexible sub-tonne ordering
          </p>
        </div>

        {/* Illustrative Disclaimer */}
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-amber-50 border border-amber-200 text-[11px] font-mono text-amber-900">
          <AlertCircle className="w-3.5 h-3.5 text-amber-600 shrink-0" />
          <span>ILLUSTRATIVE SPECIFICATIONS & RATES</span>
        </div>
      </div>

      {/* Main Content: Marketplace Grid + Small-Order Configurator */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 my-auto py-2">
        
        {/* Left Column: 3 Product Listings (7 Cols) */}
        <div className="lg:col-span-7 space-y-3">
          <div className="flex items-center justify-between text-xs text-slate-600 font-mono pb-0.5">
            <span>LIVE PRODUCTION INVENTORY (3 VERIFIED GRADES)</span>
            <span className="text-blue-700 font-semibold">TOLERANCES: ISO h9 / h11 / h7</span>
          </div>

          <div className="space-y-2.5">
            {MOCK_PRODUCTS.map((product) => {
              const isSelected = selectedProductId === product.id;
              
              return (
                <motion.div
                  key={product.id}
                  whileHover={{ scale: 1.008 }}
                  onClick={() => {
                    setSelectedProductId(product.id);
                    setOrderStage('idle');
                  }}
                  className={`relative p-4 rounded-xl border transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-white border-blue-600 ring-2 ring-blue-100 shadow-md'
                      : 'bg-white border-slate-200/90 hover:border-slate-300 shadow-xs'
                  }`}
                >
                  {/* Active Selection Badge */}
                  {isSelected && (
                    <div className="absolute top-3 right-3 flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-blue-50 border border-blue-200 text-[10px] font-mono text-blue-700 font-bold">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse"></span>
                      ACTIVE SELECTION
                    </div>
                  )}

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-base sm:text-lg font-bold text-slate-900 font-mono">
                          {product.grade}
                        </span>
                        <span className="text-[10px] px-2 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200 font-mono font-medium">
                          {product.shape} Bar
                        </span>
                      </div>
                      
                      <p className="text-xs text-slate-600 mt-1">
                        {product.gradeStandard} • {product.category}
                      </p>

                      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-2.5 text-xs text-slate-700 font-mono">
                        <span className="text-blue-800 font-semibold">
                          DIM: {product.dimensions}
                        </span>
                        <span className="text-slate-500">
                          TOL: {product.tolerance}
                        </span>
                        <span className="text-slate-500">
                          BAY: {product.bayLocation}
                        </span>
                      </div>
                    </div>

                    {/* Price and Stock Pill */}
                    <div className="sm:text-right shrink-0">
                      <div className="text-[10px] font-mono text-slate-500 uppercase">
                        Spot Rate (Ex-Mill)
                      </div>
                      <div className="text-lg font-black text-slate-900 font-mono">
                        ₹{product.pricePerMT.toLocaleString('en-IN')}{' '}
                        <span className="text-xs font-normal text-slate-500">/ MT</span>
                      </div>
                      <div className="mt-1 inline-flex items-center gap-1.5 text-[11px] font-mono text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 font-semibold">
                        <CheckCircle className="w-3 h-3 text-emerald-600" />
                        <span>{product.availableStockMT} MT Ready</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Right Column: Small-Order Configuration & Simulated Order Confirmation (5 Cols) */}
        <div className="lg:col-span-5">
          <div className="h-full rounded-2xl border border-slate-200/90 bg-white p-5 flex flex-col justify-between shadow-sm relative overflow-hidden">
            
            {/* Top Badge: Small-Order Demonstration */}
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-700">
                    <Scale className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">Small-Batch Procurement</h3>
                    <p className="text-[11px] text-slate-500">Sub-Tonne Precision Ordering (750 kg)</p>
                  </div>
                </div>

                <span className="px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200 text-[10px] font-mono font-bold">
                  SAMPLE LOT
                </span>
              </div>

              {/* Order Specifications */}
              <div className="mt-3.5 space-y-2.5">
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs">
                  <div className="flex items-center justify-between text-slate-600 mb-1">
                    <span>Configured Grade:</span>
                    <span className="font-mono text-slate-900 font-bold">{selectedProduct.grade}</span>
                  </div>
                  <div className="flex items-center justify-between text-slate-600 mb-1">
                    <span>Bar Dimensions:</span>
                    <span className="font-mono text-slate-800">{selectedProduct.dimensions}</span>
                  </div>
                  <div className="flex items-center justify-between text-slate-600">
                    <span>Cutting Tolerance:</span>
                    <span className="font-mono text-slate-800">{SMALL_ORDER_SAMPLE.cuttingTolerance}</span>
                  </div>
                </div>

                {/* Explicit 750 kg Order Card */}
                <div className="p-3.5 rounded-xl bg-blue-50/70 border border-blue-200">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                      <Package className="w-4 h-4 text-blue-700" />
                      Order Lot Weight:
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white text-blue-800 border border-blue-200 font-bold">
                      Flexible MOQ
                    </span>
                  </div>

                  <div className="flex items-baseline justify-between">
                    <div>
                      <span className="text-3xl font-black text-slate-900 font-mono tracking-tight">
                        750
                      </span>
                      <span className="text-sm font-bold text-blue-800 ml-1.5">
                        kg (0.75 MT)
                      </span>
                    </div>
                    <div className="text-right">
                      <div className="text-[10px] font-mono text-slate-500">Total Value (Ex-GST)</div>
                      <div className="text-2xl font-black text-blue-700 font-mono">
                        ₹{currentPrice.toLocaleString('en-IN')}
                      </div>
                    </div>
                  </div>

                  <div className="mt-2 text-[10px] text-slate-600 flex items-center justify-between border-t border-blue-200/80 pt-2 font-mono">
                    <span>Unit Rate: ₹{(selectedProduct.pricePerMT / 1000).toFixed(2)}/kg</span>
                    <span className="text-emerald-700 flex items-center gap-1 font-semibold">
                      <Clock className="w-3 h-3 text-emerald-600" /> Dispatch in 24h
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Simulated Order Confirmation Dynamic State */}
            <div className="mt-4">
              <AnimatePresence mode="wait">
                {orderStage === 'idle' && (
                  <motion.div
                    key="idle"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-1.5"
                  >
                    <button
                      onClick={() => setOrderStage('allocating')}
                      className="w-full py-2.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-xs transition-all cursor-pointer"
                    >
                      <ShoppingCart className="w-4 h-4" />
                      Place 750 kg Small-Order
                    </button>
                    <p className="text-[10px] text-center text-slate-500 font-mono">
                      Instantly locks heat batch and generates electronic PO
                    </p>
                  </motion.div>
                )}

                {orderStage === 'allocating' && (
                  <motion.div
                    key="allocating"
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    className="p-3.5 rounded-xl bg-slate-50 border border-blue-300 flex items-center gap-3"
                  >
                    <div className="w-5 h-5 rounded-full border-2 border-blue-600 border-t-transparent animate-spin shrink-0" />
                    <div>
                      <div className="text-xs font-bold text-slate-900 font-mono">
                        Allocating Heat #{selectedProduct.heatNumber}...
                      </div>
                      <div className="text-[11px] text-blue-700">
                        Reserving 750 kg bundle from {selectedProduct.bayLocation}
                      </div>
                    </div>
                  </motion.div>
                )}

                {orderStage === 'confirmed' && (
                  <motion.div
                    key="confirmed"
                    initial={{ opacity: 0, y: 8, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.35 }}
                    className="p-3.5 rounded-xl bg-emerald-50/90 border border-emerald-300 shadow-xs"
                  >
                    <div className="flex items-center justify-between pb-2 border-b border-emerald-200">
                      <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-900 font-mono">
                        <Check className="w-4 h-4 bg-emerald-600 text-white rounded-full p-0.5" />
                        PURCHASE ORDER CONFIRMED
                      </div>
                      <span className="text-[10px] font-mono text-emerald-800 font-bold">
                        {SMALL_ORDER_SAMPLE.simulatedPoNumber}
                      </span>
                    </div>

                    <div className="mt-2 grid grid-cols-2 gap-2 text-[10px] font-mono">
                      <div>
                        <span className="text-slate-500">Allocated Batch:</span>
                        <div className="text-slate-900 font-bold">{SMALL_ORDER_SAMPLE.allocatedLot}</div>
                      </div>
                      <div>
                        <span className="text-slate-500">Heat Number:</span>
                        <div className="text-blue-800 font-bold">{selectedProduct.heatNumber}</div>
                      </div>
                      <div>
                        <span className="text-slate-500">Weight Locked:</span>
                        <div className="text-emerald-800 font-bold">750 kg (Exact)</div>
                      </div>
                      <div>
                        <span className="text-slate-500">MTC Certificate:</span>
                        <div className="text-slate-900 font-bold">EN 10204 3.1 Attached</div>
                      </div>
                    </div>

                    <div className="mt-2 pt-2 border-t border-emerald-200 text-[10px] text-slate-600 flex items-center justify-between font-mono">
                      <span>Dest: {SMALL_ORDER_SAMPLE.destinationHub}</span>
                      <span className="text-emerald-800 font-bold">Ready for Dispatch Flow →</span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

          </div>
        </div>

      </div>

      {/* Footer Pill */}
      <div className="pt-2.5 border-t border-slate-200 flex flex-wrap items-center justify-between text-[11px] text-slate-500 font-mono">
        <div className="flex items-center gap-4">
          <span>• 100% Surface Defect Screened</span>
          <span>• High-Speed Cold Draw Benches</span>
          <span>• Tolerances: ISO 286-2 h7 / h9 / h11</span>
        </div>
        <div className="text-slate-500">
          TBI DIGITAL PLATFORM • ADVANCING TO INVENTORY VISIBILITY
        </div>
      </div>

    </div>
  );
};
