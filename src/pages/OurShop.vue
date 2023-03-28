<template>
  <b-container class="p-0" fluid>
    <b-row no-gutters align-h="center" class="our_shop_section">
      <b-col cols="12" sm="12" md="12" lg="11" xl="11">
        <b-row no-gutters align-h="center" class="mb-4">
          <b-col cols="10" class="d-flex sort_show_col" style="gap: 33px;">
            <div>
              <span class="mr-2 sort_by_text">Sort By :</span>
              <select v-model="sortBy" id class="sort_select" :on-change="filteredProducts">
                <option value="low-high">low - high (price)</option>
                <option value="high-low">high - low (price)</option>
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
                <div style class="items_grid_section" id="my-table">
                  <FoodProductItem
                    v-for="(item, i) in paginationItems"
                    :key="i"
                    :thumbnail="item.thumbnails[0]"
                    :title="item.title"
                    :originalPrice="item.originalPrice"
                    :discountPrice="item.discountPrice"
                    :id="item.id"
                  />
                </div>
                <!-- <b-table id="my-table"
                  :per-page="perPage"
                  :current-page="currentPage"
                :items="products"></b-table>-->
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
                  :per-page="perPage"
                  aria-controls="my-table"
                ></b-pagination>
              </b-col>
            </b-row>
          </b-col>
          <b-col cols="12" sm="12" md="12" lg="2" xl="2" class="product_search_section ml-4">
            <SearchProducts v-if="showProducts" />
            <b-modal
              v-else
              ref="my-modal"
              centered
              hide-header-close
              hide-header
              hide-footer
              body-class="p-0"
            >
              <SearchProducts :hideModal="hideModal" />
            </b-modal>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
import FoodProductItem from "../components/FoodProductItem.vue";
import SearchProducts from "../components/SearchProducts.vue";
import { Product } from "../models/Product.js";
import items from "../data/products.json";
export default {
  name: "OurShop",
  components: { SearchProducts, FoodProductItem },
  data() {
    return {
      currentPage: 1,
      perPage: 15,
      showProducts: true,
      products: [],
      sortBy: "low-high"
    };
  },
  computed: {
    rows() {
      return this.products.length;
    },
    filteredProducts(){
        return this.products.sort((a, b)=>{
        if(this.sortBy === "low-high"){
          return a.discountPrice - b.discountPrice
        }else if(this.sortBy === "high-low"){
         return b.discountPrice - a.discountPrice
        }
       })
    },
    paginationItems() {
      const startIndex = (this.currentPage - 1) * this.perPage;
      const endIndex = startIndex + this.perPage;
      return this.products.slice(startIndex, endIndex);
    }
  },
  mounted() {
    this.updateScreenWidth();
    this.onScreenResize();
    this.getData();
  },
  methods: {
    getData() {
      for (let i = 0; i < items.products.length; i++) {
        let d = new Product(
          items.products[i].id,
          items.products[i].thumbnails,
          items.products[i].title,
          items.products[i].originalPrice,
          items.products[i].discountPrice
        );
        console.log(d);
        this.products.push(d);
      }
    },
    onScreenResize() {
      window.addEventListener("resize", () => {
        this.updateScreenWidth();
      });
    },
    updateScreenWidth() {
      if (window.innerWidth < 768) {
        this.showProducts = false;
        this.perPage = 14;
      } else {
        this.showProducts = true;
        this.perPage = 15;
      }
    },
    showModal() {
      this.$refs["my-modal"].show();
    },
    hideModal() {
      this.$refs["my-modal"].hide();
    }
  }
};
</script>
<style scoped>
.modal-dialog {
  position: fixed;
  top: auto;
  right: auto;
  left: auto;
  bottom: 0;
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
  grid-template-columns: 312px 312px 312px;
  gap: 24px;
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

  .pagination_section {
    margin-top: 20px;
  }
}
</style>