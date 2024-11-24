<template>
    <div class="post">
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
</template>

<script>
export default {
  name: "Post",
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
  methods: {
    likePost() {
      this.$emit("like-post", this.post.id);
    },
  },
};
</script>
<style>
    .post {
    background-color: rgb(230, 222, 222);
    padding: 10px;
    border-radius: 8px;
    border: 1px solid rgb(255, 255, 255);
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
.post-header p {
    font-size: 1.1em;
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
</style>