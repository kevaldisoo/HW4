<template>
  <div class="login-container">
    <h2>Welcome to Estonia</h2>
    <p>Please sign up</p>
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
      <button @click="SignUp" type="submit" class="login-button">Sign Up</button>
    <h3>Forgot password?</h3>
  </div>
</template>

<script>
import { validatePassword } from "@/js/signup.js";

export default {
  name: "SignUp",
  data() {
    return {
      email: "",
      password: "",
      passwordErrors: [],
    };
  },
  methods: {
    /*
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
  */
  SignUp() {
      var data = {
        email: this.email,
        password: this.password
      };
      // using Fetch - post method - send an HTTP post request to the specified URI with the defined body
      fetch("http://localhost:3000/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
          credentials: 'include', //  Don't forget to specify this if you need cookies
          body: JSON.stringify(data),
      })
      .then((response) => response.json())
      .then((data) => {
      console.log(data);
      this.$router.push("/");
      //location.assign("/");
      })
      .catch((e) => {
        console.log(e);
        console.log("error");
      });
    },
  },
}
</script>
