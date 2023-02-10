<script>
import Navbar from "../components/Navbar.vue";
import { BIconFacebook, BIconTwitter } from "bootstrap-vue";
import Client from "../components/Clients.vue";
export default {
  components: {
    Navbar,
    BIconFacebook,
    BIconTwitter,
    Client
  }
};
</script>

<template>
  <b-container fluid class="home_main p-0">
    <b-row>
      <b-col cols="12" class="p-0">
        <b-container fluid class="home_main_section pt-4">
          <b-row align-h="center" class="align-items-center mt-4">
            <b-col cols="10" sm="10" md="10" lg="9" class="pl-4">
              <Navbar />
            </b-col>
          </b-row>
          <b-row align-h="center" class="align-items-center mt-4">
            <b-col cols="12" sm="12" md="12" lg="5" class>
              <b-row>
                <b-col cols="1" sm="1" md="1" lg="1" class="text-right">
                  <div>
                    <span class="social_networks position-relative d-block text-center text-light">
                      <!-- <b-icon icon="facebook" class="d-block ml-4"></b-icon>
                  <b-icon icon="twitter" class="d-block ml-4 my-4 twitter_icon"></b-icon>
                      <b-icon icon="twitter" class="d-block ml-4"></b-icon>-->
                      <BIconFacebook class="d-block ml-4" />
                      <BIconTwitter class="d-block ml-4 my-4 twitter_icon" />
                      <BIconTwitter class="d-block ml-4" />
                    </span>
                  </div>
                </b-col>
                <b-col cols="11" sm="11" md="11" lg="11" >
                  <div class="ml-4">
                    <h2 class="its_quick fw-normal">Its Quick & Amusing!</h2>
                    <span class="the_art_title text-light fw-bold">
                      <span class="th">Th</span>e Art of speed
                      <br />food Quality
                    </span>
                    <h6 class="the_art_description fw-normal text-light">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Varius sed pharetra dictum neque massa congue
                    </h6>
                    <button class="btn_see_menu rounded-pill">See Menu</button>
                  </div>
                </b-col>
              </b-row>
            </b-col>
            <b-col cols="12" sm="12" md="12" lg="5" class>
              <img src="../assets/images/first_food.svg" alt style="width:100%; height: auto;" />
            </b-col>
          </b-row>
          <!-- <div class="d-flex align-items-center mt-5" style=" justify-content: space-evenly">
        <div style="display: flex;">
          <div>
            <span class="social_networks position-relative d-block text-center text-light">
              <b-icon icon="facebook" class="d-block ml-4"></b-icon>
              <b-icon icon="twitter" class="d-block ml-4 my-4 twitter_icon"></b-icon>
              <b-icon icon="twitter" class="d-block ml-4"></b-icon>
            </span>
          </div>
          <div class="ml-4">
            <h2 class="its_quick fw-normal">Its Quick & Amusing!</h2>
            <span class="the_art_title text-light fw-bold">
              <span class="th">Th</span>e Art of speed
              <br />food Quality
            </span>
            <h6 class="the_art_description fw-normal text-light">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              <br />Varius sed pharetra dictum neque massa congue
            </h6>
            <button class="btn_see_menu rounded-pill">See Menu</button>
          </div>
        </div>
        <div>
          <img src="../assets/images/first_food.svg" alt />
        </div>
          </div>-->
        </b-container>
        <!-- <b-container fluid class="about_section pt-5">
      <b-row align-h="center">
        <b-col cols="5">
          <h2 class="d-block abt_us_text fw-normal">about us</h2>
          <span class="abt_us_title text-light fw-bold">
            <span class="abt_we">We</span> Create the best
            foody product
          </span>
          <h6 class="abt_us_description fw-normal text-light">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam
            <br />pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit
            <br />augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis
            <br />sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in
            <br />consequat.
          </h6>
          <ul class="abt_us_ul my-4">
            <li>Lacus nisi, et ac dapibus sit eu velit in consequat.</li>
            <li class="my-3">Quisque diam pellentesque bibendum non dui volutpat fringilla</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
          </ul>
          <button class="btn_read_more text-light rounded-pill">Read More</button>
        </b-col>
        <b-col cols="5">
          <b-row>
            <b-col cols="12" class="mb-3">
              <img src="../assets/images/about_us_pic1.png" alt />
            </b-col>
            <b-col cols="12">
              <img src="../assets/images/about_us_pic2.png" class="mr-3" alt />
              <img src="../assets/images/about_us_pic3.png" alt />
            </b-col>
          </b-row>
        </b-col>
      </b-row>
      <b-row align-h="center" class="text-center py-5">
        <b-col cols="12">
          <h2 class="food_category_text fw-normal">Food Category</h2>
        </b-col>
        <b-col cols="12">
          <span class="food_category_title text-light fw-bold">
            <span class="food_category_ch">Ch</span>oose Food Item
          </span>
        </b-col>
        <b-row class="mt-5">
          <b-col cols="3">
            <div class="position-relative">
              <img src="../assets/images/food_category_pic1.png" alt />
              <label class="save_amount_text bg-light">Save 30%</label>
              <label class="food_type font-weight-bold">Fast Food Dish</label>
            </div>
          </b-col>
          <b-col cols="3">
            <div class="position-relative">
              <img src="../assets/images/food_category_pic2.png" alt />
              <label class="save_amount_text bg-light">Save 30%</label>
              <label class="food_type font-weight-bold">Fast Food Dish</label>
            </div>
          </b-col>
          <b-col cols="3">
            <div class="position-relative">
              <img src="../assets/images/food_category_pic3.png" alt />
              <label class="save_amount_text bg-light">Save 30%</label>
              <label class="food_type font-weight-bold">Fast Food Dish</label>
            </div>
          </b-col>
          <b-col cols="3">
            <div class="position-relative">
              <img src="../assets/images/food_category_pic4.png" alt />
              <label class="save_amount_text bg-light">Save 30%</label>
              <label class="food_type font-weight-bold">Fast Food Dish</label>
            </div>
          </b-col>
        </b-row>
      </b-row>
      <b-row align-h="center">
        <b-col cols="5">
          <div class="why_choose_us_images d-flex flex-wrap">
            <img src="../assets/images/why_choose_us_pic4.png" alt class="align-self-end" />
            <img src="../assets/images/why_choose_us_pic2.png" alt class="align-self-end" />
            <img src="../assets/images/why_choose_us_pic1.png" alt class="align-self-start" />
            <img src="../assets/images/why_choose_us_pic3.png" alt class="align-self-start" />
            <div>
              <img
                src="../assets/images/why_choose_us_pic6.png"
                alt
                class="d-block align-self-start mb-3"
              />
              <img
                src="../assets/images/why_choose_us_pic5.png"
                alt
                class="d-block align-self-start"
              />
            </div>
          </div>
        </b-col>
        <b-col cols="5">
          <b-row>
            <b-col cols="12">
              <h2 class="why_choose_text fw-normal">Why Choose us</h2>
            </b-col>
            <b-col cols="12">
              <span class="why_choose_title fw-bold text-light">
                <span class="why_choose_ex">Ex</span>tra ordinary taste
                <br />And Experienced
              </span>
            </b-col>
            <b-col cols="12">
              <h6 class="why_choose_desccription fw-normal text-light">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam
                <br />pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit
                <br />augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis
                <br />sed vitae mus risus.
                Lacus nisi, et ac dapibus sit eu velit in
                <br />consequat.
              </h6>
            </b-col>
          </b-row>
          <b-row class="text-center">
            <b-col cols="2">
              <div class="hamburger_icon p-4">
                <img src="../assets/images/Hamburger.png" alt />
              </div>
              <span class="d-block fw-normal text-light mt-2">Fast Food</span>
            </b-col>
            <b-col cols="2">
              <div class="hamburger_icon p-4">
                <img src="../assets/images/Cookie.png" alt />
              </div>
              <span class="d-block fw-normal text-light mt-2">Lunch</span>
            </b-col>
            <b-col cols="2">
              <div class="hamburger_icon p-4">
                <img src="../assets/images/Wine.png" alt />
              </div>
              <span class="d-block fw-normal text-light mt-2">Dinner</span>
            </b-col>
          </b-row>
       
          <div
            class="experience_section d-flex bg-light mt-4 align-items-center justify-content-around rounded-lg p-2"
            style="width:374px"
          >
            <div>
              <span class="experience">30+</span>
            </div>
            <div class="text-start">
              <span class="years_of_text d-block fw-normal">years of</span>
              <span class="experienced_text d-block">Experienced</span>
            </div>
          </div>
        </b-col>
      </b-row>
     <Client/>
        </b-container>-->
      </b-col>
    </b-row>
  </b-container>
</template>

<style scoped>
.home_main_section {
  background: linear-gradient(
      0deg,
      rgba(13, 13, 13, 0.85),
      rgba(13, 13, 13, 0.85)
    ),
    url("../assets/images/home_page_bg.png");
  background-repeat: no-repeat;
  background-position: center center;
}
.social_networks {
  height: 150px;
  width: 67px;
  padding-top: 100px;
  margin: auto;
}
.social_networks:before {
  border-left: 1px solid #ffffff;
  content: "";
  display: block;
  height: 158px;
  left: 34px;
  position: absolute;
  bottom: 85px;
  width: 1px;
  z-index: 0;
  margin: auto;
}

.social_networks:after {
  border-left: 1px solid #ffffff;
  content: "";
  display: block;
  height: 158px;
  left: 32px;
  position: absolute;
  top: 213px;
  width: 1px;
  z-index: 0;
  margin: auto;
}
.its_quick,
.abt_us_text,
.food_category_text,
.why_choose_text {
  line-height: 40px;
  color: #ff9f0d;
  font-family: "Great Vibes", cursive;
}

.th,
.abt_we,
.food_category_ch,
.why_choose_ex {
  color: #ff9f0d;
}
.abt_us_title,
.food_category_title,
.why_choose_title,
.the_art_title {
  font-weight: 700;
  font-size: 48px;
  line-height: 56px;
}
.twitter_icon {
  fill: #ff9f0d;
}
.the_art_description,
.abt_us_description,
.why_choose_desccription {
  line-height: 24px;
  margin: 32px 0;
  font-family: "Inter", sans-serif;
}
.btn_see_menu,
.btn_read_more {
  padding: 18px 57px;
  background: #ff9f0d;
}

.about_section {
  background: #0d0d0d;
}
.abt_us_ul {
  list-style: none;
  padding-left: 0;
  color: #ffffff;
}
.abt_us_ul > li {
  position: relative;
  padding-left: 1.8em;
}
.abt_us_ul > li:before {
  content: "";
  position: absolute;
  left: 0;
  width: 1em;
  top: 8px;
  height: 1em;
  background: url("../assets/images/check.png") no-repeat;
}
.save_amount_text {
  border-radius: 6px;
  color: #ff9f0d;
  padding: 7px 19px;
  font-weight: 700;
  font-size: 18px;
  line-height: 26px;
  position: absolute;
  top: 35%;
  left: 30%;
}
.food_type {
  /* font-weight: 700; */
  font-size: 20px;
  line-height: 28px;
  background: #ff9f0d;
  border-radius: 6px;
  color: #fff5f5;
  padding: 9px 31px;
  position: absolute;
  left: 0;
  bottom: 100px;
}
.hamburger_icon {
  background: #ff9f0d;
  border-radius: 6px;
}
.why_choose_us_images {
  gap: 15px;
}
.experience {
  font-size: 48px;
  color: #ff9f0d;
  font-weight: 700;
}
.years_of_text {
  font-size: 20px;
  line-height: 28px;
  color: #1e1e1e;
}
.experienced_text {
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  color: #1e1e1e;
}
.experience_section {
  border-left: 10px solid #ff9f0d;
}
.clients_section {
  background: linear-gradient(
      0deg,
      rgba(13, 13, 13, 0.85),
      rgba(13, 13, 13, 0.85)
    ),
    url("../assets/images/clients_bg.png");
  background-repeat: no-repeat;
}

@media screen and (max-width: 480px) {
  .social_networks {
    height: 150px;
    width: 67px;
    padding-top: 110px;
    margin: auto;
  }
  .social_networks:before {
    border-left: 1px solid #ffffff;
    content: "";
    display: block;
    height: 95px;
    left: 34px;
    position: absolute;
    bottom: 60px;
    width: 1px;
    z-index: 0;
    margin: auto;
  }

  .social_networks:after {
    border-left: 1px solid #ffffff;
    content: "";
    display: block;
    height: 95px;
    left: 32px;
    position: absolute;
    top: 220px;
    width: 1px;
    z-index: 0;
    margin: auto;
  }
  .abt_us_title,
  .food_category_title,
  .why_choose_title,
  .the_art_title {
    font-weight: 700;
    font-size: 40px;
    line-height: 48px;
  }

  .the_art_description,
  .abt_us_description,
  .why_choose_desccription {
    line-height: 22px;
    margin: 32px 0;
    font-family: "Inter", sans-serif;
    font-size: 14px;
    font-weight: 400;
  }
  .btn_see_menu,
  .btn_read_more {
    padding: 8px 28px;
    background: #ff9f0d;
  }
}
</style>