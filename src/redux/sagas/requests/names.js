import axios from 'axios';

export function requestGetNames(isWeighted, num, template) {
    return axios.request({
        method: 'GET',
        url: `http://localhost:5000/words/${isWeighted}/${num}/${template}`,
    })
}