import React from 'react';

const FormRandom = ({onClickRandom}) => {

  const handleEvent = event => {
    return onClickRandom(event);
  };

  return(
    <div className="form-container">
      <div className="namegen-form">
        <button onClick={handleEvent} className="button-random">
          Completely Random
        </button>
      </div>
    </div>
  );
};

export default FormRandom;