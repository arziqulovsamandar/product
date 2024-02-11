<template>
  <div class="relative flex flex-col justify-center min-h-screen">
    <div
        v-if="display == true"
        class="w-4/5 md:w-4/6 p-6 px-6 m-auto bg-orange-50 border border-green-300 rounded-3xl lg:max-w-md"
    >
      <form
          :validation-schema="schema"
          @submit.prevent="send"
          class="mt-6"
      >
        <div class="leading-6 my-10 text-green-600" style="text-align: center">
          <p class="text-[18px] sm:text-[20px] md:text-[21px] font-semibold">
            {{ t('login.phone') }}
          </p>
          <p class="text-[16px] sm:text-[20px] md:text-[17px] font-normal text-gray-400">
            {{ t('login.sms') }}
          </p>
        </div>

        <div class="">
          <input
              type="tel"
              name="phone"
              v-model="phone"
              placeholder="enter phone number here"
              class="block w-full px-4 py-2 mt-2 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
          />
        </div>
        <div class="mt-4">
          <div class="mt-6">
            <button
                type="submit"
                class="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-400 rounded-md hover:bg-[rgb(55,179,122)]-600 focus:outline-none focus:bg-purple-600"
            >
              {{ t('login.signin') }}
            </button>
          </div>
        </div>
      </form>
      <p class="mt-8 text-xs font-light text-center text-gray-700">
        {{ t('login.account') }}
        <a
            href="#"
            class="font-medium text-[rgb(55,179,122)] hover:underline"
        >{{ t('login.signup') }}</a
        >
      </p>
    </div>
    <!-- ------------------------------------------------------------------------------------- -->
    <div
        v-if="display == false"
        class="w-4/5 md:w-4/6 p-6 px-6 m-auto bg-white border-t border-[rgb(55,179,122)] rounded shadow-lg shadow-purple-800/50 lg:max-w-md"
    >
      <div class="logo flex justify-center">
        <img
            src="./assets/img/logo (1).svg"
            class="w-[40%]"
            alt=""
            srcset=""
        />
      </div>

      <form
          class="mt-6"
          @submit.prevent="verify"
      >
        <div class="leading-6 my-10">
          <p class="text-[18px] sm:text-[20px] md:text-[21px] font-semibold">
            {{ t('login.verifycode') }}
          </p>
        </div>

        <div class="">
          <input
              type="tel"
              v-model="vfy.otp"
              class="block w-full px-4 py-2 mt-2 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
          />
        </div>
        <div class="mt-4">
          <div class="mt-6">
            <button
                type="submit"
                class="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-[rgb(55,179,122)] rounded-md hover:bg-[rgb(55,179,122)]-600 focus:outline-none focus:bg-purple-600"
            >
              {{ t('login.send') }}
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import { useI18n } from "vue-i18n";
import { ref } from "vue";
import { useAuthStore } from '../features/users/store/index.ts';
const auth = useAuthStore();

const { t } = useI18n();
const router = useRouter();

const display = ref(true);
const phone = ref();
const forConfirm = ref();
const vfy = {
  phone: forConfirm.value,
  verification_key: auth.codesss,
  otp: ''
};


const send = async () => {
  if (display.value == true) {
    display.value = false;
    let payload = { phone: phone.value };
    forConfirm.value = phone.value;
    await auth.otp(payload);
    vfy.verification_key = auth.codesss;
  } else {
    display.value = true;
  }
};


const verify = async () => {
  await auth.verifyOtp({ ...vfy, phone: forConfirm.value });
};

</script>


<style scoped>
.input {
  margin: 30px 0px;
}
.login {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f2f2f2;
}

.login-container {
  width: 400px;
  padding: 60px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  height: 400px;
}

.login-form h2 {
  font-size: 24px;
  margin-top: 0;
  font-weight: 700;
}

.login-form input[type="tel"],
.button1 {
  margin: 50px 0px;
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
.sms-kod {
  margin: 50px 0px;
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
.button1 {
  background-color: #007bff;
  color: #fff;
  cursor: pointer;
}

.login-form button:hover {
  background-color: #0056b3;
}

/* Modal oynani stilini boshlang'ich holatda yashirish */
.modal {
  width: 400px;
  padding: 60px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  height: 400px;
}

.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}
</style>
