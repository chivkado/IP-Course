<template>
    <router-link :to="{ name: 'header' }" class="card" :style="{ backgroundColor: color }">
        <div class="card-img">
            <img :src="image" :alt="title">
        </div>
        <div class="card-text">
            <h4>{{name }}</h4>
            <p>{{ productCount }}</p>
        </div>
    </router-link>
    <!-- </div> -->
</template>

<script>
export default {
    name: "Category",
    props: {
        id: Number,
        image:String,
        name: String,
        productCount: String,
        color: String
    }
}
</script>

<style  scoped>
    .card{
        color: rgb(198, 56, 56);
        border-radius: 10px;
        border: 1px solid green;
        width: 6.5rem;
        height: 8.5rem;
      
    }
    .card-img{
        width: 100%;
        height: 70%;
        border-radius: 10px;
        
    }
    .card-img img{
        width: 100%;
        height: 100%;
    }
    .card-text{
        width: 100%;
        height: 30%;
        border-radius: 10px;
        padding: 3px;
        color: gray;
        
    }
    .card-text h4{
        display: flex;
        justify-content: center;
        color: black;
        font-size: 13px;
    }
    .card-text p{
        display: flex;
        justify-content: center;
        opacity: 0.8;
        font-size: 9px;
    }
</style>