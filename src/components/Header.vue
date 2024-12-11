<template>
    <header class="header">
      <h4>Header</h4>
      <nav>
        <router-link to="/page1" class="nav-link" :class="{ active: isActive('page1') }">Page 1</router-link>
        <router-link to="/page2" class="nav-link" :class="{ active: isActive('page2') }">Page 2</router-link>
        <router-link to="/page3" class="nav-link" :class="{ active: isActive('page3') }">Page 3</router-link>
      </nav>
    </header>
  </template>
  
  <script>
  export default {
    name: 'Header',
    props: ['currentPage'],
    methods: {
      isActive(page) {
        return this.currentPage === page;
      },
    },
  };
  </script>
  
  <style>
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #f8f8f8;
    padding: 20px;
    border: 2px solid black;
    margin-top: 20px;
  }
 
  nav {
    display: flex;
  }
  .nav-link {
    margin: 0 10px;
    text-decoration: none; 
    color: #333; 
  }
  .nav-link.active {
    color: white; 
    background-color: red; 
    padding: 5px 10px; 
    border-radius: 5px;
  }
  .nav-link:hover {
    text-decoration: underline;
  }
  </style>