<script>
import {
  BIconFacebook,
  BIconTwitter,
  BIconPlayCircleFill,
  BIconPlay,
  BIconHandThumbsUp,
  BIconChatLeftDots,
  BIconShare
} from "bootstrap-vue";
import Client from "../components/Clients.vue";
import Footer from "../components/Footer.vue";
import BlogPostItem from "../components/BlogPostItem.vue";
import MenuListItem from "../components/MenuListItem.vue";
import Carousel from "../components/Carousel.vue";
export default {
  components: {
    BIconFacebook,
    BIconTwitter,
    Client,
    MenuListItem,
    BIconPlayCircleFill,
    BIconPlay,
    BIconHandThumbsUp,
    BIconChatLeftDots,
    BIconShare,
    Footer,
    BlogPostItem,
    Carousel
  },

};
</script>

<template>
  <b-container fluid class="home_main p-0">
    <b-row no-gutters>
      <b-col cols="12" class="p-0">
        <b-container fluid class="home_main_section">
          <b-row align-h="center" class="align-items-center mt-4" no-gutters>
            <b-col cols="12" sm="12" md="12" lg="5" class>
              <b-row no-gutters>
                <b-col cols="1" sm="1" md="1" lg="1" class="text-right">
                  <div>
                    <span class="social_networks position-relative d-block text-center text-light">
                      <BIconFacebook class="d-block ml-4" />
                      <BIconTwitter class="d-block ml-4 my-4 twitter_icon" />
                      <BIconTwitter class="d-block ml-4" />
                    </span>
                  </div>
                </b-col>
                <b-col cols="11" sm="11" md="11" lg="11">
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
        </b-container>
        <b-container fluid class="about_section px-0">
          <b-row align-h="center" class="text-align-center about_us_row px-3" no-gutters>
            <b-col cols="12" sm="12" md="12" lg="5" class>
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
            <b-col cols="12" sm="12" md="12" lg="5" class="about_us_images">
              <b-row no-gutters>
                <b-col cols="12" class="mb-3">
                  <img
                    src="../assets/images/about_us_pic1.png"
                    alt
                    style="width: 100%; height: auto;"
                  />
                </b-col>
              </b-row>
              <b-row no-gutters>
                <b-col cols="6" class="pr-3">
                  <img
                    src="../assets/images/about_us_pic2.png"
                    alt
                    style="width: 100%; height: auto;"
                  />
                </b-col>
                <b-col cols="6">
                  <img
                    src="../assets/images/about_us_pic3.png"
                    alt
                    style="width: 100%; height: auto;"
                  />
                </b-col>
              </b-row>
            </b-col>
          </b-row>
          <b-row align-h="center" class="text-center food_category_section" no-gutters>
            <b-col cols="10">
              <b-col cols="12">
                <h2 class="food_category_text fw-normal">Food Category</h2>
              </b-col>
              <b-col cols="12">
                <span class="food_category_title text-light fw-bold">
                  <span class="food_category_ch">Ch</span>oose Food Item
                </span>
              </b-col>
              <b-row class="mt-5 food_category_cards">
                <b-col v-for="(category, i) in 4" :key="i" cols="6" sm="6" md="6" lg="3">
                  <div class="position-relative">
                    <img
                      src="../assets/images/food_category_pic1.png"
                      alt="food_category_image"
                      style="width: 100%; height: auto;"
                    />
                    <label class="save_amount_text bg-light">Save 30%</label>
                    <label class="food_type font-weight-bold">Fast Food Dish</label>
                  </div>
                </b-col>
              </b-row>
            </b-col>
          </b-row>
          <b-row align-h="center" class="why_we_choose_section px-3" no-gutters>
            <b-col cols="12" sm="12" md="12" lg="5" class="why_we_choose_images_section pr-5">
              <b-row class="align-items-end">
                <b-col class="pr-0">
                  <img
                    src="../assets/images/why_choose_us_pic4.png"
                    alt
                    class="align-self-end"
                    style="width: 100%; height: auto;"
                  />
                </b-col>
                <b-col>
                  <img
                    src="../assets/images/why_choose_us_pic2.png"
                    alt
                    class="align-self-end"
                    style="width: 100%; height: auto;"
                  />
                </b-col>
              </b-row>
              <b-row class="mt-3">
                <b-col class="pr-0">
                  <img
                    src="../assets/images/why_choose_us_pic1.png"
                    alt
                    class="align-self-start"
                    style="width: 100%; height: auto;"
                  />
                </b-col>
                <b-col class="pr-0">
                  <img
                    src="../assets/images/why_choose_us_pic3.png"
                    alt
                    class="align-self-start"
                    style="width: 100%; height: auto;"
                  />
                </b-col>
                <b-col>
                  <b-row>
                    <b-col>
                      <img
                        src="../assets/images/why_choose_us_pic6.png"
                        alt
                        class="d-block align-self-start mb-3"
                        style="width: 100%; height: auto;"
                      />
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col>
                      <img
                        src="../assets/images/why_choose_us_pic5.png"
                        alt
                        class="d-block align-self-start"
                        style="width: 100%; height: auto;"
                      />
                    </b-col>
                  </b-row>
                </b-col>
              </b-row>
            </b-col>
            <b-col cols="12" sm="12" md="12" lg="5">
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
                    pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit
                    augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis
                    sed vitae mus risus.
                    Lacus nisi, et ac dapibus sit eu velit in
                    consequat.
                  </h6>
                </b-col>
              </b-row>
              <b-row class="text-center">
                <b-col cols="4" sm="4" md="4" lg="2">
                  <div class="hamburger_icon p-4">
                    <img
                      src="../assets/images/Hamburger.png"
                      alt
                      style="width: 100%; height: auto;"
                    />
                  </div>
                  <span class="d-block fw-normal text-light mt-2">Fast Food</span>
                </b-col>
                <b-col cols="4" sm="4" md="4" lg="2">
                  <div class="hamburger_icon p-4">
                    <img src="../assets/images/Cookie.png" alt style="width: 100%; height: auto;" />
                  </div>
                  <span class="d-block fw-normal text-light mt-2">Lunch</span>
                </b-col>
                <b-col cols="4" sm="4" md="4" lg="2">
                  <div class="hamburger_icon p-4">
                    <img src="../assets/images/Wine.png" alt style="width: 100%; height: auto;" />
                  </div>
                  <span class="d-block fw-normal text-light mt-2">Dinner</span>
                </b-col>
              </b-row>

              <div
                class="experience_section d-flex bg-light mt-4 align-items-center justify-content-around rounded-lg p-2"
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
          <Client />
          <b-row no-gutters class="px-3 choose_and_pick_section">
            <b-col cols="12">
              <b-row no-gutters>
                <b-col sm="12" md="12" lg="12" cols="12" class="text-center">
                  <h2 class="choose_and_pick_text fw-normal">Choose & pick</h2>
                </b-col>
              </b-row>
              <b-row no-gutters>
                <b-col sm="12" md="12" lg="12" cols="12" class="text-center">
                  <span class="choose_and_pick_title fw-bold text-light">
                    <span class="choose_and_pick_fr">Fr</span>om Our Menu
                  </span>
                </b-col>
              </b-row>
              <b-row class="main_menu" no-gutters>
                <b-col sm="4" md="4" lg="1" cols="4" offset-sm="0" offset-md="0" offset-lg="1">
                  <span class="text-light font-weight-bold active">Breakfast</span>
                </b-col>
                <b-col sm="4" md="4" lg="1" cols="4">
                  <span class="text-light">Lunch</span>
                </b-col>
                <b-col sm="4" md="4" lg="1" cols="4">
                  <span class="text-light">Dinner</span>
                </b-col>
                <b-col sm="3" md="3" lg="1" cols="3">
                  <span class="text-light">Dessert</span>
                </b-col>
                <b-col sm="3" md="3" lg="1" cols="3">
                  <span class="text-light">Drink</span>
                </b-col>
                <b-col sm="3" md="3" lg="1" cols="3">
                  <span class="text-light">Snack</span>
                </b-col>
                <b-col sm="3" md="3" lg="1" cols="3">
                  <span class="text-light">Soups</span>
                </b-col>
              </b-row>
              <b-row no-gutters>
                <b-col sm="12" md="12" lg="4" cols="12">
                  <img
                    src="../assets/images/menu_list_image.png"
                    alt="menu_image"
                    style="width: 100%; height: auto;"
                  />
                </b-col>
                <b-col sm="12" md="12" lg="4" cols="12">
                  <b-row v-for="item in 4" :key="item" class="menu_list">
                    <MenuListItem />
                  </b-row>
                </b-col>
                <b-col sm="12" md="12" lg="4" cols="12">
                  <b-row v-for="item in 4" :key="item" class="menu_list">
                    <MenuListItem />
                  </b-row>
                </b-col>
              </b-row>
            </b-col>
          </b-row>
          <b-row no-gutters class="chefs_section" align-h="center">
            <b-col cols="10">
              <b-row no-gutters>
                <b-col sm="12" md="12" lg="12" cols="12" class="text-center">
                  <h2 class="chefs_text fw-normal">Chefs</h2>
                </b-col>
              </b-row>
              <b-row no-gutters>
                <b-col sm="12" md="12" lg="12" cols="12" class="text-center">
                  <span class="chefs_title fw-bold text-light">
                    <span class="chefs_me">Me</span>et Our Chef
                  </span>
                </b-col>
              </b-row>
              <b-row class="mt-5 chef_cards">
                <b-col cols="6" sm="6" md="6" lg="3">
                  <div class="position-relative chefs__info">
                    <img src="../assets/images/chef-1.png" alt style="width: 100%; height: auto;" />
                    <div class="chefs_details bg-light position-absolute">
                      <span class="font-weight-bold d-block">D.Estwood</span>
                      <span class="font-weight-normal">Chief Chef</span>
                    </div>
                  </div>
                </b-col>
                <b-col cols="6" sm="6" md="6" lg="3">
                  <div class="position-relative chefs__info">
                    <img src="../assets/images/chef-2.png" alt style="width: 100%; height: auto;" />
                    <div class="chefs_details bg-light position-absolute">
                      <span class="font-weight-bold d-block">D.Scoriesh</span>
                      <span class="font-weight-normal">Assistant Chef</span>
                    </div>
                  </div>
                </b-col>
                <b-col cols="6" sm="6" md="6" lg="3">
                  <div class="position-relative chefs__info">
                    <img src="../assets/images/chef-3.png" alt style="width: 100%; height: auto;" />
                    <div class="chefs_details bg-light position-absolute">
                      <span class="font-weight-bold d-block">M. William</span>
                      <span class="font-weight-normal">Advertising Chef</span>
                    </div>
                  </div>
                </b-col>
                <b-col cols="6" sm="6" md="6" lg="3">
                  <div class="position-relative chefs__info">
                    <img src="../assets/images/chef-4.png" alt style="width: 100%; height: auto;" />
                    <div class="chefs_details bg-light position-absolute">
                      <span class="font-weight-bold d-block">W.Readfroad</span>
                      <span class="font-weight-normal">Chef</span>
                    </div>
                  </div>
                </b-col>
              </b-row>
              <b-row class="mt-5 text-center">
                <b-col sm="12" md="12" lg="12" cols="12" class="text-center">
                  <button class="m-auto btn_chef_see_more">See More</button>
                </b-col>
              </b-row>
            </b-col>
          </b-row>
          <Carousel />
          <b-row class="restaurant_active_process" no-gutters>
            <b-col cols="12" sm="12" md="12" lg="5"></b-col>
            <b-col cols="12" sm="12" md="12" lg="5" class="text-right">
              <h2 class="restaurant_active_process_text fw-normal">Restaurant Active Process</h2>
              <span class="restaurant_title fw-bold text-light">
                <span class="restaurant_we">We</span> Document Every Food
                Bean Process untile it is saved
              </span>
              <h6
                class="restaurant_desccription fw-normal text-light"
              >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna,</h6>
              <b-row no-gutters class="d-flex align-items-center justify-content-end">
                <b-col cols="6" sm="6" md="6" lg="3" class="text-right">
                  <button class="m-auto font-weight-bold btn_restaurant_read_more">Read More</button>
                </b-col>
                <b-col cols="6" sm="6" md="6" lg="3">
                  <b-row
                    no-gutters
                    class="btn_and_icon_section d-flex align-items-center justify-content-end"
                  >
                    <b-col cols="2" sm="2" md="2" lg="3">
                      <div class="play_icon d-flex align-items-center justify-content-center">
                        <BIconPlay font-scale="2" class="text-light" />
                      </div>
                    </b-col>
                    <b-col cols="5" sm="5" md="5" lg="6" class="ml-2">
                      <span class="font-weight-bold text-light">Play Video</span>
                    </b-col>
                  </b-row>
                </b-col>
              </b-row>
            </b-col>
          </b-row>
          <b-row no-gutters align-h="center" class="blog_post_section">
            <b-col cols="10">
              <b-row no-gutters>
                <b-col sm="12" md="12" lg="12" cols="12" class="text-center">
                  <h2 class="blog_post_text fw-normal">Blog Post</h2>
                </b-col>
              </b-row>
              <b-row no-gutters>
                <b-col sm="12" md="12" lg="12" cols="12" class="text-center">
                  <span class="blog_post_title fw-bold text-light">
                    <span class="blog_post_la">La</span>test News & Blog
                  </span>
                </b-col>
              </b-row>
              <b-row class="mt-5 blog_post_cards">
                <b-col lg="4" v-for="(post, index) in 3" :key="index">
                  <BlogPostItem />
                </b-col>
              </b-row>
            </b-col>
          </b-row>
          <!-- <Footer /> -->
        </b-container>
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
  padding-top: 125px;
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
.why_choose_text,
.chefs_text,
.restaurant_active_process_text,
.blog_post_text,
.choose_and_pick_text {
  line-height: 40px;
  color: #ff9f0d;
  font-family: "Great Vibes", cursive;
}

.th,
.abt_we,
.food_category_ch,
.why_choose_ex,
.restaurant_we,
.chefs_me,
.blog_post_la,
.choose_and_pick_fr {
  color: #ff9f0d !important;
}
.abt_us_title,
.food_category_title,
.why_choose_title,
.choose_and_pick_title,
.chefs_title,
.restaurant_title,
.blog_post_title,
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
.restaurant_desccription,
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
.about_us_row,
.food_category_section,
.why_we_choose_section,
.choose_and_pick_section,
.blog_post_section,
.chefs_section {
  padding-top: 120px;
}
.why_we_choose_section {
  padding-bottom: 120px;
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
  width: 374px;
}
.main_menu {
  font-family: "Inter", sans-serif;
  padding: 56px 0 56px 0;
}
.main_menu > div > span {
  cursor: pointer;
}
.main_menu > div > .active {
  color: #ff9f0d !important;
}

.menu_texts {
  font-family: "Inter", sans-serif;
}
.menu_list {
  margin: 30px 0;
}
.chefs_details {
  width: 181px;
  bottom: 0;
  padding: 6px 20px;
}
.chefs_details span:first-child {
  font-family: "Inter", sans-serif;
  font-size: 18px;
}
.chefs__info {
  border-radius: 16px !important;
}
.btn_chef_see_more {
  background: transparent;
  padding: 13px 41px;
  border: 1px solid #ff9f0d;
  border-radius: 25px;
}
.btn_restaurant_read_more {
  background: transparent;
  padding: 13px 41px;
  border: 1px solid #ff9f0d;
  border-radius: 25px;
}

.restaurant_active_process {
  padding: 112px 0;
  background-image: url("../assets/images/resturant_active_process.png");
  background-repeat: no-repeat;
  background-position: center center;
}
.play_icon {
  background-color: #ff9f0d;
  width: 60px;
  height: 60px;
  border-radius: 50%;
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
  .choose_and_pick_title,
  .chefs_title,
  .restaurant_title,
  .blog_post_title,
  .the_art_title {
    font-weight: 700;
    font-size: 40px;
    line-height: 48px;
  }

  .the_art_description,
  .abt_us_description,
  .restaurant_desccription,
  .why_choose_desccription {
    line-height: 22px;
    margin: 32px 0;
    font-family: "Inter", sans-serif;
    font-size: 14px;
    font-weight: 400;
  }

  .about_us_row,
  .food_category_section,
  .why_we_choose_section,
  .choose_and_pick_section,
  .blog_post_section,
  .chefs_section {
    padding-top: 62px;
  }
  .why_we_choose_section {
    padding-bottom: 62px;
  }
  .blog_post_section {
    padding-bottom: 20px;
  }
  .btn_see_menu,
  .btn_read_more {
    padding: 8px 28px;
    background: #ff9f0d;
  }
  .about_us_images {
    display: none;
  }

  .save_amount_text {
    border-radius: 6px;
    color: #ff9f0d;
    padding: 5px 8px;
    font-weight: 700;
    font-size: 10px;
    line-height: 18px;
    position: absolute;
    top: 35%;
    left: 30%;
  }
  .food_type {
    /* font-weight: 700; */
    font-size: 12px;
    line-height: 20px;
    background: #ff9f0d;
    border-radius: 6px;
    color: #fff5f5;
    padding: 5px 12px;
    position: absolute;
    left: 0;
    bottom: 25px;
  }

  .food_category_cards > div:first-child,
  .chef_cards > div:first-child {
    padding: 0 0.5rem 0.5rem 0;
  }
  .food_category_cards > div:nth-child(2),
  .chef_cards > div:nth-child(2) {
    padding: 0 0 0.5rem 0.5rem;
  }
  .food_category_cards > div:nth-child(3),
  .chef_cards > div:nth-child(3) {
    padding: 0.5rem 0.5rem 0 0;
  }
  .food_category_cards > div:nth-child(4),
  .chef_cards > div:nth-child(4) {
    padding: 0.5rem 0 0 0.5rem;
  }
  .experience_section {
    border-left: 10px solid #ff9f0d;
    width: 100%;
  }
  .why_we_choose_section {
    flex-direction: column-reverse;
    margin-top: 62px;
  }
  .experience {
    font-size: 40px;
    color: #ff9f0d;
    font-weight: 700;
  }
  .years_of_text {
    font-size: 18px;
    line-height: 26px;
    color: #1e1e1e;
  }
  .experienced_text {
    font-weight: 700;
    font-size: 20px;
    line-height: 28px;
    color: #1e1e1e;
  }
  .why_choose_us_images {
    gap: 7px;
  }
  .why_we_choose_images_section {
    margin-top: 26px;
  }
  .menu_list {
    margin: 20px 0;
  }
  .chefs_details {
    width: 97px;
    bottom: 0;
    padding: 6px 12px;
  }
  .btn_chef_see_more {
  background: transparent;
padding: 8px 28px;
  border: 1px solid #ff9f0d;
  border-radius: 25px;
}
  .chefs_details span:first-child {
    font-family: "Inter", sans-serif;
    font-size: 10px;
  }
  .chefs_details span:last-child {
    font-family: "Inter", sans-serif;
    font-size: 8px;
  }
  .btn_restaurant_read_more {
    background: transparent;
    padding: 8px 28px;
    border: 1px solid #ff9f0d;
    border-radius: 25px;
    font-weight: 400;
    font-size: 14px;
  }
  .restaurant_active_process div:nth-child(2) {
    text-align: center !important;
  }
  .play_icon {
    background-color: #ff9f0d;
    width: 38px;
    height: 38px;
    border-radius: 50%;
  }
  .play_icon > svg > g > path {
    font-size: 150% !important;
  }
  .btn_and_icon_section {
    justify-content: start !important;
  }
  .blog_post_cards > div {
    margin-top: 32px !important;
  }
}
</style>