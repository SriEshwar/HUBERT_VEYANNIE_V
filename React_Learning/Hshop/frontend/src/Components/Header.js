import React, { useContext } from 'react';
import Search from './Search';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { AuthContext } from '../Auth/AuthContext';

export default function Header() {
  const { user, cartItems, logout } = useContext(AuthContext);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link to={"/"} className="navbar-brand">No Discount Shop</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="col-12 col-md-6 mt-2 mt-md-0">
          <Search />
        </div>
        <div>
          <ul className="navbar-nav">
            {user ? (
              <li className="nav-item">
                <span className="nav-link">Hello, {user.name}</span>
              </li>
            ) : (
              <li className="nav-item">
                <Link to="/login" className="nav-link">Login</Link>
              </li>
            )}
            <li className="nav-item">
              <Link to="/cart" className="nav-link">
                <FontAwesomeIcon icon={faCartShopping} />
                <span className="ml-1" id="cart_count">{cartItems.length}</span>
              </Link>
            </li>
            {user && (
              <li className="nav-item">
                <button onClick={logout} className="btn btn-link nav-link">Logout</button>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
