import React, { useState } from 'react';

const tabItems = [
  {
    id: 1,
    title: 'RANDOM',
    content: 'random content',
  },
  {
    id: 2,
    title: 'TEMPLATE',
    content: 'template',
  },
];

const TabItems = ({title, onItemClicked, isActive=false}) => {
  return (
    <div className="tabitem" onClick={onItemClicked}>
      <p>{title}</p>
    </div>
  )
};

const Tabs = () => {
  const [active, setActive] = useState(0);

  return (
    <div>
      <div>
        {
          tabItems.map(({id, title}) => 
          <TabItems 
            key={title}
            title={title}
            onItemClicked={() => setActive(id)}
            isActive={active === id} />
        )}
      </div>
      <div>
        {tabItems.map(({id, content}) => {
          return active === id ? content : ''
        })}
      </div>
    </div>
  )
};

export default Tabs;