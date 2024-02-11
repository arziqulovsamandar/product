<template>
    <div class="flex justify-center items-center flex-wrap w-full max-w-[1400px] mx-auto">
        <div class="xs:w-[50%] w-full xs:p-0 p-10">
            <img src="https://themepanthers.com/wp/nest/d1/wp-content/uploads/2022/05/about-5.png" alt="">
        </div>
        <div class="justify-start items-center px-10 w-full xs:w-[50%]">
            <p class="text-[24px] text-main-100 font-semibold">{{ t('about.performance.title') }}</p>
            <p class="text-[30px] font-semibold leading-8 mt-5">
                {{ t('about.performance.subtitle') }}
            </p>
            <p class="text-fortitle-100 mt-5">
                {{ t('about.performance.text') }}
            </p>
        </div>
    </div>


    <div class="flex items-center justify-center mt-8 w-full max-w-[1430px] mx-auto">
        <div class="flex flex-wrap w-full mx-[15px]">
            <div v-for="item in minifor" class="xs:w-1/3 w-full px-3 mb-3 flex flex-col text-center xs:justify-start xs:text-start xs:mb-0">
                <p class="text-[32px] text-fortitle-200 font-semibold">
                    {{ item.name }}
                </p>
                <p class="text-[16px] text-fortitle-100 mt-3">
                    {{ item.text }}
                </p>
            </div>
        </div>
    </div>
</template>



<script setup lang="ts">
    import { useI18n } from "vue-i18n";
    const { t } = useI18n();
    const minifor = [
        {
            name: t('about.performance.cards.card1.title'),
            text: t('about.performance.cards.card1.text')
        },
        {
            name: t('about.performance.cards.card2.title'),
            text: t('about.performance.cards.card2.text')
        },
        {
            name: t('about.performance.cards.card3.title'),
            text: t('about.performance.cards.card3.text')
        }
    ]
</script>

<style scoped>

</style>
