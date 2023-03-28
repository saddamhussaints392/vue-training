<template>
    <div id="my-table">
      <div class="position-relative grid_images_section">
      <img :src="thumbnail" alt="items"  />
      <span class="font-weight-bold d-block item_name">{{ title }}</span>
      <span class="item_price mr-2">${{originalPrice}}</span>
      <span class="item_discount text-secondary" v-if="discountPrice">${{ discountPrice }}</span>
      <div class="icons_row align-items-center justify-content-between">
        <div class="icons_section d-flex align-items-center justify-content-center">
          <b-icon-bezier2></b-icon-bezier2>
        </div>
        <div class="icons_section d-flex align-items-center justify-content-center mx-3">
          <b-icon-bag></b-icon-bag>
        </div>
        <div class="icons_section d-flex align-items-center justify-content-center">
          <b-icon-heart></b-icon-heart>
        </div>
      </div>
    </div>
    </div>
</template>
<script>
export default {
  props:["thumbnail", "title", "originalPrice", "discountPrice"],
  name: "FoodProductItem",
  setup(){
    // getProducts(){
    //   return product = new 
    // }
  }
};
</script>
<style scoped>
.grid_images_section:hover > .icons_row {
  display: flex;
}
.grid_images_section > img {
  width: 312px;
  height: 267px;
  object-fit: cover;
}
.item_name {
  font-family: "Inter", sans-serif;
  font-weight: 700;
  font-size: 18px;
  color: #333333;
  margin-top: 8px;
  margin-bottom: 4px;
}
.item_price {
  font-family: "Inter", sans-serif;
  font-size: 16px;
  color: #ff9f0d;
}
.item_discount {
  font-family: "Inter", sans-serif;
  font-size: 16px;
  color: #828282;
}
.icons_row {
  display: none;
  position: absolute;
  top: 120px;
  right: 75px;
}

.icons_row > div:nth-child(2) {
  padding: 0 12px;
}
.icons_section:hover {
  cursor: pointer;
  width: 41px;
  height: 34px;
  background: #ff9f0d;
  border-radius: 2px;
  color: white;
}
.icons_section {
  cursor: pointer;
  width: 41px;
  height: 34px;
  background: white;
  border-radius: 2px;
  color: #ff9f0d;
}
@media screen and (max-width: 480px) {
  .grid_images_section > img {
    width: 158px;
    height: 135px;
  }
  .item_name {
    font-size: 14px;
  }
  .item_price,
  .item_discount {
    font-size: 12px;
  }
  .icons_row {
    position: absolute;
    top: 30%;
    right: 10%;
  }
  .icons_section {
    cursor: pointer;
    width: 32px;
    height: 32px;
    background: white;
    border-radius: 2px;
    color: #ff9f0d;
  }
}
</style>