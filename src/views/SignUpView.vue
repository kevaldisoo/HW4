<template>
  <div class="login-container">
    <h2>Welcome to Estonia</h2>
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
      <ul v-if="passwordErrors.length" class="error-message">
        <li v-for="(error, index) in passwordErrors" :key="index">{{ error }}</li>
      </ul>
      <br/>
      <button type="submit" class="login-button">Sign Up</button>
    </form>
    <h3>Forgot password?</h3>
  </div>
</template>

<script>
import { validatePassword } from "@/js/signup.js";

export default {
  data() {
    return {
      email: "",
      password: "",
      passwordErrors: [],
    };
  },
  methods: {
    handleSignup() {
      // Clear previous error
      this.passwordErrors = [];

      // Validate password
      this.passwordErrors = validatePassword(this.password)
      if(this.passwordErrors.length){
        return;
      }
      
      alert("Signup was successful! YOU ARE NOW ESTONIAN!");
    },
  },
};
</script>
