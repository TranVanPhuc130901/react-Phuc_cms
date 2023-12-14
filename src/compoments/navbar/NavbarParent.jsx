import { Link } from 'react-router-dom';
import { useState } from 'react';
import { MenuCmsData } from '../../datas/MenuCms.jsx';
import { SubMenuCmsData } from '../../datas/SubMenuCms.jsx';
import NavbarStyle from '../../styles/Navbar.module.css';

function NavbarParent() {
  const [activeItem, setActiveItem] = useState(null);
  const [activeSubItem, setActiveSubItem] = useState(false);

  const handleItemClick = (itemId) => {
    if (activeItem === itemId) {
      setActiveSubItem(!activeSubItem);
    } else {
      setActiveItem(itemId);
      setActiveSubItem(true);
    }
  };
    return ( 
      <ul className={NavbarStyle.list_navbar}>
  {MenuCmsData.map((menuItem) => (
    <li key={menuItem.id} className={`${NavbarStyle.item_navbar} ${activeItem === menuItem.id ? NavbarStyle.active : ''}`}>
      <div className={NavbarStyle.box_item_navbar} onClick={() => handleItemClick(menuItem.id)}>
        <i className={menuItem.class}></i>
        <span>{menuItem.name}</span>
      </div>
      {activeItem === menuItem.id && activeSubItem && (
        <ul className={NavbarStyle.list_subnavbar}>
          {SubMenuCmsData.filter((submenuItem) => submenuItem.parentId === menuItem.id).map((submenuItem) => (
            <li key={submenuItem.id}>
              <a className={NavbarStyle.item_subnavbar} href={`#${submenuItem.name}`}>
                <i className={submenuItem.class}></i>
                <span>{submenuItem.name}</span>
              </a>
            </li>
          ))}
        </ul>
      )}
    </li>
  ))}
  </ul>
    );
}

export default NavbarParent;
