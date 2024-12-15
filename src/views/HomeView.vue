<template>
    <div class="home-page">
        <header class="home-header">
          <button v-if = "authResult" @click="logout" class="btn">Log out</button>
        </header>
        <div class="posts">
          <div v-for="post in posts" :key="post.id" class="post-item" @click="viewPost(post.id)">
            <div class="post-header">
              <div class="user-profile">
                <p class="Username">{{ post.user }}</p>
              </div>
              <p class="post-date"><strong>Date:</strong> {{ post.created_at }}</p>
            </div>
            <p class="post-text">{{ post.content }}</p>
          </div>
        </div>
        <footer class="home-footer">
          <button @click="navigateToAddPost" class="btn">Add Post</button>
          <button @click="deleteAllPosts" class="btn danger">Delete All</button>
        </footer>
    </div>
</template>

<script>
// @ is an alias to /src
import auth from "../auth";

export default {
  name: "HomeView",
  components: {
  },
   data: function() {
    return {
      posts:[],
      authResult: auth.authenticated()
    }
  },
  methods: {
    logout() {
      fetch("http://localhost:3000/auth/logout", {
          credentials: 'include', //  Don't forget to specify this if you need cookies
      })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        console.log('jwt removed');
        //console.log('jwt removed:' + auth.authenticated());
        this.$router.push("/login");
        //location.assign("/");
      })
      .catch((e) => {
        console.log(e);
        console.log("error logout");
      });
    },
    navigateToAddPost() {
      this.$router.push('/api/addpost'); 
    },

    
    async deleteAllPosts() {
      try {
        const response = await fetch('http://localhost:3000/api/posts/delete-all', { method: 'DELETE' });
        if (response.ok) {
          this.posts = []; 
          alert('All posts have been deleted');
        } else {
          throw new Error('Failed to delete posts');
        }
      } catch (error) {
        console.error('Error deleting all posts:', error);
      }
    },

    
    viewPost(postId) {
      this.$router.push(`api/posts/${postId}`); 
    },
  }, 
  mounted() {
    fetch('http://localhost:3000/api/posts')
    .then((response) => response.json())
    .then(data => this.posts = data)
    .catch(err => console.log(err.message))
  }
};
</script>

<style scoped>
.home-page {
  padding: 20px;
}

.posts {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.post-item {
  background-color: #f8f8f8;
  padding: 10px;
  border-radius: 8px;
  cursor: pointer;
}

.post-header {
  display: flex;
  justify-content: space-between;
}

.user-profile {
  font-weight: bold;
}

.post-text {
  margin-top: 10px;
}

.home-footer {
  margin-top: 20px;
  text-align: center;
}

.btn {
  padding: 10px 20px;
  margin: 5px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
}

.danger {
  background-color: red;
  color: white;
}

.logout {
  background-color: #0066cc;
  color: white;
}

.btn:hover {
  opacity: 0.8;
}
</style>