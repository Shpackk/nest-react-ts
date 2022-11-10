import { WarehouseCard } from './WarehouseCard';
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

type Warehouse = {
  id: number;
  name: string;
}


export function WarehousesHolder() {
  const [isOpen, setIsOpen] = useState(false);
  const [modalMethod, setModalMethod] = useState('');
  const [warehouses, setWarehouses] = useState<Warehouse[]>([])

  const handleModalOpen = () => {
    setIsOpen(true);
  };

  const handleModalClose = () => {
    fetch('http://localhost:3001/warehouse/')
    .then(response => response.json())
    .then(data => setWarehouses(data))
    setIsOpen(false)
  }

  useEffect(() => {
    fetch('http://localhost:3001/warehouse/')
    .then(response => response.json())
    .then(data => setWarehouses(data))
  }, [])


  return (
    <div className='warehouse-holder'>
      <AddWarehouseModal props={{ handleModalClose, isOpen, modalMethod }} />
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
