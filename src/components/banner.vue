<template>
  <div :class="blockCenter ? 'flex justify-center' : ''" :style="{ backgroundImage: `url('${backgroundImage}')` }">
    <div class="flex flex-col max-w-[1140px]"
      :class="blockCenter ? 'items-center' : ''"
    >
      <div class="text-[72px] leading-[85px] mb-[20px] text-[#253D4E] font-semibold"
        :class="blockCenter ? 'text-center' : ''">{{ title }}</div>
      <div class="flex">
        {{ subtitle }}
        <div class="text-[#3BB77E] mb-[45px] cursor-pointer">
          &nbsp{{ linkText }}
        </div>
      </div>
      <Input placeholder="Your email address" button="Subscribe" />
    </div>
  </div>
</template>

<script setup lang="ts">
import Input from "../components/base/input.vue";

defineProps<{
  title?: string;
  subtitle?: string;
  linkText?: string;
  blockCenter?: boolean;
  backgroundImage?: string;
}>();
</script>
