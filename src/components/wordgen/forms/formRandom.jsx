import React from 'react';

const FormRandom = ({onClickRandom}) => {

  const handleEvent = event => {
    return onClickRandom(event);
  };

  return(
    <div className="wordform-scrollbox">
      <button onClick={handleEvent} className="button-random">
        Completely Random
      </button>
    </div>
  );
};

export default FormRandom;