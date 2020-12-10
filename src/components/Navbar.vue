<template>
    <div v-if="!getToken">
        <router-link to="/">Home</router-link>
        <router-link to="/login">Login</router-link>
        <router-link to="/register">Register</router-link>
    </div>
</template>

<script>
export default {
    name: 'Navbar'
}
</script>

<style>
    
</style>