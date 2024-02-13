<template>
  <div class="flex flex-wrap px-[15px] gap-[12px] max-w-[1610px] mx-auto">
    <SingleProduct class="flex flex-col" v-for="product in  products " :key="product.id" :product=product />
  </div>
</template>
<script setup>
  import SingleProduct from "../components/singleProductCard.vue";
  const props = defineProps({
    products: {
      type: Array,
      required: true
    }
  });
</script>
<style scoped>
</style>
