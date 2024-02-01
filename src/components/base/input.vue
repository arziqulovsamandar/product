<template>
  <div class="flex sm:w-[450px] relative h-[64px] rounded-[50px] shadow-lg w-full">
    <input
      class="px-[30px] rounded-[50px] outline-none w-full h-full"
      :placeholder="placeholder"
    />
    <button class="text-white bg-[#3BB77E] hover:bg-[#29A56C] rounded-[50px] w-auto text-[16px] transition font-semibold absolute px-[32px] right-0 h-full">
      {{ button }}
    </button>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  placeholder?: string;
  button: string;
}>();
</script>
