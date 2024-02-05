<template>
  <div class="bg-main-100 h-[70px] flex justify-center">
    <div class="w-[1610px] flex justify-between items-center h-full px-[15px] mx-[5px]">
      <div class="flex items-center justify-between xl:justify-start h-full w-full">
        <div class="flex items-center h-full">
          <div class="main-dropdown flex bg-[#FDC040] items-center xl:h-[44px] h-[36px] transition-all rounded-[5px] text-white px-[20px] min-w-[260px] xl:mr-[35px] mr-[10px]">
            <i class='bx bx-border-all text-[22px] mr-[3px]'></i>
            <button class="text-[16px] font-medium">Browse All Categories</button>
            <div class="main-dropdown-content border-[1px] border-[rgba(59,183,125,0.4)] bor max-h-[350px] p-[10px] overflow-scroll w-[465px] shadow-md rounded-[10px] z-20 bg-white absolute xl:top-[44px] top-[36px] left-0">
              <div class="flex flex-wrap p-[10px] gap-[10px]">
                <!-- <a href="#" class="text-fortitle-200 border-[1px] border-[rgba(231,231,231,0.6)] hover:border-main-100">
                  <div class="flex items-center">
                    <i class='bx bx-ghost text-main-100 text-[25px] mr-1'></i>
                    <div v-for="(item, i) in users" :key="i">
                      {{ item.name }}
                    </div>
                  </div>
                </a> -->
                <a href="#" class="text-fortitle-200 border-[1px] border-[rgba(231,231,231,0.6)] hover:border-main-100">
                  <div class="flex items-center">
                    <i class='bx bx-ghost text-main-100 text-[25px] mr-1'></i>
                    <div>
                      Пункт 1
                    </div>
                  </div>
                </a>
                <a href="#" class="text-fortitle-200 border-[1px] border-[rgba(231,231,231,0.6)] hover:border-main-100">
                  <div class="flex items-center">
                    <i class='bx bxs-pyramid text-main-100 text-[25px] mr-1'></i>
                    <div>
                      Пункт 2
                    </div>
                  </div>
                </a>
                <a href="#" class="text-fortitle-200 border-[1px] border-[rgba(231,231,231,0.6)] hover:border-main-100">
                  <div class="flex items-center">
                    <i class='bx bxs-institution text-main-100 text-[25px] mr-1'></i>
                    <div>
                      Пункт 3
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div class="ml-3 flex items-center relative top-[1px] justify-center">
              <i class='bx bx-chevron-down text-[24px] text-center'></i>
            </div>
          </div>
          <a class="hover:bg-main-200 hidden lg:flex items-center text-white h-full min-w-[132px] w-[14vw]">
            <i class='xl:pl-[17px] pl-[8px] bx bxs-hot text-[25px] mr-[2px]'></i>
            <span class="text-[16px] pr-[17px] font-semibold">Hot Deals</span>
          </a>
        </div>

        <div class="h-full hidden items-center md:flex">
          <div class="group h-full relative flex items-center bg-main-100 hover:bg-main-200">
            <button class="dropdown-btn relative">
              <div>Home</div>
              <i class='pl-[2px] bx bx-chevron-down text-[18px] mr-[-5px] text-center relative transform top-1'></i>
            </button>
            <div class="hidden border-[1px] shadow-md border-[rgba(231,231,231,0.6)] px-[15px] pt-[20px] pb-[15px] group-hover:block absolute top-[70px] z-20 bg-white min-w-[200px] rounded-[10px]">
              <a href="/" class="dropdown-link text-fortitle-100">Home 1</a>
              <a href="/" class="dropdown-link text-fortitle-100">Home 2</a>
              <a href="/" class="dropdown-link text-fortitle-100">Home 3</a>
            </div>
          </div>

          <a href="/" class="h-full flex items-center bg-main-100 hover:bg-main-200 px-[8px] xl:px-[17px] font-semibold text-white">
            About
          </a>

          <div class="group h-full relative flex items-center bg-main-100 hover:bg-main-200">
            <button class="dropdown-btn relative">
              <div>Shop</div>
              <i class='pl-[2px] bx bx-chevron-down text-[18px] mr-[-5px] text-center relative top-1'></i>
            </button>
            <div class="hidden border-[1px] shadow-md border-[rgba(231,231,231,0.6)] px-[15px] pt-[20px] pb-[15px] group-hover:block absolute top-[70px] z-20 bg-white min-w-[200px] rounded-[10px]">
              <a href="#" class="dropdown-link text-fortitle-100">Пункт 1</a>
              <a href="#" class="dropdown-link text-fortitle-100">Пункт 2</a>
              <a href="#" class="dropdown-link text-fortitle-100">Пункт 3</a>
            </div>
          </div>

          <div class="group h-full relative flex min-w-fit items-center bg-main-100 hover:bg-main-200">
            <button class="dropdown-btn relative">
              <div>Mega menu</div>
              <i class='pl-[2px] bx bx-chevron-down text-[18px] mr-[-5px] text-center relative top-1'></i>
            </button>
            <div class="hidden border-[1px] shadow-md border-[rgba(231,231,231,0.6)] px-[15px] pt-[20px] pb-[15px] group-hover:block absolute top-[70px] z-20 bg-white min-w-[200px] rounded-[10px]">
              <a href="#" class="dropdown-link text-fortitle-100">Mega menu</a>
            </div>
          </div>

          <div class="group h-full relative flex items-center bg-main-100 hover:bg-main-200">
            <button class="dropdown-btn relative">
              <div>Vendors</div>
              <i class='pl-[2px] bx bx-chevron-down text-[18px] mr-[-5px] text-center relative transform top-1'></i>
            </button>
            <div class="hidden border-[1px] shadow-md border-[rgba(231,231,231,0.6)] px-[15px] pt-[20px] pb-[15px] group-hover:block absolute top-[70px] left-[-109px] xl:left-0 z-20 bg-white min-w-[200px] rounded-[10px]">
              <a href="#" class="dropdown-link text-fortitle-100">Vendors</a>
              <a href="#" class="dropdown-link text-fortitle-100">My Orders</a>
              <a href="#" class="dropdown-link text-fortitle-100">Store Details</a>
              <a href="#" class="dropdown-link text-fortitle-100">Store Listing</a>
            </div>
          </div>

          <div class="group h-full relative flex items-center bg-main-100 hover:bg-main-200">
            <button class="dropdown-btn relative">
              <div>Blog</div>
              <i class='pl-[2px] bx bx-chevron-down text-[18px] mr-[-5px] text-center relative transform top-1'></i>
            </button>
            <div class="hidden border-[1px] shadow-md border-[rgba(231,231,231,0.6)] px-[15px] pt-[20px] pb-[15px] group-hover:block absolute top-[70px] left-[-135px] xl:left-0 z-20 bg-white min-w-[200px] rounded-[10px]">
              <a href="#" class="dropdown-link text-fortitle-100">Blog</a>
              <a href="#" class="dropdown-link text-fortitle-100">Blog grid</a>
              <a href="#" class="dropdown-link text-fortitle-100">Blog list</a>
              <a href="#" class="dropdown-link text-fortitle-100">Blog big</a>
            </div>
          </div>
        </div>
      </div>
      <div class="text-white w-[160px] h-[38px] right-0 hidden xl:block">
        <div class="flex items-center justify-between">
          <i class='bx bx-support text-[40px] mr-[4px]'></i>
          <div class="flex flex-col justify-center items-center w-[120px]">
            <a href="/" class="text-[22px] leading-[0.8] font-semibold">1900888123</a>
            <span class="text-[12px] tracking-wide">24/7 Support Center</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
// import { NCollapse, NCollapseItem } from "naive-ui";

interface UserData {
  name: string;
  image: string;
}

const users = ref<UserData[]>([]);

const fetchData = async () => {
  try {
    const response = await fetch("http://34.136.49.137:4000/api/category/all");
    if (response.ok) {
      users.value = await response.json();
      console.log(users.value);
    } else {
      console.error(`Serverdan xato: ${response.status}`);
    }
  } catch (error) {
    console.error("Xatolik yuz berdi:", error);
  }
};

fetchData();

// const getImageUrl = (imageName: string): string => {
//   return require(`@/assets/img/${imageName}`);
// };
</script>

<style scoped>
.dropdown-link {
  display: block;
  padding: 8px 16px;
  border-radius: 10px;
  font-weight: 500;
}

.dropdown-link:hover {
  background-color: #ececec80;
}

.dropdown-btn {
  padding: 0 8px;
  color: white;
  font-weight: 500;
  display: flex;
  justify-content: center;
}


.main-dropdown {
  position: relative;
}

.main-dropdown-content {
  display: none;
}

.main-dropdown-content a {
  font-weight: 500;
  background-color: #fff;
  border-radius: 10px;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  width: calc(50% - 5px);
}

.main-dropdown-content a:hover {
  background-color: #ececec80;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
}

.main-dropdown:hover .main-dropdown-content {
  display: block;
}

@media (min-width: 1280px) {
  .dropdown-btn {
    padding: 0 17px;
  }
}
</style>


