<template>
  <router-link to="/" class="flex items-center gap-2" data-testid="logo">
    <img src="../../assets/img/logo.png" alt="Logo" class="text-4xl" />
    <p class="app-text-lg text-green-200">NEST</p>
  </router-link>
</template>

<script setup>
import { RouterLink } from 'vue-router';
</script>

<style scoped>
</style>
