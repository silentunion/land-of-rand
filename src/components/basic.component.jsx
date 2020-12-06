import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';

import testNames from './testNames.json';

export default function BasicText(value) {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios
            .get(`http://localhost:8666/letters`)
            .then((res) => setData(res.data))
    }, []);

    return(
        <div>
            {console.log(data)}
            {data.map(({letter}) => (
                <li key={letter}>{letter}</li>
            ))}
        </div>
    );
}