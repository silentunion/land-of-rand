import React from 'react';
import { useState } from 'react';

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState(false);

  const changeBackground = () => {
    if(window.scrollY >= 100) {
      setTitle(true);
    } else {
      setTitle(false);
    };
  };

  window.addEventListener('scroll', changeBackground);

  return <div>
    <nav>
      {title ? <div className="logo">Land of Rand</div> : void 0}
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

export default NavBar;