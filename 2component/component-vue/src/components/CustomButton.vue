<!-- 2024-10-17 -->

<template>
    <button class="btn">
        <slot>전송</slot>
    </button>
</template>

<style scoped>
    .btn{
        width: 100px;
        height: 100px;
        color: white;
        border-radius: 100px;
        border: none;
        background-color: red;
    }
</style>