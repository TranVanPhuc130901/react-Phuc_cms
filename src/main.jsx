import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import MenuTop from './compoments/menu/menuTop.jsx';
import './styles/index.css';
import NavbarParent from './compoments/navbar/NavbarParent.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MenuTop />
    <div className='containerNavbar'>
      <NavbarParent />
      <App />
    </div>
  </React.StrictMode>
);