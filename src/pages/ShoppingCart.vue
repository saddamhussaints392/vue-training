<template>
  <b-container fluid class="p-0">
    <b-row no-gutters align-h="center" class="shopping_cart_section">
      <b-col cols="10">
        <b-row no-gutters class="table_row">
          <b-col cols="12" sm="12" md="12" lg="12" xl="12">
            <table class="w-100">
              <tr class="medium-text-bold text-grey-1">
                <th class="">Product</th>
                <th class="text-center">Price</th>
                <th class="text-center">Quantity</th>
                <th class="text-center">Total</th>
                <th class="text-center">Remove</th>
              </tr>
              <tr class="table_data_row" v-for="data in 4" :key="data">
                <td class="d-flex">
                  <img src="../assets/images/shopping_cart_img.png" alt class="d-block" />
                  <div class="d-block pl-3">
                    <span class="d-block normal-text-bold text-grey-1">Burger</span>
                    <b-form-rating
                      id="rating-inline"
                      inline
                      value="4"
                      no-border
                      class="p-0 d-block"
                      color="#FF9F0D"
                    ></b-form-rating>
                  </div>
                </td>
                <td class="text-center normal-text-regular text-grey-1">$15.00</td>
                <td class="text-center">
                  <div class="quantity_change_btn text-center m-auto">
                    <b-icon-dash></b-icon-dash>
                    <span class="px-3 normal-text-regular text-grey-1">10</span>
                    <b-icon-plus></b-icon-plus>
                  </div>
                </td>
                <td class="text-center normal-text-bold text-grey-1">$521.00</td>
                <td class="text-center">
                  <b-icon-x font-scale="2"></b-icon-x>
                </td>
              </tr>
            </table>
            
          </b-col>
        </b-row>
        <b-row class="coupon_totalbill_row">
          <b-col cols="12" sm="12" md="12" lg="6" xl="6">
            <span class="d-block h4 text-grey-1 mb-3">Coupon Code</span>
            <b-card>
              <span
                class="medium-text-regular text-grey-3"
              >Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit laudantium dolorum numquam nemo</span>
              <div class="d-flex align-items-center coupon_code w-100 mt-4">
                <input type="text" placeholder="Enter Here Code" class="w-100 normal-text-regular text-grey-3 bg-light" />
                <button class="btn_code_apply medium-text-regular bg-primary">Apply</button>
              </div>
            </b-card>
          </b-col>
          <b-col cols="12" sm="12" md="12" lg="6" xl="6">
            <span class="d-block h4 mb-3">Total Bill</span>
            <b-card class="total_bill_card">
              <div class="d-flex justify-content-between align-items-center">
                <span class="d-block h6 text-grey-1">Cart Subtotal</span>
                <span class="d-block medium-text-bold text-grey-1">$120.00</span>
              </div>
              <div class="d-flex justify-content-between align-items-center pt-2 pb-3">
                <span class="d-block medium-text-regular text-grey-2">Shipping Charge</span>
                <span class="d-block medium-text-regular text-grey-2">$00.00</span>
              </div>
              <div
                class="d-flex justify-content-between align-items-center total_amount_section pt-2"
              >
                <span class="d-block  h6 text-grey-1">Total Amount</span>
                <span class="d-block medium-text-bold text-grey-1">$120.00</span>
              </div>
            </b-card>
            <button class="mt-3 medium-text-regular btn_checkout w-100">
              Proceed to Checkout
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
/* .coupon_code_text,
.total_bill_text {
   font-family: "Helvetica"; 
   font-size: 32px;
  color: #333333; 
} */
/* .coupon_description {
  font-family: "Inter", sans-serif;
  font-size: 18px;
  color: #828282;
} */
.coupon_code > input {
  /* background-color: #ffffff; */
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
  /* background-color: #ff9f0d;
  color: #ffffff; */
  /* border: 1px solid #ff9f0d; */
  /* font-family: "Inter"; */
  border-radius: 4px;
}
.total_amount_section {
  border-top: 1px solid #bdbdbd;
}
.btn_checkout {
  background: #ff9f0d;
}

/* .table_title {
  font-size: 18px;
  color: #333333;
} */
.quantity_change_btn {
  width: 110px;
  padding: 10px;
  border-radius: 40px;
  border: 1px solid #e0e0e0;
}
.quantity_change_btn > svg {
  cursor: pointer;
}
/* .food_item_title {
  font-size: 16px;
} */
.table_data_row  td{
  border-bottom: 1px solid #e0e0e0;
  padding-top: 32px;
  padding-bottom: 18px;
}
.coupon_totalbill_row {
  margin-top: 120px;
}
@media screen and (max-width: 480px) {
  .shopping_cart_section {
    padding: 32px 0;
  }
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
    /* background-color: #ff9f0d;
    color: #ffffff; */
    border: 1px solid #ff9f0d;
    /* font-family: "Inter"; */
    /* border-radius: 4px; */
    /* font-size: 14px; */
    padding: 14px 20px !important;
  }
  .table_row {
    overflow-x: scroll;
  }
  .coupon_totalbill_row {
    margin-top: 32px;
  }
  .coupon_totalbill_row > div:nth-child(2) {
    margin-top: 32px;
  }

table {
  table-layout: fixed;
}
table tr td:first-child, table tr th:first-child {
  width: 265px;
}
table tr td:nth-child(2), table tr th:nth-child(2) {
  width: 70px;
}
table tr td:nth-child(3),table tr th:nth-child(3) {
  width: 130px;
}
table tr td:nth-child(4),table tr th:nth-child(4) {
  width: 100px;
}
table tr td:nth-child(5),table tr th:nth-child(5) {
  width: 50px;
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
    /* color: #ffffff;
    background-color: #ff9f0d; */
    /* border: none; */
    /* font-family: "Inter"; */
    border-radius: 4px;
    /* font-size: 14px; */
    padding: 14px 20px !important;
  }
  .table_row {
    overflow-x: scroll;
  }
  .coupon_totalbill_row {
    margin-top: 32px;
  }
  .coupon_totalbill_row > div:nth-child(2) {
    margin-top: 32px;
    
  }
  table {
  table-layout: fixed;
}
table tr td:first-child, table tr th:first-child {
  width: 265px;
}
table tr td:nth-child(2), table tr th:nth-child(2) {
  width: 70px;
}
table tr td:nth-child(3),table tr th:nth-child(3) {
  width: 130px;
}
table tr td:nth-child(4),table tr th:nth-child(4) {
  width: 100px;
}
table tr td:nth-child(5),table tr th:nth-child(5) {
  width: 50px;
}
}
</style>