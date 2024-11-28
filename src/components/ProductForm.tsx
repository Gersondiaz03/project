import React from 'react';
import { Product } from '../types/calculator';

interface ProductFormProps {
  product: Product;
  onChange: (product: Product) => void;
}

export function ProductForm({ product, onChange }: ProductFormProps) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm mb-4">
      <h3 className="font-semibold text-lg mb-3">{product.name}</h3>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Unidades vendidas
          </label>
          <input
            type="number"
            min="0"
            value={product.unitsSold}
            onChange={(e) => onChange({
              ...product,
              unitsSold: parseInt(e.target.value) || 0
            })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Costo materia prima mensual (COP)
          </label>
          <input
            type="number"
            min="0"
            value={product.rawMaterialCost}
            onChange={(e) => onChange({
              ...product,
              rawMaterialCost: parseFloat(e.target.value) || 0
            })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>
      </div>
    </div>
  );
}