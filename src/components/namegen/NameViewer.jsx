import React from 'react';
import { useSelector } from 'react-redux';

const NameViewer = () => {

  const data = useSelector((state) => (state.names.data));

  let renderData;
  if (data) {
    renderData = data.map(({name}) => {
        return <li key={name}>{name}</li>
    })
  }

  return(
    <div className="namegen-view-container">
      <div className="namegen-view">
        {renderData}
      </div>
    </div>
  )
};

export default NameViewer;