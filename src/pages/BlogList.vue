<template>
  <b-container fluid class="p-0">
    <b-row no-gutters align-h="center" class="blog_list_section">
      <b-col cols="11">
        <b-row no-gutters align-h="center">
          <b-col cols="12" sm="12" md="12" lg="7" xl="7">
            <div v-for="item in 5" :key="item">
              <div class="position-relative">
                <img src="../assets/images/tacos.png" alt class="blog_image" />
                <div class="blog_date_section text-center">
                  <span class="d-block text-light font-weight-bold blog_date">14</span>
                  <span class="d-block text-light blog_month">Feb</span>
                </div>
              </div>
              <div class="d-flex calendar_section" style="gap: 20px;">
                <div class="blog_calendar">
                  <b-icon-calendar-date class="mr-2"></b-icon-calendar-date>
                  <span>Feb 14, 2022 /</span>
                </div>
                <div class="blog_calendar">
                  <b-icon-chat-left class="mr-2"></b-icon-chat-left>
                  <span>3 /</span>
                </div>
                <div class="blog_calendar">
                  <b-icon-person-circle class="mr-2"></b-icon-person-circle>
                  <span>Admin</span>
                </div>
              </div>
              <span
                class="d-block blog_title font-weight-bold"
              >10 Reasons To Do A Digital Detox Challenge</span>
              <div class="blog_desc_section">
                <span>At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat</span>
                <button class="btn_blog_read_more">
                  <span class="mr-2">Read More</span>
                  <b-icon-box-arrow-in-up-right></b-icon-box-arrow-in-up-right>
                </button>
              </div>
            </div>
          </b-col>
          <b-col cols="12" sm="12" md="12" lg="3" xl="3">
            <div class="product_search d-flex align-items-center">
              <input type="text" placeholder="Search Your Keword.." class="d-block" />
              <div class="d-flex align-items-center justify-content-center text-light">
                <b-icon-search font-scale="1.5"></b-icon-search>
              </div>
            </div>
            <b-card class="text-center mt-4">
              <b-avatar src="https://placekitten.com/300/300" size="6rem"></b-avatar>
              <span class="d-block blogger_name font-weight-bold">Prince Miyako</span>
              <span class="d-block blogger_job">Blogger/Photographer</span>
              <div>
                <b-form-rating
                  id="rating-inline"
                  inline
                  value="4"
                  no-border
                  color="#FF9F0D"
                  class="blogger_rating"
                ></b-form-rating>
                <span class="blogger_review">(1 Review)</span>
              </div>
              <span class="d-block blogger_desc">
                Lorem ipsum dolor sit amet, consectetur
                adipisicing elit.Veritatis distinctio, odio
                eligendi suscipit reprehenderit atque
              </span>
              <div class="d-flex justify-content-center blogger_social_media" style="gap: 20px;">
                <b-icon-facebook></b-icon-facebook>
                <b-icon-twitter></b-icon-twitter>
                <b-icon-instagram></b-icon-instagram>
                <b-icon-twitter></b-icon-twitter>
              </div>
            </b-card>
            <b-card class="mt-4 px-3">
              <span class="font-weight-bold card_title">Recent Post</span>
              <div
                class="post_item d-flex align-items-center justify-content-center"
                v-for="item in 4"
                :key="item"
              >
                <img src="../assets/images/pizza.png" class="mr-3" alt />
                <div>
                  <span class="d-block posted_date">June 22, 2020</span>
                  <span class="d-block posted_desc mt-2">
                    Lorem ipsum dolor sit cing
                    elit, sed do.
                  </span>
                </div>
              </div>
            </b-card>
            <b-card class="mt-4 px-3">
              <span class="font-weight-bold card_title">Filter By Menu</span>
              <div
                class="filtered_item d-flex align-items-center justify-content-between pt-3"
                v-for="item in 5"
                :key="item"
              >
                <div>
                  <img src="../assets/images/pizza.png" class="mr-3" alt />
                  <span class="font-weight-bold filtered_item_name">Chicken Fry</span>
                </div>
                <span class="d-block filtered_item_quantity">26</span>
              </div>
            </b-card>
            <b-card class="mt-4 px-3">
              <span class="font-weight-bold card_title">Populer Tags</span>
              <div class="popular_tags_section pt-3">
                <div class="popular_tag">Sandwich</div>
                <div class="popular_tag">Tikka</div>
                <div class="popular_tag">Bbq</div>
                <div class="popular_tag">Restaurant</div>
                <div class="popular_tag">Chicken Sharma</div>
                <div class="popular_tag">Health</div>
                <div class="popular_tag">Fastfood</div>
                <div class="popular_tag">Food</div>
                <div class="popular_tag">Pizza</div>
                <div class="popular_tag">Burger</div>
                <div class="popular_tag">Chicken</div>
              </div>
            </b-card>
            <b-card class="mt-4 px-3">
              <span class="font-weight-bold card_title">Photo Gallery</span>
              <div class="photo_gallery_section pt-3">
                <div v-for="item in 6" :key="item">
                  <img src="../assets/images/burger.png" class="w-100" alt />
                  <div class="eye_main">
                    <b-icon-eye-fill></b-icon-eye-fill>
                  </div>
                </div>
              </div>
            </b-card>
            <b-card class="mt-4 px-4">
              <span class="font-weight-bold card_title">Follow Us</span>
              <div
                class="social_media_section d-flex align-items-center justify-content-between pt-3"
              >
                <div class="d-flex align-items-center justify-content-center">
                  <b-icon-twitter></b-icon-twitter>
                </div>
                <div class="d-flex align-items-center justify-content-center">
                  <b-icon-youtube></b-icon-youtube>
                </div>
                <div class="d-flex align-items-center justify-content-center">
                  <b-icon-facebook></b-icon-facebook>
                </div>
                <div class="d-flex align-items-center justify-content-center">
                  <b-icon-instagram></b-icon-instagram>
                </div>
                <div class="d-flex align-items-center justify-content-center">
                  <b-icon-facebook></b-icon-facebook>
                </div>
              </div>
            </b-card>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
export default {};
</script>
<style scoped>
.blog_list_section {
  padding: 120px 0;
}
.blog_image {
  width: 871px;
  height: 520px;
}
.blog_date_section {
  width: 60px;
  height: 60x;
  position: absolute;
  top: 24px;
  left: 24px;
  padding: 8px;
  background: #ff9f0d;
  border-radius: 6px;
}
.blog_date {
  font-family: "Inter";
  font-size: 18px;
}
.blog_month {
  font-family: "Inter";
  font-size: 16px;
}
.blog_calendar {
  color: #ff9f0d;
}
.calendar_section {
  margin-top: 16px;
}
.blog_calendar > span {
  font-family: "Inter";
  font-size: 16px;
  color: #4f4f4f;
}
.blog_title {
  font-family: "Helvetica";
  font-size: 24px;
  color: #333333;
  margin-top: 16px;
  margin-bottom: 28px;
}
.blog_desc_section {
  border-top: 1px solid #e2e2e2;
  padding-top: 24px;
  /*padding-bottom: 55px; */
  margin: 24px 300px 55px 0;
}

.blog_desc_section span,
.posted_desc {
  font-family: "Inter";
  font-size: 16px;
  color: #4f4f4f;
}
.btn_blog_read_more {
  background: #ffffff;
  border: 1px solid #ff9f0d;
  border-radius: 6px;
  color: #ff9f0d;
  font-family: "Helvetica";
  font-size: 16px;
  margin-top: 24px;
}
.btn_blog_read_more > span {
  color: #ff9f0d;
}
.product_search {
  border: 1px solid #e0e0e0;
}
.product_search input {
  outline: none;
  border: none;
  width: 100%;
  background: transparent;
  padding: 11px 0px 11px 20px;
}
.product_search div {
  cursor: pointer;
  background: #ff9f0d;
  width: 66px;
  height: 60px;
}
.blogger_name {
  font-family: "Helvetica";
  font-size: 20px;
  color: #333333;
  margin-top: 13px;
}
.blogger_job,
.blogger_desc,
.posted_date {
  font-family: "Inter";
  font-size: 16px;
  color: #828282;
}
.blogger_social_media {
  margin-top: 24px;
}
.card_title {
  font-family: "Inter";
  font-size: 20px;
  color: #333333;
}
.post_item {
  padding: 16px 0;
  border-bottom: 1px solid #e2e2e2;
}
.post_item img {
  width: 99px;
  height: 91.58px;
  border-radius: 6px;
}
.filtered_item img {
  width: 67px;
  height: 62px;
  border-radius: 6px;
}
.filtered_item_name,
.filtered_item_quantity {
  font-family: "Helvetica";
  font-size: 16px;
  color: #333333;
}
.popular_tags_section {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
}
.popular_tag {
  font-family: "Helvetica";
  font-size: 14px;
  color: #4f4f4f;
  border: 1px solid #e2e2e2;
  padding: 8px 27px;
}
.photo_gallery_section {
  display: grid;
  gap: 16px;
  grid-template-columns: auto auto auto;
}
.photo_gallery_section > div {
  width: 110px;
  height: 92px;
  position: relative;
  background: black;
  cursor: pointer;
}
.photo_gallery_section > div > img {
  height: inherit;
}
.photo_gallery_section > div:hover img {
  opacity: 0.3;
}
.photo_gallery_section > div:hover .eye_main {
  opacity: 1;
}

.eye_main {
  position: absolute;
  transition: 0.5s ease;
  opacity: 0;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  text-align: center;
  color: #ffffff;
}
.social_media_section div {
  background: #faf7f2;
  width: 52px;
  height: 46px;
  cursor: pointer;
}
.social_media_section > div:hover {
  background: #ff9f0d;
  color: #ffffff;
}

@media screen and (max-width: 480px) {
  .blog_list_section {
    padding: 32px 20px;
  }
  .blog_image {
    width: 334px;
    height: 200px;
  }
  .blog_title {
    font-family: "Helvetica";
    font-size: 24px;
    color: #333333;
    margin-top: 16px;
    margin-bottom: 20px;
  }
  .blog_desc_section {
    border-top: 1px solid #e2e2e2;
    padding-top: 24px;
    /*padding-bottom: 55px; */
    margin: 20px 0 32px 0;
  }

  .photo_gallery_section {
    display: grid;
    gap: 14px;
    grid-template-columns: auto auto auto;
  }
  .photo_gallery_section > div {
    width: 89px;
    height: 74px;
  }
  .card {
    padding: 0 !important;
  }
}
</style>