import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';

import WordView from './wordview/wordview.component';

export default function WordViewContainer() {
    const [data, setData] = useState([]);

    const template = 'cvccv'
    const num = 6

    useEffect(() => {
        axios
            .get(`http://localhost:5000/words/${template}/${num}`)
            .then((res) => setData(res.data))
    }, []);

    return(
        <div>
            <WordView />
        </div>
    );
}