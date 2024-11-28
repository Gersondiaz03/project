export const formatCurrency = (value: number): string => {
  return value.toLocaleString('es-CO', { 
    style: 'currency', 
    currency: 'COP',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  });
};

export const formatNumber = (value: number): string => {
  return value.toLocaleString('es-CO', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2
  });
};