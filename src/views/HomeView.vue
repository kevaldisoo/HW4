<template>
  <div>
    <button @click="resetAllLikes" class="reset-likes-button">
        Reset Likes
      </button>
    <div v-for="post in posts" :key="post.id" class="post">
      <p><strong>User: </strong>{{ post.user }}</p>
      <p><strong>Date:</strong> {{ post.date }}</p>
      <p><strong>Post:</strong> {{ post.post }}</p>
      <img v-if="post.img" :src="post.img" alt="Post Image" />
      <button @click="likePost(post.id)" class="like-button">
        👍
      </button>
      <p>{{ post.likes }} Likes</p>
      
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'Posts',
  computed: {
    ...mapGetters({
      posts: 'allPosts'
    }),
  },
  methods: {
    ...mapActions(['fetchPosts', 'incrementLike', 'resetLikes']),
    likePost(postId) {
      this.incrementLike(postId);
    },
    resetAllLikes() {
      this.resetLikes();
    }
  },
  mounted() {
    this.fetchPosts();
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
    justify-content: center;
    padding: 20px;
    background-color: orangered;
    border-radius: 10px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
}

.feed {
    width: 100%;
    padding: 20px;
    display: table-column;
    flex-direction: column;
    gap: 20px;
}

.post {
    background-color: orange;
    padding: 10px;
    border-radius: 8px;
    border: 1px solid orange;
    display: flex;
    flex-direction: column;
    width: 100%;
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
    width: 100%;
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
}

.reset-likes-button:hover {
  background-color: #cc0000;
}
</style>
