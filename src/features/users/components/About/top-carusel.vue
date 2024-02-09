<template>
    <div class="flex flex-wrap justify-between items-center my-10 w-full max-w-[1400px] mx-auto">
        <div class="md:w-[50%] w-full p-4">
            <img class="rounded-3xl" :src=image alt="">
        </div>
        <div class="md:w-[50%] w-full flex-wrap p-4 ">
            <p class="text-[30px] text-[#253D4F] font-[700]">Welcome to Nest</p><br>
            <p class="text-[14px] text-[#7E7E7E]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt <br> 
                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation <br> 
                ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in <br> 
                reprehenderit in voluptate id est laborum.
            </p>

            <p class="mt-5 text-[14px] text-[#7E7E7E]">Ius ferri velit sanctus cu, sed at soleat accusata. Dictas prompta et Ut placerat legendos <br>
                interpre.Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante Etiam sit amet <br>
                orci eget. Quis commodo odio aenean sed adipiscing. Turpis massa tincidunt dui ut ornare <br>
                lectus. Auctor elit sed vulputate mi sit amet. Commodo consequat. Duis aute irure dolor <br>
                in reprehenderit in voluptate id est laborum.
            </p>
            <n-carousel style="width: 100%; margin-top: 40px;" show-arrow  :slides-per-view="3" :space-between="20" draggable>
                <img
                class="carousel-img"
                src="https://themepanthers.com/wp/nest/d1/wp-content/uploads/2022/05/about-4.png"
                >
                <img
                class="carousel-img"
                src="https://themepanthers.com/wp/nest/d1/wp-content/uploads/2022/05/about-3.png"
                >
                <img
                class="carousel-img"
                src="https://themepanthers.com/wp/nest/d1/wp-content/uploads/2022/05/about-2.png"
                >
                <img
                class="carousel-img"
                src="https://themepanthers.com/wp/nest/d1/wp-content/uploads/2022/05/about-4.png"
                >
                <img
                class="carousel-img"
                src="https://themepanthers.com/wp/nest/d1/wp-content/uploads/2022/05/about-3.png"
                >
                <img
                class="carousel-img"
                src="https://themepanthers.com/wp/nest/d1/wp-content/uploads/2022/05/about-2.png"
                >
            </n-carousel>
        </div>
    </div>
</template>



<script setup lang="ts">
    const image = 'https://themepanthers.com/wp/nest/d1/wp-content/uploads/2022/05/about-1.png'
    import {NCarousel} from "naive-ui"
</script>

<style scoped>
.carousel-img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

</style>
