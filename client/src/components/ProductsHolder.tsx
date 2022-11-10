import { useParams } from 'react-router-dom';
import { ProductCard } from './ProductCard';
import { BackButton } from '../atom/molecule/BackButton';
import { NoProducts } from '../atom/NoProducts';
import { List } from '@mui/material';
import { Loading } from '../atom/molecule/Loading';
import { AddProductModal } from './AddProductModal';
import { useEffect, useState } from 'react';
import { ProductResponse } from '../types/product';

export function ProductsHolder() {
  const { id } = useParams<string>();
  const [productToUpdate, setProductToUpdate] = useState<string>('');
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [products, setProducts] = useState<ProductResponse>();

  useEffect(() => {
    fetch(`http://localhost:3001/warehouse/${id}`)
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, [id]);

  const handleModalOpen = () => {
      setIsModalOpen(true);
  };

  const handleModalClose = () => {
    fetch(`http://localhost:3001/warehouse/${id}`)
      .then((response) => response.json())
      .then((data) => setProducts(data));
    
      setIsModalOpen(false)
  }

  if (!products?.products) {
    return <Loading />;
  }

  if (products?.products.length === 0) {
    return <NoProducts />;
  }

  return (
    <>
      <BackButton />
      <AddProductModal
        props={{ isModalOpen, productToUpdate, handleModalClose }}
      />
      <List sx={{ width: '100%', maxWidth: 500 }}>
        {products?.products.map((product) => (
          <ProductCard
            product={product}
            key={`${product.name}`}
            setProductToUpdate={setProductToUpdate}
            handleModalOpen={handleModalOpen}
          />
        ))}
      </List>
    </>
  );
}
