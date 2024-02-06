<template>
  <router-link
    :to="'/product/' + exampleProp.props.data.id"
    class="transition-all duration-300 relative card 2lg:w-[calc(20%-10px)] 3xs:w-[calc(50%-10px)] md:w-[calc(100%/3-10px)] w-full hover:border-[rgba(59,183,125,0.35)] hover:border-opa p-[10px] sm:p-[20px] border-[1px] border-slate-200 cursor-pointer hover:shadow-xl rounded-2xl"
  >
    <div
      class="text-white w-[22%] h-[6%] absolute top-0 left-0 text-center rounded-br-2xl rounded-tl-xl"
      style="font-size: smaller; padding-top: 3px; background-color: #6ec1e4"
    >
      {{ exampleProp.props.data.sale }}%
    </div>
    <div
      class="text-white w-[22%] h-[6%] bg-main-100 absolute top-0 right-0 text-center rounded-bl-2xl rounded-tr-xl"
      style=" font-size: smaller; padding-top: 3px"
    >
      Sale
    </div>

    <div class="w-full">
      <img
        class=" mb-2 w-full p-4 hover:p-0 transition-all duration-300"
        src="../../../assets/img/product-2-1.jpg"
        alt=""
      />
    </div>
    <div>
      <p class="text-[14px] text-fortitle-100 mb-2">{{ exampleProp.props.data.category }}</p>
    </div>
    <div>
      <h2 class="font-semibold text-[16px] text-fortitle-200 mb-3">
        {{ exampleProp.props.data.name }}
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
    <div class="flex text-main-100 font-bold gap-3 justify-between items-baseline mb-2">
      <s class="text-gray-400">$<s class="text-[13px] text-primary">{{ exampleProp.props.data.old_price }}</s></s>
      <span class="text-[18px] underline">{{ exampleProp.props.data.price }}</span>
      <button
        @click="addToCart"
        class="bg-green-100 text-main-100 font-semibold px-5 py-2 justify-center flex rounded-md items-center opacity-100 hover:opacity-100 w-40 h-9"
      >
        <img
          src="../../../assets/img/cart-18-16g.png"
          alt="Cart Icon"
          class="-ml-1 mr-1 h-5 w-4"
        />
        Add
      </button>
    </div>



<!--    <div class="w-full">-->
<!--      <img class="mb-2 w-full p-4 hover:p-0 transition-all duration-300" :src="product.image" alt="" />-->
<!--    </div>-->
<!--    <div>-->
<!--      <p class="text-[14px] text-fortitle-100 mb-2">{{ product.category }}</p>-->
<!--    </div>-->
<!--    <div>-->
<!--      <h1 class="font-semibold text-[16px] text-fortitle-200 mb-3">{{ product.name }}</h1>-->
<!--    </div>-->
<!--    <div class="text-slate-400 text-[15px] mb-2">-->
<!--      <i class="bx bx-star"></i>-->
<!--      <i class="bx bx-star"></i>-->
<!--      <i class="bx bx-star"></i>-->
<!--      <i class="bx bx-star"></i>-->
<!--      <i class="bx bx-star"></i>-->
<!--      <span class="ml-2">{{ product.rating }}</span>-->
<!--    </div>-->
<!--    <div class="mb-3">-->
<!--      <p class="text-fortitle-100">-->
<!--        By <a :href="product.brand_website" class="text-main-100 text-[16px]">{{ product.brand }}</a>-->
<!--      </p>-->
<!--    </div>-->
<!--    <div class="flex text-main-100 font-bold gap-3 justify-between items-baseline mb-2">-->
<!--      <s class="text-gray-400">{{ product.original_price }}</s>-->
<!--      <span class="text-[18px] underline">{{ product.sale_price }}</span>-->
<!--      <button-->
<!--        @click="addToCart"-->
<!--        class="bg-green-100 text-main-100 font-semibold px-5 py-2 justify-center flex rounded-md items-center opacity-100 hover:opacity-100 w-40 h-9"-->
<!--      >-->
<!--        <img src="../../../assets/img/cart-18-16g.png" alt="Cart Icon" class="-ml-1 mr-1 h-5 w-4" />-->
<!--        Add-->
<!--      </button>-->
<!--    </div>-->




    <div class="dropdown absolute flex flex-nowrap">
      <router-link :to="'/product/' + exampleProp.props.data.id">
        <n-dropdown
          class="bg-main-100"
          trigger="hover"
          :options="options"
        >
          <n-button class="rounded-e-none" style="background-color: white"
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
          <n-button class="rounded-none" style="background-color: white"
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
          <n-button class="rounded-s-none" style="background-color: white"
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

<script setup lang="ts">
// import { useProductStore } from "../store";
import { ref, onMounted } from "vue";
import { NDropdown } from "naive-ui";
import { NButton } from "naive-ui";
import { NIcon } from "naive-ui";
import { fetchProducts } from '../../../services/ProductService.ts';

interface Product {
  id: number;
  name: string;
  category: string;
  image: string;
  rating: string;
  brand: string;
  brand_website: string;
  original_price: string;
  sale_price: string;
}

const product = ref<Product>({
  id: 0,
  name: '',
  category: '',
  image: '',
  rating: '',
  brand: '',
  brand_website: '',
  original_price: '',
  sale_price: '',
});


const options = [
  { label: "Quick view" },
];

const options1 = [
  { label: "Compare" },
];

const options2 = [
  { label: "Wishlist" },
];

// const productCart = useProductStore();

const props = defineProps({
  data: Object,
});


const exampleProp = {
  props: {
    data: {
      id: 1,
      name: "Apple",
      description: "This is red apple",
      category: 'Fruits',
      price: 33.22,
      old_price: 28.15,
      sale: 15,
      total_count: 30,
      mfg: "01.01.2014",
      life: "1 year",
      qr_code: "8m66567",
      value: 30,
      brand: "Almazar",
      is_active: "5 star",
      unit_of_measure: "kg"
    }
  }
}


const count = ref(0);

function addToCart() {
  // productCart.addToCart(props.data);
}


onMounted(async () => {
  try {
    const products = await fetchProducts();
    if (products.length > 0) {
      product.value = products[0];
    }
  } catch (error) {
    console.error('Error fetching products:', error);
  }
});


// onMounted(() => {
//   count.value = props.data?.count || 1;
// });
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