<template>
  <div class="containe">
    <div class="CardProduct">
      <div class="cardA">{{ discount }}</div>
      <div class="CardT">
        <img :src="image" alt="Product Image" />
      </div>
      <div class="CardB">
        <p class="brand">Hodo Foods</p>
        <h5 class="productname">{{ name }}</h5>
        <p class="icon">
          <fa style="color: gold;" icon="star" v-for="n in 4" :key="n"/>
          <fa icon="star" v-if="rating > 4" />
          <span>({{ rating }})</span>
        </p>
        <p>{{ size }} gram</p>
        <h4>
          ${{ price }} <span class="promotion">${{ promotionAsPercentage }}</span>
        </h4>
        <button type="button" class="butAdd" @click="goToDetail">Add+</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Product",
  props: {
    name: String,
    rating: Number,
    image: String,
    size: String,
    price: Number,
    promotionAsPercentage: Number,
    countSold: String,
    discount: String,
    productId: Number, // Prop for identification
  },
  methods: {
    goToDetail() {
      // Directly navigate to ProductDetail with the product ID
      this.$router.push({ name: 'ProductDetail', params: { id: this.productId } });
    },
  },
};
</script>

<style scoped>
.containe {
  width: 15rem;
  display: inline-block;
}
.CardProduct {
  width: 230px;
  height: 20rem;
  gap: 5px;
  border: 1px solid rgb(89, 94, 88);
  margin-top: 1rem;
  position: relative;
  border-radius: 15px;
}
.cardA {
  width: 18%;
  height: 10%;
  position: absolute;
  top: 6%;
  clip-path: polygon(0% 0%, 60% 0%, 80% 50%, 60% 100%, 0% 100%) gray;
}
.CardT {
  width: 100%;
  height: 50%;
  display: flex; 
  padding: 1rem;
  justify-content: center;
  align-items: center;
}
.CardT img {
  max-width: 100%;
  height: auto;
}
.CardB {
  width: 100%;
  height: 50%;
  padding: 1rem;
}
.brand {
  color: gray;
  font-size: 10px;
}
.icon {
  font-size: 10px;
}
.icon i {
  padding: 2px;
}
.icon span {
  margin-left: 7%;
}
p {
  color: gray;
  font-size: 12px;
}
h4 {
  color: rgb(26, 102, 3);
  font-size: 14px;
  font-weight: bold;
  margin-top: 2%;
}
h4 .promotion {
  color: rgb(57, 58, 56);
  font-size: 9px;
  text-decoration: line-through;
}
.butAdd {
  position: absolute;
  bottom: 15%;
  right: 7%;
  z-index: 10; /* Ensure it's on top */
  border: 0.3px solid rgb(26, 0, 128);
  border-radius: 5px;
  font-size: 11px;
  padding: 3px 10px;
  background-color: rgb(3, 180, 38);
  cursor: pointer; 
  pointer-events: auto; /* Ensure pointer events are enabled */
}
.productname {
  color: black;
  font-size: 13px;
}
</style>