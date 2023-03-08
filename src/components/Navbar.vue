<template>
  <b-container fluid class="p-0" style="position: absolute; z-index: 900;">
    <b-row no-gutters align-h="center" :style="{background: navBarColor}">
      <b-col cols="10">
        <nav>
          <div class="d-flex justify-content-center">
            <img src="../assets/images/Foodtuck.png" alt />
          </div>
          <div class="navbar_section d-flex align-items-center justify-content-between">
            <input type="checkbox" name id="check" />
            <label for="check" class="checkbtn">
              <b-icon-justify-left
                icon="justify-left"
                variant="light"
                class="icon_justify_left"
                font-scale="1.5"
              ></b-icon-justify-left>
            </label>
            <ul
              class="navbar_items d-flex align-items-center justify-content-between fw-normal text-light"
            >
              <li class="x_icon_li">
                <label for="check" class="uncheckbtn">
                  <b-icon-x-lg variant="light" class="icon_justify_left"></b-icon-x-lg>
                </label>
              </li>
              <li>
                <router-link to="/home" class="active">Home</router-link>
              </li>
              <li>
                <router-link to="/menu">Menu</router-link>
              </li>
              <li>
                <router-link to="/blog">Blog</router-link>
              </li>
              <li>
                <router-link to="/pages">Pages</router-link>
              </li>
              <li>
                <router-link to="#" class="d-flex align-items-end gap-3 text-light">
                  <span class="d-block">About</span>
                  <b-icon-chevron-down class="d-block ml-2" font-scale="1.1"></b-icon-chevron-down>
                </router-link>
              </li>
              <li>
                <router-link to="#">Shop</router-link>
              </li>
              <li>
                <router-link to="#">Contact</router-link>
              </li>
            </ul>

            <div class="d-flex align-items-center icons_sections">
              <div class="navbar_input position-relative">
                <input type="text" class="text-light" placeholder="Search..." />
                <b-icon-search font-scale="1.5" variant="light"></b-icon-search>
              </div>
              <b-icon-search variant="light" font-scale="1.5" class="icon_search"></b-icon-search>
              <b-icon-person v-if="getToken()" variant="light" font-scale="2"></b-icon-person>
              <b-icon-bag variant="light" font-scale="1.5" class="icon_bag" @click="$router.push('/shopping-cart')"></b-icon-bag>
            </div>
          </div>
        </nav>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
import { useAuthStore } from '../store/authStore';
import { getToken } from '../utils';
export default {
  components: {},
  setup(){
    const authStore = useAuthStore();
    return {authStore}
  },
  computed: {
    navBarColor() {
      if (this.$route.path === "/food-app") {
        return "transparent";
      }
      return "#0D0D0D";
    }
  },
  methods: {
    getToken(){
      return Boolean(getToken());
    }
  }
};
</script>
<style scoped>
nav {
  padding-top: 30px;
  padding-bottom: 20px;
  font-family: "Inter", sans-serif;
}
.x_icon_li,
.icon_search,
.checkbtn {
  display: none !important;
}
.navbar_items {
  list-style: none;
  cursor: pointer;
}
.navbar_items > li {
  font-size: 16px;
  line-height: 24px;
  margin-right: 32px;
}
.navbar_items > li > a {
  text-decoration: none;
}
nav ul li a {
  color: white;
}
nav ul li a.active,nav ul li a:hover {
color: #ff9f0d !important;
}


.navbar_input > input {
  padding: 16px 26px;
  outline: none;
  border-radius: 27px;
  border: 1px solid #ff9f0d;
  background-color: transparent;
  width: 310px;
}
input::placeholder {
  color: #ffffff;
}
.navbar_input > svg {
  position: absolute;
  top: 17px;
  right: 20px;
}

#check {
  display: none;
}
.icons_sections {
  gap: 20px;
}

.icons_sections > svg {
  cursor: pointer;
}

@media screen and (max-width: 480px) {
  .x_icon_li,
  .icon_search,
  .checkbtn {
    display: block !important;
  }
  .navbar_section {
    margin-top: 20px !important;
  }
  .navbar_items {
    z-index: 100;
    display: none !important;
    background: rgba(13, 13, 13, 0.95) !important;
    width: 100%;
    height: 100vh;
  }
  .navbar_items > li:first-child {
    padding: 20px 24px;
  }
  .navbar_items > li {
    padding: 20px 42px;
  }
  .navbar_input {
    display: none !important;
  }

  #check:checked ~ .navbar_items {
    display: inline-block !important;
  }
  #check:checked ~ .checkbtn {
    display: none !important;
  }
  #check:checked ~ .icons_sections {
    display: none !important;
  }
}

@media screen and (max-width: 768px) {
  .x_icon_li,
  .icon_search,
  .checkbtn {
    display: block !important;
  }
  .navbar_section {
    margin-top: 20px !important;
  }
  .navbar_items {
    z-index: 100;
    display: none !important;
    /* display: inline-block !important; */
    background: rgba(13, 13, 13, 0.95);
    width: 100%;
    height: 100vh;
  }
  .navbar_items > li:first-child {
    padding: 20px 24px;
  }
  .navbar_items > li {
    padding: 20px 42px;
  }
  .navbar_input {
    display: none !important;
  }

  #check:checked ~ .navbar_items {
    display: inline-block !important;
  }
  #check:checked ~ .checkbtn {
    display: none !important;
  }
  #check:checked ~ .icons_sections {
    display: none !important;
  }
}
</style>