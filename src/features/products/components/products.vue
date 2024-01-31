<template>
  <div>
    <img
      class="product-img"
      src="../../../assets/img/healthy-vegetables-wooden-table_1150-38014.avif"
      alt=""
    />
  </div>
  <div class="product-card-table">
    <h3>Organic Cage Grade A Large Eggs</h3>
    <span>By Hambger Hel</span>
    <div class="price-card">
      <h4>$21</h4>
      <div class="cardbutton">
        <div class="button1">
          <img
            src="../../../assets/img/icons8-cart-24.png"
            alt=""
            style="width: 20px; height: 20px"
          />
          <div class="add1">Add</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts"></script>
<style scoped>
.product-img {
  border-radius: 20px;
  margin: 10px;
  width: 300px;
  height: 300px;
}
.product-card-table h3 {
  font-size: 20px;
  color: rgb(43, 40, 37);
}
.product-card-table span {
  color: yellowgreen;
}
.product-card-table h4 {
  margin: 5px;
  color: yellowgreen;
  font-weight: 800;
}
.product-card-table {
  position: absolute;
  margin: -100px 20px;
  border-radius: 10px;
  width: 280px;
  height: 150px;
  background-color: rgb(236, 249, 249); /* Qalinligi va rangi */
  padding: 20px; /* Malumotlar orasidagi bo'shlik */
  box-sizing: border-box; /* Padding kiritishda malumotlar ko'chirilganligi */
}
.price-card {
  margin: 5px;
  display: flex;
  justify-content: space-between;
}
.button1 {
  display: flex;
  padding: 5px;
  color: yellowgreen;
  font-weight: 800;
  background-color: rgb(230, 244, 204);
  width: 70px;
  height: 30px;
  border-radius: 5px;
}
.cardbutton {
  display: flex;
}
.add1 {
  margin: 0px 0px;
}
.button1:hover {
  transform: translateY(-5px); /* yoki kerakli qimirlash miqdori */
  transition: transform 0.3s ease;
}
.product-card-table:hover {
  transform: translateY(-5px); /* yoki kerakli qimirlash miqdori */
  transition: transform 0.3s ease;
}
</style>
