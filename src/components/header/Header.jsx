
import { FaSearch, FaRegBell, FaCog, FaExchangeAlt, FaDoorOpen } from 'react-icons/fa';
import '../header/Header.css';

export const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container-fluid">
        <div className="ms-auto d-flex align-items-center">
          <a href="#" className="header-icon">
            <FaSearch />
          </a>
          <a href="#" className="header-icon">
            <FaRegBell />
          </a>
          <a href="#" className="header-icon">
            <FaCog />
          </a>
          <a href="#" className="header-icon">
            <FaExchangeAlt />
          </a>
          <span className="profile-header me-4 mx-2">John Doe</span>
          <div className="dropdown">
            <a
              href="#"
              className="dropdown-toggle remove-dropdown-arrow"
              id="userDropdown"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <img
                src="https://github.com/mdo.png"
                alt="User Avatar"
                className="rounded-circle header-avatar"
                width="40"
                height="40"
              />
            </a>
            <ul className="dropdown-menu dropdown-menu-end mt-3" aria-labelledby="userDropdown">
              <li>
                <a className="dropdown-item" href="#logout">
                  <div className="d-flex align-items-center">
                    <FaDoorOpen className="me-2" />
                    Salir
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
