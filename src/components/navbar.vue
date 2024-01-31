<template>
  <div class="navbar">
    <AppLogo />
    <div style="margin: 20px">
      <input
        type="text"
        placeholder="Search for products..."
        class="input-navbar"
      />
      <button class="nanbar-button">Search</button>
    </div>
    <div class="became-vendor1">
      <span style="color: yellowgreen">Became Vendor</span>
      <img
        class="right"
        src="../assets/img/icons8-right-50.png"
        alt=""
      />
    </div>
    <div style="display: flex;">
      <div style="margin: 20px; display: flex">
        <img
          src="../assets/img/icons8-compare-git-50.png"
          alt=""
          class="compare-img"
        />
        <h1 class="compare">Compare</h1>
      </div>
      <div style="margin: 20px; display: flex">
        <img
          src="../assets/img/icons8-heart-26.png"
          alt=""
          class="compare-img"
        />
        <h1 class="compare">Wishlist</h1>
      </div>
      <div style="margin: 20px; display: flex">
        <img
          src="../assets/img/icons8-cart-24.png"
          alt=""
          class="compare-img"
        />
        <h1 class="compare">Cart</h1>
      </div>
      <div style="margin: 20px; display: flex">
        <img
          src="../assets/img/icons8-user-30.png"
          alt=""
          class="compare-img"
        />
        <a href="/login" class="compare">Account</a>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import AppLogo from "./app/app-logo.vue";
</script>
<style scoped>
.navbar {
  display: flex;
}
.navbar-h1 {
  font-size: 36px;
  color: yellowgreen;
  font-weight: 700;
}
.img1 {
  width: 70px;
  height: 70px;
}
.navbar-span {
  font-size: 12px;
  margin: -5px 0px;
  font-weight: 700;
  color: rgb(79, 76, 73);
}
.input-navbar {
  border: 2px solid yellowgreen;
  height: 50px;
  border-radius: 5px;
  padding: 10px;
  width: 300px;
  text-decoration-style: initial;
}
.nanbar-button {
  background-color: rgb(122, 180, 5);
  color: white;
  height: 40px;
  padding: 5px;
  width: 100px;
  border-radius: 5px;
  margin: 0px -105px;
}
.became-vendor1 {
  display: flex;
  padding: 5px;
  margin: 25px;
  border: 2px solid yellowgreen;
  width: 180px;
  gap: 10px;
  height: 40px;
  border-radius: 5px;
}
.compare {
  margin: 18px -10px;
  color: rgb(88, 91, 81);
  font-size: 18px;
}
.compare-img {
  margin: 15px;
  width: 30px;
  height: 30px;
}
</style>
