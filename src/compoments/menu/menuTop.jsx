import StylesHeader from '../../styles/Header.module.css';

const MenuTop = () => {
  return (
    <header>
      <div className={StylesHeader.box_header}>
        <div className={StylesHeader.box_header_left}>
          <div className={StylesHeader.icon_header_menu}>
            <svg className={StylesHeader.main} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9 17">
              <rect x="0.48" y="0.5" width="7" height="1"></rect>
              <rect x="0.48" y="7.5" width="7" height="1"></rect>
              <rect x="0.48" y="15.5" width="7" height="1"></rect>
            </svg>
            <svg className={StylesHeader.sub} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 17">
              <rect x="1.56" y="0.5" width="16" height="1"></rect>
              <rect x="1.56" y="7.5" width="16" height="1"></rect>
              <rect x="1.56" y="15.5" width="16" height="1"></rect>
            </svg>
          </div>
          <div className={StylesHeader.header_search}>
            <input type="text" className={StylesHeader.input_search_header} />
            <span className="search-icon">
              <i className="simple-icon-magnifier"></i>
            </span>
          </div>
        </div>
        <div className={StylesHeader.box_logo_header}>
          <div className={StylesHeader.logo_header}>
            <img src="" alt="" />
          </div>
        </div>
        <div className={StylesHeader.box_header_right}>
          <div className={StylesHeader.box_darkLight}>
            <span className={StylesHeader.toggleDarkLight}></span>
          </div>
          <div className={StylesHeader.box_menu_settings_header}>
            <button
              className={StylesHeader.btn_setting_menu}
              type="button"
              id="iconMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i className="simple-icon-grid"></i>
            </button>
            <div className={StylesHeader.dropdown_menu_header} id="iconMenuDropdown">
              <a href="#" className="icon-menu-item">
                <i className="iconsminds-equalizer d-block"></i>
                <span>Settings</span>
              </a>
              <a href="#" className="icon-menu-item">
                <i className="iconsminds-male-female d-block"></i>
                <span>Users</span>
              </a>

              <a href="#" className="icon-menu-item">
                <i className="iconsminds-puzzle d-block"></i>
                <span>Components</span>
              </a>

              <a href="#" className="icon-menu-item">
                <i className="iconsminds-bar-chart-4 d-block"></i>
                <span>Profits</span>
              </a>

              <a href="#" className="icon-menu-item">
                <i className="iconsminds-file d-block"></i>
                <span>Surveys</span>
              </a>

              <a href="#" className="icon-menu-item">
                <i className="iconsminds-suitcase d-block"></i>
                <span>Tasks</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default MenuTop;
