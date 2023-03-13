<template>
  <b-container class="p-0" fluid>
    <b-row no-gutters align-h="center" class="our_shop_section">
      <b-col cols="12" sm="12" md="12" lg="11" xl="11">
        <b-row no-gutters align-h="center" class="mb-4">
          <b-col cols="10" class="d-flex sort_show_col" style="gap: 33px;">
            <div>
              <span class="mr-2 sort_by_text">Sort By :</span>
              <select name id class="sort_select">
                <option value="Newest">Newest</option>
                <option value="Oldest">Oldest</option>
                <option value="Newest">Newest</option>
                <option value="Newest">Newest</option>
              </select>
            </div>
            <div>
              <span class="mr-2 sort_by_text">Show :</span>
              <select name id class="sort_select">
                <option value="Newest">Default</option>
                <option value="Oldest">Oldest</option>
                <option value="Newest">Newest</option>
                <option value="Newest">Newest</option>
              </select>
            </div>
          </b-col>
          <b-col
            cols="12"
            sm="12"
            md="12"
            lg="10"
            xl="10"
            class="d-flex align-items-center justify-content-end filter_col"
          >
            <div class="btn_filter">
              <span class="mr-4">Filter</span>
              <b-icon-filter></b-icon-filter>
            </div>
          </b-col>
        </b-row>
        <b-row no-gutters align-h="center" class="position-relative">
          <b-col cols="12" sm="12" md="12" lg="8" xl="8">
            <b-row no-gutters align-h="center">
              <b-col cols="12">
                <div style class="items_grid_section">
                  <div v-for="(item, i) in 6" :key="i" class="position-relative">
                    <img
                      src="../assets/images/ourshop_img.png"
                      alt
                      style="width:100%; height: auto;"
                    />
                    <span class="font-weight-bold d-block item_name">Fresh Lime</span>
                    <span class="item_price mr-2">$38.00</span>
                    <s class="item_discount text-secondary">$45.00</s>
                    <div class="icons_row d-flex align-items-center justify-content-between">
                      <div class="icons_section d-flex align-items-center justify-content-center">
                        <b-icon-heart></b-icon-heart>
                      </div>
                      <div
                        class="icons_section d-flex align-items-center justify-content-center mx-3"
                      >
                        <b-icon-bag></b-icon-bag>
                      </div>
                      <div class="icons_section d-flex align-items-center justify-content-center">
                        <b-icon-heart></b-icon-heart>
                      </div>
                    </div>
                  </div>
                </div>
              </b-col>
            </b-row>
            <b-row no-gutters class="pagination_section">
              <b-col cols="12">
                <b-pagination
                  v-model="currentPage"
                  class="ml-3"
                  align="center"
                  first-number="false"
                  prev-text="«"
                  next-text="»"
                  last-number="false"
                  :total-rows="rows"
                ></b-pagination>
              </b-col>
            </b-row>
          </b-col>

          <b-col cols="12" sm="12" md="12" lg="2" xl="2" class="product_search_section ml-4">
            <b-card>
              <div class="mobile_view_sorting">
                <div>
                  <button class="btn_close_modal ml-auto">Close</button>
                </div>
                <div class="d-flex align-items-center justify-content-between my-3">
                  <div>
                    <span class="mr-2 sort_by_text">Sort By :</span>
                    <select name id class="sort_select">
                      <option value="Newest">Newest</option>
                      <option value="Oldest">Oldest</option>
                      <option value="Newest">Newest</option>
                      <option value="Newest">Newest</option>
                    </select>
                  </div>
                  <div>
                    <span class="mr-2 sort_by_text">Show :</span>
                    <select name id class="sort_select">
                      <option value="Newest">Default</option>
                      <option value="Oldest">Oldest</option>
                      <option value="Newest">Newest</option>
                      <option value="Newest">Newest</option>
                    </select>
                  </div>
                </div>
              </div>
              <div class="product_search d-flex align-items-center">
                <input type="text" placeholder="Search Product" class="d-block" />
                <div class="d-flex align-items-center justify-content-center text-light">
                  <b-icon-search font-scale="1.5"></b-icon-search>
                </div>
              </div>
              <div class="categories_section">
                <span class="d-block font-weight-bold category">Category</span>
                <b-form-checkbox value="orange" class="category_item rounded-0">Sandwiches</b-form-checkbox>
                <b-form-checkbox value="orange" class="category_item rounded-0">Burger</b-form-checkbox>
                <b-form-checkbox value="orange" class="category_item rounded-0">Chicken Chup</b-form-checkbox>
                <b-form-checkbox value="orange" class="category_item rounded-0">Drink</b-form-checkbox>
                <b-form-checkbox value="orange" class="category_item rounded-0">Pizza</b-form-checkbox>
                <b-form-checkbox value="orange" class="category_item rounded-0">Thi</b-form-checkbox>
                <b-form-checkbox value="orange" class="category_item rounded-0">Non Veg</b-form-checkbox>
                <b-form-checkbox value="orange" class="category_item rounded-0">Uncategorized</b-form-checkbox>
              </div>
              <div class="category_img_section">
                <img
                  src="../assets/images/category_section_image.png"
                  alt
                  style="width:100%; height: auto;"
                />
                <div class="item_titles">
                  <span class="d-block font-weight-bold perfect_taste">Perfect Taste</span>
                  <span class="d-block font-weight-bold classic_restaurant">Classic Restaurant</span>
                  <span class="d-block font-weight-bold restaurant_item_price mt-2">45.00$</span>
                </div>
                <div class="d-flex align-items-center shop_now_section">
                  <span class="d-block mr-2">Shop Now</span>
                  <b-icon-arrow-right-circle class="d-block"></b-icon-arrow-right-circle>
                </div>
              </div>
              <div class="filter_by_price_section">
                <span class="d-block filter_by_price font-weight-bold">Filter By Price</span>
                <!-- <input v-model="currentValue" type="range" :min="min" :max="max" class="slider" /> -->
                <div class="middle my-3">
                    <div class="multi-range-slider">
                    <input type="range" ref="input_left" id="input-left" step="80" min="10" max="8000" value="25" @input="setLeftValue">
                    <input type="range" ref="input_right" id="input-right" min="0" step="80" max="8000" value="75" @input="setRightValue">
                    <div class="slider">
                        <div class="track" ref="track"></div>
                        <div class="range" ref="range"></div>
                        <div class="thumb left" ref="thumb_left"></div>
                        <div class="thumb right" ref="thumb_right"></div>
                    </div>
                </div>
                </div>
                <div class="d-flex align-items-center justify-content-between">
                  <span class="d-block filter_range">From $<span ref="lowest_price">{{ lowestPrice }}</span> to $<span class="highest_price">{{highestPrice}}</span></span>
                  <span class="d-block filter_text">Filter</span>
                </div>
              </div>
              <div class="latest_products_section">
                <span class="d-block font-weight-bold latest_products">Latest Products</span>
                <div class="d-flex latest_products_item" v-for="(items,i) in 4" :key="i">
                  <img
                    src="../assets/images/latest_product_img.png"
                    alt
                    class="d-block"
                    style="width:100%; height: auto;"
                  />
                  <div class="ml-2">
                    <span class="product_item_name d-block">Pizza</span>
                    <b-form-rating
                      no-border
                      class="p-0 d-block"
                      style="height: 0px !important;"
                      color="#FF9F0D"
                      inline
                      value="4"
                    ></b-form-rating>
                    <span class="product_item_price d-block">$35.00</span>
                  </div>
                </div>
              </div>
              <div class="product_tags_section">
                <span class="d-block product_tags font-weight-bold">Product Tags</span>
                <div class="tags">
                  <span class="d-block tag">Services</span>
                  <span class="d-block tag">Our Menu</span>
                  <span class="d-block tag">Pizza</span>
                  <span class="d-block tag">Cupcake</span>
                  <span class="d-block tag">Burger</span>
                  <span class="d-block tag">Cookies</span>
                  <span class="d-block tag">Our Shop</span>
                  <span class="d-block tag">Tandoori Chicken</span>
                </div>
              </div>
            </b-card>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
export default {
  name: "OurShop",
  data() {
    return {
      rows: 60,
      currentPage: 1,
      currentValue: this.value,
      lowestPrice: 0,
      highestPrice: 8000
    //   min: 0,
    //   max: 8000
    };
  },
  methods: {
    setLeftValue(){
        var min = parseInt(this.$refs["input_left"].min);
        var max = parseInt(this.$refs["input_left"].max);
        this.$refs["input_left"].value = Math.min(parseInt(this.$refs["input_left"].value), parseInt(this.$refs["input_right"].value)-1);
        var percent = ((this.$refs["input_left"].value - min) / (max - min)) * 100;
        this.$refs["thumb_left"].style.left = percent + "%";
        this.$refs["range"].style.left = percent + "%";
        console.log(percent*80);
        this.lowestPrice = parseInt(percent*80);
        
    },
    setRightValue(){
        var min = parseInt(this.$refs["input_right"].min);
        var max = parseInt(this.$refs["input_right"].max);
        this.$refs["input_right"].value = Math.max(parseInt(this.$refs["input_right"].value), parseInt(this.$refs["input_left"].value)-1);
        var percent = ((this.$refs["input_right"].value - min) / (max - min)) * 100;
        this.$refs["thumb_right"].style.right =(100 - percent) + "%";
        this.$refs["range"].style.right = (100 - percent) + "%";
        console.log(percent*80);
        this.highestPrice = parseInt(percent*80);
    }
  }
};
</script>
<style scoped>
.middle {
    position: relative;
    width: 100%;

}
.slider {
    position: relative;
    z-index: 1;
    height: 10px;
    margin: 0 15px;
}
.slider > .track {
    position: absolute;
    z-index: 1;
    border-radius: 5px;
    right: 0;
    left: 0;
    top: 0;
    bottom: 0;
    background: rgb(240, 240, 240);
}

.slider > .range {
    position: absolute;
    z-index: 2;
    left: 0%;
    right: 0%;
    top: 0;
    bottom: 0;
    border-radius: 5px;
    background: #ff9f0d;
}

.slider > .thumb {
    position: absolute;
    z-index: 3;
    height: 15px;
    width: 15px;
    background: #ff9f0d;
    border-radius: 50%;
    border: 3px solid white;
}
.slider > .thumb.left {
    left: 0%;
    transform: translate(-12px ,-2px);
}
.slider > .thumb.right {
    right: 0%;
    transform: translate(12px ,-2px);
}
input[type=range] {
    position: absolute;
    pointer-events: none;
    -webkit-appearance: none;
    z-index: 2;
    width: 100%;
    height: 10px;
    opacity: 0;
}

input[type=range]::-webkit-slider-thumb {
    pointer-events: all;
    height: 15px;
    width: 15px;
    border-radius: 0;
    border: none;
    background: red;
    -webkit-appearance: none;
}


.our_shop_section {
  padding: 120px 0;
}
.sort_by_text {
  font-family: "Inter";
  font-size: 20px;
  color: #333333;
}
select {
  outline: none;
  padding: 10px 18px;
  width: 236px;
  height: 46px;
  border: 1px solid #e0e0e0;
  border-radius: 6px;
  font-family: "Inter";
  font-size: 18px;
  color: #bdbdbd;
}
.items_grid_section {
  display: grid;
  grid-template-columns: auto auto auto;
  gap: 24px;
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
.icons_row {
  position: absolute;
  top: 40%;
  right: 25%;
}
.icons_row > div:nth-child(2) {
  padding: 0 12px;
}
.product_search input {
  outline: none;
  border: none;
  background: rgba(255, 159, 13, 0.1);
  padding: 11px 0px 11px 20px;
}
.product_search div {
  cursor: pointer;
  background: #ff9f0d;
  width: 46px;
  height: 46px;
}
.categories_section,
.filter_by_price_section,
.latest_products_section,
.latest_products_item,
.product_tags_section {
  margin-top: 24px;
}
.category,
.filter_by_price,
.latest_products,
.product_tags {
  font-family: "Helvetica";
  font-size: 20px;
  color: #333333;
}

.category_item {
  margin-top: 24px;
  font-family: "Helvetica";
  font-size: 18px;
}
.category_img_section {
  margin-top: 24px;
  position: relative;
}
.item_titles {
  position: absolute;
  top: 29px;
  left: 23px;
}
.shop_now_section {
  cursor: pointer;
  position: absolute;
  bottom: 31px;
  left: 23px;
  color: white;
}
.perfect_taste,
.restaurant_item_price {
  font-family: "Inter";
  font-size: 16px;
  color: white;
}
.restaurant_item_price {
  color: #ff9f0d;
}
.classic_restaurant {
  font-family: "Helvetica";
  font-size: 20px;
  color: white;
}
.product_item_name {
  font-family: "Helvetica";
  font-size: 16px;
  color: #4f4f4f;
}
.product_item_price {
  font-family: "Helvetica";
  font-size: 14px;
  color: #4f4f4f;
}
.product_tags_section > .tags {
  display: flex;
  flex-wrap: wrap;
}
.tags > .tag {
  cursor: pointer;
  font-family: "Inter";
  font-size: 16px;
  color: #4f4f4f;
  border-bottom: 1px solid #4f4f4f;
  margin-right: 10px;
}
.tags > .tag:hover {
  cursor: pointer;
  font-family: "Inter";
  font-size: 16px;
  color: #ff9f0d;
  border-bottom: 1px solid #ff9f0d;
  margin-right: 10px;
}
.pagination > .page-item {
  margin-right: 16px !important;
}
.pagination_section {
  margin-top: 58px;
}
.filter_col {
  display: none !important;
}
.filter_range,
.filter_text {
  font-family: "Inter";
  font-size: 16px;
  color: #1e1e1e;
}

.filter_text {
  color: #0d0d0d;
}
.btn_filter {
  background: none;
  font-family: "Inter";
  font-size: 14px;
  color: #333333;
  border: 1px solid #e0e0e0;
  border-radius: 6px;
  padding: 12px;
}
.mobile_view_sorting {
  display: none;
}

@media screen and (max-width: 480px) {
  .our_shop_section {
    padding: 20px 20px;
  }
  .sort_show_col {
    display: none !important;
  }
  .filter_col {
    display: flex !important;
  }
  .product_search_section {
    position: absolute;
    z-index: 100;
    margin-left: 0 !important;
  }
  .items_grid_section {
    display: grid;
    grid-template-columns: auto auto;
    gap: 19px;
  }
  .item_name {
    font-size: 14px;
  }
  .item_price,
  .item_discount {
    font-size: 12px;
  }
  .icons_section {
    cursor: pointer;
    width: 32px;
    height: 32px;
    background: white;
    border-radius: 2px;
    color: #ff9f0d;
  }

  .icons_row {
    position: absolute;
    top: 30%;
    right: 10%;
  }
  .pagination_section {
    margin-top: 20px;
  }
  .mobile_view_sorting {
    display: block !important;
  }
  .btn_close_modal {
    background: none !important;
    font-family: "Inter";
    font-size: 14px;
    color: #333333;
    border: 1px solid #e0e0e0;
    border-radius: 6px;
  }
  .sort_by_text {
    font-family: "Inter";
    font-size: 12px;
    color: #333333;
  }
  select {
    outline: none;
    padding: 8px 12px;
    width: 95px;
    height: 46px;
    border: 1px solid #e0e0e0;
    border-radius: 6px;
    font-family: "Inter";
    font-size: 12px;
    color: #bdbdbd;
  }
}
</style>