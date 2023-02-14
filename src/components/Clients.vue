<template>
  <b-container fluid class="clients_section p-0">
    <b-row no-gutters>
      <b-col sm="6" mg="6" lg="3" cols="6" class="text-center">
        <img src="../assets/images/professional_chefs.png" alt />
        <span class="d-block text-light font-weight-bold mt-3">Professional Chefs</span>
        <h1 class="text-light font-weight-bold mt-3">420</h1>
      </b-col>
      <b-col sm="6" mg="6" lg="3" cols="6" class="text-center">
        <img src="../assets/images/items_of_food.png" alt />
        <span class="d-block text-light font-weight-bold mt-3">Items Of Food</span>
        <h1 class="text-light font-weight-bold mt-3">320</h1>
      </b-col>
      <b-col sm="6" mg="6" lg="3" cols="6" class="text-center">
        <img src="../assets/images/years_of_experience.png" alt />
        <span class="d-block text-light font-weight-bold mt-3">Years Of Experienced</span>
        <h1 class="text-light font-weight-bold mt-3">30+</h1>
      </b-col>
      <b-col sm="6" mg="6" lg="3" cols="6" class="text-center">
        <img src="../assets/images/happy_customers.png" alt />
        <span class="d-block text-light font-weight-bold mt-3">Happy Customers</span>
        <h1 class="text-light font-weight-bold mt-3">220</h1>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
export default {
  name: "Client"
};
</script>
<style scoped>
.clients_section {
  background: linear-gradient(
      0deg,
      rgba(13, 13, 13, 0.85),
      rgba(13, 13, 13, 0.85)
    ),
    url("../assets/images/clients_bg.png");
  background-repeat: no-repeat;
  background-position: center center;
  margin-top: 120px;
  
}
.clients_section > div {
    padding: 112px 0;
}

@media screen and (max-width: 480px){
    .clients_section > div {
        padding: 37px !important;
    }
    .clients_section {
      margin-top: 62px;
    }
}
</style>