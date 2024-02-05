<template>
  <div
    class="main relative p-3 border-2 border-slate-200 hover:shadow-lg shadow-slate-800 duration-500 ease-in-out cursor-pointer rounded-2xl m-2"
  >
    <div
      class="text-white w-[22%] h-[6%] absolute top-0 left-0 text-center rounded-br-2xl rounded-tl-xl"
      style="font-size: smaller; padding-top: 3px; background-color: #6ec1e4"
    >
      13%
    </div>
    <div
      class="text-white w-[22%] h-[6%] absolute top-0 right-0 text-center rounded-bl-2xl rounded-tr-xl"
      style="background-color: #3bb77e; font-size: smaller; padding-top: 3px"
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
      <p class="cardCategory" style='font-size: small; color: gray'>Fresh Fruit</p>
    </div>
    <div>
      <h1 class="cardText font-bold text-lg text-gray-600 mb-3">
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
    <div class='mb-3'>
      <p class="cardBy" style='color: gray'>By <a href="http://localhost:3000/" style="color: #3bb77e; font-size: medium; opacity: 100%">NestFood</a></p>
    </div>
    <div class="flex text-green-500 font-bold gap-3 items-baseline mb-2 add-button" style="color: #3bb77e">
      <span class="price text-[18px] underline">$28.95</span>
      <s class="price text-slate-400">$<s class="text-[13px] text-primary">32.80</s></s>
      <button @click="addToCart" class="bg-green-100 text-green-500 text-center font-semibold px-4 py-2 rounded-md flex items-center ml-8 opacity-100 hover:opacity-100 w-40 h-9">
        <img src="../../../assets/img/cart-18-16g.png" alt="Cart Icon" class="addText ml-2 mr-1 h-5 w-4" style="color: #3bb77e">
        Add
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
.main {
  width: 100%;
  max-width: 280px;
  margin: auto;
  position: relative;

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

  @media screen and (max-width: 375px) {
    max-width: 250px;
  }

  @media screen and (min-width: 376px) and (max-width: 412px) {
    max-width: 330px;
  }

  @media screen and (min-width: 413px) and (max-width: 820px) {
    max-width: 250px;
  }
}

.add-button {
  @media screen and (max-width: 375px) {
    flex-direction: row;
    margin-right: 5px;
  }

  @media screen and (min-width: 376px) and (max-width: 412px) {
    flex-direction: row;
    margin-right: 15px;
  }

  @media screen and (min-width: 413px) and (max-width: 820px) {
    flex-direction: row;
  }
}

.addText {
  @media screen and (max-width: 375px) {
    margin-left: -10px;
  }

  @media screen and (min-width: 376px) and (max-width: 412px) {
    margin-left: 15px;
  }

  @media screen and (min-width: 413px) and (max-width: 820px) {
    margin-left: -4px;
  }
}

.cardText {
  @media screen and (max-width: 375px) {
    text-align: center;
  }

  @media screen and (min-width: 376px) and (max-width: 412px) {
    text-align: center;
  }

  @media screen and (min-width: 413px) and (max-width: 820px) {
    flex-direction: row;
  }
}

.cardCategory {
  @media screen and (max-width: 375px) {
    text-align: center;
  }

  @media screen and (min-width: 376px) and (max-width: 412px) {
    text-align: center;
  }

  @media screen and (min-width: 413px) and (max-width: 820px) {
    flex-direction: row;
  }
}

.cardBy {
  @media screen and (max-width: 375px) {
    text-align: center;
  }

  @media screen and (min-width: 376px) and (max-width: 412px) {
    text-align: center;
  }

  @media screen and (min-width: 413px) and (max-width: 820px) {
    flex-direction: row;
  }
}

.price {
  @media screen and (max-width: 375px) {
    margin-left: 3px;
  }

  @media screen and (min-width: 376px) and (max-width: 412px) {
    margin-left: 10px;
  }

  @media screen and (min-width: 413px) and (max-width: 820px) {
    flex-direction: row;
  }
}


</style>