import { WarehouseCard } from './WarehouseCard';
import { useWarehouses } from '../hooks/useWarehouses';
import { Link } from 'react-router-dom';
import './WarehouseHolder.css';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import CloseIcon from '@mui/icons-material/Close';
import { List, ListItem } from '@mui/material';
import Button from '@mui/material/Button';
import { useEffect, useState } from 'react';
import { AddWarehouseModal } from './AddWarehouseModal';

enum ModalMethod {
  POST = 'POST',
  DELETE = 'DELETE',
}

export function WarehousesHolder() {
  const warehouses = useWarehouses();
  const [isOpen, setIsOpen] = useState(false);
  const [modalMethod, setModalMethod] = useState('');

  const handleModalOpen = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {}, []);

  return (
    <div className='warehouse-holder'>
      <AddWarehouseModal props={{ handleModalOpen, isOpen, modalMethod }} />
      <List
        key={`${Date.now().toString()}-list`}
        sx={{ width: '100%', maxWidth: '100vw', position: 'fixed', padding: 0, top: 0, overflowX: 'scroll', maxHeight: '90vh'}}
      >
        {warehouses.map(({ id, name }) => (
          <Link
            style={{ textDecoration: 'none', color: 'black' }}
            to={`/warehouse-products/${id}`}
          >
            <WarehouseCard key={`${name}-card`} warehouse={{ id, name }} />
          </Link>
        ))}
        <ListItem style={{bottom: 0, position: 'fixed', maxHeight: '10vh'}}>
          <Button
            variant='outlined'
            onClick={() => {
              setModalMethod(ModalMethod.POST);
              handleModalOpen();
            }}
            startIcon={<AddCircleIcon color='success' />}
          >
            Add Warehouse
          </Button>
          <Button
            variant='outlined'
            onClick={() => {
              setModalMethod(ModalMethod.DELETE);
              handleModalOpen();
            }}
            startIcon={<CloseIcon color='error' />}
          >
            Delete Warehouse
          </Button>
        </ListItem>
      </List>
    </div>
  );
}
