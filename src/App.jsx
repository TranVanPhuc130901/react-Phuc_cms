
import IndexProduct from './compoments/table/product/indexProduct.jsx'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './styles/App.css'
import MenuTop from './compoments/menu/menuTop.jsx';
import NavbarParent from './compoments/navbar/NavbarParent.jsx';

function App() {

  return (
    <div>
      <MenuTop/>
      <div className='containerNavbar'>
        <NavbarParent/>
        <Routes>
        <Route path='/admin' element={<IndexProduct />} />
        {/* <Route path='/*' element={<OtherPage />} /> */}
      </Routes>
      </div>
  </div>
  )
}

export default App
