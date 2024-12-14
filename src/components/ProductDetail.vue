<template>
  <div class="product-list">
    <Product
      v-for="product in products"
      :key="product.id"
      :name="product.name"
      :rating="product.rating"
      :image="product.image"
      :size="product.size"
      :price="product.price"
      :promotionAsPercentage="product.promotionAsPercentage"
      :countSold="product.countSold"
      :discount="product.discount"
      :productId="product.id" 
      @select-product="goToProductDetail"
    />
  </div>
</template>

<script>
import Product from './Product.vue'; // Adjust the path as necessary

export default {
  name: 'ProductDetail',
  components: { Product },
  data() {
    return {
      products: [],
    };
  },
  created() {
    this.fetchProducts();
  },
  methods: {
    async fetchProducts() {
      try {
        const response = await fetch('http://localhost:3000/api/products'); // Adjust to your API
        this.products = await response.json();
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    },
    goToProductDetail(productId) {
      this.$router.push({ name: 'ProductDetail', params: { id: productId } }); // Route to ProductDetail.vue
    },
  },
};
</script>

<style scoped>
.product-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>