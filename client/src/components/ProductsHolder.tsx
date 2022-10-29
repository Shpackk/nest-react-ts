import { useParams } from 'react-router-dom';
import { useProducts } from '../hooks/useProducts';
import { ProductCard } from './ProductCard';
import { BackButton } from '../atom/BackButton';
import { NoProducts } from '../atom/NoProducts';

export function ProductsHolder() {
  const { id } = useParams<string>();

  const products = useProducts(id);
  
  if (!products || products.length === 0) {
    return <NoProducts />
  }

  return (
    <>
<BackButton/>
      <ul>
        {products.map((product) => (
          <ProductCard product={product} />
        ))}
      </ul>
    </>
  );
}
