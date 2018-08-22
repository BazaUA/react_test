import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <nav>
    <Link className="sticky" to="/">Home</Link>
  </nav>
);

export default Header;
