<template>
  <div class="navbar">
    <div>
      <a href="">About Us</a>
      <span> | </span>
      <a href="">My Account</a>
      <span> | </span>
      <a href="">Wishlist</a>
      <span> | </span>
      <a href="">Order Tracking</a>
    </div>
    <a href=""
      ><span class="navbar-p1"
        >100% Secure delivery without contacting the courier</span
      ></a
    >
    <div>
      <a href=""
        >Neeed help? Call Us: <span class="navbar-p">+1800900122</span></a
      >
    </div>
    <a
      href=""
      class="navbar-lang"
      ><span> | </span><lang-switcher /><span> | </span> INR <span> </span
    ></a>
  </div>
  <Navbar />
  <Input
    placeholder="Your email address"
    button="Subscribe"
  />
  <h2 class="deals-of">Deals of the day</h2>
  <Product />
  <div class="futter">
    <Futter />
  </div>
</template>

<script setup lang="ts">
import LangSwitcher from "../../../components/langSwitcher.vue";
import Navbar from "../../../components/navbar.vue";
import Futter from "../../../components/footer.vue";
import Input from "../../../components/base/input.vue";
import Product from "./products.vue";
</script>

<style scoped>
.deals-of {
  margin: 10px;
  display: flex;
  justify-content: center;
}
.futter {
  margin: 130px 0px;
}
.navbar {
  display: flex;
  justify-content: space-between;
  border: 1px solid rgb(227, 192, 192);
  padding: 10px;
}
.navbar a {
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
}
.navbar a :hover {
  color: black;
}
</style>
