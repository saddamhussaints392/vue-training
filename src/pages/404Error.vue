<template>
  <b-container fluid class="p-0">
    <b-row no-gutters class="text-center error_section">
      <b-col cols="11" sm="12" md="12" lg="11" xl="11" xxl="11">
        <span class="h2 text-primary">404</span>
        <span class="h4 my-2">Oops! Look likes something going wrong</span>
        <span class="medium-text-regular text-grey-2 mb-3 d-block">
          Page Cannot be found! we’ll have it figured out in no time.
          Menwhile, cheek out these fresh ideas:
        </span>
        <button class="medium-text-bold m-auto border-radius-6 bg-primary">Go to home</button>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
export default {};
</script>
<style scoped>
.error_section {
    padding: 120px 0;
}
@media screen and (max-width: 480px){
    .error_section {
    padding: 62px 20px;
}
}
</style>