<template>
  <div class="container">
    <div class="row1">
      <Category v-for="(products, index) in productStore.products"
      :key="index"
      :image="products.image"
      :name="products.name"
      :product-count="products.productCount"
      :color="products.color"
      />
    </div>
    <div class="row2">
      <Promotion v-for="(promotions,second) in productStore.promotions"
      :key="second"
      :image="promotions.image"
      :color="promotions.color"
      :title="promotions.title"
      />
    </div>
    <div class="row3">
      <Products 
        v-for="(product, third) in products" 
        :key="third" 
        :image="product.image" 
        :title="product.title" 
        :price="product.price" 
        :size="product.size" 
        :promotionAsPercentage="product.promotionAsPercentage" 
        :bgColor="product.bgColor" 
        :group="product.group" 
        :countSold="product.countSold" 
        :name="product.name" 
        :categoryId="product.categoryId" 
        :button="product.button" 
      />
    </div>
  </div>
</template>
<script>
import { onMounted } from 'vue';
import Category from './components/Category.vue';
import Promotion from './components/Promotion.vue';
import { useProductStore } from './stores/store';
export default{
  name: 'App',
  components: {
    Category,
    Promotion,
    
  },
  setup(){
    const productStore = useProductStore();
    
    onMounted(async () => {
    await productStore.fetchGroups();
    console.log("Groups:", productStore.groups);

    await productStore.fetchProducts();
    console.log("Products:", productStore.products);

    await productStore.fetchCategories();
    console.log("Categories:", productStore.categories);

    await productStore.fetchPromotions();
    console.log("Promotions:", productStore.promotions);
    });
    return{
      productStore,
    };
  },
};
</script>

<style>
.row3 {
  display: flex;
  align-items: center;
  justify-content: center;
}

.link, a {
  display: flex;
  margin-right: 1rem;
  margin-top: 10px;
}

h3 {
  color: black;
  font-size: 28px;
  margin-top: 10px;
}

body {
  background-color: white;
}

.container {
  width: 75rem;
  height: auto; /* Adjusted for responsiveness */
  background-color: white;
  padding: 1rem;
  border: none;
}

.row1 {
  width: 100%;
  height: auto; /* Adjusted for responsiveness */
  padding: 7px;
  display: flex;
  justify-content: space-between;
}

.row2 {
  width: 100%;
  height: auto; /* Adjusted for responsiveness */
  display: flex;
  justify-content: space-between;
}
</style>

