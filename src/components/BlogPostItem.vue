<template>
  <div class="blog_post_card">
    <img src="../assets/images/burger.png" alt="burger" style="width: 100%; height: auto;" />
    <div class="blog_post_info">
      <span class="d-block text-primary normal-text-regular">10 February 2022</span>
      <span
        class="d-block h5 text-light my-3"
      >Pellentesque Non Efficitur Mi Aliquam Convallis Mi Quis</span>
      <div class="d-flex align-items-center justify-content-between">
        <span class="d-block text-light normal-text-regular">Learn More</span>
        <span>
          <BIconHandThumbsUp class="text-light" />
          <BIconChatLeftDots class="mx-2 blog_post_chart_icon" />
          <BIconShare class="text-light" />
        </span>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.blog_post_card {
  border: 1px solid #ffffff;
}
.blog_post_info {
  padding: 30px 43px;
}
.blog_post_chart_icon {
  fill: #ff9f0d;
}
</style>