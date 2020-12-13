import axios from 'axios';

export function requestGetNames(req) {
    if (req.num){
        return axios.request({
            method: 'GET',
            url: `http://localhost:5000/words/${req.isWeighted}/${req.num}/${req.template}`,
        })}
}