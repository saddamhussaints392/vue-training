<template>
  <b-container fluid class="p-0">
    <b-row no-gutters align-h="center" class="faq_section">
      <b-col cols="11">
        <b-row no-gutters class="text-center">
          <b-col cols="12">
            <span class="h2">Questions Looks Here</span>
            <span
              class="normal-text-regular text-grey-2"
            >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the</span>
          </b-col>
        </b-row>
        <b-row no-gutters class="mt-6">
          <!-- <b-col cols="6"></b-col>
          <b-col cols="6"></b-col>-->
          <b-col cols="12">
            <div class="faq_items_collection justify-content-center">
              <div v-for="(items, i) in 6" :key="i" class="faq_item p-3">
                <div class="d-flex align-items-center justify-content-between">
                  <span class="d-block medium-text-bold">How we serve food?</span>
                  <div>
                    <b-icon-plus-lg></b-icon-plus-lg>
                  </div>
                </div>
                <div>
                  <span
                    class="normal-text-regular"
                  >Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?</span>
                </div>
              </div>
            </div>
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
.faq_section {
  padding: 120px 0;
}
.faq_items_collection {
  display: grid;
  grid-template-columns: 648px 648px;
  gap: 24px;
}
.faq_item {
  background: #faf7f2;
  border-radius: 8px;
}

@media screen and (max-width: 480px) {
  .faq_section {
    padding: 20px 0;
  }
  .faq_items_collection {
    display: grid;
    grid-template-columns: 335px;
    gap: 32px;
  }
  .faq_item {
    background: #faf7f2;
    border-radius: 8px;
  }
}
</style>