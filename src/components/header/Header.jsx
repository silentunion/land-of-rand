import React, { useState } from 'react';

const Header = () => {
  const [open, setOpen] = useState(false);


  return (
    <div>
      <header>
        <div className="top-section"></div>
        <div className="main-section">
          <div className="title"><h1>Land of Rand</h1></div>
          <div className="quote-box"><p>Some random quote</p></div>      
        </div>
        <div className="bottom-section"></div>
      </header>
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
  )
};

export default Header;