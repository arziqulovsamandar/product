<template>
  <router-link :to="`/products/${product.id}`" class="product-card">
    <!-- Tags -->
    <base-tag v-if="productData.isBestDeal" class="tag tag--best-deal">
      Best Deal
    </base-tag>

    <base-tag v-else-if="productData.isSaving" class="tag tag--saving">
      Save {{ productData.savingValue() }}
    </base-tag>

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
      <span i-bxs-star></span>
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

const props = defineProps({
  product: {
    type: Object,
    required: false,
    default: () => ({}),
  },
});

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
  border: 1px solid #cbd5e0;
  transition: border-color 0.3s;

  padding: 24px 24px 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8px;
  position: relative;
  overflow: hidden;
  border-radius: 8px;

  &:hover {
    border-color: #48bb78;
  }
}

.tag {
  position: absolute;
  top: 0;
  left: 0;
  padding: 8px 16px;

  &--best-deal {
    background-color: #f0fff4;
    color: #48bb78;
  }

  &--saving {
    background-color: #fefcbf;
    color: #fff;
  }
}

.img {
  margin: auto;
  margin-bottom: 16px;
  height: 96px;
  width: 96px;
}

.brand-category {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  font-size: 14px;
  font-weight: 500;
  color: #a0aec0;

  p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}
</style>
