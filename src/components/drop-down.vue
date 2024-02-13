<template>
  <div class="bg-main-100 h-[70px] flex justify-center">
    <div
      class="w-[1610px] flex justify-between items-center h-full px-[15px] mx-[5px]"
    >
      <div
        class="flex items-center justify-between 2xl:justify-start h-full w-full"
      >
        <div class="flex items-center h-full">
          <div
            class="main-dropdown flex justify-between bg-[#FDC040] items-center xl:h-[44px] h-[36px] transition-all rounded-[5px] text-white px-[20px] w-fit lg:w-[260px] xl:mr-[35px] mr-[10px]"
          >
            <div class="flex items-center">
              <i class="bx bx-border-all text-[22px] mr-[3px]"></i>
              <button class="text-[16px] font-medium whitespace-nowrap">
                {{ t("navbar_dropdown.categories.name") }}
              </button>
            </div>

            <div
              class="main-dropdown-content border-[1px] border-[rgba(59,183,125,0.4)] bor max-h-[350px] p-[10px] overflow-scroll w-[465px] shadow-md rounded-[10px] z-20 bg-white absolute xl:top-[44px] top-[36px] left-0"
            >
              <div class="flex flex-wrap p-[10px] gap-[10px]">
                <a
                  v-for="category in categories"
                  :key="category.id"
                  :href="`/${category.name}`"
                  class="text-fortitle-200 border-[1px] border-[rgba(231,231,231,0.6)] hover:border-main-100"
                >
                  <div class="flex items-center">
                    <div>{{ category.name }}</div>
                  </div>
                </a>
              </div>
            </div>

            <div
              class="ml-3 flex items-center relative top-[1px] justify-center"
            >
              <i class="bx bx-chevron-down text-[24px] text-center"></i>
            </div>
          </div>
          <a
            class="hover:bg-main-200 hidden 2lg:flex items-center text-white h-full w-fit min-w-[132px]"
          >
            <i
              class="xl:pl-[17px] pl-[8px] bx bxs-hot text-[25px] mr-[2px]"
            ></i>
            <span
              class="text-[16px] pr-[17px] font-semibold whitespace-nowrap"
              >{{ t("navbar_dropdown.hots.name") }}</span
            >
          </a>
        </div>

        <div
          class="h-full hidden items-center w-full justify-end 3xl:justify-center 2md:flex"
        >
          <div
            class="group h-full relative flex items-center bg-main-100 hover:bg-main-200"
          >
            <button class="dropdown-btn relative">
              <div>{{ t("navbar_dropdown.home.name") }}</div>
              <i
                class="pl-[2px] bx bx-chevron-down text-[18px] mr-[-5px] text-center relative transform top-1"
              ></i>
            </button>
            <div
              class="hidden border-[1px] shadow-md border-[rgba(231,231,231,0.6)] px-[15px] pt-[20px] pb-[15px] group-hover:block absolute top-[70px] z-20 bg-white min-w-[200px] rounded-[10px]"
            >
              <a
                href="/"
                class="dropdown-link text-fortitle-100"
                >{{ t("navbar_dropdown.home.options.option1") }}</a
              >
              <a
                href="/"
                class="dropdown-link text-fortitle-100"
                >{{ t("navbar_dropdown.home.options.option2") }}</a
              >
              <a
                href="/"
                class="dropdown-link text-fortitle-100"
                >{{ t("navbar_dropdown.home.options.option3") }}</a
              >
            </div>
          </div>

          <a
            href="/about"
            class="w-fit whitespace-nowrap h-full flex items-center bg-main-100 hover:bg-main-200 px-[8px] xl:px-[17px] font-semibold text-white"
          >
            {{ t("navbar_dropdown.about.name") }}
          </a>

          <div
            class="group h-full relative flex items-center bg-main-100 hover:bg-main-200"
          >
            <button class="dropdown-btn relative">
              <div>{{ t("navbar_dropdown.shop.name") }}</div>
              <i
                class="pl-[2px] bx bx-chevron-down text-[18px] mr-[-5px] text-center relative top-1"
              ></i>
            </button>
            <div
              class="hidden border-[1px] shadow-md border-[rgba(231,231,231,0.6)] px-[15px] pt-[20px] pb-[15px] group-hover:block absolute top-[70px] z-20 bg-white min-w-[200px] rounded-[10px]"
            >
              <a
                href="#"
                class="dropdown-link text-fortitle-100"
                >{{ t("navbar_dropdown.shop.options.option1") }}</a
              >
              <a
                href="#"
                class="dropdown-link text-fortitle-100"
                >{{ t("navbar_dropdown.shop.options.option2") }}</a
              >
              <a
                href="#"
                class="dropdown-link text-fortitle-100"
                >{{ t("navbar_dropdown.shop.options.option3") }}</a
              >
            </div>
          </div>

          <div
            class="group h-full relative flex min-w-fit items-center bg-main-100 hover:bg-main-200"
          >
            <button class="dropdown-btn relative">
              <div>{{ t("navbar_dropdown.mega_menu.name") }}</div>
              <i
                class="pl-[2px] bx bx-chevron-down text-[18px] mr-[-5px] text-center relative top-1"
              ></i>
            </button>
            <div
              class="hidden border-[1px] shadow-md border-[rgba(231,231,231,0.6)] px-[15px] pt-[20px] pb-[15px] group-hover:block absolute top-[70px] z-20 bg-white min-w-[200px] rounded-[10px]"
            >
              <a
                href="#"
                class="dropdown-link text-fortitle-100"
                >{{ t("navbar_dropdown.mega_menu.options.option1") }}</a
              >
            </div>
          </div>

          <div
            class="group h-full relative flex items-center bg-main-100 hover:bg-main-200"
          >
            <button class="dropdown-btn relative">
              <div>{{ t("navbar_dropdown.vendor.name") }}</div>
              <i
                class="pl-[2px] bx bx-chevron-down text-[18px] mr-[-5px] text-center relative transform top-1"
              ></i>
            </button>
            <div
              class="hidden border-[1px] shadow-md border-[rgba(231,231,231,0.6)] px-[15px] pt-[20px] pb-[15px] group-hover:block absolute top-[70px] left-[-109px] xl:left-0 z-20 bg-white min-w-[200px] rounded-[10px]"
            >
              <a
                href="#"
                class="dropdown-link text-fortitle-100"
                >{{ t("navbar_dropdown.vendor.options.option1") }}</a
              >
              <a
                href="#"
                class="dropdown-link text-fortitle-100"
                >{{ t("navbar_dropdown.vendor.options.option2") }}</a
              >
              <a
                href="#"
                class="dropdown-link text-fortitle-100"
                >{{ t("navbar_dropdown.vendor.options.option3") }}</a
              >
              <a
                href="#"
                class="dropdown-link text-fortitle-100"
                >{{ t("navbar_dropdown.vendor.options.option4") }}</a
              >
            </div>
          </div>

          <div
            class="group h-full relative flex items-center bg-main-100 hover:bg-main-200"
          >
            <button class="dropdown-btn relative">
              <div>{{ t("navbar_dropdown.blog.name") }}</div>
              <i
                class="pl-[2px] bx bx-chevron-down text-[18px] mr-[-5px] text-center relative transform top-1"
              ></i>
            </button>
            <div
              class="hidden border-[1px] shadow-md border-[rgba(231,231,231,0.6)] px-[15px] pt-[20px] pb-[15px] group-hover:block absolute top-[70px] left-[-135px] xl:left-0 z-20 bg-white min-w-[200px] rounded-[10px]"
            >
              <a
                href="#"
                class="dropdown-link text-fortitle-100"
                >{{ t("navbar_dropdown.blog.options.option1") }}</a
              >
              <a
                href="#"
                class="dropdown-link text-fortitle-100"
                >{{ t("navbar_dropdown.blog.options.option2") }}</a
              >
              <a
                href="#"
                class="dropdown-link text-fortitle-100"
                >{{ t("navbar_dropdown.blog.options.option3") }}</a
              >
              <a
                href="#"
                class="dropdown-link text-fortitle-100"
                >{{ t("navbar_dropdown.blog.options.option4") }}</a
              >
            </div>
          </div>

          <a
            href="/contact"
            class="w-fit whitespace-nowrap h-full flex items-center bg-main-100 hover:bg-main-200 px-[8px] xl:px-[17px] font-semibold text-white"
          >
            {{ t("navbar_dropdown.contact.name") }}
          </a>
        </div>
      </div>

      <div
        class="text-white w-[160px] h-[38px] right-0 hidden 3xl:flex 3xl:justify-center"
      >
        <div
          class="flex items-center justify-between transition-all duration-300"
        >
          <i class="bx bx-support text-[40px] mr-[4px]"></i>
          <div class="flex flex-col justify-center items-center w-[fit]">
            <a
              href="/"
              class="text-[22px] transition-all leading-[0.8] font-semibold mb-[2px] 2xl:mb-0"
              >1900888123</a
            >
            <span
              class="text-[12px] transition-al whitespace-nowrap tracking-wide"
              >{{ t("navbar_dropdown.support.support") }}</span
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useI18n } from "vue-i18n";
const { t } = useI18n();
import { personData } from "../modules/interface";
import { ref, onMounted } from "vue";

const categories = ref<personData[]>();

onMounted(async () => {
  try {
    const response = await fetch("http://34.16.201.71:5000/api/category/all");
    if (response.ok) {
      categories.value = await response.json();
    } else {
      console.error(`Failed to fetch categories: ${response.status}`);
    }
  } catch (error) {
    console.error("Error fetching categories:", error);
  }
});
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
