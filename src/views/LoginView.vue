<template>
    <div class="login-container">
      <h2>Welcome to Estonia</h2>
      <p>Please login or sign up</p>
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
        <br/>
      <button @click="LogIn" type="submit" class="login-button">Login</button>
      </form>
    </br>
      <h3>OR</h3>
    </br>
      <button @click='this.$router.push("/signup")' class="login-button">Signup</button>
      <h3>Forgot password?</h3>
    </div>
  </template>
  
  <script>
 export default {
name: "LogIn", 

data: function() {
    return {
   email: '',
   password: '',
  }
  },
  methods: {
    LogIn() {
      var data = {
        email: this.email,
        password: this.password
      };
      // using Fetch - post method - send an HTTP post request to the specified URI with the defined body
      fetch("http://localhost:3000/auth/login", {
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
      //this.$router.push("/");
      location.assign("/");
      })
      .catch((e) => {
        console.log(e);
        console.log("error");
      });
    },
  }, 
  }
  </script>
  