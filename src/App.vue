


<template>
  <b-container fluid class="p-0">
    <Navbar />
    <b-row no-gutters v-if="isBannerAvailable">
      <b-col cols="12">
        <FoodAppBanner :mainPage="$route.name.pageName" middlePage="Home" :subPage="$route.name.routeName" />
      </b-col>
    </b-row>
    <b-row no-gutters>
      <router-view></router-view>
    </b-row>
    <b-row no-gutters>
      <b-col cols="12">
        <Footer />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import Footer from "./components/Footer.vue";
import Navbar from "./components/Navbar.vue";
import FoodAppBanner from "./components/FoodAppBanner.vue";
export default {
  components: {
    Navbar,
    Footer,
    FoodAppBanner
  },
  computed: {
   
    isBannerAvailable() {
      if (this.$route.path === "/food-app") {
        return false;
      }
      return true;
    }
  }
};
</script>
<style>
body {
  overflow-y: scroll;
  overflow-x: hidden;
}
</style>