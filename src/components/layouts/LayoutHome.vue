<template>
  <div class="w-full">
    <TheNavbar />
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup lang="ts">
import TheNavbar from "../theNavbar.vue";
</script>

<style scoped></style>
