<!-- 2024-10-17 -->

<script>
// 1. childNum 데이터를 선언하고 기본값을 0으로 할당한다.
// 2. computed 속성에는 childNum의 값을 참조하여 짝수인지 홀수 인지를 검사하고
//     짝수일 경우 '짝수', 홀수일 경우 '홀수'를 리턴하는 childNumOddAdd 기능
// 3. method 속성에는 childNum의 값을 리턴하는 getChildNum()
// 4. App.vue에 지역 등록한다.

export default{

    data() {
        return {
            childNum : 3
        }
    },

    methods : {
        getChildNum() { return this.childNum; }
    },

    computed : {
        childNumOddAdd() {
            return this.childNum %2 === 0 ? '짝수' : '홀수';
        }
    },

    mounted() {
        console.log(`부모는 ${this.$parent.parentNum}`);
        console.log(`부모는 ${this.$parent.numOddEven}`);
        console.log(`부모는 ${this.$parent.getParentNum}`);
    }
    

}
</script>

<template>
   <p>{{ $parent.getParentNum()}}</p>
   <p>{{ $parent.numOddEven }}</p>
    <p>{{ $parent.parentNum }}</p>
    
</template>