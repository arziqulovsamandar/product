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
        <h3>Best prices & offers</h3>
        <p>Orders $50 or more</p>
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
        <h3 style="padding-right: 75px">Free delivery</h3>
        <p>24/7 amazing services</p>
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
        <h3>Great daily deal</h3>
        <p>When you sign up</p>
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
        <h3>Wide assortment</h3>
        <p>Mega discounts</p>
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
        <h3>Easy returns</h3>
        <p>Within 30 days</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

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
