<script>
    export default {
       data(){
          return {
            array: [0,1,2],
            obj: {name:'yumi'},
          };
       },

       watch: {
          array: {
            handler(newValue, oldValue){
                 console.log(`old Value : ${oldValue}`);
                 console.log(`new Value : ${newValue}`);
            },
            deep: true,
          },
          obj: {
               handler(newValue,oldValue){
                 console.log(`old Value : ${JSON.stringify(oldValue)}`);
                 console.log(`new Value : ${JSON.stringify(newValue)}`);
               },
               deep: true,
          }
        }
      }

</script>

<!-- mustach syntax -->
<template>
     <!-- <h1 style ="color : greenyellow; front-style: italic">{{array}}</h1> -->
     <h1>{{array}}</h1>
     <h1>{{obj}}</h1>
  <button @click="array.push(3)">배열값 추가</button>
  <button @click="obj.company ='ssg.com'">객체 속성 추가</button>
</template>
<style scoped>
    @import './assets/main.css';
    @import '@/assets/main.css';
    h1 {
      color : red;
      font-style: italic;
    }
</style>