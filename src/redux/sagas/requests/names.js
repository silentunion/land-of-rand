import axios from 'axios';

export function requestGetNames(req) {
    if (req.endpoint === 1){
        return axios.request({
            method: 'GET',
            url: `http://localhost:5000/words/${req.isWeighted}/${req.num}`,
        })
    } else if (req.endpoint === 2) {
        return axios.request({
            method: 'GET',
            url: `http://localhost:5000/words/${req.isWeighted}/${req.num}/${req.template}`,
        })
    }
}