<template>
    <div  class="Promotion" :style="{backgroundColor: bgColorSecond}">
        <img :src="bgImage" alt="">
        <h2>{{ TittlePromotion }}</h2>
        <Button :buttonText="'Show Now '"/>

    </div>
</template>

<script>
import Button from './Button.vue';
export default {
    name: "Promotion",
    components:{
        Button,
    },
    props:{
        bgImage:String,
        bgColorSecond:String,
        TittlePromotion: String,

    }
}
</script>

<style scoped>
    .Promotion{
    width: 23.5rem;
    height: 16rem;
    background-color: rgb(62, 169, 45);
    margin-top: 2.1rem;
    margin-left: end;
    border-radius: 20px;
    position: relative;
    }
    .Promotion img{
        width:75%;
        height: 80%;
        object-fit: contain;
        position: absolute;
        right: 0;
        bottom: 0;
        
    }
    .Promotion h2{
        color: black;
        position: absolute;
        top: 15%;
        left: 10%;
        width: 50%;
        font-size: 20px ;

    }

</style>