<template>
    <b-container fluid>
        <b-row no-gutters>
                    <b-col cols="3" sm="3" md="3" lg="2" class="pr-2">
                      <img
                        src="../assets/images/menu_item_image.png"
                        alt="menu_item"
                        style="width: 100%; height: auto;"
                      />
                    </b-col>
                    <b-col cols="7" sm="7" md="7" lg="10" class="menu_texts">
                      <b-row>
                        <b-col cols="12" sm="12" md="2" lg=12>
                          <b-row>
                            <b-col  cols="12" sm="12" md="2" lg=12>
                              <span class="text-light font-weight-bold menu_item_title">Lettuce Leaf</span>
                            </b-col>
                          </b-row>
                          <b-row class="menu_item_desc_section" no-gutters>
                            <b-col cols="12" sm="12" md="2" lg=12>
                              <span class="text-light menu_item_description">Lacus nisi, et ac dapibus velit in consequat.</span>
                            </b-col>
                          </b-row>
                          <b-row>
                            <b-col  cols="12" sm="12" md="2" lg=12>
                              <span class="text-light font-weight-bold menu_item_price">12.5$</span>
                            </b-col>
                          </b-row>
                        </b-col>
                      </b-row>
                    </b-col>
                  </b-row>
    </b-container>
</template>
<script>
export default {
  name: "MenuListItem"
};
</script>
<style scoped>
.menu_item_price {
  color: #ff9f0d !important;
}
.menu_item_desc_section {
  margin: 10px 0px;
}

@media screen and (max-width: 480px) {
  .menu_item_desc_section {
    margin: 1px 0px;
    line-height: 12px;
  }
  .menu_item_description {
    font-size: 12px !important;
  }
}
</style>