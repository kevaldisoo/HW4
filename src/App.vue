<template>
  <nav>
    <router-link to="/">Home</router-link> | 
    <router-link to="/contacts">Contacts</router-link>
  </nav>
  <router-view />
  <Footer :logo="logoPath"></Footer>
</template>

<script>
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    Footer
  },
  data(){
    return{
        logoPath: require('@/assets/as_logo.png')
    }
  }
};
</script>

<style>
html, body {
  height: 100%;
  margin: 0;
  background-color: rgb(46, 46, 187);
  overflow-x: hidden;
  width: 100%;
  background-image: url('https://media1.tenor.com/m/khco1lCOriwAAAAd/christmas-is-coming-christmas-tree.gif');
  background-size: cover;
  background-position: center;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
}

nav {
  padding: 20px;
  background-color: lightblue;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
}

nav a.router-link-exact-active {
  color: orangered;
}

/* Login page */

.login-container {
    max-width: 400px;
    max-height: 600px;
    margin: 30px auto;
    margin-bottom: 30px auto;
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
    
    padding: 20px;
    background-color: rgb(3, 108, 10);
    border-radius: 10px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
    min-height: 50vh;
}
</style>
