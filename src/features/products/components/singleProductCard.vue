<template>
  <div
    class="main w-[280px] relative p-5 justify-around border-2 border-slate-200 hover:shadow-lg shadow-slate-800 duration-500 ease-in-out cursor-pointer rounded-2xl h-auto m-2"
  >
    <div
      class="bg-blue-300 text-white w-[22%] h-[6%] absolute top-0 left-0 text-center rounded-br-2xl rounded-tl-xl"
    >
      13%
    </div>
    <div
      class="bg-primary text-white w-[22%] h-[6%] absolute top-0 right-0 text-center rounded-bl-2xl rounded-tr-xl"
    >
      Sale
    </div>
    <div>
      <img
        class="mx-auto mb-2"
        src="../../../assets/img/product-2-1.jpg"
        alt=""
      />
    </div>
    <div>
      <p style="font-size: smaller; color: gray">Fresh Fruit</p>
    </div>
    <div>
      <h1 class="font-bold text-lg text-gray-600 mb-3">
        Seeds of Change Organic Red Rice
      </h1>
    </div>
    <div class="text-slate-400 text-sm mb-2">
      <i class="bx bx-star"></i>
      <i class="bx bx-star"></i>
      <i class="bx bx-star"></i>
      <i class="bx bx-star"></i>
      <i class="bx bx-star"></i>
      <span class="ml-2">0</span>
    </div>
    <div class="mb-3">
      <p style="color: gray">
        By
        <a
          href="http://localhost:3000/"
          style="color: #46d573; font-size: larger; opacity: 100%"
          >NestFood</a
        >
      </p>
    </div>
    <div class="flex text-primary font-bold gap-3 items-baseline mb-2">
      <span class="text-[20px]">$28.95</span>
      <s class="text-slate-400"
        >$<s class="text-[13px] text-primary">32.80</s></s
      >
      <button
        @click="addToCart"
        class="bg-primary text-white px-4 py-2 rounded-md flex items-center ml-8 opacity-100 hover:opacity-100"
      >
        <i class="bx bx-cart-alt mr-2"></i> Add
      </button>
    </div>
  </div>
  <div class="dropdownn">
    <n-dropdown
      trigger="hover"
      :options="options"
      style="background-color: yellowgreen"
    >
      <n-button style="background-color: white"
        ><n-icon size="24">
          <img
            src="../../../assets/img/icons8-eye-24.png"
            alt=""
          /> </n-icon
      ></n-button>
    </n-dropdown>
    <n-dropdown
      trigger="hover"
      :options="options1"
      style="background-color: yellowgreen"
    >
      <n-button style="background-color: white"
        ><n-icon size="24">
          <img
            src="../../../assets/img/icons8-arrow-32.png"
            alt=""
          /> </n-icon
      ></n-button>
    </n-dropdown>
    <n-dropdown
      trigger="hover"
      :options="options2"
      style="background-color: yellowgreen"
    >
      <n-button style="background-color: white"
        ><n-icon size="24">
          <img
            src="../../../assets/img/icons8-heart-24.png"
            alt=""
          /> </n-icon
      ></n-button>
    </n-dropdown>
  </div>
</template>
<script setup lang="ts">
// import { useProductStore } from "../store";
import { ref, onMounted } from "vue";
import { NDropdown } from "naive-ui";
import { NButton } from "naive-ui";

import { NIcon } from "naive-ui";
const options = [
  {
    label: "Quick view",
  },
];
const options1 = [
  {
    label: "Compare",
  },
];
const options2 = [
  {
    label: "Wishlist",
  },
];

// const productCart = useProductStore();
const props = defineProps({
  data: Object,
});

const count = ref(0);

// function increment() {
//   count.value += 1;
//   productCart.counterPlus(props.data?.id, "plus");
// }

// function decrement() {
//   if (count.value <= 1) {
//     return;
//   }
//   count.value -= 1;
//   productCart.counterPlus(props.data?.id, "minus");
// }

function addToCart() {
  // productCart.addToCart(props.data);
}

onMounted(() => {
  count.value = props.data?.count || 1;
});
</script>

<style scoped>
.dropdownn {
  position: absolute;
  margin: -370px 60px;
}
.main:hover {
  opacity: 1;
  visibility: visible;
  top: 45%;
}

.main:hover {
  box-shadow: none;
  border: none;
}
</style>
