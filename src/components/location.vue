<template>
  <div ref="mapContainer" class="w-full mx-auto max-w-[1610px] h-[300px] m-[10px]"></div>
</template>

<script setup>
import L from 'leaflet'
import { ref, onMounted } from 'vue'

const map = ref()
const mapContainer = ref()

onMounted(() => {
  map.value = L.map(mapContainer.value).setView([41.2945392, 69.312501], 13);

  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
  }).addTo(map.value);

  L.marker([41.2945392, 69.312501], { draggable: true })
    .addTo(map.value);
})
</script>

<style scoped></style>