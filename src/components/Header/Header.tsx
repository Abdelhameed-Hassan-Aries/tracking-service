import './Header.scss';
import {useState} from 'react';
import {NavLink} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';

const bars = <FontAwesomeIcon icon={faBars} color="red" size="lg" />;

const Header = () => {
  const rightNavElements = [
    {
      to: '/sales',
      className: `{({ isActive }) => (isActive ? "active" : "")}`,
      routeName: 'كلم المبيعات',
    },
    {
      to: '/prices',
      className: `{({ isActive }) => (isActive ? "active" : "")}`,
      routeName: 'الأسعار',
    },
    {
      to: '/home',
      className: `{({ isActive }) => (isActive ? "active" : "")}`,
      routeName: 'الرئيسية',
    },
  ];

  const leftNavElements = [
    {
      to: '/login',
      className: `{({ isActive }) => (isActive ? "active" : "")}`,
      routeName: 'تسجيل الدخول',
    },
    {
      to: '/',
      className: `{({ isActive }) => (isActive ? "active" : "")}`,
      routeName: 'تتبع شحنتك',
    },
  ];

  const [openNav, setOpenNav] = useState(false);

  const openNavBar = () => {
    setOpenNav(!openNav);
  };

  return (
    <header>
      <div className="header-container">
        <div className="bars-menu" onClick={openNavBar}>
          {bars}
        </div>
        <div className={`left-right-container ${openNav ? 'open-nav' : ''}`}>
          <div className="left-nav-container">
            <div className="lang-selector">ENG</div>
            <ul>
              {leftNavElements.map((navElement, i) => {
                return (
                  <li key={i}>
                    <NavLink
                      to={navElement.to}
                      className={navElement.className}
                      onClick={() => setOpenNav(false)}
                    >
                      {navElement.routeName}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="right-nav-container">
            <ul>
              {rightNavElements.map((navElement, i) => {
                return (
                  <li key={i}>
                    <NavLink
                      to={navElement.to}
                      className={navElement.className}
                      onClick={() => setOpenNav(false)}
                    >
                      {navElement.routeName}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="img-container">
          <img
            src="https://bosta.co/wp-content/uploads/2019/08/Component.svg"
            alt="logo"
          />
        </div>
      </div>
      <div className="split-line"></div>
    </header>
  );
};

export default Header;
