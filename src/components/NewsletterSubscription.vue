<template>
    <section class="newsletter">
      <div class="content">
        <h2>Don’t miss amazing grocery deals</h2>
        <p>Sign up for the daily newsletter</p>
        <div class="subscription-form">
          <input
            type="email"
            placeholder="Your email address"
            v-model="email"
            class="email-input"
            required
          />
          <button @click="subscribe" class="subscribe-button">Subscribe</button>
        </div>
      </div>
      <div class="image-bg"><img src="../assets/fruit.png" alt="" width="100%" height="100%"></div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'NewsletterSubscription',
    data() {
      return {
        email: '',
      };
    },
    methods: {
      subscribe() {
        if (this.email) {
          // Handle the subscription logic here
          alert(`Subscribed with ${this.email}`);
          this.email = ''; // Clear the input after subscription
        } else {
          alert('Please enter a valid email address.');
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .newsletter {
    background: url('@/assets/bg.png') no-repeat ;
    background-size: cover;
    /* padding: 40px; */
    border-radius: 20px;
    /* text-align: center; */
    color: #333;
    background-color: bisque;
    width: 100%;
    display: flex;
    /* height: 100%; */
  }
  
  .content {
    max-width: 600px;
    width: 50%;
    text-align: center;
    /* height: 100%; */
    /* font: bold; */
    margin-top: 10%;
    
  }
  .image-bg{
    width: 50%;
    /* height: 100%; */
    /* background-color: purple; */
  }
  
  h2 {
    font-size: 50px; /* Increase the font size */
  font-weight: bold; /* Make the text bold */
  margin-bottom: 10px;
  }
  
  p {
    font-size: 30px; /* Increase the font size */
    margin-bottom: 10px;
    /* font-size: 16px; */
    /* margin-bottom: 20px; */
  }
  
  .subscription-form {
    display: flex;
    margin-bottom: 10px;
  }
  
  .email-input {
    padding: 10px;
    align-items: center;
    border: 1px solid #ddd;
    /* border-radius: 4px; */
    margin-right: -30px;
    width: 200px;
    border-radius: 20px;
    
  }
  
  .subscribe-button {
    padding: 10px 20px;
    border: none;
    border-radius: 20px;
    background-color: #28a745;
    color: white;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  .subscribe-button:hover {
    background-color: #218838;
  }
  </style>