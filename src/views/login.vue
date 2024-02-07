<template>
  <div class="login">
    <div id="app">
      <div
        class="login-container"
        v-if="showModal1"
      >
        <form class="login-form text-main-100">
          <h2>{{ t("login.phone_number") }}</h2>
          <input
            type="tel"
            v-model="phoneNumber"
            :placeholder="t('login.phone_number')"
          />
          <button
            type="button"
            class="button1"
            @click="submitPhoneNumber"
          >
            {{ t('login.kod') }}
          </button>
        </form>
      </div>

      <!-- Modal oynani -->
      <div
        v-if="showModal"
        class="modal"
      >
        <div class="login-form text-main-100">
          <h2>{{ t('login.sms_code') }}</h2>
          <input
            class="sms-kod"
            type="text"
            v-model="otp"
            :placeholder="t('login.sms_code')"
          />
          <button
            @click="submitOtp"
            class="button1"
          >
            {{ t('login.confirmation') }}
          </button>
        </div>
      </div>
    </div>
  </div>
  <div class="absolute items-end top-5 right-5 text-center">
    <lang-switcher />
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import { useI18n } from "vue-i18n";
import { submitPhoneNumber, submitOtp } from "../services/LoginService.ts";
import { ref } from "vue";
import axios from "axios";

const { t } = useI18n();
const router = useRouter();

const phoneNumber = ref("");
const otp = ref("");
const showModal = ref(false);
const showModal1 = ref(true);

const submitPhoneNumber = async () => {
  try {
    await submitPhoneNumber({ phoneNumber: phoneNumber.value });
    showModal1.value = false;
    showModal.value = true;
  } catch (error) {
    console.error('Error submitting phone number:', error);
  }
};

const submitOtp = async () => {
  try {
    await submitOtp(otp.value);
    router.push('/');
  } catch (error) {
    console.error('Error submitting OTP:', error);
  }
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
