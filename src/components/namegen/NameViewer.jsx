import React from 'react';
import { useSelector } from 'react-redux';

const NameViewer = () => {

  const data = useSelector((state) => (state.names.data));

  let renderData;
  if (data) {
    renderData = data.map(({word}) => {
        return <li key={word}>{word}</li>
    })
    }

  return(
    <div className="form-container">
      <div className="namegen-view">
        {renderData}
      </div>
    </div>
  )
};

export default NameViewer;