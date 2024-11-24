<template>
    <div class="header">
        <img :src="logo" alt="Logo" class="logo" />
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
        props: {
            logo: {
                type: String,
                required: true,
            }
        }
    }
</script>

<style scoped>
    .header {
        background: lightskyblue;
        padding: 10px;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .logo {
        height: 50px;
        border-radius: 0.6em;
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