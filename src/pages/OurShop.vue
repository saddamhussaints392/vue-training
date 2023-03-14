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
            <div class="btn_filter" @click="showModal">
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
                  <div v-for="(item, i) in 6" :key="i" class="position-relative grid_images_section">
                    <img
                      src="../assets/images/ourshop_img.png"
                      alt
                      style="width:100%; height: auto;"
                    />
                    <span class="font-weight-bold d-block item_name">Fresh Lime</span>
                    <span class="item_price mr-2">$38.00</span>
                    <s class="item_discount text-secondary">$45.00</s>
                    <div class="icons_row  align-items-center justify-content-between">
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

          <b-col
            cols="12"
            sm="12"
            md="12"
            lg="2"
            xl="2"
            class="product_search_section ml-4"
           
          >
            <SearchProducts  v-if="showProducts"/>
            <b-modal v-else ref="my-modal" hide-header-close hide-header hide-footer body-class="p-0">
            <SearchProducts :hideModal="hideModal"/>
           </b-modal>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
import SearchProducts from "../components/SearchProducts.vue";
export default {
  name: "OurShop",
  components: { SearchProducts },
  data() {
    return {
      rows: 60,
      currentPage: 1,
      showProducts: true
    };
  },
  mounted() {
    this.updateScreenWidth();
    this.onScreenResize();
  },
  methods: {
    onScreenResize() {
      window.addEventListener("resize", () => {
        this.updateScreenWidth();
      });
    },
    updateScreenWidth() {
      if(window.innerWidth < 768){
        this.showProducts = false;
      }
      else {
        this.showProducts = true;
      }
    },
    showModal() {
        this.$refs['my-modal'].show()
      },
      hideModal() {
        this.$refs['my-modal'].hide()
      },
  },
  
};
</script>
<style scoped>
.modal {
  margin-top: 200px !important;
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
  display: none;
  position: absolute;
  top: 40%;
  right: 25%;
}
.grid_images_section:hover > .icons_row {
  display: flex;
}
.icons_row > div:nth-child(2) {
  padding: 0 12px;
}
.categories_section {
  margin-top: 24px;
}
.category,
.perfect_taste,
.restaurant_item_price {
  font-family: "Inter";
  font-size: 16px;
  color: white;
}
.restaurant_item_price {
  color: #ff9f0d;
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
.btn_filter {
  background: none;
  font-family: "Inter";
  font-size: 14px;
  color: #333333;
  border: 1px solid #e0e0e0;
  border-radius: 6px;
  padding: 12px;
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
  .product_search div {
    cursor: pointer;
    background: #ff9f0d;
    width: 60px;
    height: 46px;
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

}
</style>