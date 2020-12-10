import React from 'react';
import { useForm } from 'react-hook-form';

const FormTemplate = ({onceSubmitted, onClickRandom}) => {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      template: "vcvcvc",
      num: 1
    }
  });

  const onSubmit = (data) => {
    onceSubmitted(data);
  };

  const handleEvent = event => {
    onClickRandom(event);
  };

  return(
    <div className="wordform-scrollbox">
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Template:</label>
        <input type="text" name="template" ref={register} />
        <label>Number of Words:</label>
        <input type="number" name="num" min="1" ref={register} />
        <input type="submit" name="Submit" />
      </form>
      <button onClick={handleEvent} className="button-random">
        Completely Random
      </button>
    </div>
  );
};

export default FormTemplate;