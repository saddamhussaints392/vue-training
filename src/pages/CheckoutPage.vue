<template>
  <b-container fluid class="p-0">
    <b-row no-gutters align-h="center" class="checkout_section">
      <b-col cols="10">
        <b-row>
          <b-col  cols="12" sm="12" md="12" lg="8" xl="8" xxl="8">
            <b-row class="align-items-end">
              <b-col cols="12" sm="12" md="12" lg="6" xl="6" xxl="6">
                <span class="h6 mb-3">Shipping Address</span>
                <div class="mb-1">
                  <label for class="normal-text-regular">First name</label>
                  <b-form-input></b-form-input>
                </div>
                <div class="mb-1">
                  <label for class="normal-text-regular">Email address</label>
                  <b-form-input></b-form-input>
                </div>
                <div class="mb-1">
                  <label for class="normal-text-regular">Company</label>
                  <b-form-input></b-form-input>
                </div>
                <div class="mb-1">
                  <label for class="normal-text-regular">City</label>
                  <b-form-select v-model="selected" :options="options"></b-form-select>
                </div>
                <div>
                  <label for class="normal-text-regular">Address 1</label>
                  <b-form-input></b-form-input>
                </div>
              </b-col>
              <b-col  cols="12" sm="12" md="12" lg="6" xl="6" xxl="6">
                <div class="mb-1">
                  <label for class="normal-text-regular">Last name</label>
                  <b-form-input></b-form-input>
                </div>
                <div class="mb-1">
                  <label for class="normal-text-regular">Phone number</label>
                  <b-form-input></b-form-input>
                </div>
                <div class="mb-1">
                  <label for class="normal-text-regular">Country</label>
                  <b-form-select v-model="selectedCountry" :options="countries"></b-form-select>
                </div>
                <div class="mb-1">
                  <label for class="normal-text-regular">Zip code</label>
                  <b-form-input></b-form-input>
                </div>
                <div>
                  <label for class="normal-text-regular">Address 2</label>
                  <b-form-input></b-form-input>
                </div>
              </b-col>
            </b-row>
            <b-row  class="align-items-end mt-4">
              <b-col  cols="12" sm="12" md="12" lg="6" xl="6" xxl="6">
                <div>
                  <span class="h6">Billing Address</span>
                  <b-form-checkbox
                    id="checkbox-1"
                    v-model="status"
                    name="checkbox-1"
                    value="accepted"
                    unchecked-value="not_accepted"
                    class="checkbox rounded-0"
                  >Same as shipping address</b-form-checkbox>
                </div>
                <div class="mt-3">
                  <button class="back_to_cart_btn text-grey-2 w-100" @click="$router.back()">
                    <b-icon-chevron-left></b-icon-chevron-left>
                    <span class="ml-1">Back to cart</span>
                  </button>
                </div>
              </b-col>
              <b-col  cols="12" sm="12" md="12" lg="6" xl="6" xxl="6" class="proceed_to_shipping_main">
                <div>
                  <button class="shipping_btn text-light w-100 bg-primary">
                    <span class="mr-1">Proceed to shipping</span>
                    <b-icon-chevron-right></b-icon-chevron-right>
                  </button>
                </div>
              </b-col>
            </b-row>
          </b-col>
          <b-col  cols="12" sm="12" md="12" lg="4" xl="4" xxl="4">
            <b-card>
              <div
                class="d-flex justify-content-start py-2"
                style="border-bottom: 1px solid #E0E0E0;"
                v-for="(item, i) in 3"
                :key="i"
              >
                <img src="../assets/images/burger.png" alt class="selected_item_img d-block" />
                <div class="ml-2">
                  <span class="normal-text-bold">Chicken Birger</span>
                  <span class="small-text-regular text-grey-2 d-block">150 gm net</span>
                  <span class="small-text-regular text-grey-2 d-block">50$</span>
                </div>
              </div>
              <div
                class="normal-text-regular text-grey-2 py-3"
                style="border-bottom: 1px solid #E0E0E0;"
              >
                <div class="d-flex justify-content-between align-items-center mb-1">
                  <span class="d-block">Sub-total</span>
                  <span class="d-block">130$</span>
                </div>
                <div class="d-flex justify-content-between align-items-center mb-1">
                  <span class="d-block">Shipping</span>
                  <span class="d-block">Free</span>
                </div>
                <div class="d-flex justify-content-between align-items-center mb-1">
                  <span class="d-block">Discount</span>
                  <span class="d-block">25%</span>
                </div>
                <div class="d-flex justify-content-between align-items-center">
                  <span class="d-block">Tax</span>
                  <span class="d-block">54.06$</span>
                </div>
              </div>
              <div class="pt-3">
                <div class="d-flex justify-content-between align-items-center">
                  <span class="d-block medium-text-regular text-grey-2">Total</span>
                  <span class="medium-text-bold d-block text-grey-1">432.65$</span>
                </div>
                <button class="medium-text-regular border-radius-6 bg-primary w-100 mt-3">
                  <span class="mr-1">Place an order</span>
                  <b-icon-arrow-right></b-icon-arrow-right>
                </button>
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
  data() {
    return {
      selected: null,
      options: [
        { value: null, text: "Choose City" },
        { value: "a", text: "This is First option" },
        { value: "b", text: "Selected Option" },
        { value: { C: "3PO" }, text: "This is an option with object value" },
        { value: "d", text: "This one is disabled", disabled: true }
      ],
      selectedCountry: null,
      countries: [
        { value: null, text: "Choose Country" },
        { value: "india", text: "India" },
        { value: "japan", text: "Japan" },
        { value: "China", text: "china" },
        { value: "swedan", text: "Swedan" },
        { value: "turkey", text: "Turkey" }
      ],
      status: "not_accepted"
    };
  }
};
</script>
<style scoped>
input {
  height: 56px;
}
select {
  height: 56px;
}
.checkout_section {
  padding: 120px 0;
}
.checkbox {
  border-radius: 0 !important;
}
.back_to_cart_btn {
  background: transparent;
  border: 1px solid #e0e0e0;
}
.shipping_btn {
  border: 1px solid #ff9f0d;
}
.selected_item_img {
  width: 82.72px;
  height: 88px;
}

@media screen and (max-width: 480px) {
  .checkout_section {
  padding: 20px 0;
}
.proceed_to_shipping_main {
  margin: 24px 0;
}
}
</style>
