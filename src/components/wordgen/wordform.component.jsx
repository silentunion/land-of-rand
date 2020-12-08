import React from 'react';
import { useForm } from 'react-hook-form';

const WordForm = ({onceSubmitted}) => {
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        onceSubmitted(data);
    }

    return(
        <div className="wordview-scrollbox">
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>Template:</label>
                <input type="text" name="template" defaultValue="vcvcv" ref={register} />
                <label>Number of Words:</label>
                <input type="number" name="num" min="1" defaultValue="1" ref={register} />
                <input type="submit" name="Submit" />
            </form>
        </div>
    );
};

export default WordForm;