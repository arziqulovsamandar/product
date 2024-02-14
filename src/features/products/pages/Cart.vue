<template>
  <p class="font-[500] text-md text-[#7E7E7E] border-gray-50 border-t border-b p-4"><i class='bx bx-home-alt text-[#3BB77E]' ></i><span class="text-[#3BB77E]">Home</span><span class="text-xs text-[#3BB77E] ml-2">></span> <span class="ml-2">Shop cart</span></p>
  <hr class="text-slate-200" />
  <div class="w-[100%] mt-20 mb-6">
    <div class="bg-slate-100 text-xl flex justify-between text-text p-4 w-[70%] rounded-2xl font-semibold mx-3">
      <div class="w-[60%] text-center">Product</div>
      <div class="flex gap-1 w-[40%] justify-around">
        <p>Price</p>
        <p>Quantity</p>
        <p>Subtotal</p>
      </div>
    </div>
    <BasketCart v-for="item in cartStore.cartData" :key="item?.id" :data="item" />

    <hr class="text-slate-200 w-[70%] ml-3 mt-6" />
    <div class="flex w-[70%] mx-3 mt-4 justify-between px-4">
      <div class="flex gap-1">
        <v-input type="text" class="border px-7 py-3 rounded-lg text-[16px] outline-none border-slate-300"
                 placeholder="Coupon code"></v-input>
        <v-button class="bg-primary text-white text-[16px] px-6 py-3 rounded-lg">Apply coupon</v-button>
      </div>
      <div class="flex gap-1">
        <v-button class="bg-primary text-white text-[16px] px-6 py-3 rounded-lg">Update cart</v-button>
        <v-button class="bg-primary text-white text-[16px] px-6 py-3 rounded-lg">Empty Cart</v-button>
      </div>
    </div>

    <hr class="text-slate-200 w-[70%] ml-3 mt-4" />
    <div class="w-[70%] flex">
      <div class="text-[24px] text-text font-bold ml-3 mt-5 w-[50%]">You may be interested in…</div>

      <div class="w-[50%]">
        <div class="text-[24px] font-bold text-text ml-3 mt-5">Cart totals</div>
        <div class="border border-slate-200 mt-5">
          <div class="flex">
            <div class="text-[18px] font-bold text-text w-[30%] border-r border-slate-200 px-[20px] py-[15px]">
              Subtotal
            </div>
            <div class="px-[20px] py-[15px] w-[70%] text-primary text-[18px] font-bold">
              {{ item?.price }}
            </div>
          </div>
          <div class="flex">
            <div
              class="text-[18px] w-[30%] font-bold text-text border border-b-0 border-l-0 border-slate-200 px-[20px] py-[15px]">
              Total
            </div>
            <div class="px-[20px] py-[15px] border-t border-slate-200 w-[70%] text-primary text-[18px] font-bold">
              {{ item?.price }}
            </div>
          </div>
        </div>
        <div>
          <v-button class="bg-primary text-white text-[16px] mt-5 px-6 py-3 rounded-lg">Proceed to checkout</v-button>
        </div>
      </div>
    </div>

    <Banner
      class="mt-[60px] bg-[#D8F1E5] rounded-3xl max-w-[1610px] mx-auto md:px-[78px] m-[10px] md:py-[84px] p-[20px]"
      :title="t('banners.grid_banner.title')"
      :subtitle="t('banners.grid_banner.subtitle')"
      :linkText="t('banners.grid_banner.link')"
      backgroundImage="src/assets/img/grid-banner.png"
    />

    <Card />

    <Footer />

  </div>
</template>
<script setup lang="ts">
import { useCartStore } from '../store/cart';
import { onMounted, reactive } from 'vue';
import VInput from '../../../components/base/base-input.vue';
import VButton from '../../../components/base/base-button.vue';
import BasketCart from '../components/basket-cart.vue';
import { cartObj } from '../../../modules/interface.ts';
import Card from "../../../components/card.vue";
import Banner from "../../../components/banner.vue";
import Footer from "../../../components/footer.vue";
const cartStore = useCartStore();


import { useI18n } from "vue-i18n";
const { t } = useI18n();

const item = reactive<cartObj>({
  id: '',
  price: ''
});

onMounted(() => {
  cartStore.getAll();
});

</script>

<style scoped></style>
