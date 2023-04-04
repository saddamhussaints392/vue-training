<template>
  <b-container fluid class="p-0">
    <b-row no-gutters align-h="center" class="shop_details_section justify-content-center">
      <b-col cols="12" sm="12" md="12" lg="10" xl="10">
        <b-row no-gutters align-h="center" >
          <b-col cols="12" sm="12" md="12" lg="6" xl="6">
            <div class="d-flex align-items-start display_images_section" style="gap: 24px">
              <div>
                {{ thumbnails }}
                <!-- <div class="left_image">
                  <img
                    :src="thumbnails[1]"
                    alt
                    style="width: 100%; height: 100%;"
                  />
                </div>
                <div class="left_image">
                  <img
                  :src="thumbnails[2]"
                    alt
                    style="width: 100%;height: 100%;"
                  />
                </div>
                <div class="left_image">
                  <img
                  :src="thumbnails[3]"
                    alt
                    style="width: 100%;height: 100%;"
                  />
                </div>
                <div class="left_image">
                  <img
                  :src="thumbnails[4]"
                    alt
                    style="width: 100%;height: 100%;"
                  />
                </div> -->
              </div>
              <!-- <div class="display_img">
                <img :src="thumbnails[0]" alt style="width: 100%; height: 100%;" />
              </div> -->
            </div>
          </b-col>
          <b-col cols="12" sm="12" md="12" lg="6" xl="6">
            <div class="d-flex align-items-center justify-content-between">
              <div>
                <span class="in_stock text-light">In stock</span>
              </div>
              <div
                class="d-flex align-items-center justify-content-center btns_pre_next"
                style="gap:20px"
              >
                <span class="d-block">
                  <b-icon-arrow-left font-scale="1.3" style="vertical-align: text-top;"></b-icon-arrow-left>
                  <span class="ml-2">Pre</span>
                </span>
                <span class="d-block">
                  <span class="mr-2">Next</span>
                  <b-icon-arrow-right font-scale="1.3" style="vertical-align: text-top;"></b-icon-arrow-right>
                </span>
              </div>
            </div>
            <span class="product_name d-block font-weight-bold">{{ title }}</span>
            <p
              class="product_description"
            >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.</p>
            <div class="pricing_section">
              <span class="product_price d-block font-weight-bold">{{ discountPrice }}$</span>
              <div class="rating_section">
                <b-form-rating
                  id="rating-inline"
                  inline
                  value="5"
                  no-border
                  color="#FF9F0D"
                  class="p-0 pr-3"
                ></b-form-rating>
                <span
                  style="border-left: 1px solid #A9A9A9; border-right: 1px solid #A9A9A9;"
                  class="px-3"
                >5.0 Rating</span>
                <span class="pl-3">22 Review</span>
              </div>
              <span class="d-block product_taste my-3">Dictum/cursus/Risus</span>
              <div class="d-flex align-items-center justify-content-between add_to_cart_section">
                <div
                  class="d-flex align-items-center justify-content-center"
                  style="border: 1px solid #828282;"
                >
                  <div class="px-3 d-flex align-items-center product_decrement">
                    <b-icon-dash-lg></b-icon-dash-lg>
                  </div>
                  <div
                    style="border-left: 1px solid #828282;border-right: 1px solid #828282; height: 50px"
                    class="px-3 font-weight-bold d-flex align-items-center product_quantity"
                  >1</div>
                  <div class="px-3 d-flex align-items-center product_increment">
                    <b-icon-plus-lg></b-icon-plus-lg>
                  </div>
                </div>
                <button class="btn_add_to_cart">
                  <b-icon-bag class="mr-2"></b-icon-bag>
                  <span>Add to cart</span>
                </button>
              </div>
            </div>
            <div class="wish_socialmedia_section">
              <div
                class="d-flex align-items-center justify-content-start wishlist_compare_section"
                style="gap: 20px;"
              >
                <div>
                  <b-icon-heart class="mr-2"></b-icon-heart>
                  <span>Add to Wishlist</span>
                </div>
                <div>
                  <b-icon-arrow-down-up class="mr-2"></b-icon-arrow-down-up>
                  <span>Compare</span>
                </div>
              </div>
              <span class="category_text d-block mt-2">
                Category:
                <span class="category_name">Pizza</span>
              </span>
              <span class="tag_text d-block mt-2">
                Tag:
                <span class="tag_name">Our Shop</span>
              </span>
              <span class="d-flex align-items-center share_text mt-3">
                Share:
                <div class="d-flex ml-2" style="gap: 16px">
                  <b-icon-youtube class="d-block"></b-icon-youtube>
                  <b-icon-facebook class="d-block"></b-icon-facebook>
                  <b-icon-twitter class="d-block"></b-icon-twitter>
                  <b-icon-messenger class="d-block"></b-icon-messenger>
                  <b-icon-instagram class="d-block"></b-icon-instagram>
                </div>
              </span>
            </div>
          </b-col>
        </b-row>
        <b-row no-gutters class="description_review_section d-block" align-h="center">
          <div class="d-flex">
            <button
             @click="activate(1)"
              :class="[isBtnActive === 1 ? 'btn_active' : 'btn_inactive']"
            >Description</button>
            <button
              @click="activate(2)"
              :class="[isBtnActive === 2 ? 'btn_active' : 'btn_inactive']"
            >Reviews(24)</button>
          </div>
          <div v-if="isBtnActive === 1">
            <div class="description_text">
              <p>Nam tristique porta ligula, vel viverra sem eleifend nec. Nulla sed purus augue, eu euismod tellus. Nam mattis eros nec mi sagittis sagittis. Vestibulum suscipit cursus bibendum. Integer at justo eget sem auctor auctor eget vitae arcu. Nam tempor malesuada porttitor. Nulla quis dignissim ipsum. Aliquam pulvinar iaculis justo, sit amet interdum sem hendrerit vitae. Vivamus vel erat tortor. Nulla facilisi. In nulla quam, lacinia eu aliquam ac, aliquam in nisl.</p>
              <p>Suspendisse cursus sodales placerat. Morbi eu lacinia ex. Curabitur blandit justo urna, id porttitor est dignissim nec. Pellentesque scelerisque hendrerit posuere. Sed at dolor quis nisi rutrum accumsan et sagittis massa. Aliquam aliquam accumsan lectus quis auctor. Curabitur rutrum massa at volutpat placerat. Duis sagittis vehicula fermentum. Integer eu vulputate justo. Aenean pretium odio vel tempor sodales. Suspendisse eu fringilla leo, non aliquet sem.</p>
            </div>
            <div class="benefits_main">
              <span class="key_benefits_text d-block">Key Benefits</span>
              <li class="key_points mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
              <li class="key_points">Maecenas ullamcorper est et massa mattis condimentum.</li>
              <li
                class="key_points"
              >Vestibulum sed massa vel ipsum imperdiet malesuada id tempus nisl.</li>
              <li class="key_points">Etiam nec massa et lectus faucibus ornare congue in nunc.</li>
              <li class="key_points">Mauris eget diam magna, in blandit turpis.</li>
            </div>
          </div>
          <div v-if="isBtnActive === 2" class="reviews_sections">
            <Review />
            <Review />
          </div>
        </b-row>
        <b-row no-gutters align-h="center">
          <div class="w-100 d-flex align-items-center justify-content-between">
            <div>
              <span class="similar_product-text font-weight-bold">Similar Products</span>
            </div>
            <div class="d-flex align-items-center justify-content-center" style="gap: 10px;">
              <div
                class="btn_arrow_section d-flex align-items-center justify-content-center"
                @click="cauroselDecrement"
              >
                <b-icon-arrow-left></b-icon-arrow-left>
              </div>
              <div
                class="btn_arrow_section d-flex align-items-center justify-content-center"
                @click="cauroselIncrement"
              >
                <b-icon-arrow-right></b-icon-arrow-right>
              </div>
            </div>
          </div>
          <div class="carousel_main">
            <div class="carousel_section d-flex" ref="carousel">
              <div v-for="(item, i) in arr" :key="i">
                <FoodProductItem />
                <span>{{ i }}</span>
              </div>
            </div>
          </div>
        </b-row>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
import FoodProductItem from "../components/FoodProductItem.vue";
import Review from "../components/Review.vue";
import { useProductsStore } from "../store/productsStore";
export default {
  name: "ShopDetails",
  components: { FoodProductItem, Review },
  props: ["id", "thumbnails", "discountPrice"],
  setup(){
    const productsStore = useProductsStore();
    return { productsStore }
  },
  data() {
    return {
      pageName: "description",
      isBtnActive: 1,
      arr: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
      isDraggingStart: false,
      moverCarousel: 0,
      windowWidth: false
    };
  },
  mounted() {
    this.updateScreenWidth();
    this.onScreenResize();
  },
 
  methods: {activate: function(el) {
      this.isBtnActive = el;
    },
    onScreenResize() {
      window.addEventListener("resize", () => {
        this.updateScreenWidth();
      });
    },
    updateScreenWidth() {
      if (window.innerWidth < 450) {
        this.windowWidth = true;
      } else {
        this.windowWidth = false;
      }
    },
    cauroselDecrement() {
      if (this.windowWidth) {
        if (this.moverCarousel < 0) {
          this.moverCarousel += 178;
          this.$refs.carousel.style.transform = `translateX(${this.moverCarousel}px)`;
        }
      } else {
        if (this.moverCarousel < 0) {
          this.moverCarousel += 318;
          this.$refs.carousel.style.transform = `translateX(${this.moverCarousel}px)`;
        }
      }
    },
    cauroselIncrement() {
      if (this.windowWidth) {
        if (this.moverCarousel - 178 * 2 > this.arr.length * -178) {
          this.moverCarousel -= 178;
          this.$refs.carousel.style.transform = `translateX(${this.moverCarousel}px)`;
        }
      } else {
        if (this.moverCarousel - 318 * 5 > this.arr.length * -318) {
          this.moverCarousel -= 318;
          this.$refs.carousel.style.transform = `translateX(${this.moverCarousel}px)`;
        }
      }
    }
  }
};
</script>
<style scoped>
.display_img {
  width: 491px;
  height: 596px;
}
.left_image {
  width: 132px;
  height: 129px;
  margin-bottom: 24px;
  cursor: pointer;
}
.shop_details_section {
  padding: 120px 0;
}
.in_stock {
  background: #ff9f0d;
  padding: 3px 17px;
  border-radius: 6px;
  font-family: "Inter";
}
.btns_pre_next {
  font-family: "Inter";
  font-size: 18px;
  line-height: 26px;
  color: #828282;
}
.product_name {
  font-family: "Helvetica";
  font-size: 48px;
  color: #333333;
}
.product_description {
  border-bottom: 1px solid #e0e0e0;
  padding-bottom: 32px;
  color: #4f4f4f;
}
.pricing_section {
  border-bottom: 1px solid #e0e0e0;
  padding-bottom: 34px;
}
.product_taste {
  font-family: "Inter";
  font-size: 18px;
  color: #333333;
}
.product_price,
.similar_product-text {
  font-family: "Helvetica";
  font-size: 32px;
  color: #333333;
}
.rating_section {
  font-family: "Inter";
  font-size: 16px;
  color: #828282;
}
.btn_add_to_cart {
  background: #ff9f0d !important;
  padding: 12px 47px 12px 22px;
}
.product_decrement,
.product_increment {
  background-color: white;
  color: black;
  height: 50px;
  cursor: pointer;
}
.product_quantity {
  font-family: "Helvetica";
  font-size: 20px;
  color: #333333;
}

.wish_socialmedia_section {
  border-bottom: 1px solid #e0e0e0;
  padding-top: 24px;
  padding-bottom: 32px;
}
.wishlist_compare_section {
  font-family: "Inter";
  font-size: 18px;
  color: #4f4f4f;
}
.category_text,
.tag_text,
.share_text {
  font-family: "Inter";
  font-size: 18px;
  color: #333333;
}
.category_name,
.tag_name {
  color: #4f4f4f;
}
.description_text {
  font-family: "Inter";
  font-size: 16px;
  color: #828282;
}
.description_text p:first-child {
  margin-top: 32px;
}
.key_benefits_text {
  font-family: "Helvetica";
  font-size: 18px;
  color: #4f4f4f;
}
.key_points {
  font-family: "Inter";
  font-size: 14px;
  line-height: 22px;
  color: #4f4f4f;
}
.description_review_section {
  margin-top: 56px;
  margin-bottom: 120px;
}
.btn_active {
  background: #ff9f0d;
  font-family: "Helvetica";
  font-size: 16px;
  color: white;
}
.btn_inactive {
  background: transparent;
  font-family: "Helvetica";
  font-size: 16px;
  color: #333333;
}
.benefits_main {
  position: relative;
}
.btn_arrow_section {
  cursor: pointer;
  width: 40px;
  height: 40px;
  background: #faf7f2;
  border-radius: 50%;
}
.btn_arrow_section:hover {
  background: #ff9f0d;
  color: white;
}

.reviews_sections {
  margin-top: 32px;
}
.carousel_main {
  width: 100%;
  overflow: hidden;
}

.carousel_section {
  margin-top: 32px;
  gap: 6px;
  transition: 1s;
}
.carousel_section::-webkit-scrollbar {
  display: none;
}

@media screen and (max-width: 480px) {
  .display_images_section {
    flex-direction: column-reverse;
  }
  .display_images_section > div:first-child {
    display: flex;
    justify-content: center;
    gap: 20px;
  }
  .display_img {
    width: 335px;
    height: 328px;
  }
  .left_image {
    width: 68px;
    height: 68px;
    margin-bottom: 24px;
    cursor: pointer;
  }
  .shop_details_section {
    padding: 20px;
  }
  .description_review_section {
    margin: 42px 0;
  }
  .btns_pre_next {
    font-family: "Inter";
    font-size: 16px;
    line-height: 26px;
    color: #828282;
  }
  .product_name {
    font-family: "Helvetica";
    font-size: 40px;
    color: #333333;
  }
  .btn_active {
    width: 100%;
    background: #ff9f0d;
    font-family: "Helvetica";
    font-size: 14px;
    color: white;
  }
  .btn_inactive {
    width: 100%;
    background: transparent;
    font-family: "Helvetica";
    font-size: 14px;
    color: #333333;
  }
  .description_text p:first-child {
    margin-top: 24px;
  }
  .pricing_section {
    border-bottom: 1px solid #e0e0e0;
    padding-bottom: 24px;
  }
  .btn_arrow_section {
    cursor: pointer;
    width: 28px;
    height: 28px;
    background: #faf7f2;
    border-radius: 50%;
  }
  .add_to_cart_section {
    flex-direction: column;
  }
  .add_to_cart_section div:first-child {
    align-self: flex-start;
  }
  .btn_add_to_cart {
    align-self: flex-start;
    margin-top: 16px;
  }
  .product_decrement,
  .product_quantity,
  .product_increment {
    height: 46px;
    padding: 0 20px !important;
  }
  .carousel_main {
    width: 100%;
    overflow: visible !important;
  }
  .carousel_section {
    margin-top: 32px;
    overflow-x: scroll;
    gap: 20px;
  }
  .carousel_section::-webkit-scrollbar {
    display: none;
  }
}
</style>