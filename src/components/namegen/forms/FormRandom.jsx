import React from 'react';
import { useForm } from 'react-hook-form';

const FormRandom = ({onClickRandom}) => {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      num: 1,
      isWeighted: true,
    }
  });

  const onSubmit = (data) => {
    return onClickRandom(data);
  };

  return(
    <div className="form-container">
      <div className="namegen-form">
        <form onSubmit={handleSubmit(onSubmit)}>
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

export default FormRandom;