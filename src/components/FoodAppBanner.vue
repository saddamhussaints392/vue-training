<template>
  <div class="containers">
    <div class="banner_main_section rows">
      <div class="text-center cols-12 cols-sm-12 cols-md-12 cols-lg-12 cols-xl-12 cols-xxl-12">
        <span class="h2 text-light d-block">{{mainPage}}</span>
        <div class="d-flex align-items-center justify-content-center banner_page_names">
          <span class="text-light large-text-regular">Menu</span>
          <b-icon-chevron-right class="text-light"></b-icon-chevron-right>
          <span class="large-text-regular text-primary">{{subPage}}</span>
        </div>
      </div>
    </div>
  </div>
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
.banner_page_names {
  gap: 10px;
}
@media screen and (max-width: 480px) {
  .banner_main_section {
  background-image: url("../assets/images/banner_bg.png");
  background-repeat: no-repeat;
  padding: 42px 0;
  background-position: bottom;
}
}
</style>