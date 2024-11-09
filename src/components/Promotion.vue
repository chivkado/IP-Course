<template>
    <div  class="Promotion" :style="{backgroundColor: color}">
        <img :src="image" alt="">
        <h2>{{ title }}</h2>
        <!-- <Button @click="shopNow(Promotion)" :buttonText="'Show Now '"/> -->
        <Button id="" @click="shopNow(Promotion)" :buttonText="'Show Now'"  />

    </div>
</template>

<script>
// import { Promotion } from '../../backend/simple_backend/dist/promotion/entities/promotion.entity';
import Button from './Button.vue';
export default {
    name: "Promotion",
    components:{
        Button,
    },
    props:{
        image:String,
        color:String,
        title: String,

    },
    methods: {
        shopNow(){
            alert("Let 's Shop:"+this.title);
        }
    },
}
</script>

<style scoped>
    .Promotion{
    width: 23.5rem;
    height: 16rem;
    background-color: rgb(206, 213, 205);
    margin-top: 2.1rem;
    margin-left: end;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    /* border: 1px solid red; */
    }
    /* .Promotion img{
      
      
      
       
        
    } */
    .Promotion h2{
        color: black;
        position: absolute;
        top: 15%;
        left: 10%;
        width: 50%;
        font-size: 20px ;

    }
    /* .Promotion Button{
        margin-left: 0%;
        
    } */
</style>