import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

import WordForm from './wordform.component';
import WordView from './wordview.component';

const WordgenContainer = () => {
    const [data, setData] = useState([]);
    const [words, setWords] = useState([]);

    useEffect(() => {
        if (words.num && words.template) {
            axios
                .get(`http://localhost:5000/words/${words.num}/${words.template}`)
                .then((res) => setData(res.data))
        }
    }, [words]);

    const changeTemplate = (formData) => {
        setWords(formData);
    };

    return (
    <div>
        <WordForm onceSubmitted={(formData) => changeTemplate(formData)} />
        <WordView data={data} />
    </div>
    );
};

export default WordgenContainer;