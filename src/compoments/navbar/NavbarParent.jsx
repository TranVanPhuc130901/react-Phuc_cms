import { useState } from 'react';
import { MenuCmsData } from '../../datas/MenuCms.jsx';
import { SubMenuCmsData } from '../../datas/SubMenuCms.jsx';
import NavbarStyle from '../../styles/Navbar.module.css';

function NavbarParent() {
    const [activeItem, setActiveItem] = useState(null);

    const handleItemClick = (itemId) => {
        setActiveItem(itemId);
      };

    return ( 
      <ul className={NavbarStyle.list_navbar}>
    {MenuCmsData.map((menuItem) => (
      <li key={menuItem.id} className={`${NavbarStyle.item_navbar} ${activeItem === menuItem.id ? NavbarStyle.active : ''}`}>
        <a className={NavbarStyle.box_item_navbar} href={`#${menuItem.name}`} onClick={() => handleItemClick(menuItem.id)}>
          <i className={menuItem.class}></i>
          <span>{menuItem.name}</span>
        </a>
        {activeItem === menuItem.id && (
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