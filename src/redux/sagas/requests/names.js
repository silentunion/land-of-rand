import axios from 'axios';

export function requestGetNames(state) {
    const endpoint = state.endpoint;
    if (endpoint === 1){
        return axios.request({
            method: 'GET',
            url: `http://localhost:5000/words/${state.isWeighted}/${state.num}`,
        })
    } else if (endpoint === 2) {
        return axios.request({
            method: 'GET',
            url: `http://localhost:5000/words/${state.isWeighted}/${state.num}/${state.template}`,
        })
    }
}