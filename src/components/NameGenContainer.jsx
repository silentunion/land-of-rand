import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

import TypeChooser from './typechooser/typechooser.component';
import WordView from './wordview/wordview.component';

const NameGenContainer = () => {
    const [data, setData] = useState([]);
    const [words, setWords] = useState([]);

    useEffect(() => {
        fetchData();
    }, [words]);

    const fetchData = () => {
        axios
            .get(`http://localhost:5000/words/${words.num}/${words.template}`)
            .then((res) => setData(res.data))
    };

    const changeTemplate = (formData) => {
        setWords(formData);
    };

    return (
    <div>
        <TypeChooser onceSubmitted={(formData) => changeTemplate(formData)} />
        <WordView data={data} />
    </div>
    );
};

export default NameGenContainer;