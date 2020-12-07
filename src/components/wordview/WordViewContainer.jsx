import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';

import WordView from './wordview.component';

const WordViewContainer = () => (
    <div className="scrollbox">
        <WordView />
    </div>
);

export default WordViewContainer;