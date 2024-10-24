<script>
export default {
 data(){
    return {
        number : 10,
    };
 },
 computed : {
    doubleNum() {
        return this.number *2;
    }
 },
 methods : {
    increment() {
        this.number++;
    },
 },
}
</script>

<template>
    <h1>컴포넌트</h1>
    <p>First Componenet</p>
    <p>{{ number }}</p>
</template>

<style scoped>
h1{
    color: blue;
}
p{
    color: rgb(24, 46, 2);
}
</style>