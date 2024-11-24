<template>
    <div class="post-container">
        <div class="posts-list">
            <Post
                v-for="post in posts"
                :key="post-id"
                :post="post"
                @like-post="likePost"
            />
            <button @click="resetAllLikes" class="reset-likes-button">
                Reset Likes
            </button>
        </div>
         
    </div>
</template>

<script>
import Post from "./Post.vue"; 
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Posts",
  components: {
    Post,
  },
  computed: {
    ...mapGetters({
      posts: "allPosts",
    }),
  },
  methods: {
    ...mapActions(["fetchPosts", "incrementLike", "resetLikes"]),
    likePost(postId) {
      this.incrementLike(postId);
    },
    resetAllLikes() {
      this.resetLikes();
    }
  },
  mounted() {
    this.fetchPosts();
  }
};
</script>

<style>
.post-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
}
.posts-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
  
}
.reset-likes-button {
  padding: 10px;
  background-color: #ff0000;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: 100%;
  max-width: 400px;
  align-self: center;
  margin-top: 20px;
}

.reset-likes-button:hover {
  background-color: #cc0000;
}
</style>