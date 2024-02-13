<template>
  <!-- <div class="navbar1">
    <div>
      <a href="">{{ t('product.about') }}</a>
      <span> | </span>
      <a href="">{{ t('product.my_acount') }}</a>
      <span> | </span>
      <a href="">{{ t('product.wishlist') }}</a>
      <span> | </span>
      <a href="">{{ t('product.order') }}</a>
    </div>
    <a href=""
      ><span class="navbar-p1 text-main-100"
        >{{ t('product.securete') }}</span
      ></a
    >
    <div>
      <a href=""
        >{{ t('product.need_help') }}<span class="navbar-p text-main-100">+1800900122</span></a
      >
    </div>
    <div
      href=""
      class="navbar-lang"
      ><span> | </span><lang-switcher /><span> | </span> INR <span> </span
    ></div>
  </div> -->
  <Banner
    class="py-[60px]"
    :title="t('banners.intro_banner.title')"
    :subtitle="t('banners.intro_banner.subtitle')"
    :linkText="t('banners.intro_banner.link')"
    img-centered
    blockCenter
    has-link
    backgroundImage="src/assets/img/intro-banner.jpg"
  />

  <h2 class="deals-of my-[30px] mx-[10px]">{{ t("index.trending") }}</h2>
  <div v-if="loading" class="relative text-center">
    <Loading />
  </div>
  <div v-else>
    <ProductList :products="prodcuts" />
  </div>
  <!-- <div class="flex flex-wrap px-[15px] gap-[12px] max-w-[1610px] mx-auto">
    <singleProductCard/>
  </div> -->
  <h2 class="deals-of my-[40px] mx-[10px]">{{ t("index.deals") }}</h2>
  <div class="flex max-w-[1610px] flex-wrap mx-auto gap-3 px-[15px]">
    <Product />
    <Product />
    <Product />
    <Product />
  </div>
  <productCard class="flex max-w-[1610px] mx-auto px-[15px] mt-[60px]" />
  <Banner
    class="mt-[60px] bg-[#D8F1E5] rounded-3xl max-w-[1610px] mx-auto md:px-[78px] m-[10px] md:py-[84px] p-[20px]"
    :title="t('banners.grid_banner.title')"
    :subtitle="t('banners.grid_banner.subtitle')"
    :linkText="t('banners.grid_banner.link')"
    backgroundImage="src/assets/img/grid-banner.png"
  />
  <div>
    <Card />
  </div>
  <div>
    <futter />
  </div>
</template>

<script setup lang="ts">
import { useProduct } from '../composables/useProduct';
const { loading, prodcuts } = useProduct()
import ProductList from '../components/productList.vue';
import Card from "../../../components/card.vue";
import Product from "../components/products.vue";
import Banner from "../../../components/banner.vue";
import productCard from "../components/productCard.vue";
import { useI18n } from "vue-i18n";
const { t } = useI18n();
import futter from "../../../components/footer.vue";
</script>

<style scoped>
.deals-of {
  display: flex;
  justify-content: center;
}
</style>
