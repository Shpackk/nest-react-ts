import { WarehouseCardProps } from '../types/product';
import { ListItem, ListItemText } from '@mui/material';

export function WarehouseCard(props: WarehouseCardProps) {
  const {
    warehouse: { id, name },
  } = props;

  return (
    <>
      <ListItem key={id}>
        <ListItemText primary={name} />
      </ListItem>
    </>
  );
}
