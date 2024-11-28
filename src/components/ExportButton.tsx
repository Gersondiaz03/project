import React from 'react';
import { FileSpreadsheet } from 'lucide-react';
import { CalculationResult, Summary } from '../types/calculator';
import { exportToExcel } from '../utils/excel';

interface ExportButtonProps {
  results: CalculationResult[];
  summary: Summary;
}

export function ExportButton({ results, summary }: ExportButtonProps) {
  const handleExport = () => {
    exportToExcel(results, summary);
  };

  return (
    <button
      onClick={handleExport}
      className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
    >
      <FileSpreadsheet className="w-5 h-5 mr-2" />
      Exportar a Excel
    </button>
  );
}