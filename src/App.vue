<template>
   
  <div class="container">
    <div class="row1">
      <Category v-for="(products, index) in products"
      :key="index"
      :image="products.image"
      :name="products.name"
      :productCount="products.productCount"
      :color="products.color"
      />
    </div>
    <div class="row2">
      <Promotion v-for="(Promotions,second) in Promotions"
      :key="second"
      :image="Promotions.image"
      :color="Promotions.color"
      :title="Promotions.title"
      />
    </div>
  <div class="row3">
  <Popular v-for="(popular,third) in Populars" 
      :key="third"
      :image="popular.image"
      :title="popular.title"
      :price="popular.price"
      :widght="popular.widght"
      :discount="popular.discount"
      :bgColor="popular.bgColor"
      :button="popular.button"
  />
</div>
  </div>
</template>
<script>
import Category from './components/Category.vue';
import Promotion from './components/Promotion.vue';
import Popular from './components/Popular.vue';
import axios from 'axios';
export default{
  name: 'App',
  components: {
    Category,
    Promotion,
    Popular,
  },
  
  data(){
    return{
      products:[
        // {img:'../image/buger.png', title:"Cake & Mile",item:14+"items",bgColor:'#F2FCE4'},
        // {img:'../image/alpha.png', title:"Peach",item:17+"items", bgColor:'#FFFCEB'},
        // {img:'../image/kiwi.png', title:"Oganic Kiwi",item:68+"items", bgColor:'#ECFFEC'},
        // {img:'../image/apple.png', title:"Red Apple",item:34+"items", bgColor:'#FEEFEA'},
        // {img:'../image/snac.png', title:"Snack",item:25+"items", bgColor:'#FFF3EB'},
        // {img:'../image/black bluw.png', title:"Black plum",item:10+"items", bgColor:'#FFF3FF'},
        // {img:'../image/vegatable.png', title:"Vegetable",item:65+"items", bgColor:'#F2FCE4'},
        // {img:'../image/headphone.png', title:"Headphone",item:33+"items", bgColor:'#FFFCEB'},
        // {img:'../image/sack.png', title:"Cake & Mile",item:54+"items", bgColor:'#F2FCE4'},
        // {img:'../image/orange.png', title:"Orange",item:63+"items", bgColor:'#FFF3FF'},
      ],
      Promotions: [], // Array to store fetched promotion data

      // Promotions:[
      //   {bgImage:'../image/background1.jpg',bgColorSecond:'#F0E8D5',TittlePromotion:"Everyday Fresh & Clean with Our Products"},
      //   {bgImage:'../image/background2.png',bgColorSecond:'#F3E8E8',TittlePromotion:"Make your Breakfast Healthy and Easy"},
      //   {bgImage:'../image/background3.jpg',bgColorSecond:'#E7EAF3',TittlePromotion:"The best Organic Products Online"},
      // ],
       Populars:[
        // {Image:'../image/mango.jpg',h4:'Hodo Foods', title:'Seeds of Change Organic Quinoa, Brown, & Red Rice', widght:'500gram', price:'$2.51', discount:'$2.80', button:'< 1 >'},
        // {Image:'../image/corn.png',h4:'Hodo Foods', title:'All Natural Italian-Style Chicken Meatballs', widght:'500gram', price:'$2.51', discount:'$2.80', button:'Add + '},
        // {Image:'../image/orange.png',h4:'Hodo Foods', title:'All Natural Italian-Style Chicken Meatballs', widght:'500gram', price:'$2.51', discount:'$2.80', button:'Add + '},
        // {Image:'../image/chili.png',h4:'Hodo Foods', title:'All Natural Italian-Style Chicken Meatballs', widght:'500gram', price:'$2.51', discount:'$2.80', button:'Add + '},
        // {Image:'../image/lemon.png',h4:'Hodo Foods', title:'All Natural Italian-Style Chicken Meatballs', widght:'500gram', price:'$2.51', discount:'$2.80', button:'Add + '},
 ]
    }
    },
  
  
  methods: {
    async fetchPromotions() {
      try {
         const response = await axios.get('http://localhost:3000/api/promotions');
        this.Promotions = response.data; // Assuming API response structure { Promotions: [...] }
      } catch (error) {
        // console.error('Error fetching promotions:', error);
      }
    },
    async fetchProduct() {
      try {
         const response = await axios.get('http://localhost:3000/api/categories');
        this.products = response.data; // Assuming API response structure { Promotions: [...] }
      } catch (error) {
        // console.error('Error fetching promotions:', error);
      }
    },

  },
  mounted() {
    this.fetchPromotions();
    this.fetchProduct();
  },
}



</script>

<style>
.row3{
  display: flex;
  align-items: center;
  justify-content: center;
}
.Link{
  display: flex;
  justify-content: space-between;
  /* color: rgb(245, 228, 228); */
}
.link,a{
  display:flex;
  /* align-items: end; */
  /* justify-content: space-evenly; */
  margin-right: 1rem;
  margin-top: 10px;
  /* color: aliceblue; */
  
}
h3{
  color: black;
  font-size: 28px;
  margin-top: 10px;
}
body{
  background-color: white;
}
.container{
  width: 75rem;
  height: 30rem;
  background-color: white;
  padding: 1rem;
  /* border-radius: 5px; */
  border: none;
}
.row1{
  width: 100%;
  height: 31%;
  padding: 7px;
  display: flex;
  justify-content: space-between;
}
.row2{
  width: 100%;
  height: 69%;
  /* background-color: rgb(241, 246, 173); */
  display: flex;
  justify-content: space-between;
}
</style>

