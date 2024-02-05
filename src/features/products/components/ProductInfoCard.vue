<script setup>
const props = defineProps({
  data: Object,
});
</script>

<template>
  <section class="p-[60px] pl-3">
    <div class="flex h-full">
      <!-- <span class="flex items-center text-gray-400 text-sm">
        <i class="bx bxs-star text-yellow-400 mr-1"></i>
        <span>{{ props.data?.rating }} (o'rtacha baxo)</span>
      </span> -->
    </div>
    <h2 class="text-fortitle-200 text-[38px]  font-semibold mb-6">
      {{ props.data.name }}
    </h2>
    <p class="flex items-center mb-6">
      <del class="text-[22px] text-main-100 opacity-60 mr-3">{{ props.data.price + 500 }}$</del>
      <span class="text-[22px] text-main-100 underline font-semibold"
        >{{ props.data.price }}$</span
      >
    </p>

    <p class="font-[16px] mb-12 text-fortitle-100">{{ props.data.description }}</p>
    <div class="flex gap-x-2 mb-10">
      <button
        class="outline-none border border-main-100 bg-main-100 hover:bg-main-200 hover:border-main-200 font-semibold text-lg text-white rounded-lg py-4 w-1/2"
      >
        Add to Cart
      </button>
      <button
        class="outline-none border border-main-100 bg-main-100 hover:bg-main-200 hover:border-main-200 text-white font-semibold text-lg rounded-lg py-4 w-1/2"
      >
        Buy
      </button>
    </div>
    <div class="font-thin text-[20px] flex">Category:
      <div class="pl-1 text-main-100 hover:text-main-200">
        {{ props.data.category }}
      </div>
    </div>
  </section>
</template>

<style scoped></style>
