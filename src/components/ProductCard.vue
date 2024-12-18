<template>
   <div class="product-card">
    <div class="pic">
        <div class="picture">
            <img :src="image" alt="Product Image" style="width: 200px;" class="product-image" />

        </div>
      <div class="thumbnail-containe">
        <img :src="thumbnail1" alt="Thumbnail 1" style="width: 100px;  height: 100px; border: 1px solid gray;" class="pic" />
        <img :src="thumbnail2" alt="Thumbnail 2" style="width: 100px;  height: 100px; border: 1px solid gray;" class="pic" />
        <img :src="thumbnail3" alt="Thumbnail 3" style="width: 100px;  height: 100px; border: 1px solid gray;" class="pic" />

      </div>
    </div>
    <div class="title">
      <h2 class="product-title">{{ title }}</h2>
      <p class="product-price">${{ price }} <span class="original-price">${{ originalPrice }}</span></p>
      <p class="product-description">{{ description }}</p>
      <button type="button" class="butAdd" @click="goToDetail">Add to Cart</button>
    </div>

  </div>
 <div class="description">
    <button>description
        
    </button>
    <button>Additional info</button>
    <button>Reviews (3)</button>
 </div>
      
  </template>
  
  <script>
  export default {
    props: {
      title: {
        type: String,
        required: true,
      },
      price: {
        type: Number,
        required: true,
      },
      originalPrice: {
        type: Number,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
      thumbnail1: {
      type: String,
      required: true,
    },
    
     thumbnail2: {
      type: String,
      required: true,
    },
    thumbnail3: {
      type: String,
      required: true,
    },
      image: {
        type: String,
        required: true,
      },
      productId: {
        type: Number,
        required: true,
      },
    },
    methods: {
      goToDetail() {
        this.$router.push({ path: `/product/${this.productId}` });
      }
    }
  }
  </script>
  
  <style scoped>
  .product-card {
    border: 1px solid #ccc;
    padding: 16px;
    border-radius: 8px;
    height: 400px;
    display: flex;
  }
  .pic{
    width: 50%;
    height: 100%;
    
  }
.picture{
    width: 90%;
    height: 70%;
    align-items: center;
    display: flex;
    justify-content: center;
   border-radius: 5px;
    border: 2px solid gray;
}
  .thumbnail-containe{
    width: 90%;
    height: 30%;
    align-items: center;
    display: flex;
    justify-content: center;
    border-radius: 5px;
    border: 1px solid gray;
    
  }
  .description{
    border: 2px solid gray;
    margin-top: 20px;
    border-radius: 5px;
    height: 100px;
   
  }
  /* :hover .pic{
    color: aqua;
    background-color: lightblue;
  } */

  .title{
    width: 50%;
    color: black;
    justify-content: space-around;
    
  }
  .product-image {
    max-width: 100%;
    height: auto;
  }
  
  .product-title {
    font-size: 1.5em;
    margin: 10px 0;
  }
  
  .product-price {
    color: green;
  }
  
  .original-price {
    text-decoration: line-through;
    color: red;
  }
  
  .butAdd {
    background-color: #28a745;
    color: white;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
    border-radius: 4px;
  }
  
  .butAdd:hover {
    background-color: #218838;
  }
  </style>