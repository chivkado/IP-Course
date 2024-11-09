<template>
<div class="CarD" >
    <div id="card1">
        <div class="img1"><img :src="Image" alt=""></div>
        <div class="text">
            <h4>{{ h4 }}</h4>
            <h1>{{ title }}</h1>
            <span>
                <fa style="color: gold;" icon="star"/>
                <fa style="color: gold;" icon="star"/>
                <fa style="color: gold;" icon="star"/>
                <fa style="color: gold;" icon="star"/>
                <fa  icon="star"/>
                (4.0)
                
            </span>
            <h4>{{widght}}</h4>
            <div class="price">
                <h1>{{price}}</h1>
                <h4>{{ discount }}</h4>
                <button>{{ button }}</button>
            </div>
        </div>
    </div>
    
</div>
</template>
<script>
export default {
    name: "Popular",
    props: {
        Image:String,
        h4:String,
        title: String,
        widght:String,
        price: String,
        discount: String,
        button:String,
    },
}
</script>
<style>
span{
    display: flex;
    margin-top: 2px;
    color: gray;
    font-size: 10px;
   
}
.CarD{
    display: flex;
    margin-top: 30px;
    align-items: center;
    justify-content: center;
    
}
.Card2{
    display: flex;
    margin-top: 30px;
}
#card1{
    border: 2px solid rgb(21, 115, 85);
    /* background-color: aliceblue; */
    margin-left: 3%;
    width: 233px;
    height: 320px;
    border-radius: 10px;
    object-fit: cover;
    background-color: white;
    align-items: center;
}
.img1 {
    width: 99%;
    height: 50%;
    align-items: center;
    justify-content: center;
    display: flex;
   
}
img{
    width: 60%;
    height: 60%;
   
}
h4{
    font-size: 10px;
    color: gray;

}
h1{
    font-size: 15px;
    font: bold;
    color: black;
}
.price{
    display: flex;
    margin-top: 15px;
    
}
.price h1 {
    color: rgba(13, 192, 82, 0.497);
    font-size: bold ;
}
.price h4 {
    margin-top: 6px;
    margin-left: 10px;
    text-decoration: line-through;
   
    

}
#btn, button{
    margin-left: 30%;
    color: rgba(13, 192, 82, 0.497);
    border: none;
    width: 50px;
   


}
.text{
    width: 90%;
    height: 40%;
    margin: 0 auto;
}
</style>

