<script>
import FirstChild from './components/FirstChild.vue';


export default {
  components : {
    FirstChild //불러온 FirstChild 컴포넌트를 components 옵션속성으로 지역등록
  },
  data() {
    return {
      visible : true, //visible 데이터를 정의하고 초기값으로 true 셋팅
    };
  },

    beforeCreate() {
      console.log('beforCreate');
    },
    created() {
      console.log('created');
      setTimeout(()=>{
        this.visible = false; //컴포넌트가 생성된후 3초후 visible 데이터를 false로 변경
      }, 3000);
    },
    beforeMount() {
      console.log('beforeMount');
    },
    mounted(){
      console.log('mounted');
    },
    beforeUpdate() {
      console.log('beforeUpdate');
    },
    updated(){
      console.log('updated');
    },
    beforeUnmount(){
      console.log('beforeInmount');
    },
    unmounted() {
      console.log('unmounted');
    }
}

</script>

<template>
<FirstChild v-if="visible" />
</template>

<style>

</style>
