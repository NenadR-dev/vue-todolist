<template>
    <div>
        <form v-on:submit.prevent='onRegister'>
            <div>
                <label for="email">Email: </label>
                <input type="email" name="email" id="email" placeholder="Enter email" required v-model="email">
            </div>
            <div><label for="fullname">Fullname: <input type="text" name="fullname" id="fullname" v-model="fullname" placeholder="Enter fullname"></label></div>
            <div><label for="password">Password: <input type="password" name="password" id="password" required v-model="password" placeholder="Enter password"></label></div>
            <div><label for="confirm-password">Confirm Password: <input type="password" name="confirm-password" id="confirm-password" v-model="confirmPassword" placeholder="Confirm password"></label></div>
            <div><button type="submit">Register</button></div>
        </form>
    </div>
</template>

<script>
import Axios from 'axios'
import {url} from '../router/urlConfig.js'
export default {
    data(){
        return{
            email: '',
            fullname: '',
            password: '',
            confirmPassword: '',
        }
    },
    methods: {
        onRegister(){
            let payload = {
                email: this.email,
                name: this.fullname,
                password: this.password
            }
            Axios.post(url+'/api/user',payload)
                .then(response => {
                    console.log(response);
                }).catch(err => {
                    console.log(err);
                })
        }
    }
}
</script>

<style>

</style>