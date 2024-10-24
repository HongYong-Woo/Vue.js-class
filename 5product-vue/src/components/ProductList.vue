<script>
import ProductDetail from './ProductDetail.vue';


export default {
    components: {
        ProductDetail,
    },

    props: {
        lproduct: {
            type:Object,
            Required:false,
        }
    },

    data() {
        return {
            selectProduct : null,
        }
    },

    methods: {
        showDelail(e) {
            console.log(e);
            //this.$refs.ProductDetail.showDetail(e);
            this.selectProduct = e;
            //값을 넘김    
        }
    }
}
</script>

<template>
    <h1>상품 목록</h1>
    <ul>      
        <li v-for="(product, index) in lproduct" :key="index" >
            <a href="#" @click="showDelail(product)" >{{ product.name }} /  {{ product.price }} </a>
        </li>
    </ul>
    <ProductDetail ref="ProductDetail" v-if="selectProduct !=null":dproduct="selectProduct"/>
  
</template>