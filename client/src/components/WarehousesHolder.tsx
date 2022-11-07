import { WarehouseCard } from './WarehouseCard';
import { useWarehouses } from '../hooks/useWarehouses';
import { Link } from 'react-router-dom';
import './WarehouseHolder.css';
import { List, ListItem } from '@mui/material';

export function WarehousesHolder() {
  const warehouses = useWarehouses();

  return (
    <List sx={{ width: '100%', maxWidth: 500 }}>
      {warehouses.map(({ id, name }) => (
        <Link to={`/warehouse-products/${id}`}>
          <WarehouseCard warehouse={{ id, name }}/>
        </Link>
      ))}
    </List>
  );
}
