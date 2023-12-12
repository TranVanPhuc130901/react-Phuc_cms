import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App.jsx';
import './styles/index.css';

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