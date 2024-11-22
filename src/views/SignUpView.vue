<template>
  <div class="login-container">
    <h2>Welcome to SignUp</h2>
    <p>Please sign up</p>
    <form @submit.prevent="handleSignup">
      <input 
        type="email" 
        id="email" 
        v-model="email" 
        placeholder="Email" 
        required 
      />
      <input 
        type="password" 
        id="password" 
        v-model="password" 
        placeholder="Password" 
        required 
      />
      <p v-if="passwordError" class="error-message">{{ passwordError }}</p>
      <br />
      <button type="submit" class="login-button">Sign Up</button>
    </form>
    <h3>Forgot password?</h3>
  </div>
</template>

<script>
import { validatePassword } from "../js/signup.js";

export default {
  data() {
    return {
      email: "",
      password: "",
      passwordError: "",
    };
  },
  methods: {
    handleSignup() {
      // Clear previous error
      this.passwordError = "";

      // Validate password
      const validationMessage = validatePassword(this.password);
      if (validationMessage) {
        this.passwordError = validationMessage;
        return; // Stop submission if validation fails
      }

      // Proceed with form submission
      alert("Signup successful!");
    },
  },
};
</script>


<style>
.error-message {
  color: red;
  font-size: 0.9em;
}
</style>
