type Product = {
  id: number;
  name: string;
  amount: number;
  price: number;
  productState: () => void;
};

type WarehouseCardProps = {
  warehouse: {
    id: number;
    name: string;
  };
};

type Warehouse = {
  id: number;
  name: string;
};

type ProductResponse = {
  id: number;
  name: string;
  products: Product[];
};

export type { Product, WarehouseCardProps, Warehouse, ProductResponse };
