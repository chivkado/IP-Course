<template>
    <button class="shop-button">
        {{ buttonText }} <font-awesome-icon icon="fa-kit fa-my-icon" /></button>
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
        background-color: #24dd3d;
        border-radius: 5px;
        font-size: 13px;
        color: white;
        margin-top: 45%;
        position: absolute;
        border: none;
        margin-left: 10%;
    }
    .shop-button:hover{
        background-color: #feb566;
    }
</style>