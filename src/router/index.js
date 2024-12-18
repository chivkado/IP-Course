import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import HeaderComponent from '../views/HeaderComponent.vue';
import ProductDetail from '../views/ProductDetail.vue';
// import ProductList from '../components/ProductList.vue';
// import ProductDetail from '../components/ProductDetail.vue';

// Define routes
const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
  },
  {
    path: '/header',
    name: 'header',
    component: HeaderComponent, // Component to render on this route
  },
  {
    path: '/product', // Dynamic route for product details
    name: 'ProductDetail',
    component: ProductDetail,
  },
  // {
  //   path: '/products',
  //   name: 'ProductList',
  //   component: ProductList,
  // },
  // {
  //   path: '/product/:id',
  //   name: 'ProductDetail',
  //   component: ProductDetail,
  // },
];

// Create router instance
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL), // Use BASE_URL for proper routing
  routes,
});


export default router;