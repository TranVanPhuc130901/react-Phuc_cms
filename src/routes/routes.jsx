import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import IndexProduct from '../compoments/table/product/indexProduct';
import CreateAndEditProduct from '../compoments/table/product/createAndEditProduct';
import LoadAdmin from '../admin';
import DisplayLayout from '../display';
import IndexCategory from '../compoments/table/product/indexCategory';
import CreateAndEditCategory from '../compoments/table/product/createAndEditCategory';

const RootRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/admin" element={<LoadAdmin />}>
        <Route path="product" element={<IndexProduct />} />
        <Route path="createProduct" element={<CreateAndEditProduct />} />
        <Route path="productCategory" element={<IndexCategory />} />
        <Route path="createProductCategory" element={<CreateAndEditCategory />} />
      </Route>
      <Route path="/" element={<DisplayLayout />}>
        {/* <Route path="/admin/product" element={<IndexProduct />} />
        <Route path="createProduct" element={<CreateAndEditProduct />} /> */}
      </Route>
    </Route>
    
  )
);

export default RootRouter;
