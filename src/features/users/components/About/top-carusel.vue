<template>
    <div class="flex flex-wrap justify-between items-center my-10 w-full max-w-[1400px] mx-auto">
        <div class="md:w-[50%] w-full p-4">
            <img class="rounded-3xl" :src=image alt="">
        </div>
        <div class="md:w-[50%] w-full flex-wrap p-4 ">
            <p class="text-[30px] text-fortitle-200 font-semibold">
                {{ t('about.carousel.title') }}
            </p><br>
            <p class="text-[14px] text-fortitle-100">
                {{ t('about.carousel.text') }}
            </p>
            <n-carousel style="width: 100%; margin-top: 40px;" show-arrow  :slides-per-view="3" :space-between="20" draggable>
                <img
                class="carousel-img"
                src="https://themepanthers.com/wp/nest/d1/wp-content/uploads/2022/05/about-4.png"
                >
                <img
                class="carousel-img"
                src="https://themepanthers.com/wp/nest/d1/wp-content/uploads/2022/05/about-3.png"
                >
                <img
                class="carousel-img"
                src="https://themepanthers.com/wp/nest/d1/wp-content/uploads/2022/05/about-2.png"
                >
                <img
                class="carousel-img"
                src="https://themepanthers.com/wp/nest/d1/wp-content/uploads/2022/05/about-4.png"
                >
                <img
                class="carousel-img"
                src="https://themepanthers.com/wp/nest/d1/wp-content/uploads/2022/05/about-3.png"
                >
                <img
                class="carousel-img"
                src="https://themepanthers.com/wp/nest/d1/wp-content/uploads/2022/05/about-2.png"
                >
            </n-carousel>
        </div>
    </div>
</template>



<script setup lang="ts">
    import { useI18n } from "vue-i18n";
    const { t } = useI18n();
    const image = 'https://themepanthers.com/wp/nest/d1/wp-content/uploads/2022/05/about-1.png'
    import {NCarousel} from "naive-ui"
</script>

<style scoped>
.carousel-img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

</style>
