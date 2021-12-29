import axios from 'axios';

const path = 'localhost:5000'

const apiReq = axios.create({
    baseURL: path
})

export default apiReq;