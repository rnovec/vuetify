import axios from 'axios'

const service = axios.create({
    baseURL: 'https://auth.herokuapp.com',
    mode: 'cors',
    credentials: 'same-origin',
    timeout: 20000
})

export default service