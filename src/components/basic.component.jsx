import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

import testNames from './testNames.json';

export default function BasicText(value) {
    const [data, setData] = useState(testNames.names);

    return(
        <div>
            {console.log(data)}
            {data.map(({name}) => (
                <p>{name}</p>
            ))}
        </div>
    );
}