import { defineStore } from "pinia";

export const useProductStore = defineStore("productCart", {
  state: () => ({
    cartData: [],
    length: 0,
  }),
  actions: {
    // INCREMENT
    counterPlus(id, type) {
      let index = null;
      let selectArr = null;

      let old = JSON.parse(globalThis?.localStorage?.getItem("myProduct"));
      if (this.cartData.length === 0 && old != null) {
        this.cartData = [...old];
      }
      this.cartData.forEach((item, i) => {
        if (item.id === id) {
          selectArr = item;
          index = i;
        }
      });

      if (type === "plus") {
        selectArr.count += 1;
      } else {
        selectArr.count -= 1;
      }

      this.cartData.splice(index, 1, selectArr);
      this.saveProduct();
    },
  },
  getters: {},
});
import { createPinia } from "pinia";

export default createPinia();
