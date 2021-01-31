import React from 'react';
import LOR from '../../images/LOR.png';

const Header = () => {
  return (
    <div>
      <header>
        <div className="top-section"></div>
        <div className="main-section">
          <div className="title-container"><img className="title" src={LOR} alt="title" /></div>
          <div className="quote-box"><p>Welcome to the Land of Rand with longer text yes text lots of text...</p></div>      
        </div>
        <div className="bottom-section"></div>
      </header>
    </div>
  )
};

export default Header;