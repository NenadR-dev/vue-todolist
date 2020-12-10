
import { createWebHistory, createRouter } from "vue-router";
import Home from "../components/Home.vue";
import Login from "../components/Login.vue";
import Register from "../components/Register.vue";

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
    meta: {
      guest: true
    },
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
    meta: {
      guest: true
    }
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.meta.guest) {
    var token = window.localStorage.getItem('jwtToken');
    if (token) {
      return next({ name: 'Home' })
    } else {
      return next();
    }
  } else {
    next();
  }
})

export default router;