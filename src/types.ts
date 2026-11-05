export interface ProductItem {
  id: string;
  grade: string;
  gradeStandard: string;
  category: string;
  shape: 'Round' | 'Hexagonal' | 'Square' | 'Flat';
  dimensions: string;
  tolerance: string;
  surfaceFinish: string;
  availableStockMT: number;
  pricePerMT: number; // in INR
  applications: string[];
  heatNumber: string;
  bayLocation: string;
  featured?: boolean;
}

export interface InventoryItem {
  batchId: string;
  heatNumber: string;
  grade: string;
  process: 'Cold Drawn' | 'Centerless Ground' | 'Peeled & Turned';
  dimensions: string;
  quantityMT: number;
  warehouseLocation: string;
  status: 'Ready to Dispatch' | 'In Quality Inspection' | 'Processing / Peeling' | 'Reserved';
  dateProduced: string;
  testCertStatus: 'Certified' | 'Pending NDT';
}

export interface MillTestCert {
  certificateNo: string;
  heatNo: string;
  batchNo: string;
  grade: string;
  specification: string;
  dimensions: string;
  processRoute: string;
  dispatchDate: string;
  customerRef: string;
  chemicalComposition: {
    element: string;
    symbol: string;
    standardMin?: number;
    standardMax: number;
    actual: number;
    unit: string;
    status: 'PASS';
  }[];
  mechanicalProperties: {
    property: string;
    unit: string;
    standard: string;
    actual: number;
    status: 'PASS';
  }[];
  ndtTesting: {
    test: string;
    method: string;
    result: string;
    status: 'PASS';
  }[];
}

export interface DispatchStage {
  id: number;
  title: string;
  timestamp: string;
  description: string;
  status: 'completed' | 'active' | 'upcoming';
  detail: string;
}

export interface SceneConfig {
  id: number;
  title: string;
  navLabel: string;
  durationSeconds: number;
  badge: string;
}
