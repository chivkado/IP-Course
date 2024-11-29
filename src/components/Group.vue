<template>
  <div class="Menu">{{ menu }}</div>
</template>

<script>
export default {
  name: "Group",
  props: {
      menu: {
          type: String,
          required: true 
      }
  }
};
</script>

<style scoped>
.Menu {
  width: 100%;
  
  color: black;
  margin: 0 10px;
  /* cursor: pointer; */
  display: flex;
  align-items: end;
  justify-content: center;
}
</style>