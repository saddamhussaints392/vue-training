<template>
    <b-row no-gutters class="clients_section">
      <b-col sm="6" mg="6" lg="3" cols="6" class="text-center" v-for="(client, i) in clients" :key="i">
        <img :src="getImageUrl(client.image)" alt class="client-image" />
        <span class="d-block text-light h5 mt-3">{{client.title}}</span>
        <span class="text-light h3 mt-3">{{ client.count}}</span>
      </b-col>
      <!-- <b-col sm="6" mg="6" lg="3" cols="6" class="text-center">
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
      </b-col> -->
    </b-row>
</template>
<script>
export default {
  name: "Client",
  setup(){
    const getImageUrl = name =>{
      return new URL(`../assets/images/${name}`, import.meta.url).href
    }
    return {getImageUrl};
  },
  data(){
    return {
      clients: [
        {
          image: "professional_chefs.png",
          title: "Professional Chefs",
          count: "420"
        },
        {
          image: "items_of_food.png",
          title: "Items Of Food",
          count: "320"
        },
        {
          image: "years_of_experience.png",
          title: "Years Of Experienced",
          count: "30+"
        },
        {
          image: "happy_customers.png",
          title: "Happy Customers",
          count: "220"
        }
      ]
    }
  }
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
  
}
.clients_section {
    padding: 112px 0;
}

@media screen and (max-width: 480px){
  .client-image {
    width: 62px;
    height: 62px;
  }
    .clients_section {
        padding: 37px !important;
    }
    .clients_section > div:nth-child(3), .clients_section > div:nth-child(4) {
      padding-top: 37px;
    }
    
}
</style>