<template>
  <b-card class="products_section">
    <div class="mobile_view_sorting">
      <div>
        <button class="btn_close_modal ml-auto" @click="hideModal">Close</button>
      </div>
      <div class="d-flex align-items-center justify-content-between my-3">
        <div>
          <span class="mr-2 medium-text-regular text-grey-4">Sort By :</span>
          <select name id class="sort_select">
            <option value="Newest">Newest</option>
            <option value="Oldest">Oldest</option>
            <option value="Newest">Newest</option>
            <option value="Newest">Newest</option>
          </select>
        </div>
        <div>
          <span class="mr-2 medium-text-regular text-grey-4">Show :</span>
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
      <input
        type="text"
        placeholder="Search Product"
        v-model="searchProduct"
        class="d-block normal-text-regular text-grey-3" 
        @keyup.enter="productsStore.getData(searchProduct)"
      />
      <div
        class="d-flex align-items-center justify-content-center text-light"
        @click="productsStore.getData(searchProduct)"
      >
        <b-icon-search font-scale="1.5"></b-icon-search>
      </div>
    </div>
    <div class="categories_section">
      <span class="d-block h6 text-grey-1">Category</span>
      <span>{{ productsStore.selectedCategories }}</span>
      <b-form-checkbox class="category_item medium-text-regular rounded-0"
       v-for="(category, i) in categories" :key="i" 
       :value="category" 
       v-model="productsStore.selectedCategories" 
       @change="productsStore.getSelectedCategory" >{{ category }}</b-form-checkbox>
    </div>
    <div class="category_img_section">
      <img src="../assets/images/category_section_image.png" alt style="width:100%; height: auto;" />
      <div class="item_titles">
        <span class="d-block font-weight-bold normal-text-bold text-light">Perfect Taste</span>
        <span class="d-block font-weight-bold h6 text-light">Classic Restaurant</span>
        <span class="d-block font-weight-bold normal-text-bold text-primary mt-2">45.00$</span>
      </div>
      <div class="d-flex align-items-center shop_now_section text-light">
        <span class="d-block mr-2 normal-text-regular">Shop Now</span>
        <b-icon-arrow-right-circle class="d-block"></b-icon-arrow-right-circle>
      </div>
    </div>
    <div class="filter_by_price_section">
      <span class="d-block text-grey-1 h6">Filter By Price</span>
      <!-- <input v-model="currentValue" type="range" :min="min" :max="max" class="slider" /> -->
      <div class="middle my-3">
        <div class="multi-range-slider">
          <input
            type="range"
            ref="input_left"
            id="input-left"
            step="80"
            min="10"
            max="8000"
            value="25"
            @input="setLeftValue"
            @change="productsStore.filterByPrice(lowestPrice, highestPrice)"
          />
          <input
            type="range"
            ref="input_right"
            id="input-right"
            min="0"
            step="80"
            max="8000"
            value="75"
            @input="setRightValue"
            @change="productsStore.filterByPrice(lowestPrice, highestPrice)"
          />
          <div class="slider">
            <div class="track" ref="track"></div>
            <div class="range" ref="range"></div>
            <div class="thumb left" ref="thumb_left"></div>
            <div class="thumb right" ref="thumb_right"></div>
          </div>
        </div>
      </div>
      <div class="d-flex align-items-center justify-content-between">
        <span class="d-block normal-text-regular text-black-1">
          From $
          <span>{{ lowestPrice }}</span> to $
          <span>{{highestPrice}}</span>
        </span>
        <span class="d-block normal-text-regular text-black-2">Filter</span>
      </div>
    </div>
    <div class="latest_products_section">
      <span class="d-block  h6 text-grey-1">Latest Products</span>
      <div class="d-flex latest_products_item" v-for="(items,i) in 4" :key="i">
        <img
          src="../assets/images/latest_product_img.png"
          alt
          class="d-block"
          style="height: auto;"
        />
        <div class="ml-2">
          <span class="normal-text-regular text-grey-2 d-block">Pizza</span>
          <b-form-rating
            no-border
            class="p-0 d-block"
            style="height: 0px !important;"
            color="#FF9F0D"
            inline
            value="4"
          ></b-form-rating>
          <span class="small-text-regular text-grey-2 d-block">$35.00</span>
        </div>
      </div>
    </div>
    <div class="product_tags_section">
      <span class="d-block h6 text-grey-1">Product Tags</span>
      <div class="tags normal-text-regular text-grey-2">
        <span class="d-block tag" v-for="tag in productTags" :key="tag" @click="productsStore.selectProductByTag(tag)">{{tag}}</span>
        <!-- <span class="d-block tag">Our Menu</span>
        <span class="d-block tag">Pizza</span>
        <span class="d-block tag">Cupcake</span>
        <span class="d-block tag">Burger</span>
        <span class="d-block tag">Cookies</span>
        <span class="d-block tag">Our Shop</span>
        <span class="d-block tag">Tandoori Chicken</span> -->
      </div>
    </div>
  </b-card>
</template>
<script>
import { useProductsStore } from "../store/productsStore";
export default {
  name: "SearchProducts",
  props: {
    products: { type: Object },
    hideModal: { type: Function }
  },
  setup() {
    const productsStore = useProductsStore();
    return { productsStore };
  },
  data() {
    return {
      lowestPrice: 0,
      highestPrice: 8000,
      searchProduct: "",
      categories: [
        "Sandwiches",
        "Burgers",
        "Chicken Chups",
        "Drinks",
        "Pizzas",
        "Biryani",
        "Cakes",
        "Non Veg",
        "Veg"
      ],
      productTags: [
        "chicken",
        "burger",
        "sandwich",
        "cake",
        "pizza",
        "rice",
        "drinks"
      ]
      // selectedCategory: []
    };
  },
  methods: {
    setLeftValue() {
      var min = parseInt(this.$refs["input_left"].min);
      var max = parseInt(this.$refs["input_left"].max);
      this.$refs["input_left"].value = Math.min(
        parseInt(this.$refs["input_left"].value),
        parseInt(this.$refs["input_right"].value) - 1
      );
      var percent =
        ((this.$refs["input_left"].value - min) / (max - min)) * 100;
      this.$refs["thumb_left"].style.left = percent + "%";
      this.$refs["range"].style.left = percent + "%";
      this.lowestPrice = parseInt(percent * 80);
    },
    setRightValue() {
      var min = parseInt(this.$refs["input_right"].min);
      var max = parseInt(this.$refs["input_right"].max);
      this.$refs["input_right"].value = Math.max(
        parseInt(this.$refs["input_right"].value),
        parseInt(this.$refs["input_left"].value) - 1
      );
      var percent =
        ((this.$refs["input_right"].value - min) / (max - min)) * 100;
      this.$refs["thumb_right"].style.right = 100 - percent + "%";
      this.$refs["range"].style.right = 100 - percent + "%";
      this.highestPrice = parseInt(percent * 80);
    }
  }
};
</script>
<style scoped>
.mobile_view_sorting {
  display: none;
}
.product_search input {
  outline: none;
  border: none;
  background: rgba(255, 159, 13, 0.1);
  padding: 11px 0px 11px 20px;
  width: 202px;
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
/* .category,
.filter_by_price,
.latest_products {
  font-family: "Helvetica";
  font-size: 20px;
  color: #333333;
} */
.category_item {
  margin-top: 24px;
  /* font-family: "Helvetica";
  font-size: 18px; */
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
/* .perfect_taste,
.restaurant_item_price {
  font-family: "Inter";
  font-size: 16px;
  color: white;
} */
/* .classic_restaurant {
  font-family: "Helvetica";
  font-size: 20px;
  color: white;
} */
.shop_now_section {
  cursor: pointer;
  position: absolute;
  bottom: 31px;
  left: 23px;
  /* color: white; */
}
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
  transform: translate(-12px, -2px);
}
.slider > .thumb.right {
  right: 0%;
  transform: translate(12px, -2px);
}
input[type="range"] {
  position: absolute;
  pointer-events: none;
  z-index: 2;
  width: 100%;
  height: 10px;
  opacity: 0;
}
input[type="range"]::-webkit-slider-thumb {
  pointer-events: all;
  height: 15px;
  width: 15px;
  border-radius: 0;
  border: none;
  background: red;
  -webkit-appearance: none;
}
/* .filter_range,
.filter_text {
  font-family: "Inter";
  font-size: 16px;
  color: #1e1e1e;
} */
/* .filter_text {
  color: #0d0d0d;
} */
.latest_products_item > img {
  width: 72px;
}
/* .product_item_name {
  font-family: "Helvetica";
  font-size: 16px;
  color: #4f4f4f;
} */
/* .product_item_price {
  font-family: "Helvetica";
  font-size: 14px;
  color: #4f4f4f;
} */
.product_tags_section > .tags {
  display: flex;
  flex-wrap: wrap;
}
/* .product_tags {
  font-family: "Helvetica";
  font-size: 20px;
  color: #333333;
} */
.tags > .tag {
  cursor: pointer;
  /* font-family: "Inter";
  font-size: 16px; */
  /* color: #4f4f4f; */
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
@media screen and (max-width: 480px) {
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
  /* .sort_by_text {
    font-family: "Inter";
    font-size: 12px;
    color: #333333;
  } */
  .product_search input {
    width: 295px;
    outline: none;
    border: none;
    background: rgba(255, 159, 13, 0.1);
    padding: 11px 0px 11px 20px;
  }
  .category_img_section {
    margin-top: 24px;
    position: relative;
    padding: 25px;
  }
  .item_titles {
    position: absolute;
    top: 40px;
    left: 40px;
  }
  .shop_now_section {
    cursor: pointer;
    position: absolute;
    bottom: 40px;
    left: 40px;
    /* color: white; */
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