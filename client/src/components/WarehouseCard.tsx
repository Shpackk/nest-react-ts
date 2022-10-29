import { WarehouseCardProps } from '../types/product';

export function WarehouseCard(props: WarehouseCardProps) {
  const {
    warehouse: { id, name },
  } = props;

  return <li id={id.toString()}>{name}</li>;
}
