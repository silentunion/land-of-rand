import React, { useState } from 'react';

const tabItems = [
  {
    id: 0,
    title: 'None',
    name: 'none',
  },
  {
    id: 1,
    title: 'Random',
    name: 'random',
  },
  {
    id: 2,
    title: 'Template',
    name: 'template',
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