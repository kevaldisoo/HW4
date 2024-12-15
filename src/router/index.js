import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SignUp from "../views/SignUpView.vue";
import Login from "../views/LoginView.vue";
import Contacts from "../views/ContactView.vue";
import AddPost from '../views/AddPost.vue';
import APost from '../views/APost.vue';
import auth from "../auth";

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    beforeEnter: async(to, from, next) => {
      let authResult = await auth.authenticated();
      if (!authResult) {
          next('/login');
      } else {
          next();
      }
    }
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: SignUp
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/contacts',
    name: 'Contacts',
    component: Contacts
  },
  {
    path: "/api/apost/:id",
    name: "APost",
    component: APost,
    props: true,
    beforeEnter: async(to, from, next) => {
      let authResult = await auth.authenticated();
      if (!authResult) {
          next('/login');
      } else {
          next();
      }
    }
  },
  {
      path: "/api/addpost",
      name: "AddPost",
      component: AddPost,
      beforeEnter: async(to, from, next) => {
        let authResult = await auth.authenticated();
        if (!authResult) {
            next('/login');
        } else {
            next();
        }
      }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
