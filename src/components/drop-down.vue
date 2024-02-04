<template>
  <div class="wrapper">
    <div style="display: flex; margin: 20px 0px">
      <div class="browerall">
        <img
          class="border-all1"
          src="../assets/img/icons8-border-all-48.png"
          alt=""
        />
        <!-- <select class="selectoption">
          <option value="">Browse All Categories</option>
          <option class="categoryall">
            <tbody>
              <tr
                style="display: flex; flex-direction: column"
                v-for="(item, i) in users"
                :key="i"
              >
                <option>{{ item.name }}</option>
              </tr>
            </tbody>
          </option>
        </select> -->
        <!-- <div>Browse All Categories</div> -->
        <n-collapse arrow-placement="right" class="selectoption">
          <n-collapse-item
            title="Browse All Categories"
            name="1"
          >
            <div
              v-for="(item, i) in users"
              :key="i"
            >
              <h5>{{ item.name }}</h5>
            </div>
          </n-collapse-item>
          <!-- <n-table
            :bordered="false"
            :single-line="false"
          >
            <tbody>
              <tr
                style="display: flex; flex-direction: column"
                v-for="(item, i) in users"
                :key="i"
              >
                <td>{{ item.name }}</td>
              </tr>
            </tbody>
          </n-table> -->
        </n-collapse>
      </div>
      <div class="hotdeals">
        <img
          class="hot-img"
          src="../assets/img/icons8-hot-30.png"
          alt=""
        />
        <h2 class="hot">Hot Deals</h2>
      </div>
    </div>
    <div class="all-categories">
      <a
        class="a"
        href="/about"
        >About</a
      >
      <a
        class="a"
        href="/"
        >Home</a
      >
      <select class="a">
        <option value="">Shop</option>
      </select>
      <select
        name=""
        id=""
        class="a"
      >
        <option value="">Mega menu</option>
      </select>
      <select class="a">
        <option value="">Vendors</option>
        <option value="">My Orders</option>
        <option value="">Store Details</option>
        <option value="">Store Listing</option>
      </select>
      <select class="a">
        <option value="">Blog</option>
        <option value="">Blog grid</option>
        <option value="">Blog list</option>
        <option value="">Blog big</option>
      </select>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { NCollapse, NCollapseItem } from "naive-ui";

interface UserData {
  name: string;
  image: string;
}
const users = ref<UserData[]>([]);

const fetchData = async () => {
  try {
    const response = await fetch("http://localhost:3000/api/category/all");
    if (response.ok) {
      users.value = await response.json();
      console.log(users.value);
    } else {
      console.error(`Serverdan xato: ${response.status}`);
    }
  } catch (error) {
    console.error("Xatolik yuz berdi:", error);
  }
};

fetchData();

// const getImageUrl = (imageName: string): string => {
//   return require(`@/assets/${imageName}`);
// };
</script>

<style scoped>
.categoryall {
  width: 100px;
  height: 40px;
  font-size: 30px;
  border-radius: 10px;
  background-color: white;
}
.wrapper {
  display: flex;
  justify-content: space-between;
  width: auto;
  background-color: yellowgreen;
  height: auto;
  min-height: 90px;
}
.a {
  height: 30px;
  margin: 20px;
}
.all-categories {
  display: flex;
  gap: 20px;
  color: white;
  font-weight: 900;
  width: auto;
  margin: 10px;
}
.all-categories select {
  background-color: yellowgreen;
  border: 1px solid yellowgreen;
}
.all-categories a {
  display: flex;
  align-items: center;
}
.hot-img {
  width: 30px;
  height: 30px;
}
.hot {
  font-size: 20px;
  font-weight: 600;
  color: white;
}
.hotdeals {
  display: flex;
  align-items: center;
}
.selectoption {
  margin: 5px;
  width: 100%;
  background-color: rgb(128, 230, 100);
  color: rgb(249, 243, 243);
  font-weight: 700;
}
.border-all1 {
  width: 30px;
  height: 30px;
}
.browerall {
  display: flex;
  width: auto;
  background-color: rgb(128, 230, 100);
  margin: 0px 20px;
  border-radius: 10px;
  padding: 10px;
}

@media screen and (max-width: 880px) {
  .all-categories {
    flex-direction: column;
    align-items: flex-start;
  }
}

@media screen and (max-width: 1060px) {
  .hotdeals {
    display: none;
  }
}
</style>
