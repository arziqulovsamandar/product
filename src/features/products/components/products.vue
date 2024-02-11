<template>
  <div class="card transition-all duration-300 lg:w-[calc(25%-9px)] sm:w-[calc(50%-9px)] w-[calc(100%-9px)] 2sm:mb-[86px] sm:mb-[120px] 3xs:mb-[95px] mb-[120px] rounded-[20px] relative flex justify-center">
    <img
      class="rounded-[20px] h-[335px] w-full object-cover"
      src="../../../assets/img/healthy-vegetables-wooden-table_1150-38014.avif"
      alt=""
    />
    <div class="card-info transition-all duration-300 w-[95%] shadow-md absolute py-[25px] px-[30px] rounded-[20px] top-[75%] bg-white">
      <h3 class="text-fortitle-200 font-bold text-[16px] mb-[11px] hover:text-main-100 cursor-pointer">Organic Cage Grade A Large Eggs</h3>
      <span class="text-[14px] text-fortitle-100">By <a href="/" class="text-main-100">Hambger Hel</a></span>
      <div class="flex justify-between items-center">
        <div class="flex items-center">
          <h4 class="text-main-100 text-[18px] font-bold underline underline-offset-2">$21.00</h4>
          <s class="text-[13px] ml-2 text-[#ADADAD] font-bold">$35.00</s>
        </div>
        <div class="mt-[12px]">
          <div class="flex items-center justify-center transition-all duration-300 hover:bg-main-200 hover:text-white bg-green-100 px-[18px] py-[10px]  rounded-md text-main-100">
            <i class='bx bx-cart text-[20px]' ></i>
            <div class="font-bold pl-1">Add</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts"></script>
<style scoped>
.card:hover .card-info{
  margin-top: -12px;
}

</style>
