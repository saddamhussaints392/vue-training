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
            <BlogSidebar/>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
import BlogSidebar from '../components/BlogSidebar.vue';

export default { components: { BlogSidebar } };
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

 
}
</style>