<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/as_logo.png">
    <HomeCompo msg="Welcome to Group AS App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeCompo from '@/components/HomeCompo.vue';

export default {
  name: 'HomeView',
  components: {
    HomeCompo
  }
}
</script>
