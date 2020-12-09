import { createWebHistory, createRouter } from "vue-router";
import Home from "../components/Home.vue";
import Login from "../components/Login.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    beforeEnter: () => {
        if(window.localStorage.getItem('jwtToken') === null){
            return true
        } else {
            console.log("You are already logged in. Redirecting . . .")
            return false
        }
    }
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;