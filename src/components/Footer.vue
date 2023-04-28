<template>
  <div class="containers footer_main_section position-relative">
    <div class="rows justify-content-center footer_first_section">
      <div class="cols-sm-11 cols-10">
        <div class="align-items-center footer_info_section rows">
          <div class="footer_info  cols-sm-12 cols-md-12 cols-6 cols-lg-6 cols-xl-6 cols-xxl-6">
            <span class="d-block text-light h4 still_you">
              <span class="text-primary">St</span>ill You Need Our Support ?
            </span>
            <span
              class="d-block text-light mt-2 normal-text-regular"
            >Don’t wait make a smart & logical quote here. Its pretty easy.</span>
          </div>
          <div class="text-right subscribe_column cols-sm-12 cols-md-12 cols-6 cols-lg-6 cols-xl-6 cols-xxl-6">
            <div class="d-flex align-items-center sub_section">
              <input type="text" placeholder="Enter Your Email" class="bg-primary text-light"/>
              <button class="btn_footer_subscribe normal-text-regular bg-light text-primary">Subscribe Now</button>
            </div>
          </div>
        </div>
        <div class="footer_details rows mt-4">
          <div class="cols-sm-12 cols-md-12 cols-3 cols-lg-3 cols-xl-3 cols-xxl-3 mb-3">
            <span class="d-block text-light h5">About Us.</span>
            <span class="d-block text-light my-3 normal-text-regular">
              orporate clients and leisure travelers 
              has been relying on Groundlink for 
              dependab safe, and professional 
              chauffeured car service in 
              major cities across World.
            </span>
            <div class="rows">
              <div class="cols-3">
                <div class="footer_timer_icon d-flex align-items-center justify-content-center">
                  <b-icon-clock-history class="text-light" font-scale="2"></b-icon-clock-history>
                </div>
              </div>
              <div class="cols-6">
                <span class="d-flex text-light medium-text-regular">Opening Hours</span>
                <span class="d-flex text-light small-text-regular">Mon - Sat(8.00 - 6.00)</span>
                <span class="d-flex text-light small-text-regular">Sunday - Closed</span>
              </div>
            </div>
          </div>
          <div class="justify-content-between cols-sm-6 cols-md-6 cols-3 cols-lg-3 cols-xl-3 cols-xxl-3">
            <span class="d-block text-light h5 mb-3">Useful Links</span>
            <span class="d-block text-light mb-3 large-text-regular">About</span>
            <span class="d-block text-light mb-3 large-text-regular">News</span>
            <span class="d-block text-light mb-3 large-text-regular">Partner</span>
            <span class="d-block text-light mb-3 large-text-regular">Team</span>
            <span class="d-block text-light mb-3 large-text-regular">Menu</span>
            <span class="d-block text-light mb-3 large-text-regular">Contacts</span>
          </div>
          <div class="cols-sm-6 cols-md-6 cols-3 cols-lg-3 cols-xl-3 cols-xxl-3">
            <span class="d-block text-light h5 mb-3">Help?</span>
            <span class="d-block text-light mb-3 large-text-regular">FAQ</span>
            <span class="d-block text-light mb-3 large-text-regular">Term & conditions</span>
            <span class="d-block text-light mb-3 large-text-regular">Reporting</span>
            <span class="d-block text-light mb-3 large-text-regular">Documentation</span>
            <span class="d-block text-light mb-3 large-text-regular">Support Policy</span>
            <span class="d-block text-light mb-3 large-text-regular">Privacy</span>
          </div>
          <div class="cols-sm-12 cols-md-12 cols-3 cols-3 cols-lg-3 cols-xl-3 cols-xxl-3">
            <span class="d-block text-light h5 mb-3">Recent Post</span>
            <div class="mb-3 rows">
              <div class="cols-2">
                <img src="../assets/images/recent_post.png" alt />
              </div>
              <div class="cols-6">
                <span class="d-block text-secondary normal-text-regular mb-1">20 Feb 2022</span>
                <span class="d-block text-light normal-text-regular">Keep Your Business</span>
              </div>
            </div>
            <div class="mb-3 rows">
              <div class="cols-2">
                <img src="../assets/images/recent_post.png" alt />
              </div>
              <div class="cols-6">
                <span class="d-block text-secondary mb-1 normal-text-regular">20 Feb 2022</span>
                <span class="d-block text-light normal-text-regular">Keep Your Business</span>
              </div>
            </div>
            <div class="mb-3 rows">
              <div class="cols-2">
                <img src="../assets/images/recent_post.png" alt />
              </div>
              <div class="cols-6">
                <span class="d-block text-secondary mb-1 normal-text-regular">20 Feb 2022</span>
                <span class="d-block text-light normal-text-regular">Keep Your Business</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <b-row class="footer_copyrights  bg-primary d-flex align-items-center" align-h="center" no-gutters>
      <b-col cols="10" sm="10" md="10" lg="5">
        <span class="text-light normal-text-regular">Copyright © 2022 by Ayeman. All Rights Reserved.</span>
      </b-col>
      <b-col cols="10" sm="10" md="10" lg="3" class="d-flex justify-content-end align-items-center">
        <span class="social_network_item bg-light d-block text-center">
          <BIconFacebook />
        </span>
        <span class="social_network_item bg-light d-block text-center">
          <BIconTwitter />
        </span>
        <span class="social_network_item  bg-light d-block text-center">
          <BIconInstagram />
        </span>
        <span class="social_network_item  bg-light d-block text-center">
          <BIconYoutube />
        </span>
        <span class="social_network_item  bg-light d-block text-center">
          <BIconInstagram />
        </span>
      </b-col>
    </b-row>
  </div>
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
.footer_main_section::before {
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
  /* margin: 0 30px; */
}
/* .footer_info_title {
  font-family: "Helvetica";
  font-weight: 700;
  font-size: 32px;
  line-height: 40px;
} */
/* .footer_info_title > span {
  color: #ff9f0d;
} */
/* .footer_titles {
  font-size: 24px;
} */
.footer_timer_icon {
  width: 78px;
  height: 72px;
  background: #ff9f0d;
}
.footer_details {
  /* padding: 64px 0 46px 0; */
}
.footer_copyrights {
  /* background: #ff9f0d; */
  padding: 33px 0;
  /* height: 100px; */
}
.footer_copyrights > div:nth-child(2) {
  gap: 20px;
}
.social_network_item {
  width: 36px;
  height: 34px;
  /* background: #ffffff; */
}
.social_network_item > svg {
  vertical-align: bottom;
}

.sub_section > input {
  /* background-color: #ff9f0d; */
  padding: 16px 24px;
  border: none;
  outline: none;
  border-radius: 4px 0 0 4px;
  /* color: #ffffff; */
}
.sub_section > input::placeholder {
  color: #ffffff;
  font-family: "Inter";
}

.btn_footer_subscribe {
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
    /* margin: 0 20px; */
  }
  .subscribe_column {
    margin-top: 32px;
  }
  .footer_details {
    /* padding: 32px 20px 32px 20px; */
  }
  /* .footer_details div:first-child {
    margin-bottom: 24px;
  } */
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
    /* background-color: #ffffff;
    color: #ff9f0d; */
    border: none;
    font-family: "Inter";
    border-radius: 0 4px 4px 0;
    /* font-size: 14px; */
    padding: 14px 20px !important;
  }
}
</style>