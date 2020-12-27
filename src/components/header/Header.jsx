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
    </div>
  )
};

export default Header;