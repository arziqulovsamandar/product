<template>
    <div>
        <h1 class="text-center text-2xl mb-6 font-[700]">{{ t('about.title') }}</h1>

        <div class="flex justify-center items-center flex-wrap mt-2 w-full max-w-[1400px] mx-auto gap-4">
            <div v-for="one in allname" class="2md:w-[calc(100%/3-16px)] xs:w-[calc(100%/2-16px)] w-[calc(100%-16px)] p-4 h-[360px] border flex flex-col border-[#ECECEC] justify-center items-center rounded-xl hover:shadow-md">
                    <div class="justify-center items-center flex">
                        <div class=" bg-cover w-[100px]">
                            <img :src="one.img" alt="">
                        </div>
                    </div>
                    <div>
                        <h1 class="text-center text-xl font-[700] mt-5">{{ one.name }}</h1>
                        <p class="text-center mt-5 text-[#7E7E7E] text-md">
                            {{ one.text }}
                        </p>
                        <a :href="one.link" class="text-[#3BB77E] hover:text-[#CB2356] text-center flex justify-center mt-5 mb-5">{{ one.more }}</a>
                    </div>
            </div>

        </div>
    </div>
</template>



<script setup lang="ts">
    import { useI18n } from "vue-i18n";
    const { t } = useI18n();

    const allname = [
        {
            name: t('about.cards.card1.title'),
            text: t('about.cards.card1.text'),
            more: t('about.cards.card1.more'),
            img:"https://themepanthers.com/wp/nest/d1/wp-content/uploads/2022/02/icon-1.png",
            link: "/"
        },
        {
            name: t('about.cards.card2.title'),
            text: t('about.cards.card2.text'),
            more: t('about.cards.card2.more'),
            img:"https://themepanthers.com/wp/nest/d1/wp-content/uploads/2022/02/icon-2.png",
            link: "/"
        },
        {
            name: t('about.cards.card3.title'),
            text: t('about.cards.card3.text'),
            more: t('about.cards.card3.more'),
            img:"https://themepanthers.com/wp/nest/d1/wp-content/uploads/2022/02/icon-3.png",
            link: "/"
        },
        {
            name: t('about.cards.card4.title'),
            text: t('about.cards.card4.text'),
            more: t('about.cards.card4.more'),
            img:"https://themepanthers.com/wp/nest/d1/wp-content/uploads/2022/02/icon-4.png",
            link: "/"
        },
        {
            name: t('about.cards.card5.title'),
            text: t('about.cards.card5.text'),
            more: t('about.cards.card5.more'),
            img:"https://themepanthers.com/wp/nest/d1/wp-content/uploads/2022/02/icon-5.png",
            link: "/"
        },
        {
            name: t('about.cards.card6.title'),
            text: t('about.cards.card6.text'),
            more: t('about.cards.card6.more'),
            img:"https://themepanthers.com/wp/nest/d1/wp-content/uploads/2022/02/icon-6.png",
            link: "/"
        }
    ]

</script>

<style scoped>

</style>
