import { Route, Routes } from 'react-router-dom';
import { WarehousesHolder } from './components/WarehousesHolder';
import { ProductsHolder } from './components/ProductsHolder';


function App() {
  return (
    <Routes>
      <Route path='/warehouse' element={<WarehousesHolder />}></Route>
      <Route
        path='/warehouse-products/:id'
        element={<ProductsHolder />}
      ></Route>
    </Routes>
  );
}

export default App;
