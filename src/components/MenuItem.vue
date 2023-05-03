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
.menu_price_section {
  text-align: end !important;
}
@media screen and (max-width: 480px) {
  .menu_item_section {
  border-bottom: 1px dashed #e0e0e0;
  padding: 22px 0 10px 0;
}
}
@media screen and (max-width: 768px) {
  .menu_item_section {
  border-bottom: 1px dashed #e0e0e0;
  padding: 22px 0 10px 0;
}
}
</style>