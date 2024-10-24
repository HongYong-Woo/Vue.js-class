<script>
    export default{
    
        props: {
            name : { //name 속성값은 문자열이면서 필수로 전달, 문자열의 길이가 1보다 커야함
                type:String,
                Required:false,
                validator: function(value){
                    return value.length > 1;
                },
            },
            age: {  //age 속성값은 숫자이면서 전달되지 않으면 초기값 10을 설정
                type:Number,
                default: function() {
                    return 10;
                }
            }
        },

        emits:['print-hello'],

        methods: {
            parentEventCall(){
                // this.$emit('print-hello');
                this.$emit('print-hello', 'ssg', 20);
            }
        }
    }
</script>

<template>
    <!-- 1. $emit() 발신 방식을 인라인핸들러 방식 -->
  <button type="button" @click="$emit('print-hello', 'ssg', 20)">클릭</button>

  <!-- 2. 메서드 핸들러 방식 -->
  <!-- <button type="button" @click="parentEventCall">클릭</button> -->
</template>