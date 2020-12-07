import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';

const WordView = () => {
    const [data, setData] = useState([]);

    const template = 'cvccv';
    const num = 20;

    useEffect(() => {
        axios
            .get(`http://localhost:5000/words/${template}/${num}`)
            .then((res) => setData(res.data))
    }, []);

    return(
        <div>
            {console.log(data)}
            {data.map(({word}) => (
                <li key={word}>{word}</li>
            ))}
        </div>
    );
};

export default WordView;