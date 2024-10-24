<script setup>
    import { RouterLink, RouterView } from 'vue-router';
</script>
<template>
  <nav>
    <RouterLink to="/">Home</RouterLink><hr>
    <RouterLink to="/about">about</RouterLink><hr>
    <RouterLink to="/board">board</RouterLink>
  </nav>
  <RouterView />
</template>
