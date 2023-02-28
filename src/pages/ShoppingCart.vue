<template>
  <b-container fluid>
    <b-row no-gutters align-h="center" class="shopping_cart_section">
      <b-col cols="10">
        <b-row no-gutters>
            <b-col cols="12">
                <b-row no-gutters>
                    <b-col cols="4">
                        <span class="font-weight-bold table_title">Product</span>
                    </b-col>
                    <b-col cols="2">
                         <span class="font-weight-bold table_title">Price</span>
                    </b-col>
                    <b-col cols="2">
                         <span class="font-weight-bold table_title">Quantity</span>
                    </b-col>
                    <b-col cols="2">
                         <span class="font-weight-bold table_title">Total</span>
                    </b-col>
                    <b-col cols="2">
                         <span class="font-weight-bold table_title">Remove</span>
                    </b-col>
                </b-row>
                <b-row no-gutters class="align-items-center table_data_row" v-for="data in 4" :key="data">
                    <b-col cols="4">
                       <b-row no-gutters>
                        <b-col cols="3" class="pr-3">
                            <img src="../assets/images/shopping_cart_img.png" alt="" style="width: 100%; height: auto;">
                        </b-col>
                        <b-col cols="5">
                            <span class="d-block font-weight-bold food_item_title">Burger</span>
                            <b-form-rating id="rating-inline" inline value="4" no-border class="p-0" color="#FF9F0D"></b-form-rating>
                        </b-col>
                       </b-row>
                    </b-col>
                    <b-col cols="2">
                         <span class="table_title">$15.00</span>
                    </b-col>
                    <b-col cols="2">
                         <div class="quantity_change_btn text-center">
                            <b-icon-dash></b-icon-dash>
                            <span class="px-3">10</span>
                            <b-icon-plus></b-icon-plus>
                         </div>
                    </b-col>
                    <b-col cols="2">
                         <span class="font-weight-bold table_title">$521.00</span>
                    </b-col>
                    <b-col cols="2" >
                        <b-icon-x font-scale="2"></b-icon-x>
                    </b-col>
                </b-row>
            </b-col>
        </b-row>
        <b-row class="coupon_totalbill_row">
          <b-col cols="6">
            <span class="d-block font-weight-bold coupon_code_text">Coupon Code</span>
            <b-card>
              <span
                class="coupon_description font-weight-normal"
              >Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit laudantium dolorum numquam nemo</span>
              <div class="d-flex align-items-center coupon_code w-100 mt-4">
                <input type="text" placeholder="Enter Here Code" class="w-100" />
                <button class="btn_code_apply">Apply</button>
              </div>
            </b-card>
          </b-col>
          <b-col cols="6">
            <span class="d-block font-weight-bold total_bill_text">Total Bill</span>
            <b-card class="total_bill_card">
             <div class="d-flex justify-content-between align-items-center">
                <span class="d-block font-weight-bold">Cart Subtotal</span>
                <span class="d-block font-weight-bold">$120.00</span>
             </div>
             <div class="d-flex justify-content-between align-items-center pt-2 pb-3">
                <span class="d-block font-weight-normal">Shipping Charge</span>
                <span class="d-block font-weight-normal">$00.00</span>
             </div>
             <div class="d-flex justify-content-between align-items-center total_amount_section pt-2">
                <span class="d-block font-weight-bold">Total Amount</span>
                <span class="d-block font-weight-bold">$120.00</span>
             </div>
            </b-card>
            <button class="mt-3 btn_checkout w-100">Proceed to Checkout
                <b-icon-check2-square></b-icon-check2-square>
            </button>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
export default {};
</script>
<style scoped>
.shopping_cart_section {
    padding: 120px 0;
}
.coupon_code_text, .total_bill_text {
  font-family: "Helvetica";
  font-size: 32px;
  color: #333333;
}
.coupon_description {
  font-family: "Inter", sans-serif;
  font-size: 18px;
  color: #828282;
}
.coupon_code > input {
  background-color: #ffffff;
  padding: 16px 24px;
  border: 1px solid #e0e0e0;
  outline: none;
  border-radius: 4px 0 0 4px;
}
.coupon_code > input::placeholder {
  color: #828282;
  font-family: "Inter";
}
.btn_code_apply {
  background-color: #ff9f0d;
  color: #ffffff;
  border: 1px solid #ff9f0d;
  font-family: "Inter";
  border-radius: 4px;
}
.total_amount_section {
    border-top: 1px solid #BDBDBD;
}
.btn_checkout {
    background: #FF9F0D;
}
.table_title {
    font-size: 18px;
    color: #333333;
}
.quantity_change_btn {
    width: 110px;
    padding: 10px;
    border-radius: 40px;
    border: 1px solid #E0E0E0;
}
.quantity_change_btn > svg {
    cursor: pointer;
}
.food_item_title {
    font-size: 16px;
}
.table_data_row {
    border-bottom: 1px solid #E0E0E0;
    padding-top: 32px;
    padding-bottom: 18px;
}
.coupon_totalbill_row {
    margin-top: 120px;
}
@media screen and (max-width: 480px) {
  .coupon_code > input {
    background-color: #ffffff;
    padding: 14px 20px !important;
    border: 1px solid #e0e0e0;
    outline: none;
    border-radius: 4px 0 0 4px;
    font-size: 14px;
  }
  .coupon_code > input::placeholder {
    color: #828282;
    font-family: "Inter";
    font-size: 14px;
  }
  .btn_code_apply {
    background-color: #ff9f0d;
    color: #ffffff;
    border: 1px solid #ff9f0d;
    font-family: "Inter";
    border-radius: 4px;
    font-size: 14px;
    padding: 14px 20px !important;
  }
}

@media screen and (max-width: 768px) {
  .coupon_code > input {
    background-color: #ffffff;
    padding: 14px 20px !important;
    border: 1px solid #e0e0e0;
    outline: none;
    border-radius: 4px 0 0 4px;
    font-size: 14px;
  }
  .coupon_code > input::placeholder {
    color: #828282;
    font-family: "Inter";
    font-size: 14px;
  }
  .btn_code_apply {
    color: #ffffff;
    background-color: #ff9f0d;
    border: none;
    font-family: "Inter";
    border-radius: 4px;
    font-size: 14px;
    padding: 14px 20px !important;
  }
}
</style>