import { BackButton } from './molecule/BackButton';
import './NoProducts.css';

export function NoProducts() {
  return (
    <>
      <BackButton />
      <div className='no-products-div'>No Products</div>
    </>
  );
}
