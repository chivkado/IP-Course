<template>
  <div class="container">
    <Header />
    <NavBar />
    <h1>Coke & Milk</h1>
    <div class="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/categories">Categories</router-link>
      <router-link to="/coke-and-milk">Coke & Milk</router-link>
    </div>
  </div>
</template>

<script>
import Header from '../components/Header.vue';
import NavBar from '../components/NavBar.vue';
export default {
  name: 'HeaderComponent',
  components: {
    Header,
    NavBar,
  }
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
 
}

.container {
  margin-top: -20rem;
  display: flex;
  flex-direction: column; 
}
.header, .navbar {
  margin: 0; 
  padding: 0; 
}

h1 {
  color: #0c0c0c;
  font-weight: bold; 
   
}


.nav a {
  /* margin: 0 15px; */
  text-decoration: none;
  color: #555;
  font-weight: bold;
}

.nav a:hover {
  color: #007BFF; 
}
</style>