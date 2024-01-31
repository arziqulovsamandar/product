<template>
  <footer>
    <!-- Site Map -->
    <section class="site-map">
      <div class="wrapper">
        <div class="footer-block lg:col-span-2">
          <AppLogo />

          <ul class="contact-us">
            <li>
              <span :i-carbon-location-filled="true"></span>
              <p class="font-medium">Address:</p>
              <p class="text-blue-200">9999 UMB House Road</p>
            </li>

            <li>
              <span :i-bx-support="true"></span>
              <p class="font-medium">Call Us:</p>
              <p class="text-blue-200">+01 (3050) 001</p>
            </li>

            <li>
              <span :i-carbon-email="true"></span>
              <p class="font-medium">Email:</p>
              <p class="text-blue-200">umbstore@gmail.com</p>
            </li>

            <li>
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
    >
      <div
        class="wrapper"
        style="justify-content: space-between; align-items: center; gap: 23rem; padding: 5px"
      >
        <p class="font-medium">© 2024, All rights reserved</p>

        <div class="flex gap-4 mt-4">
          <div>
            <span :i-icon-phone="true"></span>
          </div>

          <div>
            <p class="font-medium text-green-500 text-2xl">
              <a href="tel:+01001001">+01 (001) 001</a>
            </p>
            <p>Work Hours: 8:00 AM - 12:00 PM (Mon-Thu)</p>
          </div>
        </div>

        <ul class="mt-4 flex gap-4 text-xl">
          <li class="social-icon">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <!-- Facebook icon -->
            </a>
          </li>

          <li class="social-icon">
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Linkedin"
            >
              <!-- Linkedin icon -->
            </a>
          </li>

          <li class="social-icon">
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <!-- Instagram icon -->
            </a>
          </li>

          <li class="social-icon">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <!-- Twitter icon -->
            </a>
          </li>
        </ul>
      </div>
    </section>
  </footer>
</template>

<script setup lang="ts">
import AppLogo from "../components/app/app-logo.vue";
</script>

<style scoped>
.app-text-lg{
  color: #253d4e;
  font-size: 24px;
  font-weight: 700;
  line-height: 1.2;
}
.wrapper {
  display: flex;
  flex-wrap: wrap;
  padding: 1rem;
  justify-content: space-around;
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

  a {
    &:hover {
      color: #34d399;
    }
  }
}
.contact-us {
  display: flex;
  flex-direction: column;
  gap: 1rem;

  li {
    display: flex;
    align-items: flex-start;
    gap: 0.5rem;
    color: #34d399;
  }
}
.rights-social {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }

  .social-icon {
    display: flex;
    cursor: pointer;
    align-items: center;
    border-radius: 9999px;
    background-color: #34d399;
    padding: 0.3rem;
    transition: opacity 0.3s;

    &:hover {
      opacity: 0.9;
    }

    a {
      display: block;
      width: 24px;
      height: 24px;
      background-size: cover;
    }
  }
}
</style>
