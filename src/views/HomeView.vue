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
