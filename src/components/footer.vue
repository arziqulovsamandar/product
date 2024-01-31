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
              <p class="font-medium">Address:</p>
              <p class="text-blue-200">9999 UMB House Road</p>
            </li>

            <li class="l1">
              <span :i-bx-support="true"></span>
              <p class="font-medium">Call Us:</p>
              <p class="text-blue-200">+01 (3050) 001</p>
            </li>

            <li class="l1">
              <span :i-carbon-email="true"></span>
              <p class="font-medium">Email:</p>
              <p class="text-blue-200">umbstore@gmail.com</p>
            </li>

            <li class="l1">
              <span :i-carbon-time="true"></span>
              <p class="font-medium">Hours:</p>
              <p class="text-blue-200">8:00 AM - 12:00 PM and 4/7</p>
            </li>
          </ul>
        </div>

        <div class="footer-block">
          <p class="app-text-lg">Company</p>

          <ul class="footer-list">
            <li><router-link to="/about">About Us</router-link></li>
            <li>
              <router-link to="/delivery">Delivery Information</router-link>
            </li>
            <li><router-link to="/privacy">Privacy Policy</router-link></li>
            <li><router-link to="/terms">Terms & Conditions</router-link></li>
            <li><router-link to="/contact">Contact Us</router-link></li>
            <li><router-link to="/support">Support Center</router-link></li>
            <li><router-link to="/careers">Careers</router-link></li>
          </ul>
        </div>

        <div class="footer-block">
          <p class="app-text-lg">Account</p>

          <ul class="footer-list">
            <li><router-link to="/signin">Sign In</router-link></li>
            <li><router-link to="/cart">View Cart</router-link></li>
            <li><router-link to="/wishlist">My Wishlist</router-link></li>
            <li><router-link to="/track-order">Track My Order</router-link></li>
            <li><router-link to="/help-ticket">Help Ticket</router-link></li>
            <li>
              <router-link to="/shipping-details">Shipping Details</router-link>
            </li>
            <li>
              <router-link to="/compare-products">Compare Products</router-link>
            </li>
          </ul>
        </div>

        <div class="footer-block">
          <p class="app-text-lg">Corporate</p>

          <ul class="footer-list">
            <li>
              <router-link to="/become-vendor">Become a Vendor</router-link>
            </li>
            <li>
              <router-link to="/affiliate-program"
                >Affiliate Program</router-link
              >
            </li>
            <li>
              <router-link to="/farm-business">Farm Business</router-link>
            </li>
            <li><router-link to="/farm-careers">Farm Careers</router-link></li>
            <li>
              <router-link to="/our-suppliers">Our Suppliers</router-link>
            </li>
            <li>
              <router-link to="/accessibility">Accessibility</router-link>
            </li>
            <li><router-link to="/promotions">Promotions</router-link></li>
          </ul>
        </div>

        <div class="footer-block">
          <p class="app-text-lg">Popular</p>

          <ul class="footer-list">
            <li>
              <router-link to="/milk-flavoured-milk"
                >Milk & Flavoured Milk</router-link
              >
            </li>
            <li>
              <router-link to="/butter-margarine"
                >Butter and Margarine</router-link
              >
            </li>
            <li>
              <router-link to="/eggs-substitutes">Eggs Substitutes</router-link>
            </li>
            <li><router-link to="/marmalades">Marmalades</router-link></li>
            <li>
              <router-link to="/sour-cream-dips"
                >Sour Cream and Dips</router-link
              >
            </li>
            <li>
              <router-link to="/tea-kombucha">Tea & Kombucha</router-link>
            </li>
            <li><router-link to="/cheese">Cheese</router-link></li>
          </ul>
        </div>

        <div class="footer-block">
          <p class="app-text-lg">Install App</p>

          <ul class="footer-list">
            <p class="text-blue-200">From App Store or Google Play</p>
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

            <p class="text-blue-200">Secured Payment Gateways</p>
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
    <section class="rights-social border-t-2 border-green-100 pt-2 mt-4"
             style="justify-content: space-between"
    <section
      class="rights-social border-t-2 border-green-500 pt-2 mt-4"
    >
      <div class="wrapper1">
        <p class="font-medium">
          © 2022,Nest - WordPress Ecommerce Template<br />
          All rights reserved
        </p>

        <div class="futter-icons-all">
          <div class="tel-tel-all">
            <img class="img-tel" src="../assets/img/telephone-call.png" alt="">
            <p class="flex font-medium text-green-500 text-2xl">
              <a href="tel:+01001001">1900646666</a>
              <br /><h6 class="h6as">Work Hours: 8:00 - 22:00</h6>
            </p>
          </div>
          <div class="tel-tel-all">
            <img class="img-tel" src="../assets/img/telephone-call.png" alt="">
            <p class="flex font-medium text-green-500 text-2xl">
              <a href="tel:+01001001">1900648888</a>
              <br /><h6 class="h6as">24/7 Support Center</h6>
            </p>
          </div>
        </div>

        <div>
          <div class="flex gap-4 mt-5 mx-5">
          <h4>Follow us</h4>
          <div class="social-icon">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
            <img class="inons-all" src="../assets/img/facebook.png" alt="">
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
              <img class="inons-all" src="../assets/img/linkedin.png" alt="">
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
              <img class="inons-all" src="../assets/img/instagram.png" alt="">
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
              <img class="inons-all" src="../assets/img/twitter.png" alt="">
            </a>
          </div>
        </div>
        <h4 class="mx-5">Up to 15% discount on your first subscribe</h4>
        </div>
      </div>
    </section>
  </footer>
</template>

<script setup lang="ts">
import AppLogo from "../components/app/app-logo.vue";
</script>

<style scoped>
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
.footer-list li :hover{
  color: #19f4a4;
}
.contact-us {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.li1{
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
@media screen and(max-width: 1000px){
  .futter-icons-all{
    display: none;
  }
}
</style>
