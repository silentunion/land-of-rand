import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';

import { getNames } from '../../../redux/ducks/names';

const FormRandom = () => {
  const [state, setState] = useState();
  const { register, handleSubmit } = useForm({
    defaultValues: {
      num: 10,
      isWeighted: true,
    }
  });

  const dispatch = useDispatch();
  useEffect(() => {
    if (state) {
      dispatch(getNames(state));
    }
  }, [state]);

  const onSubmit = (data) => {
    setState({...data, endpoint: 1});
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