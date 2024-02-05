<template>
  <div class="relative px-[50px]">
    <img
      class="object-cover w-full h-full"
      :class="imgCentered ? 'w-full h-auto absolute inset-0 bg-no-repeat' : 'absolute right-2 bottom-0 lg:right-20'"
      :style="{
        height: imgCentered ? '' : '70%',
        width: imgCentered ? '100%' : 'auto',
        objectFit: imgCentered ? 'cover' : 'contain'
      }"
      :src="backgroundImage"
      alt="Banner Image" />

    <div class="flex flex-col lg:max-w-[1140px] relative z-10"
      :class="blockCenter ? 'items-center mx-auto' : ''">
      <div class="text-[28px] w-full max-w-[370px] leading-tight mb-[20px] text-fortitle-200 font-semibold md:text-[72px] md:leading-[1.1] md:max-w-[1140px]"
        :class="{ 'text-center': blockCenter }">
        {{ title }}
      </div>
      <div
        class="flex mb-[45px] flex-wrap text-[15px] text-fortitle-100"
        :class="blockCenter ? 'justify-center text-center' : ''"
      >
        {{ subtitle }}&nbsp
        <a href="/" class="text-main-100 cursor-pointer">
          {{ linkText }}
        </a>
      </div>
      <Input :placeholder="t('banners.inputs.placeholder')" :button="t('banners.inputs.button')" />
      <div class="mt-[30px] text-center flex gap-[15px]" v-if="hasLink">
        <a
          class="banner-link"
          href=""
        >
          {{ t('banners.nav.cake') }}
        </a>
        <a
          class="banner-link"
          href=""
        >
          {{ t('banners.nav.coffee') }}
        </a>
        <a
          class="banner-link"
          href=""
        >
          {{ t('banners.nav.pet_food') }}
        </a>
        <a
          class="banner-link"
          href=""
        >
          {{ t('banners.nav.vegetables') }}
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Input from "../components/base/input.vue";
import { useI18n } from "vue-i18n";
const { t } = useI18n();

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
</style>