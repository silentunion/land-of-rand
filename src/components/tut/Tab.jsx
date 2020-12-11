import React, { useState } from 'react';

const tabItems = [
  {
    id: 1,
    title: 'STEP 1',
    content: 'step 1 content',
  },
  {
    id: 2,
    title: 'STEP 2',
    content: 'step 2 content',
  },
  {
    id: 3,
    title: 'STEP 3',
    content: 'step 3 content',
  },
  {
    id: 4,
    title: 'STEP 4',
    content: 'step 4 content',
  },
  ];

const TabsComponent = () => {
  const [active, setActive] = useState(0);

  return (
    <div className="wrapper">
      <div className="tabs">
        {tabItems.map(({id, title}) => 
          <TabItemComponent
            key={title}
            title={title}
            onItemClicked={() => setActive(id)}
            isActive={active === id} />
        )}
      </div>
      <div>
        {tabItems.map(({ id, content }) => {
          return active === id ? content : ''
        })}
      </div>
    </div>
  )
};

const TabItemComponent = ({
  title = '',
  onItemClicked = () => console.error('You pass no action to the component'),
  isActive = false,
}) => {
  return (
    <div className={isActive ? 'tabitem' : 'tabitem tabitem--inactive'}
      onClick={onItemClicked}>
        <p className="tabitem__title">{title}</p>
    </div>
  )
};

export default TabsComponent;