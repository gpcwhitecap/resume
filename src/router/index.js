import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../view/home/home.vue';

const routerHistory = createWebHashHistory();

const router = createRouter({
  history: routerHistory,
  routes: [
    {
      path: '/',
      component: Home,
    },
  ],
});

export default router;
