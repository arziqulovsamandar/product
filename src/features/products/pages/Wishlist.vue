<template>
  <div>
    <div class="wishlist">wishlist pages</div>
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
import { useI18n } from "vue-i18n";
const { t } = useI18n();
</script>
<style scoped>
.wishlist {
  height: 400px;
}
</style>
