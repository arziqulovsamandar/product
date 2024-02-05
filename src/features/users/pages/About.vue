<template>
    <p class="font-[500] text-md text-[#7E7E7E] border-[#7E7E7E] border-t border-b p-4"><i class='bx bx-home-alt text-[#3BB77E]' ></i><span class="text-[#3BB77E]">Home</span><span class="text-xs text-[#3BB77E] ml-2">></span> <span class="ml-2">About</span></p>
    <top_carusel/>
    <card/>
    <performance/>
    <ourTeam/>
    <banner/>
    <card2/>
    <footer/>
    
</template>



<script setup lang="ts">
    import top_carusel from "../components/About/top-carusel.vue"
    import card from "../components/About/six-card.vue"
    import performance from "../components/About/performance.vue"
    import ourTeam from "../components/About/ourTeam.vue"
    import banner from "../../../components/banner.vue"
    import footer from "../../../components/footer.vue"
    import card2 from "../../../components/card.vue"

</script>

<style scoped>

</style>
