<template>
    <div v-if="!getToken">
        <router-link to="/">Home</router-link>
        <router-link to="/login">Login</router-link>
        <router-link to="/register">Register</router-link>
        <button @click="userLogout">Logout</button>
    </div>
</template>

<script>
import {Logout} from '../service/AuthService.js'
export default {
    name: 'Navbar',
    methods: {
        userLogout(){
            Logout()
        }
    }

}
</script>

<style>
    
</style>