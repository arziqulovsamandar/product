<template>
  <div class="banner-wrapper relative">
    <img
      :class="imgCentered ? 'w-full h-auto absolute inset-0 bg-no-repeat' : 'absolute right-2 bottom-0 lg:right-20'"
      :style="{
        height: imgCentered ? '' : '70%',
        width: imgCentered ? '100%' : 'auto',
        objectFit: imgCentered ? 'cover' : 'contain'
      }"
      :src="backgroundImage"
      alt="Banner Image" />

    <div class="flex flex-col lg:max-w-[1000px] max-w-[700px] relative z-10"
      :class="blockCenter ? 'items-center mx-auto' : ''">
      <div class="text-[40px] leading-[50px] mb-[20px] text-[#253D4E] font-semibold sm:text-[72px] sm:leading-[85px]"
        :class="{ 'text-center': blockCenter }">
        {{ title }}
      </div>
      <div class="flex mb-[45px]">
        {{ subtitle }}
        <div class="text-[#3BB77E] cursor-pointer">
          &nbsp{{ linkText }}
        </div>
      </div>
      <Input placeholder="Your email address" button="Subscribe" />
      <div class="link-cake mt-[30px]" v-if="hasLink">
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
  imgCentered?: boolean;
  hasLink?: boolean;
}>();
</script>

<style scoped>
.banner-wrapper {
  position: relative;
}

.banner-wrapper img {
  object-fit: cover;
  width: 100%;
  height: 100%;
}

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
  transform: translateY(-5px);
  transition: transform 0.3s ease;
}
</style>