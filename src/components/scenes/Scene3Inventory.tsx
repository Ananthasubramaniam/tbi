import { useState } from 'react';
import { MOCK_INVENTORY } from '../../data/mockData';
import { 
  Database, 
  Building2, 
  ShieldCheck
} from 'lucide-react';

export const Scene3Inventory = () => {
  const [filterProcess, setFilterProcess] = useState<string>('All');

  const filteredItems = filterProcess === 'All' 
    ? MOCK_INVENTORY 
    : MOCK_INVENTORY.filter(item => item.process === filterProcess);

  return (
    <div className="w-full h-full flex flex-col justify-between p-6 max-w-7xl mx-auto overflow-hidden">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 pb-3 border-b border-slate-200">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200 text-[10px] font-mono tracking-wider uppercase font-semibold">
              SCENE 03 • INVENTORY CONTROL
            </span>
            <span className="text-[10px] font-mono text-slate-500">
              MULTI-HUB LIVE STOCK TELEMETRY
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Central Inventory & Yard Telemetry
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            Real-time physical stock tracking across regional plants down to mill heat batches and bay rack coordinates
          </p>
        </div>

        {/* Illustrative Disclaimer Stamp */}
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-100 border border-slate-200 text-[11px] font-mono text-slate-700">
          <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
          <span>LIVE ERP INTEGRATION STREAM</span>
        </div>
      </div>

      {/* KPI Top Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 my-2">
        {[
          {
            label: 'Total Monitored Stock',
            val: '1,420 MT',
            sub: 'Across 3 Active Tamil Nadu Hubs',
            trend: '+4.2% weekly throughput',
            trendColor: 'text-blue-700 bg-blue-50'
          },
          {
            label: 'Ready for Immediate Dispatch',
            val: '980 MT',
            sub: '100% UT Tested & MTC Ready',
            trend: '72hr call-off capacity',
            trendColor: 'text-emerald-700 bg-emerald-50'
          },
          {
            label: 'In Drawing & Finishing',
            val: '320 MT',
            sub: 'In-process bright bar lines',
            trend: 'Target ETA: 24-48 hrs',
            trendColor: 'text-slate-700 bg-slate-100'
          },
          {
            label: 'Allocated / Reserved Stock',
            val: '120 MT',
            sub: 'Locked against Active JIT POs',
            trend: 'Includes 750 kg sample lot',
            trendColor: 'text-purple-700 bg-purple-50'
          }
        ].map((card, idx) => (
          <div
            key={idx}
            className="p-3.5 rounded-xl bg-white border border-slate-200/90 shadow-xs relative overflow-hidden"
          >
            <div className="text-[11px] font-mono uppercase text-slate-500 font-semibold">{card.label}</div>
            <div className="text-2xl sm:text-3xl font-black text-slate-900 font-mono mt-1 tracking-tight">
              {card.val}
            </div>
            <div className="flex items-center justify-between mt-2 pt-2 border-t border-slate-100 text-[10px]">
              <span className="text-slate-500">{card.sub}</span>
              <span className={`px-1.5 py-0.5 rounded font-mono font-bold ${card.trendColor}`}>{card.trend}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Middle Section: Hub Distribution + Inventory Table */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 my-auto">
        
        {/* Left: 3 Warehouse Hub Status Cards (4 cols) */}
        <div className="lg:col-span-4 space-y-2.5">
          <div className="text-xs font-mono text-slate-600 flex items-center justify-between pb-0.5">
            <span>PLANT YARD LOCATION STATUS</span>
            <span className="text-blue-700 font-bold">3 ACTIVE HUBS</span>
          </div>

          {[
            {
              hub: 'Sriperumbudur Plant 1',
              subtitle: 'Chennai Auto Corridor (Central Mill)',
              stock: '680 MT',
              capacity: '82%',
              bays: 'Bays 01 to 06 • Cold Draw & Ground',
              activeColor: 'bg-blue-600'
            },
            {
              hub: 'Hosur Central Yard',
              subtitle: 'Southern Karnataka / Hosur OEM Node',
              stock: '510 MT',
              capacity: '74%',
              bays: 'Bays 01 to 04 • Hexagonal & Turned',
              activeColor: 'bg-indigo-600'
            },
            {
              hub: 'Coimbatore Logistics Hub',
              subtitle: 'Western TN Precision Machining Node',
              stock: '230 MT',
              capacity: '65%',
              bays: 'Bays 01 & 02 • Fast-Moving Rounds',
              activeColor: 'bg-slate-700'
            }
          ].map((yard, idx) => (
            <div
              key={idx}
              className="p-3 rounded-xl bg-white border border-slate-200/90 shadow-xs hover:border-slate-300 transition-all"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-blue-700" />
                  <span className="text-xs font-bold text-slate-900">{yard.hub}</span>
                </div>
                <span className="text-xs font-mono font-black text-blue-800">{yard.stock}</span>
              </div>
              
              <div className="text-[10px] text-slate-500 mt-0.5">{yard.subtitle}</div>

              {/* Progress bar */}
              <div className="mt-2 space-y-1">
                <div className="flex justify-between text-[10px] font-mono text-slate-500">
                  <span>Yard Capacity Utilization</span>
                  <span className="text-slate-800 font-bold">{yard.capacity}</span>
                </div>
                <div className="w-full h-1.5 rounded-full bg-slate-100 overflow-hidden">
                  <div
                    className={`h-full ${yard.activeColor} rounded-full`}
                    style={{ width: yard.capacity }}
                  />
                </div>
              </div>

              <div className="mt-1.5 text-[10px] font-mono text-slate-600">
                {yard.bays}
              </div>
            </div>
          ))}
        </div>

        {/* Right: Live Batch Table (8 cols) */}
        <div className="lg:col-span-8 rounded-2xl border border-slate-200/90 bg-white p-4 shadow-xs flex flex-col justify-between">
          
          <div>
            {/* Table Controls */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-2.5 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <Database className="w-4 h-4 text-blue-700" />
                <span className="text-xs font-bold text-slate-900 uppercase tracking-wider font-mono">
                  Live Heat Batch Ledger
                </span>
              </div>

              {/* Filter Tabs */}
              <div className="flex items-center gap-1">
                {['All', 'Cold Drawn', 'Centerless Ground', 'Peeled & Turned'].map((filter) => (
                  <button
                    key={filter}
                    onClick={() => setFilterProcess(filter)}
                    className={`px-2 py-1 rounded-md text-[10px] font-mono transition-all cursor-pointer ${
                      filterProcess === filter
                        ? 'bg-blue-50 text-blue-700 border border-blue-200 font-bold'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-transparent'
                    }`}
                  >
                    {filter}
                  </button>
                ))}
              </div>
            </div>

            {/* Table */}
            <div className="mt-2.5 overflow-x-auto">
              <table className="w-full text-left text-xs font-mono">
                <thead>
                  <tr className="text-slate-500 border-b border-slate-200/80 text-[10px] uppercase bg-slate-50/60">
                    <th className="py-2 px-2 font-semibold">Batch ID</th>
                    <th className="py-2 font-semibold">Heat No</th>
                    <th className="py-2 font-semibold">Grade & Spec</th>
                    <th className="py-2 font-semibold">Dimensions</th>
                    <th className="py-2 font-semibold">Stock</th>
                    <th className="py-2 font-semibold">Location</th>
                    <th className="py-2 text-right px-2 font-semibold">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {filteredItems.map((item) => (
                    <tr key={item.batchId} className="hover:bg-slate-50/80 transition-colors">
                      <td className="py-2 px-2 font-bold text-slate-900">
                        #{item.batchId}
                      </td>
                      <td className="py-2 text-blue-700 font-semibold">
                        {item.heatNumber}
                      </td>
                      <td className="py-2 text-slate-800 font-sans font-medium">
                        {item.grade}
                      </td>
                      <td className="py-2 text-slate-600">
                        {item.dimensions}
                      </td>
                      <td className="py-2 font-bold text-slate-900">
                        {item.quantityMT} MT
                      </td>
                      <td className="py-2 text-slate-600 text-[11px] font-sans">
                        {item.warehouseLocation.split('(')[0]}
                      </td>
                      <td className="py-2 text-right px-2">
                        <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-semibold ${
                          item.status === 'Ready to Dispatch'
                            ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                            : item.status === 'Reserved'
                            ? 'bg-purple-50 text-purple-800 border border-purple-200'
                            : 'bg-amber-50 text-amber-800 border border-amber-200'
                        }`}>
                          <span className="w-1.5 h-1.5 rounded-full bg-current"></span>
                          {item.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Bottom Table Bar */}
          <div className="mt-2.5 pt-2 border-t border-slate-100 flex items-center justify-between text-[10px] text-slate-500 font-mono">
            <span>Showing {filteredItems.length} active batches in view</span>
            <span className="text-blue-700 flex items-center gap-1 font-semibold">
              <ShieldCheck className="w-3.5 h-3.5" /> All batches linked to Digital EN 10204 3.1 MTC
            </span>
          </div>

        </div>

      </div>

      {/* Footer Pill */}
      <div className="pt-2.5 border-t border-slate-200 flex items-center justify-between text-[11px] text-slate-500 font-mono">
        <div>• Real-time warehouse telemetry via edge industrial IoT sensors</div>
        <div className="text-slate-500">TBI SUPPLY CHAIN PLATFORM • ENTERPRISE STOCK</div>
      </div>

    </div>
  );
};
