<template>
  <div>
    <div class="Home-wishlist">
      <img
        src="../../../assets/img/icons8-home-24.png"
        alt=""
      />
      <h5>Home ></h5>
      <span>Shop wishlist</span>
    </div>
    <div class="wishlist">
      <div class="wishlistcards">
        <div class="cancelwishlist">
          <img
            style="margin: 50px 30px; cursor: pointer;"
            src="../../../assets/img/icons8-cancel-50.png"
            alt=""
          />
        </div>
        <div class="cancelwishlist1">
          <img
            style="width: 100%; height: 100%;"
            src="../../../assets/img/healthy-vegetables-wooden-table_1150-38014.avif"
            alt=""
          />
        </div>
        <div class="wishlist-product-name">
          <h4>All Natural style Chicken Meatballs</h4>
          <h5>$52.85</h5>
          <h5>February 2,2024</h5>
        </div>
        <div class="wishlist-addcart">
          <h5>151 in stock</h5>
          <div class="addcart">
            <img style="width: 30px; height: 30px;"
              src="../../../assets/img/icons8-cart-24.png"
              alt=""
            />
            <h6>Add to card</h6>
          </div>
        </div>
      </div>
    </div>
    <productCard class="wishlist-products" />
    <Banner
      class="bg-[#D8F1E5] rounded-3xl md:px-[78px] md:m-[10px] md:py-[84px] p-[25px]"
      :title="t('banners.grid_banner.title')"
      :subtitle="t('banners.grid_banner.subtitle')"
      :linkText="t('banners.grid_banner.link')"
      backgroundImage="src/assets/img/grid-banner.png"
    />
    <div>
      <Card />
    </div>
    <div>
      <futter />
    </div>
  </div>
</template>
<script setup lang="ts">
import futter from "../../../components/footer.vue";
import Banner from "../../../components/banner.vue";
import Card from "../../../components/card.vue";
import productCard from "../components/productCard.vue";
import { useI18n } from "vue-i18n";
const { t } = useI18n();
</script>
<style scoped>
.wishlist-addcart h5 {
  font-weight: 600;
}
.wishlist-addcart h6 {
  font-weight: 600;
  color: white;
}
.addcart {
  display: flex;
  width: 150px;
  height: 50px;
  background-color: yellowgreen;
  border-radius: 10px;
  padding: 10px;
  cursor: pointer;
}
.wishlist-addcart :hover{
  background-color: rgb(239, 151, 9);
}
.wishlist-addcart {
  display: flex;
  flex-direction: column;
  gap: 10px;
  border: 1px solid silver;
  width: 32%;
  padding: 30px;
}
.wishlist-product-name h4 {
  font-weight: 600;
}
.wishlist-product-name h5 {
  color: rgb(54, 52, 52);
}
.wishlist-product-name {
  display: flex;
  flex-direction: column;
  width: 50%;
  height: auto;
  border: 1px solid silver;
  padding: 20px;
  gap: 10px;
}
.cancelwishlist {
  width: 8%;
  height: auto;
  border: 1px solid silver;
}
.cancelwishlist1 {
  width: 10%;
  height: auto;
  border: 1px solid silver;
}
.wishlistcards {
  display: flex;
  margin: 60px;
  border: 1px solid silver;
  height: 150px;
}
.Home-wishlist h5 {
  color: rgb(11, 147, 45);
  font-weight: 600;
}
.Home-wishlist {
  border: 2px solid rgb(222, 196, 193);
  display: flex;
  padding: 20px;
  gap: 5px;
}
.wishlist-products {
  display: flex;
  justify-content: center;
  margin: 20px;
  border: 1px dashed wheat;
}
.wishlist {
  min-height: 250px;
}
</style>
