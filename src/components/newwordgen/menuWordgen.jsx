import React from 'react';

import Tabs from './tabs/Tabs'

const WordMenu = ({tabSelector}) => {
  const changeTab = tab => {
    return tabSelector(tab);
  };

  return (
    <div className="word-menu">
      
      {/* <ul>
        <li><a onClick={(e) => changeTab(0)} href="form-random">Random</a></li>
        <li><a onClick={(e) => changeTab(1)} href="form-template">Template</a></li>
      </ul> */}
    </div>
  );
};

export default WordMenu;