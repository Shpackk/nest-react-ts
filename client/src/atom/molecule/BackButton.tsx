import { Link } from 'react-router-dom';

export function BackButton() {
  return (
    <Link className='back-button' to={'/warehouse'}>
      BACK
    </Link>
  );
}
