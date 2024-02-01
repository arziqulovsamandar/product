<template>
  <div>
    <div class="top-seling">
      <div class="top-seling-all">
        <h2>{{ t('product_card.top_selling') }}</h2>
        <hr />
        <div
          style="display: flex"
          class="effect1"
        >
          <img
            src="../../../assets/img/strawberries-3359755_640.jpg"
            alt=""
            class="top-selling-img"
          />
          <div class="natural">
            <h5 class="h5">All Natural Style Chicken Meatballs</h5>
            <img
              class="rating"
              src="../../../assets/img/rating.png"
              alt=""
            />
            <h6>$52.85</h6>
          </div>
        </div>
      </div>
      <div class="top-seling-all">
        <h2>{{ t('index.trending') }}</h2>
        <hr />
        <div
          style="display: flex"
          class="effect1"
        >
          <img
            src="../../../assets/img/strawberries-3359755_640.jpg"
            alt=""
            class="top-selling-img"
          />
          <div class="natural">
            <h5 class="h5">All Natural Style Chicken Meatballs</h5>
            <img
              class="rating"
              src="../../../assets/img/rating.png"
              alt=""
            />
            <h6>$52.85</h6>
          </div>
        </div>
      </div>
      <div class="top-seling-all">
        <h2>{{ t('product_card.recently') }}</h2>
        <hr />
        <div
          style="display: flex"
          class="effect1"
        >
          <img
            src="../../../assets/img/strawberries-3359755_640.jpg"
            alt=""
            class="top-selling-img"
          />
          <div class="natural">
            <h5 class="h5">All Natural Style Chicken Meatballs</h5>
            <img
              class="rating"
              src="../../../assets/img/rating.png"
              alt=""
            />
            <h6>$52.85</h6>
          </div>
        </div>
      </div>
      <div class="top-seling-all">
        <h2>{{ t('product_card.top_raded') }}</h2>
        <hr />
        <div
          style="display: flex"
          class="effect1"
        >
          <img
            src="../../../assets/img/strawberries-3359755_640.jpg"
            alt=""
            class="top-selling-img"
          />
          <div class="natural">
            <h5 class="h5">All Natural Style Chicken Meatballs</h5>
            <img
              class="rating"
              src="../../../assets/img/rating.png"
              alt=""
            />
            <h6>$52.85</h6>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useI18n } from "vue-i18n";
const { t } = useI18n();
</script>
<style scoped>
.h5 :hover {
  color: yellowgreen;
}
.effect1 :hover {
  transform: translateY(-5px); /* yoki kerakli qimirlash miqdori */
  transition: transform 0.3s ease;
}
.natural h5 {
  color: rgb(98, 93, 86);
  font-weight: 600;
  margin: 0px 5px;
}
.natural img {
  margin: -25px -5px;
}
.natural h6 {
  color: yellowgreen;
  margin: 0px 5px;
}
.rating {
  width: 90px;
  height: 80px;
}
.top-seling-all h2 {
  color: rgb(61, 60, 57);
}
.top-seling-all hr {
  margin: 20px 5px;
}
.top-selling-img {
  width: 100px;
  height: 100px;
  border-radius: 5px;
}
.top-seling {
  margin: 80px 30px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between; /* Elementlar chetlashtirilgan joyda joylashishi */
}

.top-seling-all {
  width: calc(
    25% - 20px
  ); /* 4 ta div dan chetlab yoki marginlardan kichik joylar mahsulot qilamiz */
  margin: 10px;
  box-sizing: border-box;
}

@media screen and (max-width: 880px) {
  .top-seling-all {
    width: calc(50% - 20px); /* 2 ta div qoladi */
  }
}

@media screen and (max-width: 480px) {
  .top-seling-all {
    width: calc(100% - 20px); /* Faqatgina 1 ta div qoladi */
  }
}
</style>
