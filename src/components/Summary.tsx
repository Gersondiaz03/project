
import { Summary as SummaryType } from '../types/calculator';
import { TrendingUp, TrendingDown } from 'lucide-react';

interface SummaryProps {
  summary: SummaryType;
}

export function Summary({ summary }: SummaryProps) {
  return (
    <div className="p-6 bg-white rounded-lg shadow-sm">
      <h2 className="mb-6 text-2xl font-bold">Resumen General</h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div className="p-4 rounded-lg bg-gray-50">
          <h3 className="text-sm font-medium text-gray-500">Costos Fijos Totales</h3>
          <p className="mt-1 text-xl font-semibold text-gray-900">
            {summary.totalFixedCosts.toLocaleString('es-CO', { style: 'currency', currency: 'COP' })}
          </p>
        </div>
        <div className="p-4 rounded-lg bg-gray-50">
          <h3 className="text-sm font-medium text-gray-500">Costos Variables Totales</h3>
          <p className="mt-1 text-xl font-semibold text-gray-900">
            {summary.totalVariableCosts.toLocaleString('es-CO', { style: 'currency', currency: 'COP' })}
          </p>
        </div>
        <div className="p-4 rounded-lg bg-gray-50">
          <h3 className="text-sm font-medium text-gray-500">Ingresos Totales</h3>
          <p className="mt-1 text-xl font-semibold text-gray-900">
            {summary.totalRevenue.toLocaleString('es-CO', { style: 'currency', currency: 'COP' })}
          </p>
        </div>
        <div className="p-4 rounded-lg bg-gray-50">
          <h3 className="text-sm font-medium text-gray-500">Punto de Equilibrio</h3>
          <p className="mt-1 text-xl font-semibold text-gray-900">
            {summary.breakEvenPoint.toLocaleString()} unidades
          </p>
        </div>
        <div className={`p-4 rounded-lg ${summary.isProfit ? 'bg-green-50' : 'bg-red-50'}`}>
          <div className="flex items-center gap-2">
            <h3 className="text-sm font-medium text-gray-500">
              {summary.isProfit ? 'Utilidad' : 'Pérdida'}
            </h3>
            {summary.isProfit ? (
              <TrendingUp className="w-4 h-4 text-green-500" />
            ) : (
              <TrendingDown className="w-4 h-4 text-red-500" />
            )}
          </div>
          <p className={`mt-1 text-xl font-semibold ${
            summary.isProfit ? 'text-green-700' : 'text-red-700'
          }`}>
            {summary.margin.toLocaleString('es-CO', { style: 'currency', currency: 'COP' })}
          </p>
        </div>
      </div>
    </div>
  );
}