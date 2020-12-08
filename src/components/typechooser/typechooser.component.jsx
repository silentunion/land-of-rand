import React from 'react';
import { useForm } from 'react-hook-form';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';

import wordview from './../wordview/wordview.component';

// const useTypeForm = (callback) => {
//     const [template, setTemplate] = useState([]);

//     const handleSubmit = (event) => {
//         if (event) {
//             event.preventDefault();
//         }
//         return template;
//     };

//     const handleInputChange = (event) => {
//         event.persist();
//         setTemplate(inputs => ({...template, [event.target.name]:event.target.value}))
//     };

//     return {handleSubmit, handleInputChange, template};
// };

const TypeChooser = ({onceSubmitted}) => {
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        onceSubmitted(data);
    }

    return(
        <div className="wordview-scrollbox">
            {/* <button onClick={setTemplate}>Set Template</button> */}
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>Template:</label>
                <input type="text" name="template" ref={register} />
                <label>Number of Words:</label>
                <input type="number" name="num" ref={register} />
                <input type="submit" name="Submit" />
            </form>
        </div>
    );
};

export default TypeChooser;