<template>
  <div class="flex w-full justify-between max-w-[1610px] relative xl:my-[30px] my-[15px] mx-auto">
    <div class="xl:flex justify-between w-full px-[15px] items-center">
      <AppLogo class="min-w-[170px] max-w-[170px] mr-[70px]"/>
      <div class="w-full flex items-end xl:items-center justify-between flex-col-reverse mt-[15px] xl:mt-0 xl:flex-row">
        <div class="search-input1 w-full h-[50px]">
          <div class="flex w-full h-full rounded-[4px] border-[2px] border-[#BCE3C9] p-[3px]">
            <input
              type="text"
              :placeholder="t('navbar.search_placeholder')"
              class="py-[10px] px-[15px] w-full outline-none"
            />
            <button class="nanbar-button bg-main-100 rounded-[3px] text-white px px-[22px] font-semibold">{{ t("navbar.search") }}</button>
          </div>
        </div>

        <div class="w-fit flex items-center absolute xl:static top-0 justify-end xl:justify-end ml-[50px] my-[8px] xl:mb-0">
          <a href="/" class="px-[30px] h-[40px] hidden xl:block hover:-mt-3 transition-all duration-300">
            <div class="bg-white flex flex-nowrap items-center text-main-100 py-[6px] pr-[18px] pl-[13px] text-[16px] shadow-md border-[1px] rounded-[5px] border-[#ececec]">
              <h5 class="whitespace-nowrap">{{ t("navbar.become") }}</h5>
              <i class='bx bx-right-arrow-alt text-[23px] ml-3'></i>
            </div>
          </a>
          <router-link to="/compare" class="hover:-mt-3 transition-all duration-300 px-[6px] items-center hidden 3xs:flex">
            <i class='bx bx-refresh text-[#213746] text-[40px] relative'>
              <div class="bg-main-100 absolute top-[-1px] right-[-1px] text-white px-[6px] pb-[3px] font-sans pt-[3px] rounded-[50%] text-[12px]">3</div>
            </i>
            <h3 class="hidden md:block text-[17px] text-[#7e7e7e] font-normal ml-[2px]">{{ t("navbar.compare") }}</h3>
          </router-link>
          <router-link to="/wishlist" class="hover:-mt-3 transition-all duration-300 px-[6px] items-center hidden 3xs:flex">
            <i class='bx bx-heart text-[#213746] text-[32px] relative'>
              <div class="bg-main-100 absolute top-[-1px] right-[-6px] text-white px-[6px] pb-[3px] font-sans pt-[3px] rounded-[50%] text-[12px]">3</div>
            </i>
            <h3 class="hidden md:block text-[17px] leading-5 text-[#7e7e7e] font-normal ml-[7px]">{{ t("navbar.wishlist") }}</h3>
          </router-link>
          <router-link to="/cards" class="hover:-mt-3 transition-all duration-300 px-[6px] flex items-center">
            <i class='bx bx-cart-alt text-[#213746] text-[34px] relative'>
              <div class="bg-main-100 absolute top-[-1px] right-[-1px] text-white px-[6px] pb-[3px] font-sans pt-[3px] rounded-[50%] text-[12px]">3</div>
            </i>
            <h3 class="hidden md:block text-[17px] text-[#7e7e7e] font-normal ml-[2px]">{{ t("navbar.cart") }}</h3>
          </router-link>

          <div
            class="group relative flex items-center"
            @click="Login"
          >
            <button class="pl-2 text-[#7e7e7e] text-[17px] font-normal relative flex items-center">
              <i class='bx bx-user mt-[-3px] text-[#213746] text-[32px]'></i>
              <div class="hidden md:block ml-[2px]">Account</div>
            </button>
            <div class="hidden shadow-md p-1 group-hover:block absolute top-[25px] left-[-10px] z-20 bg-white min-w-[130px]">
              <div
                v-for="option in options" :key="option.key " class="flex items-center w-full hover:bg-[#ececec80] p-[6px]"
              >
                  <i :class="option.icon" class="text-[16px] mb-[-3px]"></i>
                  <router-link :to="option.link" class="text-[13px] ml-1">{{ option.label }}</router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import AppLogo from "./app/app-logo.vue";
import { useI18n } from "vue-i18n";

import { useRouter } from "vue-router";

const { t } = useI18n();
const router = useRouter();

const Login = () => {
  router.push("/login");
};

const options = [
  {
    label: "Login",
    key: "login",
    icon: "bx bx-user-circle",
    link: "/"
  },
  {
    label: "Edit Profile",
    key: "editProfile",
    icon: "bx bx-pencil",
    link: "/"
  },
  {
    label: "Logout",
    key: "logout",
    icon: "bx bx-exit",
    link: "/"
  },
];
</script>
<style scoped>
</style>
