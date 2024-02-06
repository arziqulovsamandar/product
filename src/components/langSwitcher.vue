<template>
  <div class="langswitcher">
    <v-menu open-on-hover>
      <template v-slot:activator="{ props }">
        <span
          id="lang"
          class="langs"
          v-bind="props"
          >{{ currentLang }}</span
        >
      </template>

      <div>
        <select @change="onLangChange($event)">
          <option
            v-for="(item, i) in langs"
            :key="i"
            :value="item.locale"
          >
            {{ item.text }}
          </option>
        </select>
      </div>
    </v-menu>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useI18n } from "vue-i18n";
import { useRoute } from "vue-router";
import { updateMeta } from "../router";

type langObj = {
  text: string;
  locale: string;
};

const currentLang = localStorage.getItem("lang") || "uz";
const showList = ref<boolean>(false);
const { locale } = useI18n();
const route = useRoute();
const langs = ref<langObj[]>([
  {
    text: "O'zbek",
    locale: "uz",
  },
  {
    text: "English",
    locale: "en",
  },
  {
    text: "Русский",
    locale: "ru",
  },
]);

function onLangChange(event: Event) {
  const target = event.target as HTMLSelectElement;
  const lang = target.value;
  showList.value = false;
  locale.value = lang;
  localStorage.setItem("lang", lang);
  const langElement = document.getElementById("lang");
  if (langElement) {
    langElement.textContent = lang;
  } else {
    console.error("Element with id 'lang' not found.");
  }
  updateMeta(route?.meta?.title as string);
}
</script>

<style scoped>
.langswitcher {
  position: relative;
  width: 100px;
}
.langs {
  cursor: pointer;
  text-transform: uppercase;
  border-radius: 9999px;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
.langs:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(241 241 241 / var(--tw-bg-opacity));
}
</style>
