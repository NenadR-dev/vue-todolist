<template>
  <div>
    <form v-on:submit.prevent="onRegister">
      <div>
        <label for="email">Email: </label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter email"
          required
          v-model="email"
        />
      </div>
      <div>
        <label for="fullname"
          >Fullname:
          <input
            type="text"
            name="fullname"
            id="fullname"
            v-model="fullname"
            placeholder="Enter fullname"
            required
        /></label>
      </div>
      <div>
        <label for="password"
          >Password:
          <input
            type="password"
            name="password"
            id="password"
            required
            v-model="password"
            placeholder="Enter password"
        /></label>
      </div>
      <div>
        <label for="confirm-password"
          >Confirm Password:
          <input
            type="password"
            name="confirm-password"
            id="confirm-password"
            v-model="confirmPassword"
            placeholder="Confirm password"
            required
        /></label>
        <p>{{ errors['passwordError'] }}</p>
      </div>
      <div><button type="submit">Register</button></div>
    </form>
  </div>
</template>

<script>
import { Register } from "../service/AuthService.js";
export default {
  data() {
    return {
      email: "",
      fullname: "",
      password: "",
      confirmPassword: "",
      errors: {
          'passwordError' : ''
      },
    };
  },
  methods: {
    onRegister() {
      if (this.Validated()) {
        Register({
          email: this.email,
          name: this.fullname,
          password: this.password,
        });
      }
    },
    Validated() {
      var valid = true;
      if (this.password !== this.confirmPassword) {
        this.errors['passwordError'] = 'Passwords dont match'
        valid = false;
      }
      return valid;
    },
  },
};
</script>

<style></style>
