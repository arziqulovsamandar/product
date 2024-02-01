<template>
  <router-link class="product-card" :to="`/products/${product.id}`">
    <!-- Tags -->
    <div v-if="productData.isBestDeal" class="tag tag--best-deal">
      {{ t('Best Deal') }}
    </div>

    <div v-else-if="productData.isSaving" class="tag tag--saving">
      {{ t('Save {0}', [productData.savingValue()]) }}
    </div>

    <!-- Img -->
    <img :src="productData.img()" :alt="productData.name" class="img" />

    <!-- Brand & Category -->
    <div class="brand-category">
      <p>{{ productData.brand }}</p>
      <p>{{ productData.category }}</p>
    </div>

    <!-- Name -->
    <p class="app-text-lg line-clamp-1">{{ productData.name }}</p>

    <!-- Rating -->
    <div class="flex items-center gap-1 text-yellow-200">
      <span class="icon-star"></span>
      <p class="font-medium">{{ productData.ratingValue }}</p>
      <p class="text-sm text-gray-200">({{ productData.ratingCount }})</p>
    </div>

    <!-- Price -->
    <div class="flex items-center gap-2">
      <p class="app-text-lg text-green-200">{{ productData.priceCurrent }}</p>

      <span
        v-if="productData.isSaving"
        class="text-sm font-medium text-gray-200 line-through"
      >
        {{ productData.priceOriginal }}
      </span>
    </div>
  </router-link>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import { useI18n } from 'vue-i18n';

const props = defineProps({
  product: {
    type: Object as () => ({ attributes: { [key: string]: any } }),
    required: false,
    default: () => ({}),
  },
});

const { t } = useI18n();

const productData = {
  name: props.product.attributes.Name,
  brand: props.product.attributes.Brand,
  category: props.product.attributes.Category.data.attributes.Name,
  priceCurrent: `${props.product.attributes.Price_Current} ${props.product.attributes.Price_Currency}`,
  priceOriginal: `${props.product.attributes.Price_Original} ${props.product.attributes.Price_Currency}`,
  ratingValue: props.product.attributes.Rating_Value,
  ratingCount: props.product.attributes.Rating_Users,
  isBestDeal: props.product.attributes.isBestDeal,
  isSaving: props.product.attributes.Price_Original,
  savingValue: () => {
    if (!props.product.attributes.Price_Original) return null;

    const saving =
      100 -
      Math.round(
        (props.product.attributes.Price_Current /
          props.product.attributes.Price_Original) *
        100
      );
    return saving + '%';
  },
  img: () => {
    return props.product.attributes.Image.data
      ? props.product.attributes.Image.data[0].attributes.url
      : 'https://themepanthers.com/wp/nest/d2/wp-content/uploads/2022/02/logo.png';
  },
};
</script>

<style scoped>
.product-card {
  rounded-lg border border-gray-100 transition-colors hover:border-green-200
px-6 pt-12 pb-4
flex h-full flex-col justify-center gap-2
relative overflow-hidden;
}

.tag {
  absolute top-0 left-0 py-2 px-4;
}

.tag--best-deal {
  bg-green-100 text-green-200;
}

.tag--saving {
  bg-yellow-100 text-white;
}

.img {
  mx-auto mb-4 h-[96px] w-[96px];
}

.brand-category {
  flex items-center justify-between gap-2 text-sm font-medium text-gray-200;
}

.brand-category p {
  line-clamp-1;
}
</style>
