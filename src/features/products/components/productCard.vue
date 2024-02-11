<template>
  <div>
    <div class="flex w-full gap-[20px] flex-wrap">
      <div class="2lg:w-[calc(25%-15px)] xs:w-[calc(50%-15px)] w-[calc(100%-15px)]">
        <h2 class="pb-3 text-[24px] text-fortitle-200 font-semibold">{{ t('product_card.top_selling') }}</h2>
        <hr />
        <div
          class="pt-[22px] flex"
        >
          <img
            src="../../../assets/img/strawberries-3359755_640.jpg"
            alt=""
            class="w-[25%] aspect-square object-cover rounded-2xl"
          />
          <div class="pl-[12px] mt-[10px]">
            <h5 class="text-[16px] text-fortitle-200 leading-[1.1] font-semibold">{{ date.des }}</h5>
            <div class="flex items-center mt-[6px]">
              <h4 class="text-main-100 text-[16px] font-bold underline underline-offset-2">{{ date.price }}</h4>
              <s class="text-[13px] ml-2 text-[#ADADAD] font-bold">$22.00</s>
            </div>
          </div>
        </div>
      </div>
      <div class="2lg:w-[calc(25%-15px)] xs:w-[calc(50%-15px)] w-[calc(100%-15px)]">
        <h2 class="pb-3 text-[24px] text-fortitle-200 font-semibold">{{ t('index.trending') }}</h2>
        <hr />
        <div
          class="pt-[22px] flex"
        >
          <img
            src="../../../assets/img/strawberries-3359755_640.jpg"
            alt=""
            class="w-[25%] aspect-square object-cover rounded-2xl"
          />
          <div class="pl-[12px] mt-[10px]">
            <h5 class="text-[16px] text-fortitle-200 leading-[1.1] font-semibold">{{ date.des }}</h5>
            <div class="flex items-center mt-[6px]">
              <h4 class="text-main-100 text-[16px] font-bold underline underline-offset-2">{{ date.price }}</h4>
              <s class="text-[13px] ml-2 text-[#ADADAD] font-bold">$22.00</s>
            </div>
          </div>
        </div>
      </div>
      <div class="2lg:w-[calc(25%-15px)] xs:w-[calc(50%-15px)] w-[calc(100%-15px)]">
        <h2 class="pb-3 text-[24px] text-fortitle-200 font-semibold">{{ t('product_card.recently') }}</h2>
        <hr />
        <div
          class="pt-[22px] flex"
        >
          <img
            src="../../../assets/img/strawberries-3359755_640.jpg"
            alt=""
            class="w-[25%] aspect-square object-cover rounded-2xl"
          />
          <div class="pl-[12px] mt-[10px]">
            <h5 class="text-[16px] text-fortitle-200 leading-[1.1] font-semibold">{{ date.des }}</h5>
            <div class="flex items-center mt-[6px]">
              <h4 class="text-main-100 text-[16px] font-bold underline underline-offset-2">{{ date.price }}</h4>
              <s class="text-[13px] ml-2 text-[#ADADAD] font-bold">$22.00</s>
            </div>
          </div>
        </div>
      </div>
      <div class="2lg:w-[calc(25%-15px)] xs:w-[calc(50%-15px)] w-[calc(100%-15px)]">
        <h2 class="pb-3 text-[24px] text-fortitle-200 font-semibold">{{ t('product_card.top_raded') }}</h2>
        <hr />
        <div
          class="pt-[22px] flex"
        >
          <img
            src="../../../assets/img/strawberries-3359755_640.jpg"
            alt=""
            class="w-[25%] aspect-square object-cover rounded-2xl"
          />
          <div class="pl-[12px] mt-[10px]">
            <h5 class="text-[16px] text-fortitle-200 leading-[1.1] font-semibold">{{ date.des }}</h5>
            <div class="flex items-center mt-[6px]">
              <h4 class="text-main-100 text-[16px] font-bold underline underline-offset-2">{{ date.price }}</h4>
              <s class="text-[13px] ml-2 text-[#ADADAD] font-bold">$22.00</s>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { ref } from 'vue';

const { t } = useI18n();

// const response = await fetch("");
// const date = await response.json();

const date = ref(
  {
    img: "../../../assets/img/rating.png",
    des: "All Natural Style Chicken Meatballs",
    price: "$52.85"
  }
)

</script>
<style scoped>
.h5 :hover {
  color: yellowgreen;
}
.effect1 :hover {
  transform: translateY(-5px); /* yoki kerakli qimirlash miqdori */
  transition: transform 0.3s ease;
}
.natural h5 {
  color: rgb(98, 93, 86);
  font-weight: 600;
  margin: 0px 5px;
}
.natural img {
  margin: -25px -5px;
}
.natural h6 {
  margin: 0px 5px;
}
.rating {
  width: 90px;
  height: 80px;
}
.top-seling-all h2 {
  color: rgb(61, 60, 57);
}
.top-seling-all hr {
  margin: 20px 5px;
}
.top-selling-img {
  width: 100px;
  height: 100px;
  border-radius: 5px;
}
.top-seling {
  margin: 80px 30px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between; /* Elementlar chetlashtirilgan joyda joylashishi */
}

.top-seling-all {
  width: calc(
    25% - 20px
  ); /* 4 ta div dan chetlab yoki marginlardan kichik joylar mahsulot qilamiz */
  margin: 10px;
  box-sizing: border-box;
}

@media screen and (max-width: 880px) {
  .top-seling-all {
    width: calc(50% - 20px); /* 2 ta div qoladi */
  }
}

@media screen and (max-width: 480px) {
  .top-seling-all {
    width: calc(100% - 20px); /* Faqatgina 1 ta div qoladi */
  }
}
</style>
