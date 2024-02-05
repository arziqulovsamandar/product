<script setup>
import { ref } from "vue";

const props = defineProps({
  images: Array,
});

const currentIndex = ref(0);
const img = ref(null);

function selectImg(i) {
  currentIndex.value = i;
  img.value = props?.images[i];
}
function changedByArrow(str) {
  if (str == "next") {
    if (currentIndex.value !== props.images?.length - 1) {
      currentIndex.value += 1;
    } else {
      currentIndex.value = 0;
    }
  } else {
    if (currentIndex.value === 0) {
      currentIndex.value = props.images?.length - 1;
    } else {
      currentIndex.value -= 1;
    }
  }
  img.value =
    props?.images[Math.abs(currentIndex.value) % props?.images.length];
}
</script>

<template>
    <section class="flex flex-col mt-5">
      <div class="border p-[70px] w-[70%] mx-auto pb-[35px] border-[#e7e7e7e6] rounded-[20px] mb-3">
        <div class="relative" v-for="i in [currentIndex]" :key="i">
          <img class="w-full h-full object-cover rounded-[20px] bg-gray-100" :src="img || (props.images?.length && props.images[0])" />
        </div>
      </div>

      <div class="relative w-[70%] mx-auto">
        <div class="sidebar flex w-full overflow-scroll">
        <span
          class="hover:bg-main-100 hover:text-white absolute text-lg cursor-pointer top-[35%] left-[-20px] shadow-md text-main-100 font-bold bg-white w-8 h-8 rounded-full flex items-center justify-center"
          @click="changedByArrow('next')">
          <i class='bx bx-chevron-left' ></i>
        </span>
        <div class="flex justify-between">
          <img v-for="(image, index) in props?.images" :key="index" @click="selectImg(index)"
            class="w-[calc(25%-4px)] object-cover border border-[rgba(231,231,231,0.9)] hover:border-main-100 rounded-[20px] p-4" :src="image"
          />
        </div>
        <span
          class="hover:bg-main-100 hover:text-white absolute text-lg cursor-pointer top-[35%] right-[-20px] shadow-md text-main-100 font-bold bg-white w-8 h-8 rounded-full flex items-center justify-center"
          @click="changedByArrow('next')">
          <i class='bx bx-chevron-right' ></i>
        </span>
        </div>
      </div>
    </section>
</template>

<style scoped>
.sidebar::-webkit-scrollbar {
  display: none;
}
</style>
