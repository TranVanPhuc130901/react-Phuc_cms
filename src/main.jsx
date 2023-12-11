import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App.jsx';
import MenuTop from './compoments/menu/menuTop.jsx';
import './styles/index.css';
import NavbarParent from './compoments/navbar/NavbarParent.jsx';
import IndexProduct from './compoments/table/product/indexProduct.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
    {/* <Router>
      <MenuTop />
      <div className='containerNavbar'>
        <NavbarParent />
        <Routes>
        <Route path='/admin' element={<App />} />
        <Route path='/*' element={<OtherPage />} />
        </Routes>
      </div>
    </Router> */}
    <App/>
    </Router>
  </React.StrictMode>
);