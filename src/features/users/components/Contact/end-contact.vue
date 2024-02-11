<template>
    <div class="p-4 w-full max-w-[1400px]">
        <p class="text-xl mb-[10px] text-main-100 font-semibold">{{ t("contact.form.title") }}</p>
        <div class="flex flex-wrap justify-between">
            <div class="md:w-[60%] w-full">
                <div class="">
                    <p class="text-2xl font-semibold">{{ t("contact.form.subtitle") }}</p>
                    <p class="text-xs md:pb-5 pt-2 text-fortitle-100">{{ t("contact.form.warning") }}</p>
                </div>
                <div class="w-full">
                    <div class="flex mt-5 w-full gap-5">
                        <input class="border-slate-200 border-[1px] p-4 rounded-lg outline-none w-1/2" v-model="Send.FirstName" :placeholder="t('contact.form.ph_name')" type="text" name="" id="">
                        <input class="border-slate-200 border-[1px] p-4 rounded-lg outline-none w-1/2" v-model="Send.Email" :placeholder="t('contact.form.ph_email')" type="email" name="" id="">
                    </div>
                    <div class="flex mt-5 w-full gap-5">
                        <input class="border-slate-200 border-[1px] p-4 rounded-lg outline-none w-1/2" v-model="Send.Subject" :placeholder="t('contact.form.ph_subject')" type="text" name="" id="">
                        <input class="border-slate-200 border-[1px] p-4 rounded-lg outline-none w-1/2" v-model="Send.Phone" :placeholder="t('contact.form.ph_phone')" type="text" name="" id="">
                    </div>

                    <textarea class="border-slate-200 border-[1px] p-4 rounded-lg outline-none w-full h-[100px] 2xs:h-[200px] mt-5" v-model="Send.message" :placeholder="t('contact.form.ph_message')" name="" id="" cols="auto" rows="10"></textarea><br>
                    <button @click="handleClick" class="text-white bg-[#3BB77E] p-4 w-full rounded-lg hover:bg-[#2AA76E] mt-5">{{ t('contact.form.btn_send') }}</button>
                    <button :hidden="see" class="text-white bg-[#3BB77E] p-4 w-full rounded-lg hover:bg-[#2AA76E] mt-5">One or more fields have an error. Please check and try again</button>
                </div>
            </div>

            <div v-if="see == true" class="w-[35%] md:flex hidden">
                <img class="rounded-lg object-cover" src="https://themepanthers.com/wp/nest/d1/wp-content/uploads/2022/05/contact-2-min.png" alt="">
            </div>
            <div v-if="see == false" class="w-[35%] md:flex hidden">
                <img class="rounded-lg object-cover" src="https://themepanthers.com/wp/nest/d1/wp-content/uploads/2022/05/contact-2-min.png" alt="">
            </div>
        </div>
    </div>
</template>


<script setup lang="ts">
    import { reactive,ref } from "vue";
    import { useI18n } from "vue-i18n";
    const { t } = useI18n();
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