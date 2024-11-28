import { useState } from 'react';
import { Calculator } from 'lucide-react';
import { ProductForm } from './components/ProductForm';
import { ResultsTable } from './components/ResultsTable';
import { Summary } from './components/Summary';
import { ExportButton } from './components/ExportButton';
import { Product } from './types/calculator';
import { getProducts, calculateResults } from './utils/calculator';

function App() {
  const [fixedCosts, setFixedCosts] = useState<number>(0);
  const [products, setProducts] = useState<Product[]>(
    getProducts().map(name => ({
      name,
      unitsSold: 0,
      rawMaterialCost: 0
    }))
  );

  const handleProductChange = (updatedProduct: Product) => {
    setProducts(products.map(p => 
      p.name === updatedProduct.name ? updatedProduct : p
    ));
  };

  const { results, summary } = calculateResults(fixedCosts, products);

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="py-6 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <Calculator className="w-8 h-8 text-blue-600" />
              <h1 className="text-3xl font-bold text-gray-900">
                Calculadora de Punto de Equilibrio
              </h1>
            </div>
            <ExportButton results={results} summary={summary} />
          </div>

          <div className="p-6 mb-8 bg-white rounded-lg shadow-sm">
            <h2 className="mb-4 text-xl font-semibold">Costos Fijos</h2>
            <div className="max-w-md">
              <label className="block text-sm font-medium text-gray-700">
                Total de costos fijos mensuales (COP)
              </label>
              <input
                type="number"
                min="0"
                value={fixedCosts}
                onChange={(e) => setFixedCosts(parseFloat(e.target.value) || 0)}
                className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
                placeholder="Nómina, arriendo, servicios, etc."
              />
            </div>
          </div>

          <div className="p-6 mb-8 bg-white rounded-lg shadow-sm">
            <h2 className="mb-4 text-xl font-semibold">Productos</h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              {products.map((product) => (
                <ProductForm
                  key={product.name}
                  product={product}
                  onChange={handleProductChange}
                />
              ))}
            </div>
          </div>

          <Summary summary={summary} />

          <div className="p-6 mt-8 bg-white rounded-lg shadow-sm">
            <h2 className="mb-4 text-xl font-semibold">Resultados por Producto</h2>
            <ResultsTable results={results} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;