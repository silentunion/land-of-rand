import React from 'react';

const Navbar = () => {
  return <div>
    <nav>
      <div className="logo">Land of Rand</div>
      <ul className="nav-links">
        <li><a href="home">Home</a></li>
        <li><a href="words">Words</a></li>
        <li><a href="about">About</a></li>
      </ul>
      <i className="nav-burger fas fa-bars" />
    </nav>
  </div>
};

export default Navbar;