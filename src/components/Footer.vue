<template>
  <b-container fluid class="p-0 footer_main_section position-relative">
    <b-row align-h="center" no-gutters class="footer_first_section">
      <b-col cols="12" sm="12" md="12" lg="10">
        <b-row class="d-flex align-items-center footer_info_section" no-gutters>
          <b-col cols="12" sm="12" md="12" lg="6" class="footer_info">
            <span class="d-block text-light footer_info_title">
              <span>St</span>ill You Need Our Support ?
            </span>
            <span
              class="d-block text-light mt-2"
            >Don’t wait make a smart & logical quote here. Its pretty easy.</span>
          </b-col>
          <b-col cols="12" sm="12" md="12" lg="6" class="text-right subscribe_column">
            <div class="d-flex align-items-center sub_section">
              <input type="text" placeholder="Enter Your Email" />
              <button class="btn_footer_subscribe">Subscribe Now</button>
            </div>
          </b-col>
        </b-row>
        <b-row class="footer_details" no-gutters>
          <b-col cols="12" sm="12" md="12" lg="3">
            <span class="d-block text-light font-weight-bold footer_titles">About Us.</span>
            <span class="d-block text-light my-3">
              orporate clients and leisure travelers has
              been relying on Groundlink for dependab
              safe, and professional chauffeured car
              service in major cities across World.
            </span>
            <b-row>
              <b-col cols="3">
                <div class="footer_timer_icon d-flex align-items-center justify-content-center">
                  <b-icon-clock-history class="text-light" font-scale="2"></b-icon-clock-history>
                </div>
              </b-col>
              <b-col cols="6">
                <span class="d-flex text-light">Opening Hours</span>
                <span class="d-flex text-light">Mon - Sat(8.00 - 6.00)</span>
                <span class="d-flex text-light">Sunday - Closed</span>
              </b-col>
            </b-row>
          </b-col>
          <b-col cols="6" sm="6" md="6" lg="3" class="justify-content-between">
            <span class="d-block text-light font-weight-bold footer_titles mb-3">Useful Links</span>
            <span class="d-block text-light mb-3">About</span>
            <span class="d-block text-light mb-3">News</span>
            <span class="d-block text-light mb-3">Partner</span>
            <span class="d-block text-light mb-3">Team</span>
            <span class="d-block text-light mb-3">Menu</span>
            <span class="d-block text-light mb-3">Contacts</span>
          </b-col>
          <b-col cols="6" sm="6" md="6" lg="3">
            <span class="d-block text-light font-weight-bold footer_titles mb-3">Help?</span>
            <span class="d-block text-light mb-3">FAQ</span>
            <span class="d-block text-light mb-3">Term & conditions</span>
            <span class="d-block text-light mb-3">Reporting</span>
            <span class="d-block text-light mb-3">Documentation</span>
            <span class="d-block text-light mb-3">Support Policy</span>
            <span class="d-block text-light mb-3">Privacy</span>
          </b-col>
          <b-col cols="12" sm="12" md="12" lg="3">
            <span class="d-block text-light font-weight-bold footer_titles mb-3">Recent Post</span>
            <b-row class="mb-3">
              <b-col cols="2">
                <img src="../assets/images/recent_post.png" alt />
              </b-col>
              <b-col cols="6">
                <span class="d-block text-secondary mb-1">20 Feb 2022</span>
                <span class="d-block text-light">Keep Your Business</span>
              </b-col>
            </b-row>
            <b-row class="mb-3">
              <b-col cols="2">
                <img src="../assets/images/recent_post.png" alt />
              </b-col>
              <b-col cols="6">
                <span class="d-block text-secondary mb-1">20 Feb 2022</span>
                <span class="d-block text-light">Keep Your Business</span>
              </b-col>
            </b-row>
            <b-row class="mb-3">
              <b-col cols="2">
                <img src="../assets/images/recent_post.png" alt />
              </b-col>
              <b-col cols="6">
                <span class="d-block text-secondary mb-1">20 Feb 2022</span>
                <span class="d-block text-light">Keep Your Business</span>
              </b-col>
            </b-row>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
    <b-row class="footer_copyrights d-flex align-items-center" align-h="center" no-gutters>
      <b-col cols="10" sm="10" md="10" lg="5">
        <span class="text-light">Copyright © 2022 by Ayeman. All Rights Reserved.</span>
      </b-col>
      <b-col cols="10" sm="10" md="10" lg="3" class="d-flex justify-content-end align-items-center">
        <span class="social_network_item d-block text-center">
          <BIconFacebook />
        </span>
        <span class="social_network_item d-block text-center">
          <BIconTwitter />
        </span>
        <span class="social_network_item d-block text-center">
          <BIconInstagram />
        </span>
        <span class="social_network_item d-block text-center">
          <BIconYoutube />
        </span>
        <span class="social_network_item d-block text-center">
          <BIconInstagram />
        </span>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
import {
  BIconFacebook,
  BIconInstagram,
  BIconTwitter,
  BIconYoutube
} from "bootstrap-vue";
export default {
  components: { BIconTwitter, BIconFacebook, BIconInstagram, BIconYoutube }
};
</script>

<style scoped>
.footer_main_section::after {
  position: absolute;
  content: "";
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-image: url("../assets/images/footer_bg.png");
  background-position: bottom right;
  background-repeat: no-repeat;
  
}
.footer_first_section {
  background: #0D0D0D;
}
.footer_info_section {
  border-bottom: 1px solid #ff9f0d;
  padding: 120px 0 61px 0;
  margin: 0 30px;
}
.footer_info_title {
  font-family: "Helvetica";
  font-weight: 700;
  font-size: 32px;
  line-height: 40px;
}
.footer_info_title > span {
  color: #ff9f0d;
}
.footer_titles {
  font-size: 24px;
}
.footer_timer_icon {
  width: 78px;
  height: 72px;
  background: #ff9f0d;
}
.footer_details {
  padding: 64px 0 46px 0;
}
.footer_copyrights {
  background: #ff9f0d;
  padding: 33px 0;
  /* height: 100px; */
}
.footer_copyrights > div:nth-child(2) {
  gap: 20px;
}
.social_network_item {
  width: 36px;
  height: 34px;
  background: #ffffff;
}
.social_network_item > svg {
  vertical-align: bottom;
}

.sub_section > input {
  background-color: #ff9f0d;
  padding: 16px 24px;
  border: none;
  outline: none;
  border-radius: 4px 0 0 4px;
  color: #ffffff;
}
.sub_section > input::placeholder {
  color: #ffffff;
  font-family: "Inter";
}

.btn_footer_subscribe {
  background-color: #ffffff;
  color: #ff9f0d;
  border: none;
  font-family: "Inter";
  border-radius: 0 4px 4px 0;
}

@media screen and (max-width: 480px) {
  .footer_main_section::after {
    background-size: 30%;
  }
  .footer_info_section {
    border-bottom: 1px solid #ff9f0d;
    padding: 20px 0 32px 0;
    margin: 0 20px;
  }
  .subscribe_column {
    margin-top: 32px;
  }
  .footer_details {
    padding: 32px 20px 32px 20px;
  }
  .footer_details div:first-child {
    margin-bottom: 24px;
  }
  .footer_copyrights {
    padding: 24px 20px;
    /* height: 152px; */
  }
  .footer_copyrights div:first-child {
    text-align: center !important;
  }
  .footer_copyrights div:last-child {
    text-align: center !important;
    justify-content: center !important;
    margin-top: 24px;
  }
  .sub_section > input {
    background-color: #ff9f0d;
    padding: 14px 20px !important;
    border: none;
    outline: none;
    border-radius: 4px 0 0 4px;
    color: #ffffff;
    font-size: 14px;
  }
  .sub_section > input::placeholder {
    color: #ffffff;
    font-family: "Inter";
    font-size: 14px;
  }
  .btn_footer_subscribe {
    background-color: #ffffff;
    color: #ff9f0d;
    border: none;
    font-family: "Inter";
    border-radius: 0 4px 4px 0;
    font-size: 14px;
    padding: 14px 20px !important;
  }
}
</style>