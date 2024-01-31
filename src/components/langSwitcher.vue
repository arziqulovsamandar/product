<template>
  <div>
    <v-menu open-on-hover>
      <template v-slot:activator="{ props }">
        <span
          id="lang"
          class="cursor-pointer uppercase p-3 rounded-full hover:bg-gray-100 transition-all"
          v-bind="props"
          >{{ currentLang }}</span
        >
      </template>

      <v-list>
        <v-list-item
          v-for="(item, i) in langs"
          :key="i"
        >
          <v-list-item-title>{{ item.text }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

type langObj = {
  text: string;
};

const currentLang = localStorage.getItem("lang") || "uz";


const langs = ref<langObj[]>([
  {
    text: "English"
  },
]);
</script>
