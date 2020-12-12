import React from 'react';


const NameViewer = ({data}) => {

  return(
    <div className="form-container">
      <div className="namegen-view">
      {data.map(({word}) => (
        <li key={word}>{word}</li>
      ))}
      </div>
    </div>
  );
};

export default NameViewer;