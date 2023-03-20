<template>
  <div>
    <div class="d-flex align-items-start mb-3" style="gap: 10px;">
      <div>
        <img src="../assets/images/about_us_pic2.png" alt class="review_avatar" />
      </div>
      <div>
        <div class="d-flex align-items-center" style="gap: 35px;">
          <div class="font-weight-bold reviewer_name">MD Sojib Khan</div>
          <div style="cursor:pointer;">
            <b-icon-reply-all-fill class="mr-2"></b-icon-reply-all-fill>
            <span>Reply</span>
          </div>
        </div>
        <span class="my-1 d-block">
          <b-icon-calendar color="#FF9F0D" class="mr-2"></b-icon-calendar>
          <span class="review_date">June 22, 2020</span>
        </span>
        <p
          class="review_text mb-2"
        >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc orci tellus, fermentum nec imperdiet sed, pulvinar et sem, Fusce hendrerit faucibus sollicitudin.</p>
        <div>
          <span class="replies_text" style="cursor:pointer;" @click="ToggleReviewReplay">Replies</span>
        </div>
      </div>
    </div>
    <transition name="slide-fade">
      <div
        v-if="reviewReplay"
        class="d-flex align-items-start mb-3 replay_review"
        style="gap: 10px;"
      >
        <div>
          <img src="../assets/images/about_us_pic2.png" alt class="review_avatar" />
        </div>
        <div>
          <div class="d-flex align-items-center" style="gap: 35px;">
            <div class="font-weight-bold reviewer_name">MD Sojib Khan</div>
            <div style="cursor:pointer; color: #FF9F0D;">
              <b-icon-reply-all-fill class="mr-2"></b-icon-reply-all-fill>
              <span>Reply</span>
            </div>
          </div>
          <span class="my-1 d-block">
            <b-icon-calendar color="#FF9F0D" class="mr-2"></b-icon-calendar>
            <span class="review_date">June 22, 2020</span>
          </span>
          <p
            class="review_text mb-2"
          >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc orci tellus, fermentum nec imperdiet sed, pulvinar et sem, Fusce hendrerit faucibus sollicitudin.</p>
          <!-- <div>
          <span class="replies_text" style="cursor:pointer;">Replies</span>
          </div>-->
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
export default {
  name: "Review",
  data() {
    return {
      reviewReplay: false
    };
  },
  methods: {
    ToggleReviewReplay() {
      this.reviewReplay = !this.reviewReplay;
    }
  }
};
</script>
<style scoped>
.review_avatar {
  height: 72px;
  width: 72px;
  border-radius: 50%;
}
.reviewer_name {
  font-family: "Inter";
  font-size: 16px;
  color: #333333;
}
.review_date {
  font-family: "Helvetica";
  font-size: 14px;
  color: #828282;
}
.review_text,
.replies_text {
  font-family: "Helvetica";
  font-size: 16px;
  line-height: 24px;
  color: #4f4f4f;
}
.replay_review {
  padding-left: 70px;
  margin: 36px 0;
}
.slide-fade-enter-active {
  transition: all 0.4s ease-in;
}

.slide-fade-leave-active {
  transition: all 0.5s ease-out;
}

.slide-fade-enter-from {
  transform: translateY(-20px);
  opacity: 0;
}
.slide-fade-leave-to {
  transform: translateY(-20px);
  opacity: 1;
}
</style>