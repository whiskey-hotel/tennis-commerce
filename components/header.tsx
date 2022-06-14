import React from 'react';
import Navbar from './navbar';
import styles from '../styles/icons.module.css';

const Header = () => (
  <div>
    <header className="p-3 mb-3 border-bottom">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start justify-items-center">
          <h3>Tennis Shop</h3>
          <Navbar />
          {/* prettier-ignore */}
          <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
            <input type="search" className="form-control form-control-dark" placeholder="Search..." aria-label="Search" />
          </form>
          <div className="text-end">
            <i className={`bi bi-heart-fill text-danger me-3 ${styles.icons}`} />
            <i className={`bi bi-cart3 me-3 ${styles.icons}`} />
            <button type="button" className="btn btn-outline-dark me-2">
              Login
            </button>
            <button type="button" className="btn btn-secondary">
              Sign-up
            </button>
          </div>
        </div>
      </div>
    </header>
  </div>
);

export default Header;
