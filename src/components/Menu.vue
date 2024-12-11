<template>
    <div class="menu">
      <h4>Menu</h4>
      <ul>
        <li @click="selectSection(1)" :class="{ active: selectedSection === 1 }">Section 1</li>
        <li @click="selectSection(2)" :class="{ active: selectedSection === 2 }">Section 2</li>
        <li @click="selectSection(3)" :class="{ active: selectedSection === 3 }">Section 3</li>
        <li @click="selectSection(4)" :class="{ active: selectedSection === 4 }">Section 4</li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Menu',
    props: ['selectedSection'],
    methods: {
      selectSection(section) {
        this.$emit('section-selected', section);
      },
    },
  };
  </script>
  
  <style>
  .menu {
    width: 200px;
    padding: 20px;
    background-color: #e9e9e9;
    border: 2px solid black;
  }
  .menu h4{
    width: 100%;
    height: 5%;
  }
  .menu ul { 
    width: 100%;
    height: 80%;
    list-style-type: none;
    
    padding: 0;
  }
  .menu li {
    border: 2px solid black;
    margin: 10px 0;
    cursor: pointer; 
    padding: 5px; 
    border-radius: 4px; 
  }
  .menu li.active {
    background-color: #007bff; 
    color: white; 
  }
  .menu li:hover {
    background-color: #0056b3; 
    color: white;
  }
  </style>