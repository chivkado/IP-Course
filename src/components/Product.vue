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
        <fa style="color: gold;" icon="star"/>
        <fa style="color: gold;" icon="star"/>
        <fa style="color: gold;" icon="star"/>
        <fa style="color: gold;" icon="star"/>
        <fa  icon="star"/>
        <span>({{ rating }})</span>
      </p>
      <p>{{ size }} gram</p>
      <h4>
        ${{ price }} <span class="promotion">${{ promotionAsPercentage }}</span>
      </h4>
      <button type="button" class="butAdd">{{ countSold }}</button>
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

  },
};
</script>

<style scoped>

.containe{
  width: 15rem;
 display: inline-block;
}
.CardProduct {
  width: 230px;
  height: 20rem;
  gap: 5px;
  border: 1px solid rgb(89, 94, 88);
  /* border-radius: 13px; */
  /* padding: 1rem; */
    /* Prevents overflow of elements */
  margin-top: 1rem;
  position: relative;
  border-radius: 15px;

 

}
.cardA{
  
  width: 18%;
  height: 10%;
  /* border: 1px solid gray;
   */
  /* background-color: wheat; */
  position: absolute;
  top: 6%;
  clip-path: polygon(0% 0%, 60% 0%, 80% 50%, 60% 100%, 0%  100%) gray;
}
.CardT {
  width: 100%;
  height: 50%;
  display:flex; 
  padding: 0.4rem;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  border-top: none;
}

.CardT img {
  max-width: 100%; /* Ensures the image fits within the container */
  height: auto;
}

.CardB {
  width: 100%;
  height: 50%;
  
  padding: 0.2rem;
  position: relative;
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
  border: 0.3px solid rgb(26, 0, 128);
  border-radius: 5px;
  font-size: 11px;
  padding: 3px 10px;
  background-color: rgb(3, 180, 38);
  cursor: pointer; 
}
.productname {
  color: black;
  font-size: 13px;
}
</style>