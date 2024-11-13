import { defineStore } from 'pinia'

export const useProductStore = defineStore('product', {
  state: () => ({
    groups: [],
    promotions: [],
    categories: [],
    products: []
  }),
  actions: {
    async fetchData() {
      try {
        // Fetch data from the backend server
        const [categoriesResponse, promotionsResponse, groupsResponse, productsResponse] = await Promise.all([
          fetch('http://localhost:3000/api/categories'),
          fetch('http://localhost:3000/api/promotions'),
          fetch('http://localhost:3000/api/groups'),
          fetch('http://localhost:3000/api/products')
        ]);

        this.categories = await categoriesResponse.json();
        this.promotions = await promotionsResponse.json();
        this.groups = await groupsResponse.json();
        this.products = await productsResponse.json();
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
  }
})