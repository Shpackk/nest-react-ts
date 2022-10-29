import { Product } from '../types/product';

export function ProductCard({ product }: {product: Product}) {
  const { amount, name, id} = product;
  return (
    <li id={id.toString()}>{`${name} ${amount}`}</li>
  )
}
