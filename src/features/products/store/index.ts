import { defineStore } from 'pinia';
import {
  apifetchProducts,
} from '../../../api/products';
import { errorToast } from '../../../utils/toast';

export const useProductStore = defineStore('product', {
  state: () => ({
    prodcuts: [],
    singleProduct: {},
    loading: false,
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
  }
});
