import axios from 'axios';

export function requestGetNames(state) {
    const endpoint = state.endpoint;
    console.log(endpoint);

    let urlEnd = '';
    const num = `num=${state.num}`;
    urlEnd += num;

    if (state.template) {
        var temp = state.template;
        temp = `&temp=${temp}`;
        urlEnd += temp };

    let booleans = '&';
    if (state.isWeighted) { booleans += 'w' };
    if (booleans === '&') { booleans = '' };
    urlEnd += booleans;

    console.log(urlEnd);

    return axios.request({
        method: 'GET',
        url: `http://localhost:5000/basic/${urlEnd}`,
    });
}