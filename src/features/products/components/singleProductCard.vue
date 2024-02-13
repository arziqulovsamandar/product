<template>
  <router-link
    :to="'/product/' + product.id"
    class="transition-all justify-between duration-300 relative card 2lg:w-[calc(20%-10px)] 3xs:w-[calc(50%-10px)] md:w-[calc(100%/3-10px)] w-full hover:border-[rgba(59,183,125,0.35)] hover:border-opa p-[10px] sm:p-[20px] border-[1px] border-slate-200 cursor-pointer hover:shadow-xl rounded-2xl"
  >
    <div class="h-full mt-4 mb-3">
      <div
        class="text-white w-[22%] h-[6%] absolute top-0 left-0 text-center rounded-br-2xl rounded-tl-xl"
        style="font-size: smaller; padding-top: 3px; background-color: #6ec1e4"
      >
        15%
      </div>
      <div
        class="text-white w-[22%] h-[6%] bg-main-100 absolute top-0 right-0 text-center rounded-bl-2xl rounded-tr-xl"
        style="font-size: smaller; padding-top: 3px"
      >
        Sale
      </div>
      <div class="w-full h-full">
        <img
          class="h-full rounded-[20px] object-cover w-full hover:p-0 transition-all duration-300"
          :src="product.media[0].media_link"
          alt=""
        />
      </div>
    </div>

    <div>
    <div v-if="product?.category">
      <p class="text-[14px] text-fortitle-100 mb-2">
        {{ product?.category }}
      </p>
    </div>
    <div>
      <h2 class="font-semibold text-[16px] text-fortitle-200 mb-3">
        {{ product.name }}
      </h2>
    </div>
    <div class="text-slate-400 text-[15px] mb-2">
      <i class="bx bx-star"></i>
      <i class="bx bx-star"></i>
      <i class="bx bx-star"></i>
      <i class="bx bx-star"></i>
      <i class="bx bx-star"></i>
      <span class="ml-2">0</span>
    </div>
    <div class="mb-3">
      <p class="text-fortitle-100">
        By
        <a
          href="http://localhost:5173/"
          class="text-main-100 text-[16px]"
          >NestFood</a
        >
      </p>
    </div>
    <div
      class="flex text-main-100 font-bold gap-3 justify-between items-baseline mb-2"
    >
      <div>
        <s class="text-slate-300 mr-2"
          >$<s class="text-[13px] text-primary">{{ product.price }}</s></s
        >
        <span class="text-[18px] underline">{{ product.price }}</span>
      </div>
      <button
        @click="addToCart"
        class="hover:bg-main-100 hover:text-white transition-all duration-300 bg-green-100 text-main-100 font-semibold px-5 py-2 justify-center flex rounded-md items-center opacity-100 hover:opacity-100 w-40 h-9"
      >
        <i class='bx bx-cart text-[20px]' ></i>
        Add
      </button>
    </div>
    </div>

    <div class="dropdown absolute flex flex-nowrap">
      <router-link :to="'/product/' + product.id">
        <n-dropdown
          class="bg-main-100"
          trigger="hover"
          :options="options"
        >
          <n-button
            class="rounded-e-none"
            style="background-color: white"
            ><n-icon size="24">
              <img
                src="../../../assets/img/icons8-eye-24.png"
                alt=""
              /> </n-icon
          ></n-button>
        </n-dropdown>
      </router-link>

      <router-link to="/about">
        <n-dropdown
          trigger="hover"
          :options="options1"
          class="bg-main-100"
        >
          <n-button
            class="rounded-none"
            style="background-color: white"
            ><n-icon size="24">
              <img
                src="../../../assets/img/icons8-arrow-32.png"
                alt=""
              /> </n-icon
          ></n-button>
        </n-dropdown>
      </router-link>

      <router-link to="/wishlist">
        <n-dropdown
          trigger="hover"
          :options="options2"
          class="bg-main-100"
        >
          <n-button
            class="rounded-s-none"
            style="background-color: white"
            ><n-icon size="24">
              <img
                src="../../../assets/img/icons8-heart-24.png"
                alt=""
              /> </n-icon
          ></n-button>
        </n-dropdown>
      </router-link>
    </div>
  </router-link>
</template>

<script setup>
// import { useProductStore } from "../store";
import { ref, onMounted } from "vue";
import { NDropdown } from "naive-ui";
import { NButton } from "naive-ui";
import { NIcon } from "naive-ui";

const options = [{ label: "Quick view" }];

const options1 = [{ label: "Compare" }];

const options2 = [{ label: "Wishlist" }];

defineProps({
  product: {
    type: Object,
    required: true
  }
});

function addToCart() {
  // productCart.addToCart(props.data);
}
</script>

<style scoped>
.card:hover .dropdown {
  display: flex;
}
.dropdown {
  display: none;
  top: 30%;
  left: 50%;
  transform: translateX(-50%);
}
</style>
