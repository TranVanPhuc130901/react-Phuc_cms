
import IndexProduct from './compoments/table/product/indexProduct.jsx';
import CreateAndEditProduct from './compoments/table/product/createAndEditProduct.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './styles/App.css'
import MenuTop from './compoments/menu/menuTop.jsx';
import NavbarParent from './compoments/navbar/NavbarParent.jsx';
import LoadAdmin from './admin.jsx';
import DisplayLayout from './display.jsx';


function App() {

  return (
    <div>
      {/* <MenuTop/>
      <div className='containerNavbar'>
        <NavbarParent/>
        <Routes>
            <Route path='/admin/product' element={<IndexProduct />} />
            <Route path='/admin/createProduct' element={<CreateAndEditProduct />} />
      </Routes>
      </div> */}
      <Routes>
        <Route path='/admin' element={<LoadAdmin />} />
        <Route path='/display' element={<DisplayLayout />} />
      </Routes>
  </div>
  )
}

export default App
