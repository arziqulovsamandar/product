<template>
  <div class="">
    <div class="max-w-[1610px] mx-auto justify-between p-[10px] w-full hidden xl:flex">
      <div>
        <a class="text-fortitle-100 text-[13px]" href="">{{ t("product.about") }}</a>
        <span class="text-[rgba(218,218,218,0.7)]"> | </span>
        <a class="text-fortitle-100 text-[13px]" href="">{{ t("product.my_acount") }}</a>
        <span class="text-[rgba(218,218,218,0.7)]"> | </span>
        <a class="text-fortitle-100 text-[13px]" href="">{{ t("product.wishlist") }}</a>
        <span class="text-[rgba(218,218,218,0.7)]"> | </span>
        <a class="text-fortitle-100 text-[13px]" href="">{{ t("product.order") }}</a>
      </div>
      <a class="text-fortitle-100 text-[13px]" href=""
        ><span class="hover:text-[#C25] cursor-pointer text-main-100 font-bold">{{ t("product.securete") }}</span></a
      >
      <div>
        <a class="text-fortitle-100 text-[13px]" href=""
          >{{ t("product.need_help")
          }}<span class="hover:text-main-200 cursor-pointer text-main-100 font-semibold">+1800900122</span></a
        >
      </div>
      <div
        href=""
        class="flex gap-[5px] text-[14px] text-fortitle-100"
      >
        <span class="text-[rgba(218,218,218,0.7)]"> | </span><lang-switcher /><span class="text-[rgba(218,218,218,0.7)]"> | </span> INR <span> </span>
      </div>
    </div>
    <hr class="border-[rgba(218,218,218,0.7)]">
    <div>
      <Navbar />
    </div>
    <div>
      <DropDown />
    </div>
    <div class="futter">
      <Futter />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";
const { t } = useI18n();
import LangSwitcher from "../../components/langSwitcher.vue";
import DropDown from "../drop-down.vue";
import Navbar from "../navbar.vue";
</script>

<style scoped>
</style>
