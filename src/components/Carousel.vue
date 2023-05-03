<template>
  <b-container fluid>
    <b-row align-h="center" class="carousel_section" no-gutters>
      <b-col cols="12" sm="12" md="12" lg="10">
        <b-row no-gutters>
          <b-col col="12" class="text-left testimonials_col">
            <h2 class="testimonials_text fw-normal">Testimonials</h2>
            <span class="h2" :class="[from === 'about-us' ? 'text-dark' : 'text-light']">
              What our client are saying
              </span>
          </b-col>
        </b-row>
        <b-row align-h="center" class="carousel_main" no-gutters>
          <b-col cols="12" sm="12" md="12" lg="6" class="text-center">
            <div class="d-flex" v-for="(slide, i) in 4" :key="i" style="box-shadow: 0px 0px 80px rgba(205, 205, 205, 0.25);">
                <b-card class="rounded-0 p-5 border-0" v-if="i === currentIndex">
                <b-avatar src="https://placekitten.com/300/300" size="6rem" class="carousel_avatar"></b-avatar>
                <img src="../assets/images/Quotes.png" class="d-block m-auto" alt="">
                <span class="d-block my-4 medium-text-regular">{{i}}Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.</span>
                <b-form-rating id="rating-inline" class="border-0 star_rating" inline value="4"></b-form-rating>
                <h4 class="h5 text-grey-1">Alamin Hasan</h4>
                <span class="normal-text-regular text-grey-3">Food Specialist</span>
              </b-card>
            </div>
          </b-col>
        </b-row>
        <b-row align-h="center" class="mt-5" no-gutters>
          <b-col cols="6" class="text-center">
            <div class="d-flex align-items-center justify-content-center carousel_dots-section">
                <span class="carousel_dots d-block"  v-for="(item, i) in 4" :key="i" :class="{'active': i === currentIndex}" @click="cauroselHandler(i)"></span>
            </div>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
export default {
  props:["from"],
    data(){
        return {
            currentIndex: 0
        }
    },
    methods: {
        cauroselHandler(index){
            this.currentIndex = index
        }
    }
};
</script>
<style scoped>
.carousel_section {
  padding: 123px 0;
  
}
.carousel_main {
  margin-top: 55px;
}
.star_rating {
  color: #ff9f0d;
}
.carousel_dots {
  width: 15px;
  height: 16px;
  background: rgba(255, 159, 13, 0.3);
  border-radius: 50%;
  cursor: pointer;
}
.carousel_dots-section {
    gap: 7px;
}
.carousel_dots.active {
    background: #ff9f0d;
}
.testimonials_wh {
    color: #ff9f0d;
}
.testimonials_text {
  line-height: 40px;
  color: #ff9f0d;
  font-family: "Great Vibes", cursive;
}
.testimonials_title {
  font-family: "Helvetica";
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
}
.carousel_avatar {
  margin-top: -160px;

}

@media screen and (max-width: 480px) {
    .carousel_section {
  padding: 62px 0;
}
    .testimonials_title {
  font-family: "Helvetica";
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
}
    .testimonials_col{
        text-align: center !important;
    }
}
</style>