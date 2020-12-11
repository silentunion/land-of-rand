import React, { useState } from 'react';

const tabItems = [
  {
    id: 0,
    title: 'None',
  },
  {
    id: 1,
    title: 'Random',
  },
  {
    id: 2,
    title: 'Template',
  },
];

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

  const handleFormChange = (id, title) => {
    setActive(id);
    return getActiveTab(title);
  };

  return (
    <div className="wrapper-tabs">
      <div className="namegen-tabs">
        {
          tabItems.map(({id, title}) => 
          <TabItems 
            key={title}
            title={title}
            onItemClicked={() => handleFormChange(id, title)}
            isActive={active === id} />
        )}
      </div>
    </div>
  )
};

export default Tabs;