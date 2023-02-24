<template>
  <b-container fluid class="p-0">
    <b-row no-gutters align-h="center">
      <b-col cols="10" class="py-5">
        <b-row no-gutters class="d-flex align-items-center justify-content-between">
          <b-col cols="4">
            <img src="../assets/images/starter_menu_item.png" alt />
          </b-col>
          <b-col cols="8">
            <img src="../assets/images/Coffee.png" alt />
            <div class="text-left">
              <span class="font-weight-bold menu_type">Starter Menu</span>
            </div>
            <MenuItem v-for="item in 4" :key="item" />
          </b-col>
        </b-row>
        <b-row no-gutters class="d-flex align-items-center justify-content-between">
          <b-col cols="8">
            <img src="../assets/images/Coffee.png" alt />
            <div class="text-left">
              <span class="font-weight-bold menu_type">Starter Menu</span>
            </div>
            <MenuItem v-for="item in 4" :key="item" />
          </b-col>
          <b-col cols="4" class="menu_image_section">
            <img src="../assets/images/starter_menu_item.png" alt />
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
import MenuItem from "../components/MenuItem.vue";

export default { components: { MenuItem } };
</script>
<style scoped>
.menu_type {
  font-family: "Helvetica";
  font-size: 48px;
  color: #333333;
}
.menu_image_section {
  text-align: end !important;
}
</style>