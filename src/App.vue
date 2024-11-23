<template>
  <nav>
    <router-link to="/">Posts</router-link> |
    <router-link to="/SignUp">Sign up!</router-link>
  </nav>
  <router-view/>
</template>

<script>
import Posts from './views/HomeView.vue';

export default {
  name: 'App',
  components: {
    Posts,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

/* Login page */

.login-container {
    display: flexbox;
    max-width: 400px;
    max-height: 600px;
    margin: 50px auto;
    padding: 10px;
    border-radius: 25px;
    background-color: lightskyblue;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    text-align: center;
}

.login-container h2 {
    margin-bottom: 20px;
}
.login-container h3 {
    font-size: large;
    color: blue;
    margin: 10px 0;
}
.login-container p {
    font-size: large;
    margin-top: 0%;
    margin-bottom: 10px;
}

.login-container label {
    display: block;
    text-align: left;
    margin: 10px 0 5px;
}

.login-container input {
    width: 50%;
    padding: 10px;
    margin-bottom: 15px;
    border: 1px solid #ccc;
    
}

.login-button {
    width: 30%;
    background-color: #00346c;
    color: white;
    border: none;
    padding: 10px;
    cursor: pointer;
    transition: background-color 0.3s;
}

.login-button:hover {
    background-color: #0056b3;  /* Darker shade on hover */
}
.error-message {
  color: red;
  font-size: 0.9em;
}
</style>
