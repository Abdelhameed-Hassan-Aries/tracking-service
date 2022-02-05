import './Header.scss';
import {NavLink} from 'react-router-dom';

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
  return (
    <header>
      <div className="header-container">
        <div className="left-nav-container">
          <div className="lang-selector">ENG</div>
          <ul>
            {leftNavElements.map((navElement, i) => {
              return (
                <li key={i}>
                  <NavLink to={navElement.to} className={navElement.className}>
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
                  <NavLink to={navElement.to} className={navElement.className}>
                    {navElement.routeName}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="img-container">
          <img
            src="https://bosta.co/wp-content/uploads/2019/08/Component.svg"
            alt="logo"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
