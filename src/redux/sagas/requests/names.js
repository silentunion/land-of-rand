import axios from 'axios';

export function requestGetNames() {
    return axios.request({
        method: 'GET',
        url: `http://localhost:5000/words/true/10/vcvccvcv`,
    })
}