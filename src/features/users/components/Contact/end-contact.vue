<template>
    <div class="p-4 w-full max-w-[1400px]">
        <p class="text-xl mb-[10px] text-[#3BB77E]">Contact form</p>
        <div class="flex justify-between">
            <div class="w-[60%]">
                <div class="mb-5">
                    <p class="text-2xl font-semibold">Drop Us a Line</p>
                    <p class="text-xs py-5 text-fortitle-100">Your email address will not be published. Required fields are marked *</p>
                </div>
                <div class="w-full">
                    <div class="flex mt-5 w-full gap-5">
                        <input class="border-slate-200 border-[1px] p-4 rounded-lg outline-none w-1/2" v-model="Send.FirstName" placeholder="First Name" type="text" name="" id="">
                        <input class="border-slate-200 border-[1px] p-4 rounded-lg outline-none w-1/2" v-model="Send.Email" placeholder="Your Email" type="email" name="" id="">
                    </div>
                    <div class="flex mt-5 w-full gap-5">
                        <input class="border-slate-200 border-[1px] p-4 rounded-lg outline-none w-1/2" v-model="Send.Subject" placeholder="Subject" type="text" name="" id="">
                        <input class="border-slate-200 border-[1px] p-4 rounded-lg outline-none w-1/2" v-model="Send.Phone" placeholder="Your Phone" type="text" name="" id="">
                    </div>

                    <textarea class="border-slate-200 border-[1px] p-4 rounded-lg outline-none w-full h-[200px] mt-5" v-model="Send.message" placeholder="Message" name="" id="" cols="auto" rows="10"></textarea><br>
                    <button @click="handleClick" class="text-white bg-[#3BB77E] p-4 w-full rounded-lg hover:bg-[#2AA76E] mt-5">Send Message</button>
                    <button :hidden="see" class="text-white bg-[#3BB77E] p-4 w-full rounded-lg hover:bg-[#2AA76E] mt-5">One or more fields have an error. Please check and try again</button>
                </div>
            </div>

            <div v-if="see == true" class="w-[35%] flex">
                <img class="rounded-lg object-cover" src="https://themepanthers.com/wp/nest/d1/wp-content/uploads/2022/05/contact-2-min.png" alt="">
            </div>
            <div v-if="see == false" class="w-[35%] flex">
                <img class="rounded-lg object-cover" src="https://themepanthers.com/wp/nest/d1/wp-content/uploads/2022/05/contact-2-min.png" alt="">
            </div>
        </div>
    </div>
</template>


<script setup lang="ts">
    import { reactive,ref } from "vue";
    const see =ref(true)
    const Send = reactive({
        FirstName: "",
        Phone: "",
        Email: "",
        Subject: "",
        message:""
    })

    const handleClick = ()=>{
        if(
            !Send.FirstName.length &&
            !Send.Email.length && 
            !Send.Subject.length &&
            !Send.Phone.length
        ){
            console.log(1);
            see.value = false
            return
        }
        see.value = true
        Send.FirstName = ""
        Send.Email = ""
        Send.Phone = ""
        Send.Subject = ""
        Send.message = ""
    }

</script>

<style>

</style>