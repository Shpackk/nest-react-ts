import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export function BackButton() {
  return (
    <Link className='back-button' to={'/warehouse'}>
      <Button
      startIcon={<ArrowBackIcon color='action'/>}
      variant='contained'
      size='large'
      >
      </Button>
    </Link>
  );
}
