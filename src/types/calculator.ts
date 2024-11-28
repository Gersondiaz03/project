export interface Product {
  name: string;
  unitsSold: number;
  rawMaterialCost: number;
}

export interface CalculationResult {
  product: string;
  unitsSold: number;
  rawMaterialCostMonth: number;
  variableCosts: number;
  revenue: number;
}

export interface Summary {
  totalFixedCosts: number;
  totalVariableCosts: number;
  totalRevenue: number;
  breakEvenPoint: number;
  margin: number;
  isProfit: boolean;
}