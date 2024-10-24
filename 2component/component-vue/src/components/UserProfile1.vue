<script>
    export default{
        //props : ['name', 'company', 'age'], //사용자 정의 속성 name, company값을 받는다.

        // created(){
        //     console.log(typeof this.age);
        // }

        //props: {name:String, company:String, age:[String, Number]},

        props: {
            name : { //name 속성값은 문자열이면서 필수로 전달, 문자열의 길이가 1보다 커야함
                type:String,
                Required:true,
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
        }
    }
</script>

<template>
    <p>이름 : {{ name }}</p>
    <!-- <p>회사명 : {{ company }}</p> -->
    <p>나이 : {{ age }}</p>
</template>