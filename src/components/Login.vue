<template>
  <div>
      <h2>Login</h2>
      <form v-on:submit.prevent="onLogin">
          <div class="d-flew">
                <label for="email">Email: </label>
                <input type="email" name="email" id="email" v-model="email">
          </div>
          <div>
              <label for="password">Password: </label>
              <input type="password" name="password" id="password" v-model="password">
          </div>
      <button type="submit">Login</button>
      </form>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return{
            email: '',
            password: ''
        }
    },
    methods:{
        onLogin(){
            let params = {
                email: this.email,
                password: this.password
            }
            axios.post('http://localhost:8000/auth/login',params)
                .then(response => {
                    window.localStorage.setItem('jwtToken',response.data['access_token'])
                    console.log(response)
                })
                .catch(err => console.log(err));
        }
    }
}
</script>

<style>

</style>