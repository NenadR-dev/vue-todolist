import axios from 'axios'
import { url } from '../router/urlConfig.js'

export const Login = (credentials) => {
  return axios.post(`${url}/auth/login`, credentials)
    .then(response => {
      setToken(response.data['access_token'])
    })
}

export const Logout = () => {
  axios.post(`${url}/auth/logout`,null,{
    headers:{
      'Authorization' : 'Bearer ' + getToken()
    }
  }).then(() => {
    deleteToken()
  })
}

export const Register = (userData) => {
  axios.post(`${url}/api/user`, userData)
    .then(response => {
      if(response.status == 201){
        Login({
          email: userData.email,
          password: userData.password
        })
      }
    })
}
const deleteToken = () => {
  window.localStorage.removeItem('jwtToken');
}
const setToken = (token) => {
  window.localStorage.setItem('jwtToken', token)
}

export const getToken = () => {
  return window.localStorage.getItem('jwtToken')
}
