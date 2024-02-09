<template>
    <div>
      <div class="max-w-[1400px] flex-wrap md:flex-nowrap w-full mx-auto flex py-5 2xs:py-[50px]">
        <div class="w-full md:w-1/3 p-4 text-center 2xs:text-start">
          <div class="text-main-100 text-[28px] font-semibold mb-4 whitespace-nowrap">{{ t("contact.help.title") }}</div>
          <h3 class="pb-[27px] text-[32px] font-semibold text-fortitle-200">
            {{ t("contact.help.subtitle") }}
          </h3>
          <div class="text-fortitle-100 text-[16px]">
            {{ t("contact.help.text") }}
          </div>
        </div>

        <div class="w-full md:w-2/3 flex items-end">
          <div class="flex flex-wrap">
            <div class="p-4 w-full 2xs:w-1/2 text-center 2xs:text-start">
              <h2 class="text-[20px] font-fortitle-200 pb-5 font-semibold">
                {{ t("contact.help.feedback.title") }}
              </h2>
              <div class=" text-fortitle-100 text-[16px]">
                {{ t("contact.help.feedback.text") }}
              </div>
            </div>
            <div class="p-4 w-full 2xs:w-1/2 text-center 2xs:text-start">
              <h2 class="text-[20px] font-fortitle-200 pb-5 font-semibold">
                {{ t("contact.help.employers.title") }}
              </h2>
              <div class=" text-fortitle-100 text-[16px]">
                {{ t("contact.help.employers.text") }}
              </div>
            </div>

            <div class="p-4 w-full 2xs:w-1/2 text-center 2xs:text-start">
              <h2 class="text-[20px] font-fortitle-200 pb-5 font-semibold">
                {{ t("contact.help.billing.title") }}
              </h2>
              <div class="text-fortitle-100 text-[16px]">
                {{ t("contact.help.billing.text") }}
              </div>
            </div>
            <div class="p-4 w-full 2xs:w-1/2 text-center 2xs:text-start">
              <h2 class="text-[20px] font-fortitle-200 pb-5 font-semibold">
                {{ t("contact.help.general.title") }}
              </h2>
              <div class="text-fortitle-100 text-[16px]">
                {{ t("contact.help.general.text") }}
              </div>
            </div>
        </div>
        </div>
      </div>

      <Location class="w-full mx-auto max-w-[1610px] h-[300px] m-[10px]"/>

      <div class="w-full max-w-[1400px] mx-auto flex flex-wrap md:flex-nowrap py-5 2xs:py-[50px]">
        <div class="w-full md:w-1/3 p-4 flex flex-col justify-end">
          <h2 class="text-[24px] text-main-100 pb-[15px] font-semibold">
            {{ t("contact.about.title") }}
          </h2>
          <div class="flex mb-[8px] items-center">
            <i class='bx bx-location-plus text-main-100 mr-[5px] text-[18px]'></i>
            <span class="text-fortitle-100 text-[14px]">{{ t("contact.about.address") }}</span>
          </div>
          <div class="flex mb-[8px] items-center">
            <i class='bx bx-headphone text-main-100 mr-[5px] text-[18px]'></i>
            <span class="flex items-center text-fortitle-100 text-[14px]"><div>{{ t("contact.about.call") }}&nbsp</div><a href="/" class="text-main-100">(+91)-540-025-124553</a></span>
          </div>
          <div class="flex mb-[8px] items-center">
            <i class='bx bx-envelope text-main-100 mr-[5px] text-[18px]'></i>
            <span class="flex items-center text-fortitle-100 text-[14px]"><div class="flex items-center">{{ t("contact.about.email") }}&nbsp</div><a href="/" class="text-main-100">sale@Nest.com</a></span>
          </div>
          <div class="flex mb-[8px] items-center">
            <i class='bx bx-stopwatch text-main-100 mr-[5px] text-[20px]'></i>
            <span class="text-fortitle-100 text-[14px]">{{ t("contact.about.work_time") }}</span>
          </div>
          <button class="w-fit items-center rounded-md py-2 px-[18px] text-white text-[12px] mt-[20px] bg-main-100 hover:bg-main-200 flex">
            <i class='bx bx-user mr-1 text-[16px]'></i>
            <div class="font-semibold">{{ t("contact.about.btn") }}</div>
          </button>
        </div>

        <div class="w-full md:w-1/3 p-4 flex flex-col justify-end">
          <h2 class="text-[24px] text-main-100 pb-[15px] font-semibold">
            {{ t("contact.about.title") }}
          </h2>
          <div class="flex mb-[8px] items-center">
            <i class='bx bx-location-plus text-main-100 mr-[5px] text-[18px]'></i>
            <span class="text-fortitle-100 text-[14px]">{{ t("contact.about.address") }}</span>
          </div>
          <div class="flex mb-[8px] items-center">
            <i class='bx bx-headphone text-main-100 mr-[5px] text-[18px]'></i>
            <span class="flex items-center text-fortitle-100 text-[14px]"><div>{{ t("contact.about.call") }}&nbsp</div><a href="/" class="text-main-100">(+91)-540-025-124553</a></span>
          </div>
          <div class="flex mb-[8px] items-center">
            <i class='bx bx-envelope text-main-100 mr-[5px] text-[18px]'></i>
            <span class="flex items-center text-fortitle-100 text-[14px]"><div class="flex items-center">{{ t("contact.about.email") }}&nbsp</div><a href="/" class="text-main-100">sale@Nest.com</a></span>
          </div>
          <div class="flex mb-[8px] items-center">
            <i class='bx bx-stopwatch text-main-100 mr-[5px] text-[20px]'></i>
            <span class="text-fortitle-100 text-[14px]">{{ t("contact.about.work_time") }}</span>
          </div>
          <button class="w-fit items-center rounded-md py-2 px-[18px] text-white text-[12px] mt-[20px] bg-main-100 hover:bg-main-200 flex">
            <i class='bx bx-user mr-1 text-[16px]'></i>
            <div class="font-semibold">{{ t("contact.about.btn") }}</div>
          </button>
        </div>

        <div class="w-full md:w-1/3 p-4 flex flex-col justify-end">
          <h2 class="text-[24px] text-main-100 pb-[15px] font-semibold">
            {{ t("contact.about.title") }}
          </h2>
          <div class="flex mb-[8px] items-center">
            <i class='bx bx-location-plus text-main-100 mr-[5px] text-[18px]'></i>
            <span class="text-fortitle-100 text-[14px]">{{ t("contact.about.address") }}</span>
          </div>
          <div class="flex mb-[8px] items-center">
            <i class='bx bx-headphone text-main-100 mr-[5px] text-[18px]'></i>
            <span class="flex items-center text-fortitle-100 text-[14px]"><div>{{ t("contact.about.call") }}&nbsp</div><a href="/" class="text-main-100">(+91)-540-025-124553</a></span>
          </div>
          <div class="flex mb-[8px] items-center">
            <i class='bx bx-envelope text-main-100 mr-[5px] text-[18px]'></i>
            <span class="flex items-center text-fortitle-100 text-[14px]"><div class="flex items-center">{{ t("contact.about.email") }}&nbsp</div><a href="/" class="text-main-100">sale@Nest.com</a></span>
          </div>
          <div class="flex mb-[8px] items-center">
            <i class='bx bx-stopwatch text-main-100 mr-[5px] text-[20px]'></i>
            <span class="text-fortitle-100 text-[14px]">{{ t("contact.about.work_time") }}</span>
          </div>
          <button class="w-fit items-center rounded-md py-2 px-[18px] text-white text-[12px] mt-[20px] bg-main-100 hover:bg-main-200 flex">
            <i class='bx bx-user mr-1 text-[16px]'></i>
            <div class="font-semibold">{{ t("contact.about.btn") }}</div>
          </button>
        </div>
      </div>

      <div class="mx-auto w-full flex justify-center mb-5">
        <endContact class="w-[1400px]"/>
      </div>


      <Banner
        class="bg-[#D8F1E5] rounded-3xl md:px-[78px] m-[10px] md:py-[84px] p-[20px]"
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

<script setup>
import L from 'leaflet'
import endContact from "../components/Contact/end-contact.vue"
import { ref, onMounted } from 'vue'
import futter from "../../../components/footer.vue";
import Card from "../../../components/card.vue";
import Banner from "../../../components/banner.vue";
import Location from "../../../components/location.vue"
import { useI18n } from "vue-i18n";
const { t } = useI18n();

const map = ref()
const mapContainer = ref()

onMounted(() => {
  map.value = L.map(mapContainer.value).setView([41.2945392, 69.312501], 13);

  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
  }).addTo(map.value);

  L.marker([41.2945392, 69.312501], { draggable: true })
  .addTo(map.value);
})
</script>

<style scoped></style>
