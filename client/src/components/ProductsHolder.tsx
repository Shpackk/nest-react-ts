import { useParams } from 'react-router-dom';
import { useProducts } from '../hooks/useProducts';
import { ProductCard } from './ProductCard';
import { BackButton } from '../atom/molecule/BackButton';
import { NoProducts } from '../atom/NoProducts';
import { List } from '@mui/material';
import { Loading } from '../atom/molecule/Loading';

export function ProductsHolder() {
  const { id } = useParams<string>();

  const products = useProducts(id);

  if (!products) {
    return <Loading />;
  }

  if (products.length === 0) {
    return <NoProducts />;
  }

  return (
    <>
      <BackButton />
      <List sx={{ width: '100%', maxWidth: 500 }}>
        {products.map((product) => (
          <ProductCard product={product} key={`${product.name}`}/>
        ))}
      </List>
    </>
  );
}
