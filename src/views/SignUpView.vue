<template>
  <div class="login-container">
    <h2>Welcome to Winter Wonderland</h2>
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
      <br/>
      <button @click="SignUp" type="submit" class="login-button">Sign Up</button>
    <h3>Forgot password?</h3>
  </div>
</template>

<script>

export default {
  name: "SignUp",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
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
