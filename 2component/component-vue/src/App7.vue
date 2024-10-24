<!-- 2024-10-17 -->

<!-- data 영역에 parentNum : 10 -->
 <!-- computed: parentNum 검사해서 짝수 홀수 판별해서 numOddEven() -->
<!-- methods : parentNum 값을 리턴하는 getParentNum() -->
 <!-- 자식컴포넌트 RefChild에서 $parent 인스턴스 속성을 이용해서 부모의 parentNum과 computed methods 접근해서 결과 확인 -->
  <!-- RefChild -->
<script>
import RefChild from '@/components/refChild.vue';

export default {
  components :{
    RefChild
  },

  data() {
    return {
      parentNum : 10,
    }
  },

  computed : {
    numOddEven() {
      return this.parentNum%2===0 ? '짝' : '홀';
    }
  },

  methods : {
    getParentNum() { return this.parentNum;}
  },

 mounted() {
  console.log(`자식의 ${this.$refs.childRef.childNum}`);
  console.log(`자식은 ${this.$refs.childRef.childNumOddAdd}`);
  console.log(`자식은 ${this.$refs.childRef.getChildNum()}`);
 }

}

</script>

<template>
  <RefChild ref="childRef"/>
</template>

<style>

</style>
