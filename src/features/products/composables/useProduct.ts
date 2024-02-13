import { useProductStore } from '../store';
import { storeToRefs } from 'pinia';
import { onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';

export const useProduct = () => {
  const store = useProductStore();
  const router = useRouter();
  const route = useRoute();

  const { loading, prodcuts, singleProduct } = storeToRefs(store);
  const {
    getProducts
  } = useProductStore();

  onMounted(async () => {
    await getProducts();
  });

  return {
    loading,
    prodcuts,
    route,
    router,
    singleProduct,
  };
};
