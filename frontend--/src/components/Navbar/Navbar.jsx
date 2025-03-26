import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BiUser, BiCart } from 'react-icons/bi';
import './Navbar.css';

function Navbar() {
  const navigate = useNavigate(); // Moved inside the component

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div>
      <nav className="navbar">
        <div className="nav-top">
          <Link to='/'>
            <h2>H&N</h2>
          </Link>
          <div className="search-bar">
            <input type="text" className='search-input' placeholder="Search for products...." />
            <button className="search-btn">Search</button>
          </div>
          <div className="icons">
            <div className="profile-group">
              <BiUser className='icon' />
              <div className="dropdown-menu">
                <Link to='/login'>
                  <p className='dropdown-item'>Account</p>
                </Link>
                <p className='dropdown-item'>Logout</p>
              </div>
            </div>
            <div className="cart-icon" onClick={() => handleNavigation("/cart")}>
              <BiCart className='icon' />
              <span className='cart-count'>0</span>
            </div>
          </div>
        </div>
        <div className="nav-bottom">
          <div className="nav-container">
            <div onClick={() => handleNavigation("/category/Men")} className="navbar-link">Bakkies</div>
            <div onClick={() => handleNavigation("/category/Women")} className="navbar-link">Trucks</div>
            <div onClick={() => handleNavigation("/category/Kids")} className="navbar-link">Tipper</div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
