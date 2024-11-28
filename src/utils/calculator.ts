import { Product, CalculationResult, Summary } from '../types/calculator';

const PRODUCTS = [
  "CIRUELA", "CURUBA", "DURAZNO", "FEIJOA", "FRESA",
  "FRUTOS ROJOS", "GUAYABA", "GUANABANA", "LULO", "MORA",
  "MANGO", "MANZANA", "MARACUYA", "PERA", "PIÑA",
  "TOMATE", "TROPICAL", "UVA"
];

export const SELLING_PRICE = 3000;
export const ADDITIONAL_COSTS = 120; // 60 + 60

export const getProducts = () => PRODUCTS;

export const calculateResults = (
  fixedCosts: number,
  products: Product[]
): { results: CalculationResult[], summary: Summary } => {
  let totalVariableCosts = 0;
  let totalRevenue = 0;
  
  const results = products.map(product => {
    const rawMaterialUnitCost = product.unitsSold > 0 
      ? product.rawMaterialCost / product.unitsSold 
      : 0;
      
    const variableCosts = product.unitsSold * (rawMaterialUnitCost + ADDITIONAL_COSTS);
    const revenue = product.unitsSold * SELLING_PRICE;
    
    totalVariableCosts += variableCosts;
    totalRevenue += revenue;
    
    return {
      product: product.name,
      unitsSold: product.unitsSold,
      rawMaterialCostMonth: product.rawMaterialCost,
      variableCosts,
      revenue
    };
  });

  const contributionPerUnit = SELLING_PRICE - (ADDITIONAL_COSTS + 
    (products.reduce((acc, curr) => acc + curr.rawMaterialCost, 0) / 
     products.reduce((acc, curr) => acc + curr.unitsSold, 0) || 0));
  
  const breakEvenPoint = contributionPerUnit > 0 
    ? fixedCosts / contributionPerUnit 
    : Infinity;

  const margin = totalRevenue - (fixedCosts + totalVariableCosts);

  return {
    results,
    summary: {
      totalFixedCosts: fixedCosts,
      totalVariableCosts,
      totalRevenue,
      breakEvenPoint,
      margin: Math.abs(margin),
      isProfit: margin > 0
    }
  };
};