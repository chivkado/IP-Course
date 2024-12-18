<template>
  <div class="container">
    <Header />
    <NavBar />
    <h1>Coke & Milk</h1>
    <div class="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/categories">Vegetables & tubers</router-link>
      <router-link to="/Product">Seeds of Change Organic</router-link>
    </div>
    <div>
      <ProductCard
  title="Seeds of Change Organic Quinoa, Brown"
  price="38"
  originalPrice="42"
  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  image="../public/image/staw.png" 
  thumbnail1="../public/image/staww.png" 
  thumbnail2="../public/image/stawww.png" 
  thumbnail3="../public/image/staww.png" 
  :productId="1"
/>
  </div>
</div>
</template>

<script>
import Header from '../components/Header.vue';
import NavBar from '../components/NavBar.vue';
import ProductCard from '../components/ProductCard.vue';
export default {
  name: 'ProductDetail',
  components: {
    Header,
    NavBar,
    ProductCard,
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
  margin-top: -3rem;
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