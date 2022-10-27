import { useEffect, useState } from "react";

type Warehouse = {
  id: number;
  name: string;
}


export function useWarehouses() {
  const [warehouses, setWarehouses] = useState<Warehouse[]>([])

  useEffect(() => {
    fetch('http://localhost:3001/warehouse/')
    .then(response => response.json())
    .then(data => setWarehouses(data))
  })

  return warehouses
}