<template>
    <div class="post-container">
        <button @click="resetAllLikes" class="reset-likes-button">
            Reset Likes
        </button>
        <div v-for="post in posts" :key="post.id" class="post">
          <div class="post-header">
            <div class="user-profile">
            <img v-if="post.profile" :src="post.profile" alt="post-profile-pic" />
            <p class="Username">{{ post.user }}</p>
            </div>
            <p class="post-date"><strong>Date:</strong> {{ post.date }}</p>
          </div>
            <p class="post-text"><strong>Post:</strong> {{ post.post }}</p>
            <img v-if="post.img" :src="post.img" alt="Post Image" />
            <div class="likes">
              <button @click="likePost(post.id)" class="like-button">
                👍
              </button>
            <p>{{ post.likes }} Likes</p>
            </div>
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

.post-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

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
    display: flex;
    gap: 20px;
}

.post {
    background-color: orange;
    padding: 10px;
    border-radius: 8px;
    border: 1px solid orange;
    display: flex;
    flex-direction: column;
    width: 500px;
    margin-bottom: 50px;
}

.post-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
}
.likes {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.user-profile{
  display: flex;
  justify-content: left;
  align-items: center;
}


.post-header img {
    width: 50px;
    height: 50px;
    background-color: #ccc;
    border-radius: 50%;
    margin-right: 10px;
}

.post-date {
    font-size: 0.9em;
    color: #777;
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
    margin-right: 10px;
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
  margin: 20px;
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
