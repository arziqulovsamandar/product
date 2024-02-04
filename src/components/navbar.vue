<template>
  <div class="navbar">
    <div class="input-navbar1">
      <AppLogo />
      <div
        style="margin: 20px"
        class="search-input1"
      >
        <input
          type="text"
          :placeholder="t('navbar.search_placeholder')"
          class="input-navbar"
        />
        <button class="nanbar-button">{{ t("navbar.search") }}</button>
      </div>
    </div>
    <div class="became-vendor1">
      <h5 class="navbar-become1">{{ t("navbar.become") }}</h5>
      <img
        class="right"
        src="../assets/img/icons8-right-50.png"
        alt=""
      />
    </div>
    <div style="display: flex">
      <div class="campare-wishlist">
        <div style="margin: 20px 0px; display: flex">
          <router-link
            to="/compare"
            style="display: flex"
          >
            <n-badge
              value="2"
              color="yellowgreen"
            >
              <img
                src="../assets/img/icons8-compare-git-50.png"
                alt=""
                class="compare-img"
              />
            </n-badge>
            <h1 class="compare">{{ t("navbar.compare") }}</h1>
          </router-link>
        </div>
        <div style="margin: 20px 5px; display: flex">
          <router-link
            to="/wishlist"
            style="display: flex"
          >
            <n-badge
              value="1"
              color="yellowgreen"
            >
              <img
                src="../assets/img/icons8-heart-26.png"
                alt=""
                class="compare-img"
              />
            </n-badge>
            <h1 class="compare">{{ t("navbar.wishlist") }}</h1>
          </router-link>
        </div>
      </div>
      <div style="margin: 20px 5px; display: flex">
        <router-link
          to="/cards"
          style="display: flex"
        >
          <n-badge
            value="3"
            color="yellowgreen"
          >
            <img
              src="../assets/img/icons8-cart-24.png"
              alt=""
              class="compare-img"
            />
          </n-badge>
          <h1 class="compare">{{ t("navbar.cart") }}</h1>
        </router-link>
      </div>
      <div style="margin: 30px; display: flex">
        <n-dropdown :options="options">
          <n-button
            circle
            @click="Login"
          >
            <n-icon size="36">
              <UserIcon />
            </n-icon>
          </n-button>
        </n-dropdown>
        <h1
          class="compare"
          style="margin: 5px"
        >
          Account
        </h1>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import AppLogo from "./app/app-logo.vue";
import { useI18n } from "vue-i18n";
import { NDropdown, NBadge } from "naive-ui";
import { NButton } from "naive-ui";

import { useRouter } from "vue-router";

const { t } = useI18n();
const router = useRouter();

import { h, Component } from "vue";
import { NIcon } from "naive-ui";
import {
  PersonCircleOutline as UserIcon,
  Pencil as EditIcon,
  LogOutOutline as LogoutIcon,
} from "@vicons/ionicons5";

const renderIcon = (icon: Component) => {
  return () => {
    return h(NIcon, null, {
      default: () => h(icon),
    });
  };
};

const Login = () => {
  router.push("/login");
};

const options = [
  {
    label: "Login",
    key: "login",
    icon: renderIcon(UserIcon),
  },
  {
    label: "Edit Profile",
    key: "editProfile",
    icon: renderIcon(EditIcon),
  },
  {
    label: "Logout",
    key: "logout",
    icon: renderIcon(LogoutIcon),
  },
];
</script>
<style scoped>
.navbar-become1 {
  color: yellowgreen;
}
.right {
  margin: 0px 40px;
}
.campare-wishlist {
  display: flex;
}
.input-navbar1 {
  width: auto;
  display: flex;
}
.navbar {
  display: flex;
  justify-content: space-between;
  width: 100%;
}
.input-navbar {
  border: 2px solid yellowgreen;
  height: 50px;
  border-radius: 5px;
  padding: 10px;
  width: 300px;
  text-decoration-style: initial;
}
.nanbar-button {
  background-color: rgb(122, 180, 5);
  color: white;
  height: 40px;
  padding: 5px;
  width: 100px;
  border-radius: 5px;
  margin: 0px -105px;
}
.became-vendor1 {
  display: flex;
  padding: 5px;
  margin: 25px;
  border: 2px solid yellowgreen;
  width: auto;
  height: 40px;
  border-radius: 5px;
}
.compare {
  margin: 18px -10px;
  color: rgb(88, 91, 81);
  font-size: 18px;
}
.compare-img {
  margin:15px;
  width: 30px;
  height: 30px;
}

@media screen and (max-width: 1200px) {
  .became-vendor1 {
    display: none;
  }
  .input-navbar1 {
    flex-direction: column;
  }
  .navbar {
    justify-content: space-between;
  }
  .input-navbar {
    width: 400px;
  }
}
@media screen and (max-width: 1440px) {
  .input-navbar {
    width: 300px;
  }
  .became-vendor1 {
    display: none;
  }
}
@media screen and (max-width: 480px) {
  .search-input1 {
    display: none;
  }
}
@media screen and (max-width: 690px) {
  .campare-wishlist {
    display: none;
  }
  .compare-img {
    width: 20px;
    height: 20px;
  }
  .compare {
    font-size: 16px;
  }
}
</style>
