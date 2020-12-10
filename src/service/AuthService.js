import axios from 'axios'
import { url } from '../router/urlConfig.js'

export const Login = (credentials) => {

  axios.post(url + '/auth/login', credentials)
    .then(response => {
      setToken(response.data['access_token'])
    })
    .catch(err => {
      console.log(err)
    });
}

const setToken = (token) => {
  window.localStorage.setItem('jwtToken', token)
}