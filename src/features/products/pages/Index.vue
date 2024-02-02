<template>
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

  <h2 class="deals-of">{{ t("index.trending") }}</h2>
  <singleProductCard />
  <h2 class="deals-of">{{ t("index.deals") }}</h2>
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
  <div>
    <futter />
  </div>
</template>

<script setup lang="ts">
import Card from "../../../components/card.vue";
import Product from "../components/products.vue";
import Banner from "../../../components/banner.vue";
import productCard from "../components/productCard.vue";
import { useI18n } from "vue-i18n";
import singleProductCard from "../components/singleProductCard.vue";
import futter from "../../../components/footer.vue";
const { t } = useI18n();
</script>

<style scoped></style>
