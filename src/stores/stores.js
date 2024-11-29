import { defineStore } from 'pinia';
import axios from 'axios';

export const useProductStore = defineStore('product', {
  state: () => ({
    groups: [],
    promotions: [],
    categories: [],
    products: [],
  }),

  getters: {
    getCategoriesByGroup: (state) => (groupName) => {
      return state.categories.filter(category => category.groupName === groupName);
    },
    getProductsByGroup: (state) => (groupName) => {
      return state.products.filter(product => product.groupName === groupName);
    },
    getProductsByCategory: (state) => (categoryId) => {
      return state.products.filter(product => product.categoryId === categoryId);
    },
    getPopularProducts: (state) => {
      return state.products.filter(product => product.countSold > 10);
    }
  },

  actions: {
    async fetchGroups() {
      try {
        console.log("Fetching groups...");
        const response = await axios.get("http://localhost:3000/api/groups");
        if (response.data && Array.isArray(response.data)) {
          this.groups = response.data;
          console.log("Fetched Groups:", this.groups);
        } else {
          console.warn("Invalid group data received:", response.data);
        }
      } catch (error) {
        console.error("Error fetching groups:", error.message);
      }
    },
    async fetchProducts() {
      try {
        console.log("Fetching products...");
        const response = await axios.get("http://localhost:3000/api/products");
        if (response.data && Array.isArray(response.data)) {
          this.products = response.data;
          console.log("Fetched Products:", this.products);
        } else {
          console.warn("Invalid product data received:", response.data);
        }
      } catch (error) {
        console.error("Error fetching products:", error.message);
      }
    },
    async fetchCategories() {
      try {
        const response = await axios.get('http://localhost:3000/api/categories');
        this.categories = response.data.map(category => {
          const split = category.image.split('\\');
          category.image = `http://localhost:3000/uploads/${split[1]}`;
          return category;
        });
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    },
    async fetchPromotions() {
      try {
        const response = await axios.get('http://localhost:3000/api/promotions');
        this.promotions = response.data;
      } catch (error) {
        console.error("Error fetching promotions:", error);
      }
    }
  }
});