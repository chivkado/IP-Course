<template>
    <header class="header">
      <div class="logo">
        <img src="../assets/fruit-removebg.png" alt="Mart & Grocery" />
        <span class="title">Fruit</span>
      </div>
      <div class="search-containe">
        <select class="category-dropdown">
          <option>All Categories</option>
          <option>Food</option>
          <option>Vegetables</option>
          <option>Drink</option>
          <option>Cookies</option>
          <option>Meat&Seafood</option>
          <option>Bakery</option>
        </select>
        <input type="text"  placeholder="Search for items"  class="search-input" />
      </div>
      <div class="user-icons">
    <span class="icon"><i class="material-icons">account_circle</i></span> <!-- Account -->
    <span class="icon"><i class="material-icons">shopping_cart</i></span> <!-- Cart -->
    <span class="icon"><i class="material-icons">favorite</i></span> <!-- Wishlist -->
</div>
    </header>
  </template>
  
  <script>
  export default {
    name: 'Header',
  };
  </script>
  
  <style scoped>
  .title{
    font-family: 'Quicksand';
    font-size:  20px;
    color: green;
  }
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1px 0px;
    color: black;
    background-color: #fff;
    border-bottom: 1px solid #ddd;
  }
  
  .logo {
    display: flex;
    align-items: center;
    width: 100px;
  }
  
  .logo img {
    width: 60%; /* Adjust logo size */
    margin-right: 10px;
  }
  
  .search-containe {
    display: flex;
    align-items: center;
    
  }
  
  .category-dropdown {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
    margin-right: 10px;
  }
  
  .search-input {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
  
  .user-icons .icon {
    margin-left: 20px;
    font-size: 13px;
    cursor: pointer;
    color: black;
  }
  </style>