<template>
  <div class="2xs:h-[64px] h-[40px] flex xs:w-[450px] relative rounded-[50px] shadow-lg w-full transition-all duration-500">
    <input
      class="2xs:px-[30px] px-[15px] rounded-[50px] outline-none w-full h-full transition-all duration-500"
      :placeholder="placeholder"
    />
    <button class="2xs:px-[30px] px-[15px] text-white bg-[#3BB77E] hover:bg-[#29A56C] rounded-[50px] w-auto text-[16px] font-semibold absolute right-0 h-full transition-all duration-500">
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
