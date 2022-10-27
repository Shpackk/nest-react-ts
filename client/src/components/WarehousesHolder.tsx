import { WarehouseCard } from "./WarehouseCard"
import { useWarehouses } from "../hooks/useWarehouses"
import './WarehouseHolder.css'

export type Warehouse = {
  id: number;
  name: string;
}

export function WarehousesHolder() {

  const warehouses = useWarehouses()

  return (
    <ul>
     {warehouses.map(({id, name}) => <WarehouseCard warehouse={{id, name}} />)}
    </ul>
  );
}