<template>
  <b-container fluid class="p-0">
    <b-row no-gutters class="banner_main_section">
      <b-col cols="12" sm="12" md="12" lg="12" class="text-center">
        <span class="h2 text-light d-block">{{mainPage}}</span>
        <div class="d-flex align-items-center justify-content-center banner_page_names">
          <span class="text-light large-text-regular">Menu</span>
          <b-icon-chevron-right class="text-light"></b-icon-chevron-right>
          <span class="large-text-regular text-primary">{{subPage}}</span>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
export default {
  props:["mainPage", "middlePage", "subPage"]
};
</script>
<style scoped>
.banner_main_section {
  background-image: url("../assets/images/banner_bg.png");
  background-repeat: no-repeat;
  padding: 108px 0;
  background-position: bottom;
}
/* .banner_title {
  font-family: "Helvetica";
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
} */
.banner_page_names {
  gap: 10px;
}
/* .main_page_title,
.page_name {
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
} */
/* .page_name {
  color: #ff9f0d;
} */

@media screen and (max-width: 480px) {
  .banner_main_section {
  background-image: url("../assets/images/banner_bg.png");
  background-repeat: no-repeat;
  padding: 42px 0;
  background-position: bottom;
}
}
</style>