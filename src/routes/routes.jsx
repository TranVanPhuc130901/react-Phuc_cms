import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import IndexProduct from '../compoments/table/product/indexProduct';
import CreateAndEditProduct from '../compoments/table/product/createAndEditProduct';
import LoadAdmin from '../admin';

const RootRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/admin" element={<LoadAdmin />}>
        <Route path="product" element={<IndexProduct />} />
        <Route path="createProduct" element={<CreateAndEditProduct />} />
      </Route>
    </Route>
  )
);

export default RootRouter;
