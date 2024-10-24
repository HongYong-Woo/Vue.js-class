<script>
//import ProductDetail from './components/ProductDetail.vue';
import ProductList from './components/ProductList.vue';

export default {
  components: {
    ProductList,
    //ProductDetail,
  },

  data() {
    return {
      products :[
      {
        name : '바나나',
        price : 3000,
        stock : 2,
      },
      {
        name : '사과',
        price : 2000,
        stock : 3,
      },
      {
        name : '오렌지',
        price : 1500,
        stock : 4
      }
      ]
    }
  },
}
</script>

<template>
  <ProductList ref="ProductList" :lproduct="products"/>
</template>

<style scoped>

</style>
