import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    redirect: '/page1',
  },
  {
    path: '/page1',
    name: 'page1',
    component: HomeView,
  },
  {
    path: '/page2',
    name: 'page2',
    component: HomeView,
  },
  {
    path: '/page3',
    name: 'page3',
    component: HomeView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;