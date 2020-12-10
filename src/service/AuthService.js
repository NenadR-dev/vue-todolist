import axios from 'axios'
import { url } from '../router/urlConfig.js'
import router from '../router/index.js'

export const Login = (credentials) => {
  axios.post(url + '/auth/login', credentials)
    .then(response => {
      setToken(response.data['access_token'])
      router.push({name: 'Home'})
    })
    .catch(err => {
      console.log(err)
    });
}

export const Register = (userData) => {
  axios.post(url + '/api/user', userData)
    .then(response => {
      if(response.status == 201){
        Login({
          email: userData.email,
          password: userData.password
        })
      }
    })
    .catch(err => {
      console.log(err)
    })
}

const setToken = (token) => {
  window.localStorage.setItem('jwtToken', token)
}

export const getToken = () => {
  return window.localStorage.getItem('jwtToken')
}