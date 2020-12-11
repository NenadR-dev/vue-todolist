<template>
  <div>
      <h2>Login</h2>
      <form v-on:submit.prevent="onLogin">
          <div class="d-flew">
                <label for="email">Email: </label>
                <input type="email" name="email" id="email" v-model="email" required maxlength="50">
          </div>
          <div>
              <label for="password">Password: </label>
              <input type="password" name="password" id="password" v-model="password" required minlength="8" maxlength="50">
          </div>
      <button type="submit">Login</button>
      </form>
  </div>
</template>

<script>
import { Login } from '../service/AuthService.js'
import router from '../router/index.js'
export default {
    data(){
        return{
            email: '',
            password: ''
        }
    },
    methods:{
        async onLogin(){
            await Login({
                email: this.email,
                password: this.password
            })
            router.push({name: 'Home'})
        }
    }
}
</script>

<style>

</style>