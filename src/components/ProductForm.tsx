import { Product } from '../types/calculator';

interface ProductFormProps {
  product: Product;
  onChange: (product: Product) => void;
}

export function ProductForm({ product, onChange }: ProductFormProps) {
  return (
    <div className="p-4 mb-4 bg-white rounded-lg shadow-sm">
      <h3 className="mb-3 text-lg font-semibold">{product.name}</h3>
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
            className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
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
            className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>
      </div>
    </div>
  );
}