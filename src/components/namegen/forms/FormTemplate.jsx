import React from 'react';
import { useForm } from 'react-hook-form';

const FormTemplate = ({onClickTemplate}) => {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      template: "vcvcvc",
      num: 1,
      isWeighted: true,
    }
  });

  const onSubmit = (data) => {
    return onClickTemplate(data);
  };

  return(
    <div className="form-container">
      <div className="namegen-form">
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>Template:</label>
          <br />
          <input type="text" name="template" ref={register} />
          <br />
          <label>Number of Words:</label>
          <br />
          <input type="number" name="num" min="1" ref={register} />
          <br />
          <label>Is Weighted: </label>
          <input type="checkbox" name="isWeighted" ref={register} />
          <br />
          <input type="submit" name="Submit" />
        </form>
      </div>
    </div>
  );
};

export default FormTemplate;