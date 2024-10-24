<script>
export default {
    beforeUnmount(){
      console.log('beforeUnmount222');
    },
    unmounted() {
      console.log('unmounted222');
    }
}
</script>

<template>
    <h1>컴포넌트</h1>
    <p>First Componenet</p>
</template>

<style scoped>
h1{
    color: blue;
}
p{
    color: chartreuse;
}
</style>