<template>
    <div class="header">
        <nav>
        <ul>
            <li><router-link to="/">Posts</router-link></li>
            <li><router-link to="/SignUp">Sign up</router-link></li>
        </ul>
        </nav>
    </div>
</template>

<script>
    export default {
        name: 'Header',
    }
</script>

<style scoped>
    .header {
    background: lightskyblue;
    padding: 10px;
    text-align: center;
    }
    nav ul {
    list-style: none;
    padding: 0;
    }
    nav li {
    display: inline;
    margin: 0 10px;
    }
</style>