<template>
    <div class="footer">
        <p>Copyright &copy; 2024 Group AS</p>
        <h4>Links to the resources of this course</h4>
        <a href="https://ois2.ut.ee/#/courses/LTAT.05.004/version/4db291d6-0997-e142-b9d4-9ee95cdacf20/details" target="_blank" rel="noopener">OIS</a>
        <a href="https://courses.cs.ut.ee/2024/WAD/fall" target="_blank" rel="noopener">Courses</a>
    </div>
</template>

<script>
    export default {
        name: 'Footer',
    }
</script>

<style scoped>
    .footer {
        background: #343a40;
        color: white;
        padding: 10px;
        text-align: center;
        position: static;
        bottom: 0;
        width: 100%;
        gap: 20px;
    }
    a {
        margin: 20px;
        color: orangered;
        text-decoration: none;
    }
</style>