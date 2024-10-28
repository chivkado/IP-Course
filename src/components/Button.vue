<template>
    <button class="shop-button">
        {{ buttonText }} <i class="bi bi-arrow-right"></i></button>
</template>

<script>
export default {
    // name: "Button",
        props: {
            buttonText: {
                type: String,
                Required: true,
            },
    },
}
</script>

<style  scoped>
    .shop-button{
        width: 100px;
        height: 30px;
        background-color: #3b4cb7;
        border-radius: 5px;
        font-size: 13px;
        color: white;
        margin-top: 45%;
        position: absolute;
        border: none;
        margin-left: 10%;
    }
    .shop-button:hover{
        background-color: #40fdbb;
    }
</style>