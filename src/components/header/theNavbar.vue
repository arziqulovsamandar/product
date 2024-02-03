<template>
  <div>
    <div class="navbar1">
      <div>
        <a href="">{{ t("product.about") }}</a>
        <span> | </span>
        <a href="">{{ t("product.my_acount") }}</a>
        <span> | </span>
        <a href="">{{ t("product.wishlist") }}</a>
        <span> | </span>
        <a href="">{{ t("product.order") }}</a>
      </div>
      <a href=""
        ><span class="navbar-p1">{{ t("product.securete") }}</span></a
      >
      <div>
        <a href=""
          >{{ t("product.need_help")
          }}<span class="navbar-p">+1800900122</span></a
        >
      </div>
      <div
        href=""
        class="navbar-lang"
      >
        <span> | </span><lang-switcher /><span> | </span> INR <span> </span>
      </div>
    </div>
    <div>
      <Navbar />
    </div>
    <div>
      <DropDown />
    </div>
    <div class="futter">
      <Futter />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";
const { t } = useI18n();
import LangSwitcher from "../../components/langSwitcher.vue";
import DropDown from "../drop-down.vue";
import Navbar from "../navbar.vue";
</script>

<style scoped>
.navbar1 {
  display: flex;
  justify-content: space-between;
  border: 1px solid rgb(227, 192, 192);
  padding: 10px;
  width: 100%;
}
.navbar1 a {
  color: rgb(77, 92, 90);
  font-size: 13px;
}
.navbar-p {
  color: yellowgreen;
  cursor: pointer;
  font-weight: 500;
}
.navbar-p1 {
  color: yellowgreen;
  cursor: pointer;
  font-weight: 700;
  font-size: 14px;
}

.navbar-p :hover {
  color: rgb(96, 130, 118);
}
.navbar-lang {
  display: flex;
  gap: 5px;
  font-size: 14px;
}
.navbar1 a :hover {
  color: black;
}

@media screen and (max-width: 1200px) {
  .navbar1 {
    display: none;
  }
}
</style>
