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
  text-align: justify;
  margin-right: 10px;
}
.error-message li {
  margin-bottom: 5px;
}
  
/* Home page */

.home-page {
    width: 500px;
    margin: 50px auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
    background-color: orangered;
    border-radius: 10px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
}

.feed {
    max-width: 200px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
}

.post {
    margin-bottom: 20px;
    background-color: orange;
    padding: 10px;
    border-radius: 8px;
    border: 1px solid orange;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 50%;
}

.post-header {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
}

.post-profile-pic {
    width: 30px;
    height: 30px;
    background-color: #ccc;
    border-radius: 50%;
    margin-right: 10px;
}

.post-date {
    font-size: 0.9em;
    color: #777;
}

.post-image {
    width: 10%;
    max-width: 300px;
    height: auto;
    border-radius: 8px;
    margin-bottom: 10px;
    align-self: center;
}

.post-text {
    font-size: 1.1em;
    margin-bottom: 10px;
}

.like-button {
    cursor: pointer;
    background-color: #0066cc;
    padding: 10px;
    border-radius: 5px;
    width: 60px;
    color: white;
}

.like-button:hover {
    background-color: #004a99;
}

.post-image + .post-text {
    font-weight: bold;
    color: #333;
}

.post-text ~ .like-button {
    background-color: #0066cc;
    padding: 10px;
    border-radius: 5px;
    width: 40px;
}
.reset-likes-button {
  margin-top: 20px;
  padding: 10px;
  background-color: #ff0000;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  justify-content: right;
}

.reset-likes-button:hover {
  background-color: #cc0000;
}
</style>
