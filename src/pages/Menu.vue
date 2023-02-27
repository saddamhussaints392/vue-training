<template>
  <b-container fluid class="p-0">
    <b-row no-gutters align-h="center"  class="menu_items_row">
      <b-col cols="12" sm="12" md="12" lg="10">
        <b-row no-gutters class="d-flex align-items-center justify-content-between">
          <b-col cols="12" sm="12" md="12" lg="4">
            <img
              src="../assets/images/starter_menu_item.png"
              alt
              class="menu_item_img"
            />
          </b-col>
          <b-col cols="12" sm="12" md="12" lg="8" class="menu_list_name">
            <img src="../assets/images/Coffee.png" alt />
            <div class="text-left">
              <span class="font-weight-bold menu_type">Starter Menu</span>
            </div>
            <MenuItem v-for="item in 4" :key="item" />
          </b-col>
        </b-row>
        <b-row no-gutters class="d-flex align-items-center justify-content-between">
          <b-col cols="12" sm="12" md="12" lg="8" class="menu_list_name">
            <img src="../assets/images/Coffee.png" alt />
            <div class="text-left">
              <span class="font-weight-bold menu_type">Starter Menu</span>
            </div>
            <MenuItem v-for="item in 4" :key="item" />
          </b-col>
          <b-col cols="12" sm="12" md="12" lg="4" class="menu_image_section">
            <img
              src="../assets/images/starter_menu_item.png"
              alt
              class="menu_item_img"
            />
          </b-col>
        </b-row>
      </b-col>
    </b-row>
    <Clients />
    <b-row no-gutters align-h="center" class="menu_items_row">
      <b-col cols="12" sm="12" md="12" lg="10" >
        <b-row no-gutters class="d-flex align-items-center justify-content-between">
          <b-col cols="12" sm="12" md="12" lg="4">
            <img
              src="../assets/images/starter_menu_item.png"
              alt
              class="menu_item_img"
            />
          </b-col>
          <b-col cols="12" sm="12" md="12" lg="8" class="menu_list_name">
            <img src="../assets/images/Coffee.png" alt />
            <div class="text-left">
              <span class="font-weight-bold menu_type">Starter Menu</span>
            </div>
            <MenuItem v-for="item in 4" :key="item" />
          </b-col>
        </b-row>
        <b-row no-gutters class="d-flex align-items-center justify-content-between">
          <b-col cols="12" sm="12" md="12" lg="8" class="menu_list_name">
            <img src="../assets/images/Coffee.png" alt />
            <div class="text-left">
              <span class="font-weight-bold menu_type">Starter Menu</span>
            </div>
            <MenuItem v-for="item in 4" :key="item" />
          </b-col>
          <b-col cols="12" sm="12" md="12" lg="4" class="menu_image_section">
            <img
              src="../assets/images/starter_menu_item.png"
              alt
              class="menu_item_img"
            />
          </b-col>
        </b-row>
      </b-col>
    </b-row>
    <b-row no-gutters align-h="center" class="clients_partners_section">
      <b-col cols="12" sm="12" md="12" lg="10">
        <b-row no-gutters>
          <b-col class="text-center">
            <span class="d-block partners_clients_text">Partners & Clients</span>
          </b-col>
        </b-row>
        <b-row no-gutters>
          <b-col class="text-center">
            <span class="partners_clients_title">We work with the best pepole</span>
          </b-col>
        </b-row>
        <b-row class="pt-5 px-5 d-flex align-items-center" no-gutters>
          <b-col cols="4" sm="4" md="4" lg="2">
            <img src="../assets/images/partner_1.png" alt style="width: 100%; height: auto;" />
          </b-col>
          <b-col cols="4" sm="4" md="4" lg="2">
            <img src="../assets/images/partner_2.png" alt style="width: 100%; height: auto;" />
          </b-col>
          <b-col cols="4" sm="4" md="4" lg="2">
            <img src="../assets/images/partner_3.png" alt style="width: 100%; height: auto;" />
          </b-col>
          <b-col cols="4" sm="4" md="4" lg="2">
            <img src="../assets/images/partner_4.png" alt style="width: 100%; height: auto;" />
          </b-col>
          <b-col cols="4" sm="4" md="4" lg="2">
            <img src="../assets/images/partner_5.png" alt style="width: 100%; height: auto;" />
          </b-col>
          <b-col cols="4" sm="4" md="4" lg="2">
            <img src="../assets/images/partner_6.png" alt style="width: 100%; height: auto;" />
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
import MenuItem from "../components/MenuItem.vue";
import Clients from "../components/Clients.vue";

export default { components: { MenuItem, Clients } };
</script>
<style scoped>
.menu_items_row {
  padding-top: 122px;
  padding-bottom: 122px;
}
.menu_items_row >div> div:nth-child(2) {
  margin-top: 120px;
}
.menu_type {
  font-family: "Helvetica";
  font-size: 48px;
  color: #333333;
}
.menu_image_section {
  text-align: end !important;
}
.partners_clients_text {
  font-family: "Inter", sans-serif;
  font-weight: 400;
  font-size: 18px;
  color: #333333;
}
.partners_clients_title {
  font-family: "Helvetica";
  font-weight: 700;
  font-size: 48px;
  color: #333333;
}
.clients_partners_section {
  padding-bottom: 122px;
}
.menu_item_img {
  width: 80%;
  height: auto;
}

@media screen and (max-width: 480px) {
  .menu_type {
  font-family: "Helvetica";
  font-size: 40px;
  color: #333333;
}

.partners_clients_title {
  font-family: "Helvetica";
  font-weight: 700;
  font-size: 40px;
  color: #333333;
}
  .menu_items_row {
  padding-top: 122px;
  padding-bottom: 122px;
}
.menu_items_row > div > div:nth-child(2) {
  margin-top: 120px;
}
  .menu_item_img {
  width: 100%;
  height: auto;
}
.menu_list_name {
  margin-top: 32px;
}
}

@media screen and (max-width: 768px) {
  .menu_items_row {
  padding: 32px 20px;
}
.menu_items_row > div > div:nth-child(2) {
  margin-top: 42px;
  flex-direction: column-reverse;
}
  .menu_item_img {
  width: 100%;
  height: auto;
}
.menu_list_name {
  margin-top: 32px;
}
}
</style>