<template>
  <div class="card-main-container">
    <div class="card-container">
      <div class="img-pd">
        <img
          src="../assets/img/sale.png"
          alt=""
        />
      </div>
      <div>
        <h3>{{ t('cards.best') }}</h3>
        <p>{{ t('cards.orders') }}</p>
      </div>
    </div>
    <div class="card-container">
      <div class="img-pd">
        <img
          src="../assets/img/free.png"
          alt=""
        />
      </div>
      <div>
        <h3 style="padding-right: 75px">{{ t('cards.free') }}</h3>
        <p>24/7 {{ t('futter.work-hours') }}</p>
      </div>
    </div>
    <div class="card-container">
      <div class="img-pd">
        <img
          src="../assets/img/great.png"
          alt=""
        />
      </div>
      <div style="padding-right: 35px">
        <h3>{{ t('cards.great') }}</h3>
        <p>{{ t('cards.when') }}</p>
      </div>
    </div>
    <div class="card-container">
      <div class="img-pd">
        <img
          src="../assets/img/wide.png"
          alt=""
        />
      </div>
      <div style="padding-right: 25px">
        <h3>{{ t('cards.wide') }}</h3>
        <p>{{ t('cards.mega') }}</p>
      </div>
    </div>
    <div class="card-container">
      <div class="img-pd">
        <img
          src="../assets/img/easy.png"
          alt=""
        />
      </div>
      <div style="padding-right: 55px">
        <h3>{{ t('cards.easy') }}</h3>
        <p>{{ t('cards.within') }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";
const { t } = useI18n();
</script>

<style scoped>
.img-pd :hover {
  transform: translateY(-5px); /* yoki kerakli qimirlash miqdori */
  transition: transform 0.3s ease;
}
.card-main-container {
  padding: 25px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.card-container {
  width: 250px;
  min-width: 200px;
  margin: 10px;
  height: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 20px;
  background-color: rgb(244, 246, 250);
}

.img-pd {
  padding: 20px;
}

h3 {
  opacity: 0.7;
  font-size: 18px;
  padding-right: 20px;
}

p {
  opacity: 0.5;
  font-size: 15px;
  padding-top: 5px;
}
</style>
