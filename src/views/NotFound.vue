<template>
  <section class="section container mx-auto grid place-content-center gap-4 px-3 my-4 mb-xl-5">
    <img src="../assets/img/page-404.png" alt="Page not found" class="notfmed mx-auto" />
    <h2 class="text-center text-3xl font-semibold mb-2">
      <span class="text-blue-600">Oops!</span> Why <span class="text-gray-700">are</span> you here?
    </h2>
    <p class="text-center text-gray-500">
      We are very sorry for the inconvenience. It looks like you’re trying to access a page that either has been deleted or never existed.
    </p>
    <h4 class="text-center text-lg">
      You'll be redirected to the <span class="text-silver-500">Homepage</span> in
      <span class="text-gray-600"> 10 seconds</span>
    </h4>
  </section>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';

const props = defineProps(['count']);

const router = useRouter();

onMounted(() => {
  setInterval(() => {
    props.count--;
  }, 1000);

  setTimeout(() => {
    router.push('/');
  }, 10000);
});
</script>

<style scoped>
.notfmed {
  max-width: 26.25rem;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.section {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.text-blue-600 {
  color: #4299e1;
}

.text-gray-700 {
  color: #4a5568;
}

.text-gray-500 {
  color: #718096;
}

.text-silver-500 {
  color: #399d53;
}

.text-gray-600 {
  color: #2d2a28;
}
</style>
