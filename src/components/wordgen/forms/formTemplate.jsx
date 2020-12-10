import React from 'react';
import { useForm } from 'react-hook-form';

const FormTemplate = ({onceSubmitted}) => {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      template: "vcvcvc",
      num: 1
    }
  });

  const onSubmit = (data) => {
    onceSubmitted(data);
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
    </div>
  );
};

export default FormTemplate;