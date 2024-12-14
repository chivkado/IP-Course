<template>
  <div>
    <Header />
    <NavBar />
    <NewsletterSubscription />
    <!-- <Menu /> -->
    <div class="container">
      <div class="menu">
        <div class="fture">
          <h1>Featured Categories</h1>
        </div>
        <div class="Item">
          <Group
            v-for="(menuItem, index) in productStore.groups"
            :key="menuItem.id || index"
            :menu="menuItem.menu"
          />
        </div>
      </div>

      <div class="row1">
        <Category
          v-for="(category, index) in productStore.categories"
          :key="category.id || index"
          :image="category.image"
          :name="category.name"
          :product-count="category.productCount"
          :color="category.color"
        />
      </div>

      <div class="row2">
        <Promotion
          v-for="(promotion, index) in productStore.promotions"
          :key="promotion.id || index"
          :image="promotion.image"
          :color="promotion.color"
          :title="promotion.title"
        />
      </div>

      <div class="menu">
        <div class="fture">
          <h1>Popular Products</h1>
        </div>
        <div class="Item">
          <Group
            v-for="(menuItem, index) in productStore.groups"
            :key="menuItem.id || index"
            :menu="menuItem.menu"
          />
        </div>
      </div>

      <div class="row3">
        <Product
          v-for="(product, index) in productStore.products"
          :key="product.id || index"
          :name="product.name"
          :rating="product.rating"
          :image="product.image"
          :size="product.size"
          :price="product.price"
          :promotionAsPercentage="product.promotionAsPercentage"
          :countSold="product.countSold"
          :discount="product.discount"
        />
      </div>
    </div>
  </div>
</template>

<script>
// import NewsletterSubscription from '@/components/NewsletterSubscription.vue';
import Header from '@/components/Header.vue';
import { onMounted } from 'vue';
import Category from '../components/Category.vue';
import Promotion from '../components/Promotion.vue';
import Product from '../components/Product.vue';
import { useProductStore } from '../stores/stores';
import Group from '../components/Group.vue';
// import Menu from './Menu.vue';
import NavBar from '../components/NavBar.vue';
import NewsletterSubscription from '@/components/NewsletterSubscription.vue';

export default {
  name: 'App',
  components: {
    // Menu,
    
    Header,
    NavBar,
    Category,
    Promotion,
    Product,
    Group,
    NewsletterSubscription,
  },
  setup() {
    const productStore = useProductStore();
    
    onMounted(async () => {
      try {
        await Promise.all([
          productStore.fetchGroups(),
          productStore.fetchProducts(),
          productStore.fetchCategories(),
          productStore.fetchPromotions(),
        ]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    });
    
    return {
      productStore,
    };
  },
};
</script>

<style>
.menu {
  display: flex;
  color: black;
  width: 100%;
  height: auto;
}

.fture {
  width: 40%;
  height: auto;
}

.Item {
  width: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.container {
  width: 75rem;
  margin: 0 auto; /* Center the container */
}

.row1,
.row2,
.row3 {
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px; /* Add some space between rows */
  flex-wrap: wrap; /* Ensure items wrap on small screens */
}

.row3 {
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}

h3 {
  color: black;
  font-size: 28px;
  margin-top: 10px;
}

body {
  background-color: white;
}
</style>