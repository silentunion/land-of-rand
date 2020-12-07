import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';

const useTypeForm = (callback) => {
    const [inputs, setInputs] = useState([]);

    const handleSubmit = (event) => {
        if (event) {
            event.preventDefault();
        }
        callback();
    };

    const handleInputChange = (event) => {
        event.persist();
        setInputs(inputs => ({...inputs, [event.target.name]:event.target.value}))
    };

    return {handleSubmit, handleInputChange, inputs};
};

const TypeChooser = () => {
    const {inputs, handleInputChange, handleSubmit} = useTypeForm();

    return(
        <form onSubmit={handleSubmit}>
            <label>
                Template:
                <input type="text" name="template" onChange={handleInputChange}/>
            </label>
            <input type="submit" name="Submit" />
        </form>
    );
};

export default TypeChooser;