<template>
<div id="prl1">
  <h3>List 2</h3>
    <ul>
         <li v-for="product in products" :key="product.id">
            <span>{{product.name}}</span>
            <span> {{product.price}}</span></li>
    </ul>
</div>
</template>


<script>
// @ is an alias to /src


export default {
  name:"productlisttwo",
  components: {

  },
  data(){
    return{
    
    }
  }
};
</script>
<style lang="scss">

</style>
