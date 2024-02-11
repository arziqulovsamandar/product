<template>
    <div class="w-full flex justify-center">
    <div class="flex mt-10 justify-between flex-wrap lg:flex-nowrap max-w-[1430px] w-full h-fit">
        <div class="p-[12px] w-[100%] lg:w-[40%] ml-[15px] flex flex-col items-center lg:items-start text-center lg:text-left">
            <p class="text-main-100 text-[24px] mb-[10px] font-semibold">{{ t('about.team.title') }}</p>
            <p class="text-fortitle-200 text-[30px] mb-[25px] font-semibold">{{ t('about.team.subtitle') }}</p>

            <p class="text-fortitle-100 text-[16px] mb-[15px] ">
                {{ t('about.team.text') }}
            </p>
            <button class="text-white bg-main-100 hover:text-black hover:bg-[#FDC041] w-fit py-3 px-[15px] rounded-md font-semibold">{{ t('about.team.btn') }}</button>
        </div>

        <div class="flex w-[100%] lg:w-[60%] h-fit mr-0 lg:mr-[15px] flex-wrap 2xs:flex-nowrap">
            <div class="justify-center relative p-[12px] flex 2xs:mb-4 mb-20">
                <div class="">
                    <img class="rounded-xl " src="https://themepanthers.com/wp/nest/d1/wp-content/uploads/2022/05/about-6.png" alt="">
                </div>
                <div class=" border-white border bottom-[-13%] shadow-lg bg-white w-[60%] absolute rounded-xl">
                    <p class="text-center text-[24px] font-semibold text-fortitle-200 mt-5">{{ t('about.team.members.member1.name') }}</p>
                    <p class="text-center text-lg text-fortitle-100 mt-1">{{ t('about.team.members.member1.job') }}</p>
                    <div class="flex justify-center items-center mt-5 mb-5">
                        <a href="#" class="no-underline text-fortitle-200 ">
                            <i class='bx bxl-facebook text-main-100  hover:text-[#CB2356]'></i>
                        </a>
                        <a href="#" class="no-underline text-fortitle-200">
                            <i class='bx bxl-twitter text-main-100 hover:text-[#CB2356]' ></i>
                        </a>
                        <a href="#" class="no-underline text-fortitle-200">
                            <i class='bx bxl-skype text-main-100 hover:text-[#CB2356]' ></i>
                        </a>
                        <a href="#" class="no-underline text-fortitle-200">
                            <i class='bx bxl-instagram text-main-100 hover:text-[#CB2356]' ></i>
                        </a>
                    </div>
                </div>
            </div>
            <div class="justify-center relative p-[12px] flex mb-4">
                <div class="">
                    <img class="rounded-xl" src="https://themepanthers.com/wp/nest/d1/wp-content/uploads/2022/05/about-8.png" alt="">
                </div>
                <div class="border-white border bottom-[-13%] shadow-lg bg-white w-[60%] absolute rounded-xl">
                    <p class="text-center text-[24px] font-semibold text-fortitle-200 mt-5">{{ t('about.team.members.member2.name') }}</p>
                    <p class="text-center text-lg text-fortitle-100 mt-1">{{ t('about.team.members.member2.job') }}</p>
                    <div class="flex justify-center items-center mt-5 mb-5">
                        <a href="#" class="no-underline text-fortitle-200">
                            <i class='bx bxl-facebook text-main-100  hover:text-[#CB2356]'></i>
                        </a>
                        <a href="#" class="no-underline text-fortitle-200">
                            <i class='bx bxl-twitter text-main-100 hover:text-[#CB2356]' ></i>
                        </a>
                        <a href="#" class="no-underline text-fortitle-200">
                            <i class='bx bxl-skype text-main-100 hover:text-[#CB2356]' ></i>
                        </a>
                        <a href="#" class="no-underline text-fortitle-200">
                            <i class='bx bxl-instagram text-main-100 hover:text-[#CB2356]' ></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
</template>

<script setup>
import { useI18n } from "vue-i18n";
const { t } = useI18n();
</script>

<style scoped>
.main:hover .main{
    height: 200px;
}

</style>