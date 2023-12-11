import { Link } from 'react-router-dom';
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
            <li
              key={menuItem.id}
              className={`${NavbarStyle.item_navbar} ${
                activeItem === menuItem.id ? NavbarStyle.active : ''
              }`}
            >
              <Link
                className={NavbarStyle.box_item_navbar}
                to={`/${menuItem.name}`}
                onClick={() => handleItemClick(menuItem.id)}
              >
                <i className={menuItem.class}></i>
                <span>{menuItem.name}</span>
              </Link>
              {activeItem === menuItem.id && (
                <ul className={NavbarStyle.list_subnavbar}>
                  {SubMenuCmsData.filter(
                    (submenuItem) => submenuItem.parentId === menuItem.id
                  ).map((submenuItem) => (
                    <li key={submenuItem.id}>
                      <Link
                        className={NavbarStyle.item_subnavbar}
                        to={`/${submenuItem.name}`}
                      >
                        <i className={submenuItem.class}></i>
                        <span>{submenuItem.name}</span>
                      </Link>
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