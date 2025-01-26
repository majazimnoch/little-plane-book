<template>
    <div>
      <h1>Planes You Travel With</h1>
      <p>Discover planes used in commercial aviation.</p>
    </div>
  </template>
  <script>
import axios from 'axios';

export default {
  data() {
    return {
      loading: false,
    }
  },

  mounted() {
    this.fetchFlightData();
  },
  methods: {
    async fetchFlightData() {
      this.loading = true;
      this.error = false;

      try {
        const response = await axios.get('https://sdsasdasd', {
          headers: {
            Authorization: `Bearer`
          },
        });
        this.flightData = response.data;
      } catch (error) {
        this.error = error.response ? error.response.data : error.message;
      } finally {
        this.loading = false;
      }
    }
  }
}
</script>