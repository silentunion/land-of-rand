import React from 'react';
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

const TypeChooser = ({setTemplate}) => {
    // const [template, setTemplate] = useState("");

    const handleChange = (event, template) => {
        setTemplate(event.target.value);
        return template;
    };

    const handleSubmit = (event, template) => {
        return template;
    };

    return(
        <div className="wordview-scrollbox">
            <button onClick={setTemplate}>Set Template</button>
            {/* <form onSubmit={handleSubmit}>
                <label>
                    Template:
                    <input type="text" name="template" onChange={handleChange}/>
                </label>
                <input type="submit" name="Submit" />
            </form> */}
        </div>
    );
};

export default TypeChooser;