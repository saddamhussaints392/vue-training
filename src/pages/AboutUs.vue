<template>
  <div class="containers">
    <div class="rows justify-content-center about_us_first_section px-2">
      <div class="cols-10 cols-sm-11 cols-md-11 cols-lg-10 cols-xl-10 cols-xxl-10">
        <div class="rows abt-us-row">
          <div class="cols-6 cols-sm-12 cols-md-12 cols-lg-6 cols-xl-6 cols-xxl-6">
            <div class="rows">
              <div class="cols-6">
                <img src="../assets/images/why_choose_us_pic4.png" alt class="abt_us_grid-img-1 border-radius-6" />
              </div>
              <div class="cols-6">
                <div class="row mt-5 mb-3">
                  <div class="cols-12">
                    <img
                      src="../assets/images/why_choose_us_pic1.png"
                      alt
                      class="abt_us_grid-img-2 border-radius-6"
                    />
                  </div>
                </div>
                <div class="row">
                  <div class="cols-12">
                    <img
                      src="../assets/images/why_choose_us_pic5.png"
                      alt
                      class="abt_us_grid-img-3 border-radius-6"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="cols-6 cols-sm-12 cols-md-12 cols-lg-6 cols-xl-6 cols-xxl-6">
            <span class="text-primary medium-text-regular about_us_text">About us</span>
            <h2>Food is an important part Of a balanced Diet</h2>
            <span
              class="normal-text-regular text-grey-2 my-4 d-block"
            >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.</span>
            <div class="d-flex align-items-center btn_and_play_section">
              <div>
                <button class="bg-primary border-radius-6 medium-text-bold">Show more</button>
              </div>
              <div>
                <div class="play_icon d-flex align-items-center justify-content-center">
                  <BIconPlay font-scale="2" class="text-light" />
                </div>
              </div>
              <div>
                <span class="normal-text-bold">watch video</span>
              </div>
            </div>
          </div>
        </div>
        <div class="rows text-center why_choose_us_section">
          <div class="cols-12">
            <div class="rows justify-content-center">
              <div class="cols-4 cols-sm-12 cols-md-12 cols-lg-4 cols-xl-4 cols-xxl-4">
                <h2>Why Choose us</h2>
                <span
                  class="normal-text-regular"
                >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum.</span>
              </div>
            </div>
            <div class="rows mb-6 mt-4">
              <div class="cols-12">
                <img src="../assets/images/why_choose_img.png" alt class="why_choose_img" />
              </div>
            </div>
            <div class="rows justify-content-center best_chef_section">
              <div class="cols-3 cols-sm-12 cols-md-12 cols-lg-3 cols-xl-3 cols-xxl-3">
                <img src="../assets/images/best_chef.png" alt />
                <h5 class="mt-3 mb-2">Best Chef</h5>
                <span
                  class="normal-text-regular"
                >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat</span>
              </div>
              <div class="cols-3 cols-sm-12 cols-md-12 cols-lg-3 cols-xl-3 cols-xxl-3">
                <img src="../assets/images/item_food.png" alt />
                <h5 class="mt-3 mb-2">120 Item food</h5>
                <span
                  class="normal-text-regular"
                >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat</span>
              </div>
              <div class="cols-3 cols-sm-12 cols-md-12 cols-lg-3 cols-xl-3 cols-xxl-3">
                <img src="../assets/images/clean_env.png" alt />
                <h5 class="mt-3 mb-2">Clean Environment</h5>
                <span
                  class="normal-text-regular"
                >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="rows text-center">
      <div class="cols-12 team_member_img">
        <h2 class="text-light">Team Member</h2>
        <span class="normal-text-regular text-light">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Varius sed pharetra dictum neque massa congue
        </span>
      </div>
    </div>
    <div class="rows justify-content-center px-2" style="margin-top: -156px">
      <div class="cols-10 cols-sm-11 cols-md-11 cols-lg-10 cols-xl-10 cols-xxl-10">
        <div class="rows" style="gap:100px;">
          <div
            class="cols-2 cols-sm-6 cols-md-6 cols-lg-2 cols-xl-2 cols-xxl-2"
            v-for="item in 4"
            :key="item"
            style="box-shadow: 0px 0px 80px rgba(205, 205, 205, 0.25);"
          >
            <div class="text-center">
              <div>
                <img src="../assets/images/member_img.png" alt  class="memeber_img"/>
              </div>
              <div class="p-2">
                <span class="h6">Mark Henry</span>
                <span class="normal-text-regular">Owner</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="rows justify-content-center px-2">
      <div class="cols-10 cols-sm-11 cols-md-11 cols-lg-10 cols-xl-10 cols-xxl-10">
        <div class="row px-2">
          <div class="cols-12">
            <Carousel from="about-us" />
          </div>
        </div>
        <div class="rows justify-content-centerpx-2">
          <div class="cols-12">
            <span class="h2 text-center">Our Food Menu</span>
            <span class="normal-text-regular text-center d-block">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              <br />Varius sed pharetra dictum neque massa congue
            </span>
            <div class="rows px-2 pb-1 mt-4 text-center" style="border-bottom: 1px solid #E0E0E0;">
              <div class="cols-12">
                <span class="large-text-regular mr-3" style="cursor:pointer">Breakfast</span>
                <span class="large-text-regular mr-3" style="cursor:pointer">Lunch</span>
                <span class="large-text-regular mr-3" style="cursor:pointer">Dinner</span>
                <span class="large-text-regular mr-3" style="cursor:pointer">Dessert</span>
                <span class="large-text-regular mr-3" style="cursor:pointer">Drink</span>
                <span class="large-text-regular mr-3" style="cursor:pointer">Snacks</span>
              </div>
            </div>
            <div class="rows px-2">
              <div class="pr-1 cols-sm-12 cols-md-12 cols-6 cols-lg-6 cols-xl-6 cols-xxl-6">
                <MenuItem v-for="item in 5" :key="item" />
              </div>
              <div class="pl-1 cols-sm-12 cols-md-12 cols-6 cols-lg-6 cols-xl-6 cols-xxl-6">
                <MenuItem v-for="item in 5" :key="item" />
              </div>
            </div>
            <div class="rows justify-content-center text-center view_menu_btn">
              <div class="cols-12">
                <button class="view_btn normal-text-regular text-primary m-auto">View menu</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { BIconPlay } from "bootstrap-vue";
import Carousel from "../components/Carousel.vue";
import MenuItem from "../components/MenuItem.vue";

export default {
  components: { BIconPlay, Carousel, MenuItem }
};
</script>
<style scoped>
.about_us_first_section {
    padding: 120px 0;
}
.about_us_text {
  font-family: "Miniver" !important;
}
.abt_us_grid-img-1 {
  width: 336px;
  height: 536px;
  object-fit: cover;
}
.abt_us_grid-img-2 {
  width: 309px;
  height: 271px;
  object-fit: cover;
}
.abt_us_grid-img-3 {
  width: 309px;
  height: 382px;
  object-fit: cover;
}
.why_choose_us_section {
    margin-top: 120px;
}
.play_icon {
  background-color: #ff9f0d;
  width: 60px;
  height: 60px;
  border-radius: 50%;
}
.btn_and_play_section {
  gap: 16px;
}
.why_choose_img {
  width: 100%;
  height: auto;
}
.best_chef_section {
    gap: 200px;
}
.team_member_img {
  background: linear-gradient(
      0deg,
      rgba(255, 159, 13, 0.85),
      rgba(255, 159, 13, 0.85)
    ),
    url("../assets/images/team_member_bg.png");
  background-repeat: no-repeat;
  background-position: center center;
  padding-top: 120px;
  padding-bottom: 228px;
  background-size: 100% 460px;
}
.member_img {
  width: 100%;
  height: auto;
  object-fit: cover;
}
.view_menu_btn {
    margin-top: 56px;
    margin-bottom: 120px;
}
.view_btn {
    border: 1px solid #ff9f0d;
    background: transparent;
}
@media screen and (max-width: 480px) {
    .about_us_first_section {
    padding: 20px 0;
}
.abt-us-row {
    flex-direction: column-reverse;
}
.abt-us-row > div {
    margin-top: 62px;
}
.abt_us_grid-img-1 {
  width: 168.02px;
  height: 269.04px;
  object-fit: cover;
}
.abt_us_grid-img-2 {
  width: 155.02px;
  height: 136.02px;
  object-fit: cover;
}
.abt_us_grid-img-3 {
  width: 155.02px;
  height: 191.03px;
  object-fit: cover;
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
  .best_chef_section {
    gap: 70px;
}
.view_menu_btn {
    margin-top: 32px;
    margin-bottom: 62px;
}
}
</style>