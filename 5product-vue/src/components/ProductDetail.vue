<script>
 export default {

    props: {
      dproduct: {
        type: Object,
        Required: false,
      }

    },

    data() {
        return {
            cproduct : null,
        }
    },

    methods: {
        //미사용
        showDetail(e) {
            this.cproduct = e;
            console.log(this.cproduct.name);
        }
    }

 }
</script>

<template>
<h2>상품 상세 정보</h2>
이름 : {{ dproduct.name }}<br>
가격 : {{ dproduct.price }}<br>
재고 : {{ dproduct.stock }}

</template>