import React, { useState } from 'react';

import FormRandom from '../forms/FormRandom';
import FormTemplate from '../forms/FormTemplate';


const tabItems = [
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
    <div className="tabitem" onClick={onItemClicked}>
      <p>{title}</p>
    </div>
  )
};

const Tabs = ({getActiveTab}) => {
  const [active, setActive] = useState(0);

  const handleFormChange = (id) => {
    setActive(id);
    return getActiveTab(id);
  };

  return (
    <div>
      <div>
        {
          tabItems.map(({id, title}) => 
          <TabItems 
            key={title}
            title={title}
            onItemClicked={() => handleFormChange(id)}
            isActive={active === id} />
        )}
      </div>
      <div>
        {tabItems.map(({id, title}) => {
          return active === id ? () => handleFormChange(title) : ''
        })}
      </div>
    </div>
  )
};

export default Tabs;