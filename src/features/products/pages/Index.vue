<template>
  <div class="navbar1">
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
      ><span class="navbar-p1"
        >{{ t('product.securete') }}</span
      ></a
    >
    <div>
      <a href=""
        >{{ t('product.need_help') }}<span class="navbar-p">+1800900122</span></a
      >
    </div>
    <div
      href=""
      class="navbar-lang"
      ><span> | </span><lang-switcher /><span> | </span> INR <span> </span
    ></div>
  </div>
  <div>
    <Navbar />
  </div>
  <drapDown />
  <Banner
    class="md:py-[60px] md:px-[50px] p-[25px]"
    :title="t('banners.intro_banner.title')"
    :subtitle="t('banners.intro_banner.subtitle')"
    :linkText="t('banners.intro_banner.link')"
    img-centered
    blockCenter
    has-link
    backgroundImage="src/assets/img/intro-banner.jpg"
  />

  <h2 class="deals-of">{{ t('index.trending') }}</h2>
  <singleProductCard />
  <h2 class="deals-of">{{ t('index.deals') }}</h2>
  <Product />
  <productCard />
  <Banner
    class="bg-[#D8F1E5] rounded-3xl md:px-[78px] md:m-[10px] md:py-[84px] p-[25px]"
    :title="t('banners.grid_banner.title')"
    :subtitle="t('banners.grid_banner.subtitle')"
    :linkText="t('banners.grid_banner.link')"
    backgroundImage="src/assets/img/grid-banner.png"
  />
  <div>
    <Card />
  </div>
  <div class="futter">
    <Futter />
  </div>
</template>

<script setup lang="ts">
import Card from '../../../components/card.vue';
import Product from "../components/products.vue";
import Banner from "../../../components/banner.vue";
import Navbar from "../../../components/navbar.vue";
import Futter from "../../../components/footer.vue";
import productCard from "../components/productCard.vue";
import LangSwitcher from "../../../components/langSwitcher.vue";
import { useI18n } from "vue-i18n";
import singleProductCard from '../components/singleProductCard.vue';
import drapDown from "../../../components/drop-down.vue";

const { t } = useI18n();
</script>

<style scoped>
.deals-of {
  margin: 10px;
  display: flex;
  justify-content: center;
}
.navbar1 {
  display: flex;
  justify-content: space-between;
  border: 1px solid rgb(227, 192, 192);
  padding: 10px;
  width: 100%;
}
.navbar1 a {
  color: rgb(77, 92, 90);
  font-size: 13px;
}
.navbar-p {
  color: yellowgreen;
  cursor: pointer;
  font-weight: 500;
}
.navbar-p1 {
  color: yellowgreen;
  cursor: pointer;
  font-weight: 700;
  font-size: 14px;
}

.navbar-p :hover {
  color: rgb(96, 130, 118);
}
.navbar-lang {
  display: flex;
  gap: 5px;
  font-size: 14px;
}
.navbar1 a :hover {
  color: black;
}

@media screen and (max-width: 1200px) {
  .navbar1 {
    display: none;
  }
}
</style>
