import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import IndexProduct from '../compoments/table/product/indexProduct';
import CreateAndEditProduct from '../compoments/table/product/createAndEditProduct';
import ProtectedRoute from './rootRouter';
import LoadAdmin from '../admin';
import DisplayLayout from '../display';
import IndexCategory from '../compoments/table/category/indexCategory';
import CreateAndEditCategory from '../compoments/table/category/createAndEditCategory';
import LoginForm from '../compoments/auth/Login';
import IndexUser from '../compoments/table/user/indexUser';
import CreateAndEditUser from '../compoments/table/user/createAndEditUser';

const RootRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/login" element={<LoginForm />} />
      <Route path="/admin/*" element={<LoadAdmin />}>
        {/* <Route index element={<Navigate to="/admin/product" />} /> */}
        <Route  path="product" element={<IndexProduct />} />
        <Route  path="createProduct" element={<CreateAndEditProduct />} />
        <Route  path="productCategory" element={<IndexCategory />} />
        <Route  path="createProductCategory" element={<CreateAndEditCategory />} />
        <Route  path="user" element={<IndexUser />} />
        <Route  path="createUser" element={<CreateAndEditUser />} />
      </Route>
      <Route path="/" element={<DisplayLayout />}>
        {/* <Route path="/admin/product" element={<IndexProduct />} />
        <Route path="createProduct" element={<CreateAndEditProduct />} /> */}
      </Route>
    </Route>
    
  )
);

export default RootRouter;
