import React, { useState } from 'react';
import tabItems from './tabItems';


const TabItems = ({title, onItemClicked, isActive=false}) => {
  return (
    <div className={isActive ?
      'namegen-tabitem' :
      'namegen-tabitem namegen-tabitem--inactive'} onClick={onItemClicked}>
      <p>{title}</p>
    </div>
  )
};

const Tabs = ({getActiveTab}) => {
  const [active, setActive] = useState(0);

  const handleFormChange = (id, name) => {
    setActive(id);
    return getActiveTab(name);
  };

  return (
    <div className="wrapper-tabs">
      <div className="namegen-tabs">
        {
          tabItems.map(({id, title, name}) => 
          <TabItems 
            key={title}
            title={title}
            onItemClicked={() => handleFormChange(id, name)}
            isActive={active === id} />
        )}
      </div>
    </div>
  )
};

export default Tabs;