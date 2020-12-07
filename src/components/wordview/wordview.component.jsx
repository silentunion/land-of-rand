import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';

const WordView = ({template, data}) => {
    // const [data, setData] = useState([]);
    // const [template, setTemplate] = useState('cvcvcvv');
    // const [num, setNum] = useState(10);

    // const changetemplate = (temp) => {
    //     setTemplate(temp)
    //     console.log(template);
    // };

 

    return(
        <div className="wordview-scrollbox">
            {data.map(({word}) => (
                <li key={word}>{word}</li>
            ))}
        </div>
    );
};

export default WordView;