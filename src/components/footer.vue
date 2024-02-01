<template>
  <footer>
    <!-- Site Map -->
    <section class="site-map">
      <div class="wrapper">
        <div class="footer-block lg:col-span-2">
          <AppLogo />

          <ul class="contact-us">
            <li class="l1">
              <span :i-carbon-location-filled="true"></span>
              <p class="font-medium">{{ t('futter.address') }}</p>
              <p class="text-blue-200">{{ t('futter.umb') }}</p>
            </li>

            <li class="l1">
              <span :i-bx-support="true"></span>
              <p class="font-medium">{{ t('futter.call') }}</p>
              <p class="text-blue-200">+01 (3050) 001</p>
            </li>

            <li class="l1">
              <span :i-carbon-email="true"></span>
              <p class="font-medium">{{ t('futter.umb') }}</p>
              <p class="text-blue-200">umbstore@gmail.com</p>
            </li>

            <li class="l1">
              <span :i-carbon-time="true"></span>
              <p class="font-medium">{{ t('futter.hours') }}</p>
              <p class="text-blue-200">8:00 AM - 12:00 PM and 4/7</p>
            </li>
          </ul>
        </div>

        <div class="footer-block">
          <p class="app-text-lg">{{ t('futter.company') }}</p>

          <ul class="footer-list">
            <li><router-link to="/about">{{ t('product.about') }}</router-link></li>
            <li>
              <router-link to="/delivery">{{ t('futter.deleviry') }}</router-link>
            </li>
            <li><router-link to="/privacy">{{ t('futter.privarcy') }}</router-link></li>
            <li><router-link to="/terms">{{ t('futter.terms') }}</router-link></li>
            <li><router-link to="/contact">{{ t('futter.call') }}</router-link></li>
            <li><router-link to="/support">{{ t('futter.support') }}</router-link></li>
            <li><router-link to="/careers">{{ t('futter.careers') }}</router-link></li>
          </ul>
        </div>

        <div class="footer-block">
          <p class="app-text-lg">{{ t('navbar.account') }}</p>

          <ul class="footer-list">
            <li><router-link to="/signin">{{ t('futter.signn') }}</router-link></li>
            <li><router-link to="/cart">{{ t('futter.cart') }}</router-link></li>
            <li><router-link to="/wishlist">{{ t('navbar.wishlist') }}</router-link></li>
            <li><router-link to="/track-order">{{ t('futter.track') }}</router-link></li>
            <li><router-link to="/help-ticket">{{ t('futter.help1') }}</router-link></li>
            <li>
              <router-link to="/shipping-details">{{ t('futter.shiping') }}</router-link>
            </li>
            <li>
              <router-link to="/compare-products">{{ t('futter.compare') }}</router-link>
            </li>
          </ul>
        </div>

        <div class="footer-block">
          <p class="app-text-lg">{{ t('futter.corparate') }}</p>

          <ul class="footer-list">
            <li>
              <router-link to="/become-vendor">{{ t('navbar.become') }}</router-link>
            </li>
            <li>
              <router-link to="/affiliate-program"
                >{{ t('futter.affilate') }}</router-link
              >
            </li>
            <li>
              <router-link to="/farm-business">{{ t('futter.busines') }}</router-link>
            </li>
            <li><router-link to="/farm-careers">{{ t('futter.careers') }}</router-link></li>
            <li>
              <router-link to="/our-suppliers">{{ t('futter.supliers') }}</router-link>
            </li>
            <li>
              <router-link to="/accessibility">{{ t('futter.access') }}</router-link>
            </li>
            <li><router-link to="/promotions">{{ t('futter.promo') }}</router-link></li>
          </ul>
        </div>

        <div class="footer-block">
          <p class="app-text-lg">{{ t('futter.popular') }}</p>

          <ul class="footer-list">
            <li>
              <router-link to="/milk-flavoured-milk"
                >{{ t('futter.milk') }}</router-link
              >
            </li>
            <li>
              <router-link to="/butter-margarine"
                >{{ t('futter.butter') }}</router-link
              >
            </li>
            <li>
              <router-link to="/eggs-substitutes">{{ t('futter.eggs') }}</router-link>
            </li>
            <li><router-link to="/marmalades">{{ t('futter.marmalades') }}</router-link></li>
            <li>
              <router-link to="/sour-cream-dips"
                >{{ t("futter.sour") }}</router-link
              >
            </li>
            <li>
              <router-link to="/tea-kombucha">{{ t('futter.tea') }}</router-link>
            </li>
            <li><router-link to="/cheese">{{ t('futter.cheasee') }}</router-link></li>
          </ul>
        </div>

        <div class="footer-block">
          <p class="app-text-lg">{{ t('futter.install') }}</p>

          <ul class="footer-list">
            <p class="text-blue-200">{{ t('futter.geogle') }}</p>
            <div class="app-stores">
              <ul class="mt-4 flex gap-4 text-xl">
                <li class="stores-icon">
                  <a
                    href="https://google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="../assets/img/google-play.jpg"
                      alt="Google Icon"
                    />
                  </a>
                </li>
                <li class="stores-icon">
                  <a
                    href="https://apple.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="../assets/img/app-store.jpg"
                      alt="Apple Icon"
                    />
                  </a>
                </li>
              </ul>
            </div>

            <p class="text-blue-200">{{ t('futter.secured') }}</p>
            <li class="stores-icon">
              <a
                href="https://www.google.com/search?q=money+transfer+options"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="../assets/img/payment-method.png"
                  alt="Payment Icon"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Rights & Social Links -->
    <section
      class="rights-social border-t-2 border-green-100 pt-2 mt-4"
      style="justify-content: space-between"
    >
      <div class="wrapper1">
        <div>
          <p class="font-medium">
            {{ t('futter.nest') }}<br />
            {{ t('futter.all') }}
          </p>
        </div>

        <div class="futter-icons-all">
          <div class="tel-tel-all">
            <img
              class="img-tel"
              src="../assets/img/telephone-call.png"
              alt=""
            />

            <div>
              <span class="phone-number">1900646666</span>
              <br />
              <h6 class="h6as">{{ t('futter.work-hours') }}: 8:00 - 22:00</h6>
            </div>
          </div>
          <div class="tel-tel-all">
            <img
              class="img-tel"
              src="../assets/img/telephone-call.png"
              alt=""
            />

            <div>
              <span class="phone-number">1900648888</span>
              <br />
              <h6 class="h6as">24/7 {{ t('futter.support') }}</h6>
            </div>
          </div>
        </div>

        <div>
          <div class="flex gap-4 mt-5 mx-5">
            <h4>{{ t('futter.follow') }}</h4>
            <div class="social-icon">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <img
                  class="inons-all"
                  src="../assets/img/facebook.png"
                  alt=""
                />
                <!-- Facebook icon -->
              </a>
            </div>

            <div class="social-icon">
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Linkedin"
              >
                <!-- Linkedin icon -->
                <img
                  class="inons-all"
                  src="../assets/img/linkedin.png"
                  alt=""
                />
              </a>
            </div>

            <div class="social-icon">
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <!-- Instagram icon -->
                <img
                  class="inons-all"
                  src="../assets/img/instagram.png"
                  alt=""
                />
              </a>
            </div>

            <div class="social-icon">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <!-- Twitter icon -->
                <img
                  class="inons-all"
                  src="../assets/img/twitter.png"
                  alt=""
                />
              </a>
            </div>
          </div>
          <h4 class="mx-5">{{ t('futter.upto') }}</h4>
        </div>
      </div>
    </section>
  </footer>
</template>

<script setup lang="ts">
import AppLogo from "../components/app/app-logo.vue";
import { useI18n } from "vue-i18n";
const { t } = useI18n();
</script>

<style scoped>
.phone-number {
  cursor: pointer;
  color: yellowgreen;
  font-size: 24px;
}
.phone-number:hover {
  color: rgb(22, 23, 22);
}
.tel-tel-all {
  display: flex;
}
.futter-icons-all {
  display: flex;
}
.wrapper1 {
  display: flex;
  width: 100%;
  gap: 20px;
  justify-content: space-around;
}
.img-tel {
  margin: 10px;
  width: 40px;
  height: 40px;
}
.inons-all {
  width: 20px;
  height: 20px;
  margin: 5px;
}
.site-map {
  border-y: 1px solid #09d18b;
}
.wrapper {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-between;
}
.footer-block {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  max-width: 200px;
}
.app-stores {
  justify-content: center;
}

.footer-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.footer-list li :hover {
  color: #19f4a4;
}
.contact-us {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.li1 {
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  color: #34d399;
}
.rights-social {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
}
@media (min-width: 768px) {
  .rights-social {
    flex-direction: row;
    justify-content: space-between;
  }
}
@media screen and(max-width: 1000px) {
  .futter-icons-all {
    display: none;
  }
}
@media screen and(max-width: 1000px) {
  .futter-icons-all {
    display: none;
  }
  .tel-tel-all {
    display: none;
  }
  .wrapper1 {
    flex-direction: column;
  }
}
</style>
