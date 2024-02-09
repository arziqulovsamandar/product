<template>
    <top_carusel/>
    <card class="mb-12" />
    <performance />
    <ourTeam/>
    <Banner
        class="bg-[#D8F1E5] mt-20 rounded-3xl md:px-[78px] m-[10px] md:py-[84px] p-[20px]"
        :title="t('banners.grid_banner.title')"
        :subtitle="t('banners.grid_banner.subtitle')"
        :linkText="t('banners.grid_banner.link')"
        backgroundImage="src/assets/img/grid-banner.png"
      />
    <card2/>
    <footer/>
</template>



<script setup lang="ts">
import { useI18n } from "vue-i18n";
const { t } = useI18n();
import top_carusel from "../components/About/top-carusel.vue"
import card from "../components/About/six-card.vue"
import performance from "../components/About/performance.vue"
import ourTeam from "../components/About/ourTeam.vue"
import Banner from "../../../components/banner.vue"
import card2 from "../../../components/card.vue"
import footer from "../../../components/footer.vue"

</script>

<style scoped>

</style>
