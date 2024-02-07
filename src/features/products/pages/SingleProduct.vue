<template>
  <main class="">
    <div class="flex items-center">
      <SingleProductSlider class="w-[50%]" :images="exampleProduct.images" />
      <ProductInfoCard class="w-[50%]" :data="exampleProduct.data" />
    </div>

    <div class="px-[50px] py-[40px] mt-10 border-[1px] border-[#e7e7e7e6] rounded-[15px] w-[1450px] mx-auto">
      <div class="flex ml-3 mb-12">
        <button class="hover:text-main-100 text-[17px] mr-2 font-semibold text-[#7e7e7e] border-[1px] border-[#e7e7e78f] py-[13px] px-[25px] shadow-md rounded-[30px]">Description</button>
        <button class="hover:text-main-100 text-[17px] mr-2 font-semibold text-[#7e7e7e] border-[1px] border-[#e7e7e78f] py-[13px] px-[25px] shadow-md rounded-[30px]">Additional Information</button>
        <button class="hover:text-main-100 text-[17px] mr-2 font-semibold text-[#7e7e7e] border-[1px] border-[#e7e7e78f] py-[13px] px-[25px] shadow-md rounded-[30px]">Reviews</button>
      </div>
      <div class="text-fortitle-100 leading-[2]">
        {{ exampleProduct.data.description }}
      </div>
    </div>
  </main>
</template>

<script setup>

import SingleProductSlider from "../components/singleProductSlider.vue";
import ProductInfoCard from "../components/ProductInfoCard.vue";
import { useRoute } from "vue-router";
// import { useProductStore } from "";
import { onMounted } from "vue";

const route = useRoute();
const exampleProduct = {
  id: 1,
  images: [
    "https://catherineasquithgallery.com/uploads/posts/2021-12/1639789370_289-catherineasquithgallery-com-p-kosmos-fon-rozovii-494.jpg",
    "https://cdn42.zvuk.com/pic?type=release&id=28640630&ext=jpg&size=1920x1920",
    "https://cdn61.zvuk.com/pic?type=release&id=16452008&ext=jpg&size=1920x1920",
    "https://cdn51.zvuk.com/pic?type=release&id=29007464&ext=jpg&size=1920x1920",
  ],
  data: {
    name: "something",
    price: 28.84,
    category: "something",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad nisi vel nihil, culpa accusamus fugit minima illum, tenetur id est eaque doloribus quis! Doloribus nostrum et molestiae reiciendis sequi excepturi tenetur iure voluptatum distinctio possimus natus repellendus quas beatae ducimus aliquam necessitatibus aperiam, architecto ex debitis ipsam error dolore omnis odit dolor. Odit voluptatem neque dolorum at similique impedit exercitationem doloribus non hic nesciunt omnis quae consequatur vitae a illum officia architecto reiciendis laudantium earum repellendus temporibus, provident sed nihil placeat? Est, laborum. Odio sed soluta illo, accusantium minima facere quae alias nulla, ipsa non, id quaerat sapiente dolore tempora?"
  }
}
</script>

<style scoped></style>
