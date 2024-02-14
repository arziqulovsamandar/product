import { defineStore } from 'pinia';
import {
  apifetchProducts,
} from '../../../api/products';
import { errorToast } from '../../../utils/toast';
import { Product, ProductStoreState } from '../modules/product.ts';

export const useProductStore = defineStore('product', {
  state: (): ProductStoreState => ({
    prodcuts: [],
    singleProduct: {},
    loading: false,
    cartData: [],
    length: 0
  }),
  actions: {
    async getProducts() {
      this.loading = true;
      try {
        const res = await apifetchProducts();
        if (!res.data && res.status !== 200) {
          return;
        }

        this.loading = false;
        this.prodcuts = res.data;
      } catch (error) {
        if (error instanceof Error) {

          errorToast(error.message);
          return;
        }
      } finally {
        this.loading = false;
      }
    },
    counterPlus(id: string, type: 'plus' | 'minus'): void {
      let index: number | undefined;
      let selectArr: Product | undefined;
      let old: Product[] | null;

      const data = window.localStorage.getItem('myProduct');
      old = data ? JSON.parse(data) : null;

      if (this.cartData.length === 0 && old !== null) {
        this.cartData = [...old];
      }

      this.cartData.forEach((item, i) => {
        if (item.id.toString() === id) {
          selectArr = item;
          index = i;
        }
      });

      if (selectArr && index !== undefined) {
        if (type === 'plus') {
          selectArr.count += 1;
        } else {
          selectArr.count -= 1;
        }

        this.cartData.splice(index, 1, selectArr);
        // this.saveProduct();
      }
    }
  }
});
