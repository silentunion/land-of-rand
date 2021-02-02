import React from 'react';
import { useState } from 'react';
import LORBrown from '../../images/LOR-brown.png';

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState(false);

  const changeBackground = () => {
    if(window.scrollY >= 150) {
      setTitle(true);
    } else {
      setTitle(false);
    };
  };

  window.addEventListener('scroll', changeBackground);

  return <div>
    <nav>
      {title ? <div className="logo"><img src={LORBrown} alt="logo" /></div> : void 0}
      <ul className="nav-links" 
        style={{transform: open ? "translateY(3rem)" : ""}}>
        <li><a className="nav-button" href="/">Home</a></li>
        <li><a className="nav-button" href="/about">About</a></li>
      </ul>
      <i onClick={() => setOpen(!open)} className="nav-burger fas fa-bars" />
    </nav>
  </div>
};

export default NavBar;