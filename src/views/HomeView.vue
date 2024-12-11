<template>
    <div class="home-view">
      <Header :currentPage="$route.name" />
      <div class="main-content">
        <Menu :selectedSection="selectedSection" @section-selected="handleSectionSelect" />
        <div class="content">
          <h2>{{ welcomeMessage }}</h2>
          <hr />
          <p>{{ sectionMessage }}</p>
        </div>
      </div>
      <Footer />
    </div>
  </template>
  
  <script>
  import Header from '../components/Header.vue';
  import Menu from '../components/Menu.vue';
  import Footer from '../components/Footer.vue';
  
  export default {
    name: 'HomeView',
    components: {
      Header,
      Menu,
      Footer,
    },
    data() {
      return {
        selectedSection: null,
      };
    },
    computed: {
      welcomeMessage() {
        const routeName = this.$route.name;
        let baseMessage = '';
  
        switch (routeName) {
          case 'page1':
            baseMessage = 'Welcome to Page 1';
            break;
          case 'page2':
            baseMessage = 'Welcome to Page 2';
            break;
          case 'page3':
            baseMessage = 'Welcome to Page 3';
            break;
          default:
            return '';
        }
  
        return baseMessage;
      },
      sectionMessage() {
        return this.selectedSection !== null
          ? `This is Section ${this.selectedSection} of ${this.welcomeMessage.split(' ')[2]}`
          : '';
      },
    },
    methods: {
      handleSectionSelect(section) {
        this.selectedSection = section;
      },
    },
  };
  </script>
  
  <style>
  .home-view {
    display: flex;
    flex-direction: column;
    height: 100vh;
  }
  
  .main-content {
    display: flex;
    flex-grow: 1;
  }
  
  .content {
    flex-grow: 1;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  </style>