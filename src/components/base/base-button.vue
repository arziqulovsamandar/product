<template>
  <button :type="type" :disabled="disabled">
    <slot />
  </button>
</template>

<script setup>
import { defineProps } from 'vue';

const { type = 'button', disabled = false } = defineProps({
  type: String,
  default: "button",
  disabled: Boolean,
  default: false,
});
</script>
