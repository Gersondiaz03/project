import { utils, writeFile } from 'xlsx';
import { CalculationResult, Summary } from '../types/calculator';

export const exportToExcel = (results: CalculationResult[], summary: Summary) => {
  // Crear hoja de resultados por producto
  const resultsData = results.map(result => ({
    'Producto': result.product,
    'Unidades Vendidas': result.unitsSold,
    'Costo Materia Prima': result.rawMaterialCostMonth,
    'Costos Variables': result.variableCosts,
    'Ingresos': result.revenue
  }));

  // Crear hoja de resumen
  const summaryData = [{
    'Concepto': 'Costos Fijos Totales',
    'Valor': summary.totalFixedCosts
  }, {
    'Concepto': 'Costos Variables Totales',
    'Valor': summary.totalVariableCosts
  }, {
    'Concepto': 'Ingresos Totales',
    'Valor': summary.totalRevenue
  }, {
    'Concepto': 'Punto de Equilibrio (unidades)',
    'Valor': summary.breakEvenPoint
  }, {
    'Concepto': summary.isProfit ? 'Utilidad' : 'Pérdida',
    'Valor': summary.margin
  }];

  // Crear libro de Excel
  const wb = utils.book_new();
  
  // Agregar hoja de resultados
  const wsResults = utils.json_to_sheet(resultsData);
  utils.book_append_sheet(wb, wsResults, 'Resultados por Producto');
  
  // Agregar hoja de resumen
  const wsSummary = utils.json_to_sheet(summaryData);
  utils.book_append_sheet(wb, wsSummary, 'Resumen General');

  // Guardar archivo
  writeFile(wb, 'punto_equilibrio.xlsx');
};