import type { ProductItem, InventoryItem, MillTestCert, DispatchStage, SceneConfig } from '../types';

export const SCENES: SceneConfig[] = [
  {
    id: 1,
    title: 'Brand Introduction & Platform Vision',
    navLabel: 'Brand Vision',
    durationSeconds: 12,
    badge: 'SCENE 01 — VISION'
  },
  {
    id: 2,
    title: 'Digital Steel Procurement & Instant Quotation',
    navLabel: 'Procurement',
    durationSeconds: 14,
    badge: 'SCENE 02 — PROCUREMENT'
  },
  {
    id: 3,
    title: 'Real-Time Inventory Visibility & Multi-Hub Warehousing',
    navLabel: 'Inventory',
    durationSeconds: 13,
    badge: 'SCENE 03 — INVENTORY'
  },
  {
    id: 4,
    title: 'Material Traceability & Digital Mill Test Certificate',
    navLabel: 'Traceability',
    durationSeconds: 14,
    badge: 'SCENE 04 — TRACEABILITY'
  },
  {
    id: 5,
    title: 'Just-In-Time Dispatch & Automated Gate Progression',
    navLabel: 'JIT Dispatch',
    durationSeconds: 13,
    badge: 'SCENE 05 — JIT DISPATCH'
  },
  {
    id: 6,
    title: 'Future Capabilities: Surplus Exchange & Stock Financing',
    navLabel: 'Future Scope',
    durationSeconds: 12,
    badge: 'SCENE 06 — FUTURE HORIZONS'
  },
  {
    id: 7,
    title: 'Connected Steel Supply Chain — Executive Closing',
    navLabel: 'Summary',
    durationSeconds: 12,
    badge: 'SCENE 07 — CLOSING'
  }
];

export const MOCK_PRODUCTS: ProductItem[] = [
  {
    id: 'prod-en8d-25',
    grade: 'EN8D / AISI 1045',
    gradeStandard: 'BS 970: 080M40 / IS 5517',
    category: 'Medium Carbon Bright Bar',
    shape: 'Round',
    dimensions: 'Ø 25.00 mm × 6,000 mm',
    tolerance: 'ISO h9 (±0.052 mm)',
    surfaceFinish: 'Cold Drawn & Polished',
    availableStockMT: 42.5,
    pricePerMT: 74800,
    applications: ['Automotive Transmission Shafts', 'Studs & Fasteners', 'Hydraulic Cylinders'],
    heatNumber: 'HT-88421-V',
    bayLocation: 'Bay 04 — Sriperumbudur',
    featured: true
  },
  {
    id: 'prod-en1a-19',
    grade: 'EN1A / 11SMn30',
    gradeStandard: 'BS 970: 220M07 / DIN 1.0715',
    category: 'Free Cutting Steel',
    shape: 'Hexagonal',
    dimensions: 'A/F 19.00 mm × 3,000 mm',
    tolerance: 'ISO h11',
    surfaceFinish: 'Cold Drawn Hexagon',
    availableStockMT: 18.0,
    pricePerMT: 82400,
    applications: ['Precision CNC Turned Parts', 'Hydraulic Couplings', 'Automotive Inserts'],
    heatNumber: 'HT-71204-C',
    bayLocation: 'Bay 02 — Hosur Central Yard',
    featured: false
  },
  {
    id: 'prod-20mncr5-32',
    grade: '20MnCr5 / SAE 5120',
    gradeStandard: 'DIN 1.7147 / EN 10084',
    category: 'Case Hardening Alloy Steel',
    shape: 'Round',
    dimensions: 'Ø 32.00 mm × 4,500 mm',
    tolerance: 'ISO h7 Precision Ground',
    surfaceFinish: 'Centerless Ground (Ra ≤ 0.4 µm)',
    availableStockMT: 28.5,
    pricePerMT: 89500,
    applications: ['Heavy Duty Gearbox Pinions', 'King Pins', 'Universal Joints'],
    heatNumber: 'HT-66329-G',
    bayLocation: 'Bay 06 — Sriperumbudur',
    featured: false
  }
];

export const SMALL_ORDER_SAMPLE = {
  productId: 'prod-en8d-25',
  productName: 'EN8D / AISI 1045 Bright Round Bar (Ø 25mm)',
  orderedQuantityKg: 750,
  orderedQuantityMT: 0.75,
  baseRatePerKg: 74.80,
  subtotal: 56100,
  cuttingTolerance: '±1.0 mm cold saw cut',
  leadTime: 'Dispatch in 24h',
  packaging: 'Weatherproof HDPE wrapped bundle (25 bars)',
  destinationHub: 'Sriperumbudur Auto Cluster, TN',
  allocatedLot: 'LOT-TBI-2026-941',
  simulatedPoNumber: 'PO-TBI-2026-8841'
};

export const MOCK_INVENTORY: InventoryItem[] = [
  {
    batchId: 'TBI-CD-8841',
    heatNumber: 'HT-88421-V',
    grade: 'EN8D / C45',
    process: 'Cold Drawn',
    dimensions: 'Ø 25.00 mm × 6m',
    quantityMT: 42.5,
    warehouseLocation: 'Sriperumbudur Plant 1 (Bay 04)',
    status: 'Ready to Dispatch',
    dateProduced: '2026-10-18',
    testCertStatus: 'Certified'
  },
  {
    batchId: 'TBI-HEX-7120',
    heatNumber: 'HT-71204-C',
    grade: 'EN1A / 11SMn30',
    process: 'Cold Drawn',
    dimensions: 'A/F 19.00 mm × 3m',
    quantityMT: 18.0,
    warehouseLocation: 'Hosur Central Yard (Bay 02)',
    status: 'Ready to Dispatch',
    dateProduced: '2026-10-19',
    testCertStatus: 'Certified'
  },
  {
    batchId: 'TBI-CG-6632',
    heatNumber: 'HT-66329-G',
    grade: '20MnCr5',
    process: 'Centerless Ground',
    dimensions: 'Ø 32.00 mm × 4.5m',
    quantityMT: 28.5,
    warehouseLocation: 'Sriperumbudur Plant 1 (Bay 06)',
    status: 'Ready to Dispatch',
    dateProduced: '2026-10-20',
    testCertStatus: 'Certified'
  },
  {
    batchId: 'TBI-PT-9014',
    heatNumber: 'HT-90142-P',
    grade: 'EN19 / AISI 4140',
    process: 'Peeled & Turned',
    dimensions: 'Ø 50.00 mm × 5m',
    quantityMT: 36.0,
    warehouseLocation: 'Hosur Central Yard (Bay 01)',
    status: 'In Quality Inspection',
    dateProduced: '2026-10-21',
    testCertStatus: 'Pending NDT'
  },
  {
    batchId: 'TBI-CD-5521',
    heatNumber: 'HT-55210-A',
    grade: 'SAE 1018',
    process: 'Cold Drawn',
    dimensions: 'Ø 16.00 mm × 6m',
    quantityMT: 24.0,
    warehouseLocation: 'Coimbatore Hub (Bay 01)',
    status: 'Ready to Dispatch',
    dateProduced: '2026-10-17',
    testCertStatus: 'Certified'
  },
  {
    batchId: 'TBI-CG-8802',
    heatNumber: 'HT-88029-M',
    grade: 'EN8D / C45',
    process: 'Centerless Ground',
    dimensions: 'Ø 20.00 mm × 4m',
    quantityMT: 19.5,
    warehouseLocation: 'Sriperumbudur Plant 1 (Bay 05)',
    status: 'Reserved',
    dateProduced: '2026-10-19',
    testCertStatus: 'Certified'
  }
];

export const MOCK_MTC: MillTestCert = {
  certificateNo: 'MTC-TBI-2026-8841-3.1',
  heatNo: 'HT-88421-V',
  batchNo: 'TBI-CD-8841',
  grade: 'EN8D / BS 970 080M40 (Bright Steel Bar)',
  specification: 'IS 5517 / EN 10277-2 / EN 10204 3.1 Certified',
  dimensions: 'Round Ø 25.00 mm ± 0.052 mm (h9) × 6,000 mm',
  processRoute: 'Electric Induction Melted → Vacuum Degassed → Cold Drawn & Polished',
  dispatchDate: '22-OCT-2026',
  customerRef: 'PO-TBI-2026-8841 (750 kg Consignment)',
  chemicalComposition: [
    { element: 'Carbon', symbol: 'C', standardMin: 0.40, standardMax: 0.48, actual: 0.43, unit: '%', status: 'PASS' },
    { element: 'Silicon', symbol: 'Si', standardMin: 0.10, standardMax: 0.35, actual: 0.22, unit: '%', status: 'PASS' },
    { element: 'Manganese', symbol: 'Mn', standardMin: 0.70, standardMax: 0.90, actual: 0.79, unit: '%', status: 'PASS' },
    { element: 'Phosphorus', symbol: 'P', standardMax: 0.045, actual: 0.021, unit: '%', status: 'PASS' },
    { element: 'Sulphur', symbol: 'S', standardMax: 0.045, actual: 0.016, unit: '%', status: 'PASS' },
    { element: 'Chromium', symbol: 'Cr', standardMax: 0.25, actual: 0.12, unit: '%', status: 'PASS' }
  ],
  mechanicalProperties: [
    { property: 'Yield Strength (Re)', unit: 'MPa', standard: '≥ 440 MPa', actual: 485, status: 'PASS' },
    { property: 'Tensile Strength (Rm)', unit: 'MPa', standard: '650 – 800 MPa', actual: 720, status: 'PASS' },
    { property: 'Elongation (A5)', unit: '%', standard: '≥ 14.0%', actual: 16.8, status: 'PASS' },
    { property: 'Hardness (HBW)', unit: 'HBW', standard: '180 – 225', actual: 204, status: 'PASS' }
  ],
  ndtTesting: [
    { test: 'Ultrasonic Testing (UT)', method: 'EN 10228-3 Class 3', result: '100% Volumetric Integrity — 0 Internal Flaws', status: 'PASS' },
    { test: 'Eddy Current Surface Test', method: 'ASTM E309 Automated', result: 'No Longitudinal or Seam Defects Detected', status: 'PASS' },
    { test: 'Straightness & Ovality', method: 'Optical Laser Micrometer', result: 'Straightness ≤ 0.5 mm/m | h9 Tolerance Verified', status: 'PASS' }
  ]
};

export const DISPATCH_STAGES: DispatchStage[] = [
  {
    id: 1,
    title: 'Order Allocation & Stock Reservation',
    timestamp: '11:15 IST',
    description: '750 kg allocated from Sriperumbudur Bay 04',
    status: 'completed',
    detail: 'Lot #TBI-CD-8841-L4 reserved against PO-TBI-2026-8841'
  },
  {
    id: 2,
    title: 'QA Mill Inspection & MTC Release',
    timestamp: '12:30 IST',
    description: 'EN 10204 3.1 Digital Mill Test Certificate verified',
    status: 'completed',
    detail: 'Heat #HT-88421-V passed all chemical & UT mechanical tests'
  },
  {
    id: 3,
    title: 'Automated Weighbridge & RFID Bundle Tagging',
    timestamp: '13:45 IST',
    description: 'Tare: 14,200 kg | Gross: 14,950 kg | Net: 750 kg',
    status: 'completed',
    detail: '25-bar strapped bundle tagged with encrypted NFC/QR seal'
  },
  {
    id: 4,
    title: 'Dispatch Scheduled & Truck Gate Assigned',
    timestamp: '14:30 IST',
    description: 'Vehicle: TN-20-CZ-4419 (TBI Express Fleet)',
    status: 'active',
    detail: 'Gate 02 cleared. Real-time GPS telematics enabled for JIT arrival.'
  }
];
