
import { CalculationResult } from '../types/calculator';

interface ResultsTableProps {
  results: CalculationResult[];
}

export function ResultsTable({ results }: ResultsTableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
              Producto
            </th>
            <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
              Unidades
            </th>
            <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
              Materia Prima
            </th>
            <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
              Costos Variables
            </th>
            <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
              Ingresos
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {results.map((result) => (
            <tr key={result.product}>
              <td className="px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap">
                {result.product}
              </td>
              <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
                {result.unitsSold.toLocaleString()}
              </td>
              <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
                {result.rawMaterialCostMonth.toLocaleString('es-CO', { style: 'currency', currency: 'COP' })}
              </td>
              <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
                {result.variableCosts.toLocaleString('es-CO', { style: 'currency', currency: 'COP' })}
              </td>
              <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
                {result.revenue.toLocaleString('es-CO', { style: 'currency', currency: 'COP' })}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}