<template>
  <b-container fluid class="p-0">
    <b-row no-gutters align-h="center" class="chefs_sections">
      <b-col cols="11">
        <div class="chefs_main justify-content-center">
          <div class="text-center" v-for="item in chefsData" :key="item">
            <div>
              <img :src="imageSrc(item.image)" alt class="memeber_img" />
            </div>
            <div class="p-2">
              <span class="h6">{{item.name}}</span>
              <span class="normal-text-regular">{{item.designation}}</span>
            </div>
          </div>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
export default {
    setup(){
        const imageSrc = (selectedItem) =>{
            return new URL(`../assets/images/${selectedItem}`, import.meta.url).href;
        }
        return {imageSrc};
    },
    data(){
        return{
            chefsData:[
                {
                    name: "Tahmina Rumi",
                    image: "chef-1.png",
                    designation: "Owner"
                },
                {
                    name: "Tahmina Rumi",
                    image: "chef-2.png",
                    designation: "Owner"
                },
                {
                    name: "Tahmina Rumi",
                    image: "chef-3.png",
                    designation: "Owner"
                },
                {
                    name: "Tahmina Rumi",
                    image: "chef-4.png",
                    designation: "Owner"
                },
                {
                    name: "Tahmina Rumi",
                    image: "member_img.png",
                    designation: "Owner"
                },
                {
                    name: "Tahmina Rumi",
                    image: "chef-1.png",
                    designation: "Owner"
                },
                {
                    name: "Tahmina Rumi",
                    image: "chef-1.png",
                    designation: "Owner"
                },
                {
                    name: "Tahmina Rumi",
                    image: "chef-1.png",
                    designation: "Owner"
                },
                {
                    name: "Tahmina Rumi",
                    image: "chef-1.png",
                    designation: "Owner"
                },{
                    name: "Tahmina Rumi",
                    image: "member_img.png",
                    designation: "Owner"
                }
                ,
                {
                    name: "Tahmina Rumi",
                    image: "chef-1.png",
                    designation: "Owner"
                },
                {
                    name: "Tahmina Rumi",
                    image: "member_img.png",
                    designation: "Owner"
                }
            ]
        }
    }
};
</script>
<style scoped>
.chefs_sections {
  padding: 120px 0;
}
.chefs_main {
  display: grid;
  grid-template-columns: 312px 312px 312px 312px;
  gap: 24px;
  
}
.memeber_img {
  width: 312px;
  height: 379.17px;
}
@media screen and (max-width: 480px) {
  .chefs_sections {
    padding: 20px 0;
  }
  .chefs_main {
    display: grid;
    grid-template-columns: auto auto;
    gap: 19px;
  }
  .memeber_img {
    width: 158px;
    height: 192px;
  }
}
</style>