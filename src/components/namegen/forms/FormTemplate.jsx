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
    return onceSubmitted(data);
  };

  return(
    <div className="form-container">
      <div className="namegen-form">
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>Template:</label>
          <input type="text" name="template" ref={register} />
          <label>Number of Words:</label>
          <input type="number" name="num" min="1" ref={register} />
          <input type="submit" name="Submit" />
        </form>
      </div>
    </div>
  );
};

export default FormTemplate;