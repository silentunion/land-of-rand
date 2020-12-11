import React from 'react';


const NameViewer = ({data}) => {

  return(
    <div className="namegen-view-scrollbox">
      {data.map(({word}) => (
        <li key={word}>{word}</li>
      ))}
    </div>
  );
};

export default NameViewer;