import AddCircleIcon from '@mui/icons-material/AddCircle';
import { ListItem, IconButton, ListItemText } from '@mui/material';
import { useState } from 'react';
import { Product } from '../types/product';
import { AddProductModal } from './AddProductModal';

export function ProductCard({ product }: { product: Product }) {
  const [isOpen, setIsOpen] = useState(false)
  const { amount, name, id } = product;

  const handleModalOpen = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
    <AddProductModal props={{isOpen, handleModalOpen, productId: id}}/>
      <ListItem
        key={id}
        secondaryAction={
          <IconButton aria-label='comment' onClick={handleModalOpen}>
            <AddCircleIcon></AddCircleIcon>
          </IconButton>
        }
      >
        <ListItemText primary={name} secondary={amount} />
      </ListItem>
    </>
  );
}
