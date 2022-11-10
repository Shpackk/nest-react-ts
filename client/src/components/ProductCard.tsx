import AddCircleIcon from '@mui/icons-material/AddCircle';
import { ListItem, IconButton, ListItemText } from '@mui/material';

export function ProductCard(props: any) {
  const { amount, name, id } = props.product;

  const handleOnClick = () => {
    props.setProductToUpdate(id)
    props.handleModalOpen()
  }

  return (
    <>
      <ListItem
        key={id}
        secondaryAction={
          <IconButton aria-label='comment' onClick={handleOnClick}>
            <AddCircleIcon></AddCircleIcon>
          </IconButton>
        }
      >
        <ListItemText primary={name} secondary={amount} />
      </ListItem>
    </>
  );
}
