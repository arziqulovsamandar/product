<script setup lang="ts">
import { defineProps, ref, computed } from 'vue';
import capitalize from 'lodash/get';

const props = defineProps({
  product: {
    type: Object,
    required: false,
    default: () => ({}),
  },
});

const productData = ref({
  id: props.product.id,
  status: props.product.status,
  name: capitalize(props.product.attributes.Name),
  brand: capitalize(props.product.attributes.Brand),
  img: computed(() => {
    return props.product.attributes.Image.data
      ? props.product.attributes.Image.data[0].attributes.url
      : 'https://themepanthers.com/wp/nest/d2/wp-content/uploads/2022/02/logo.png';
  }),
});

const capitalize = (text: string) => {
  return text.charAt(0).toUpperCase() + text.slice(1);
};
</script>

<template>
  <div class="product-order">
    <div class="product-img">
      <img :src="productData.img" :alt="productData.name" />
    </div>
    <div class="product-details">
      <p class="brand">{{ productData.brand }}</p>
      <p class="app-text-lg">{{ productData.name }}</p>
      <p :class="`status w-fit py-0.5 px-2 text-sm status--${productData.status}`">
        {{ capitalize(productData.status) }}
      </p>
    </div>

    <router-link :to="`/products/${productData.id}`" class="text-green-200">
      <span i-bx-chevron-right></span>
    </router-link>
  </div>
</template>

<style scoped>
.product-order {
  @apply rounded-md border-2 border-green-100 py-2 px-4;
  @apply flex items-center gap-4;

  .product-img {
    @apply flex h-[64px] w-[64px] justify-center;

    img {
      @apply max-h-full max-w-full;
    }
  }

  .product-details {
    @apply flex grow flex-col gap-0.5;

    .brand {
      @apply text-sm font-medium text-gray-200;
    }

    .status {
      @apply text-sm;

      &--delivered {
        @apply bg-green-100 text-green-200;
      }

      &--canceled {
        @apply bg-red-700 text-white;
      }
    }
  }
}
</style>
