<template>
    <nav class="navbar">
      <button class="category-button"> Browse All Categories <span class="arrow">▼</span></button>
      <div class="hot-deals" @click="goToHeader">
      Hot Deals
    </div>
      <div class="nav-links">
        <router-link v-for="link in links" :key="link.name" :to="link.path">{{ link.name }}</router-link>
      </div>
      <div class="contact-info" style="margin-left: 120px;"> 089 777 088</div>
    </nav>
  </template>
  
  <script>
  export default {
    data() {
      return {
        links: [
          { name: 'Home', path: '/home' },
          { name: 'Food', path: '/food' },
          { name: 'Vegetables', path: '/vegetables' },
          { name: 'Drink', path: '/drink' },
          { name: 'Cookies', path: '/cookies' },
          { name: 'Meat&Seafood', path: '/meat&seafood' },
          { name: 'Bakery', path: '/bakery' },
        ],
      };
    },
    methods: {
    goToHeader() {
      this.$router.push({ name: 'header' }); // Adjust the route name as needed
    },
    browseCategories() {
      // Add functionality for browsing categories if needed
    },
  },
};
  
 
  </script>
  
  <style scoped>
  .navbar {
    display: flex;
    align-items: center;
    background-color: #fff;
    padding: 10px 0px;
    border-bottom: 1px solid #ddd;
  }
  
  .category-button {
    background-color: #25D366; /* Green background */
    color: white;
    border: none;
    border-radius: 5px;
    padding: 10px 15px;
    cursor: pointer;
    font-size: 16px;
    display: flex;
    align-items: center;
  }
  
  .arrow {
    margin-left: 5px;
  }
  
  .hot-deals {
    
    font-weight: bold;
    color: black;
    margin-left: 20px;
  }
  
  .nav-links {
    display: flex;
    margin-left: auto;
  }
  
  .nav-links a {
    margin: 0 15px;
    text-decoration: none;
    color: #333;
  }
  
  .contact-info {
    margin-left: 20px;
    color: #777;
  }
  </style>