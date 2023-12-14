import { Outlet } from 'react-router-dom';
import MenuTop from './compoments/menu/menuTop.jsx';
import NavbarParent from './compoments/navbar/NavbarParent.jsx';

const LoadAdmin = () => {
  return (
    <div>
      <MenuTop />
      <div className="containerNavbar">
        <NavbarParent />
        <Outlet />
      </div>
    </div>
  );
};

export default LoadAdmin;
