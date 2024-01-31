<template>
  <div class="navbar">
    <div class="input-navbar1">
      <AppLogo />
      <div
        style="margin: 20px"
        class="search-input1"
      >
        <input
          type="text"
          placeholder="Search for products..."
          class="input-navbar"
        />
        <button class="nanbar-button">Search</button>
      </div>
    </div>
    <div class="became-vendor1">
      <span style="color: yellowgreen">Became Vendor</span>
      <img
        class="right"
        src="../assets/img/icons8-right-50.png"
        alt=""
      />
    </div>
    <div style="display: flex">
      <div class="campare-wishlist">
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
        <a
          href="/login"
          class="compare account"
          >Account</a
        >
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import AppLogo from "./app/app-logo.vue";
</script>
<style scoped>
.campare-wishlist {
  display: flex;
}
.input-navbar1 {
  width: auto;
  display: flex;
}
.navbar {
  display: flex;
  justify-content: space-between;
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
  width: 15%;
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
.account {
  font-weight: 700;
}
@media screen and (max-width: 1200px) {
  .became-vendor1 {
    display: none;
  }
  .input-navbar1 {
    flex-direction: column;
  }
  .navbar {
    justify-content: space-between;
  }
  .input-navbar {
    width: 400px;
  }
}
@media screen and (max-width: 1405px) {
  .input-navbar {
    width: 300px;
  }
  .became-vendor1 {
    display: none;
  }
}
@media screen and (max-width: 480px) {
  .search-input1 {
    display: none;
  }
}
@media screen and (max-width: 690px) {
  .campare-wishlist {
    display: none;
  }
  .compare-img {
    width: 20px;
    height: 20px;
  }
  .compare {
    font-size: 16px;
  }
  .account {
    font-weight: 700;
    margin: 14px 0px;
  }
}
</style>
