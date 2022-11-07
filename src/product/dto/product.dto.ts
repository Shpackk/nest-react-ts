export interface ProductDto {
  name: string;
  amount: number;
  price: number;
}

export interface UpdateProductDto {
  amount?: string;
  price?: string;
}
