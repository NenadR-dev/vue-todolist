import axios from 'axios'
import {url} from '../router/urlConfig.js'
import { getToken } from './AuthService.js'

const config = {
    headers:{
        'Authorization' : 'Bearer ' + getToken()
    }
}

export const getTodos = () => {
    return axios.get(url+'/api/todo',config)
        .then(response => {
            if(response.status == 200) {
                return response.data
            }
            else{
                return []
            }
        })
        .catch(err => {
            console.log(err);
            return [];
        })
}