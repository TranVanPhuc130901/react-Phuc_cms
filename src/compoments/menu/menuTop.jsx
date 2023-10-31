import { useState } from 'react';
import StylesHeader from '../../styles/Header.module.css';

const MenuTop = () => {
  const[showSettingUser, setShowSettingUser] = useState(false);
const [showNotification, setShowNotification] = useState(false);
const [areIconsVisible, setAreIconsVisible] = useState(true);
  // ẩn hiện menuSettings
const [showSettings, setShowSettings] = useState(false);
const toggleDropdownSettings = () => {
  setShowSettings(!showSettings);
}
// ẩn hiện box thông báo(notification)
const toggleDropdownNotification = () => {
  setShowNotification(!showNotification);
}

// chức năng full màn hình khi bấm
const handleFullscreenToggle = () => {
  if (document.fullscreenElement) {
    document.exitFullscreen();
  } else {
    document.documentElement.requestFullscreen();
  }
  setAreIconsVisible(!areIconsVisible);
};

// ẩn hiện box setting User
const toggleDropdownUserSetting = () => {
  setShowSettingUser(!showSettingUser);
};
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
          <form className={StylesHeader.header_search}>
            <input type="text" className={StylesHeader.input_search_header} placeholder='search' required/>
            <button type='submit' className={StylesHeader.search_icon}>
              <i className="simple-icon-magnifier"></i>
            </button>
          </form>
        </div>
        <div className={StylesHeader.box_logo_header}>
          <div className={StylesHeader.logo_header}>
            <img src="" alt="" />
          </div>
        </div>
        <div className={StylesHeader.box_header_right}>
          <div className={StylesHeader.box_darkLight} title='Dark Light'>
            <label htmlFor="darkLightToggle" className={StylesHeader.toggleLabel}>
              <input type="checkbox" id="darkLightToggle" className={StylesHeader.toggleInput} />
              <span className={StylesHeader.toggleSlider}></span>
            </label>
          </div>
          <div className={StylesHeader.box_menu_settings_header}>
            <button
              className={StylesHeader.btn_setting_menu}
              type="button"
              id="iconMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              onClick={toggleDropdownSettings}
            >
              <i className="simple-icon-grid"></i>
            </button>
            {showSettings && (
               <div className={StylesHeader.dropdown_menu_header} id="iconMenuDropdown">
               <a href="#" className={StylesHeader.icon_menu_icon}>
                 <i className="iconsminds-equalizer d-block"></i>
                 <span>Settings</span>
               </a>
               <a href="#" className={StylesHeader.icon_menu_icon}>
                 <i className="iconsminds-male-female d-block"></i>
                 <span>Users</span>
               </a>
 
               <a href="#" className={StylesHeader.icon_menu_icon}>
                 <i className="iconsminds-puzzle d-block"></i>
                 <span>Components</span>
               </a>
 
               <a href="#" className={StylesHeader.icon_menu_icon}>
                 <i className="iconsminds-bar-chart-4 d-block"></i>
                 <span>Profits</span>
               </a>
 
               <a href="#" className={StylesHeader.icon_menu_icon}>
                 <i className="iconsminds-file d-block"></i>
                 <span>Surveys</span>
               </a>
 
               <a href="#" className={StylesHeader.icon_menu_icon}>
                 <i className="iconsminds-suitcase d-block"></i>
                 <span>Tasks</span>
               </a>
             </div>
            )}
          </div>
          <div className={StylesHeader.box_notification}>
            <button className={StylesHeader.icon_notification}
            onClick={toggleDropdownNotification}
            >
              <i className="simple-icon-bell"></i>
              <span className={StylesHeader.count_notification}>3</span>
            </button>
            {showNotification && (
               <div className={StylesHeader.dropdown_notification}>
               <a href='#' className={StylesHeader.item_dropdown_notification}>
                   <div className={StylesHeader.wImage}>
                     <img src="https://res.cloudinary.com/dpnlgxwkp/image/upload/v1698736313/Default/vns8uobn6vt00will1dv.jpg" alt="img" />
                   </div>
                   <div className={StylesHeader.info_item_notification}>
                     <p className={StylesHeader.title_item_notification}>Notification title</p>
                     <p className={StylesHeader.time_item_notification}>09.04.2018 - 12:45</p>
                   </div>
               </a>
               <a href='#' className={StylesHeader.item_dropdown_notification}>
                   <div className={StylesHeader.wImage}>
                     <img src="https://res.cloudinary.com/dpnlgxwkp/image/upload/v1698736313/Default/nqilmptigv6dnhbvl8o4.jpg" alt="img 2" />
                   </div>
                   <div className={StylesHeader.info_item_notification}>
                     <p className={StylesHeader.title_item_notification}>Notification title</p>
                     <p className={StylesHeader.time_item_notification}>09.04.2018 - 12:45</p>
                   </div>
               </a>
               <a href='#' className={StylesHeader.item_dropdown_notification}>
                   <div className={StylesHeader.wImage}>
                     <img src="https://res.cloudinary.com/dpnlgxwkp/image/upload/v1698736313/Default/hzahzpvpylqwfjnzn78p.jpg" alt="img 3" />
                   </div>
                   <div className={StylesHeader.info_item_notification}>
                     <p className={StylesHeader.title_item_notification}>Notification title</p>
                     <p className={StylesHeader.time_item_notification}>09.04.2018 - 12:45</p>
                   </div>
               </a>
           </div>
            )}
          </div>
          <button className={StylesHeader.btn_fullScreen}
          onClick={handleFullscreenToggle}
          >
            <i className="simple-icon-size-fullscreen" style={{ display: areIconsVisible ? 'inline' : 'none' }}></i>
          <i className="simple-icon-size-actual" style={{ display: areIconsVisible ? 'none' : 'inline' }}></i>
          </button>
          <div className={StylesHeader.box_user}>
            <div className={StylesHeader.user}
            onClick={toggleDropdownUserSetting}
            >
              <span>Phuc</span>
              <img src="https://res.cloudinary.com/dpnlgxwkp/image/upload/v1698738879/Default/zbospx9tsownsxwgha6e.jpg" alt="avatar" />
            </div>
            {showSettingUser && (
              <div className={StylesHeader.dropdown_user_function}>
              <a href='#' className={StylesHeader.item_user_function}>Account</a>
              <a href='#' className={StylesHeader.item_user_function}>Features</a>
              <a href='#' className={StylesHeader.item_user_function}>History</a>
              <a href='#' className={StylesHeader.item_user_function}>Support</a>
              <a href='#' className={StylesHeader.item_user_function}>Sign out</a>
            </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default MenuTop;
