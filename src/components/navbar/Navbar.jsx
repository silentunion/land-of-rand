import React from 'react';
import { useState } from 'react';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return <div>
    <nav>
      <div className="logo">Land of Rand</div>
      <ul className="nav-links" 
        style={{transform: open ? "translateY(4rem)" : ""}}>
        <li><a href="home">Home</a></li>
        <li><a href="words">Words</a></li>
        <li><a href="about">About</a></li>
      </ul>
      <i onClick={() => setOpen(!open)} className="nav-burger fas fa-bars" />
    </nav>
  </div>
};

export default Navbar;