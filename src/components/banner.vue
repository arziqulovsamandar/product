<template>
  <div
    :class="blockCenter ? 'flex justify-center' : ''"
    :style="{ backgroundImage: `url('${backgroundImage}')` }"
    style="height: auto"
  >
    <div
      class="flex flex-col max-w-[1140px]"
      :class="blockCenter ? 'items-center' : ''"
    >
      <div
        class="text-[72px] leading-[85px] mb-[20px] text-[#253D4E] font-semibold"
        :class="blockCenter ? 'text-center' : ''"
      >
        {{ title }}
      </div>
      <div class="flex">
        {{ subtitle }}
        <div class="text-[#3BB77E] mb-[45px] cursor-pointer">
          &nbsp{{ linkText }}
        </div>
      </div>
      <Input
        placeholder="Your email address"
        button="Subscribe"
        style="margin: -20px 0px"
      />
      <div class="link-cake" v-if="blockCenter">
        <a
          class="link-cake-a"
          href=""
          >Cake</a
        >
        <a
          class="link-cake-a"
          href=""
          >Coffes</a
        >
        <a
          class="link-cake-a"
          href=""
          >Pet Foods</a
        >
        <a
          class="link-cake-a"
          href=""
          >Vegetables</a
        >
      </div>
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
<style scoped>
.link-cake {
  display: flex;
  gap: 10px;
  padding: 25px;
  text-decoration: none;
}
.link-cake-a:hover {
  color: yellowgreen;
  cursor: pointer;
}

.link-cake-a:hover {
  transform: translateY(-5px); /* yoki kerakli qimirlash miqdori */
  transition: transform 0.3s ease;
}
</style>
