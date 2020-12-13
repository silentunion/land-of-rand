import axios from 'axios';

export function requestGetNames(state) {
    const endpoint = state.endpoint;

    let urlEnd = '';
    const num = `num=${state.num}`;
    urlEnd += num;

    if (state.template) { 
        const temp = `&temp=${state.template}`;
        urlEnd += temp };

    let booleans = '&';
    if (state.isWeighted) { booleans += 'w' };
    if (booleans === '&') { booleans = '' };
    urlEnd += booleans;

    return axios.request({
        method: 'GET',
        url: `http://localhost:5000/words/${urlEnd}`,
    });
}