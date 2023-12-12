import IndexProduct from './compoments/table/product/indexProduct.jsx';
import CreateAndEditProduct from './compoments/table/product/createAndEditProduct.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MenuTop from './compoments/menu/menuTop.jsx';
import NavbarParent from './compoments/navbar/NavbarParent.jsx';



const LoadAdmin = () => {

  return (
    <div>
      <MenuTop/>
      <div className='containerNavbar'>
        <NavbarParent/>
        <Routes>
            <Route path='/admin/product' element={<IndexProduct />} />
            <Route path='/admin/createProduct' element={<CreateAndEditProduct />} />
      </Routes>
      </div>
  </div>
  )
}

export default LoadAdmin