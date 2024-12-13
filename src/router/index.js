import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SignUp from "../views/SignUpView.vue";
import Login from "../views/LoginView.vue";
import Contacts from "../views/ContactView.vue";

const routes = [
  {
    path: '/',
    name: 'posts',
    component: HomeView,
    beforeEnter: async(to, from, next) => {
      let authResult = await auth.authenticated();
      if (!authResult) {
          next('/login')
      } else {
          next();
      }
  }
  },
  
  {
    path: '/SignUp',
    name: 'signUp',
    component: SignUp
  },
  {
    path: '/Login',
    name: 'login',
    component: Login
  },
  {
    path: '/Contacts',
    name: 'contacts',
    component: Contacts
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
