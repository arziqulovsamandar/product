<template>
  <div>
    <div class="Home-wishlist">
      <img
        src="../../../assets/img/icons8-home-24.png"
        alt=""
      />
      <h5>Home ></h5>
      <span>Shop Compare</span>
    </div>
    <div class="wishlist"></div>
    <productCard class="wishlist-products" />
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
  </div>
</template>
<script setup lang="ts">
import futter from "../../../components/footer.vue";
import Banner from "../../../components/banner.vue";
import Card from "../../../components/card.vue";
import productCard from "../components/productCard.vue";
import { useI18n } from "vue-i18n";
const { t } = useI18n();
</script>
<style scoped>
.Home-wishlist h5 {
  color: rgb(11, 147, 45);
  font-weight: 600;
}
.Home-wishlist {
  border: 2px solid rgb(222, 196, 193);
  display: flex;
  padding: 20px;
  gap: 5px;
}
.wishlist-products {
  display: flex;
  justify-content: center;
  margin: 20px;
  border: 1px dashed wheat;
}
.wishlist {
  min-height: 250px;
}
</style>
