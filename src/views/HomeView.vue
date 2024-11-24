<template>
    <div class="home-page">
        <Posts />
    </div>
</template>

<script>
import Posts from '@/components/Posts.vue';
import { mapGetters, mapActions } from 'vuex';


export default {
  name: 'HomeView',
  components: {
    Posts
  },
  methods: {
    
  },
  
};
</script>

<style>
  
/* Home page */



.home-page {
    width: 400px;
    margin: 50px auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding: 20px;
    background-color: orangered;
    border-radius: 10px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
}





</style>
