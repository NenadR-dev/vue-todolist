import axios from 'axios'
import {url} from '../router/urlConfig.js'
import { getToken } from './AuthService.js'

var config = {
    headers:{
        'Authorization' : 'Bearer ' + getToken()
    }
}

export const getTodos = () => {
   return getToken() ?  axios.get(`${url}/api/todo`,config)
   .then(response => {
       return response.data
   })
   .catch(() => {
       return [];
   })
   : []
}

export const addTodo = (data) => {
    return axios.post(`${url}/api/todo`,data,config)
        .then(result => {
            return {
                title: result.data.title,
                description: result.data.description,
                priority: result.data.priority,
                completed: result.data.completed
            }
        })
}