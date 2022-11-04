import { useEffect, useState } from 'react';
import { ProductResponse } from '../types/product';

export function useProducts(warehouseId: string | undefined) {
  const [products, setProducts] = useState<ProductResponse>();

  useEffect(() => {
    fetch(`http://localhost:3001/warehouse/${warehouseId}`)
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, [warehouseId]);

  return products?.products;
}
