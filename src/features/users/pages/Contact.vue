<template>
    <p class="font-[500] text-md text-[#7E7E7E] border-[#7E7E7E] border-t border-b p-4"><i class='bx bx-home-alt text-[#3BB77E]' ></i><span class="text-[#3BB77E]">Home</span><span class="text-xs text-[#3BB77E] ml-2">></span> <span class="ml-2">Contact</span></p>
    <helpYou/>
    <location/>
    <endContact/>
    <topendPage/>
    <banner/>
    <card/>
    <footer/>

</template>


<script setup lang="ts">
    import helpYou from "../components/Contact/help.vue"
    import location from "../components/Contact/location.vue"
    import endContact from "../components/Contact/end-contact.vue"
    import topendPage from "../components/top-endPage.vue"
    import footer from "../../../components/footer.vue"
    import Banner from "../../../components/banner.vue";
    import Card from "../../../components/card.vue";


</script>

<style>

</style>