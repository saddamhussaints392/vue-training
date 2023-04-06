<template>
  <b-container fluid class="p-0">
    <b-row class="menu_item_section" no-gutters >
      <b-col cols="8">
        <span class="d-block h5 text-grey-1">Alder Grilled Chinook Salmon</span>
        <span class="d-block normal-text-regular text-grey-2">Toasted French bread topped with romano, cheddar</span>
        <span class="d-block normal-text-regular text-grey-3">560 CAL</span>
      </b-col>
      <b-col cols="4" class="menu_price_section">
        <span class="d-block h5 text-primary">32$</span>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
export default {};
</script>
<style scoped>
.menu_item_section {
  border-bottom: 1px dashed #e0e0e0;
  padding: 24px 0 16px 0;
}
/* .menu_title,
.menu_price {
  font-family: "Helvetica";
  font-size: 24px;
  color: #333333;
} */
/* .menu_subtitle,
.menu_calories {
  font-family: "Helvetica";
  font-size: 16px;
  color: #4f4f4f;
} */
/* .menu_calories {
  color: #828282;
} */
.menu_price_section {
  text-align: end !important;
}
/* .menu_price {
  color: #ff9f0d;
} */

@media screen and (max-width: 480px) {
  .menu_item_section {
  border-bottom: 1px dashed #e0e0e0;
  padding: 22px 0 10px 0;
}
/* .menu_title,
.menu_price {
  font-family: "Helvetica";
  font-size: 18px;
  color: #333333;
} */
/* .menu_subtitle,
.menu_calories {
  font-family: "Helvetica";
  font-size: 14px;
  color: #4f4f4f;
} */
/* .menu_price {
  color: #ff9f0d;
} */
}
@media screen and (max-width: 768px) {
  .menu_item_section {
  border-bottom: 1px dashed #e0e0e0;
  padding: 22px 0 10px 0;
}
/* .menu_title,
.menu_price {
  font-family: "Helvetica";
  font-size: 18px;
  color: #333333;
} */
/* .menu_subtitle,
.menu_calories {
  font-family: "Helvetica";
  font-size: 14px;
  color: #4f4f4f;
} */
/* .menu_price {
  color: #ff9f0d;
} */
}
</style>