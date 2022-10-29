import { WarehouseCard } from './WarehouseCard';
import { useWarehouses } from '../hooks/useWarehouses';
import { Link } from 'react-router-dom';
import './WarehouseHolder.css';

export function WarehousesHolder() {
  const warehouses = useWarehouses();

  return (
    <ul>
      {warehouses.map(({ id, name }) => (
        <Link to={`/warehouse-products/${id}`}>
          <WarehouseCard warehouse={{ id, name }} />
        </Link>
      ))}
    </ul>
  );
}
