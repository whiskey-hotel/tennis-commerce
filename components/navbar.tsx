import React from 'react';
import Link from 'next/link';


const Navbar = () => (
  <nav className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
    <Link href=".">
      <a className="nav-link px-2 text-secondary">Apparel</a>
    </Link>
    <Link href="..">
      <a className="nav-link px-2 text-secondary">Rackets</a>
    </Link>
    <Link href="...">
      <a className="nav-link px-2 text-secondary">Shoes</a>
    </Link>
    <Link href="....">
      <a className="nav-link px-2 text-secondary">Accessories</a>
    </Link>
  </nav>
);

export default Navbar;
