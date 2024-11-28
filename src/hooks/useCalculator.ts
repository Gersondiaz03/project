import { useState } from 'react';
import { Product } from '../types/calculator';
import { calculateResults } from '../utils/calculator';
import { PRODUCTS } from '../constants/products';

export function useCalculator() {
  const [fixedCosts, setFixedCosts] = useState<number>(0);
  const [products, setProducts] = useState<Product[]>(
    PRODUCTS.map(name => ({
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

  const results = calculateResults(fixedCosts, products);

  return {
    fixedCosts,
    setFixedCosts,
    products,
    handleProductChange,
    results
  };
}