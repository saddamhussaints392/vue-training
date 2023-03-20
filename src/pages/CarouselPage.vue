<template>
    <div>
        <div class="wrapper">
            <div class="carousel">
                <FoodProductItem/>
                <FoodProductItem/>
                <FoodProductItem/>
                <FoodProductItem/>
                <FoodProductItem/>
                <FoodProductItem/>
                <FoodProductItem/>
                <FoodProductItem/>
            </div>
        </div>
    </div>
</template>
<script>
import FoodProductItem from '../components/FoodProductItem.vue';

export default {
    name: "CarouselPage",
    components: { FoodProductItem }
}
</script>
<style scoped>
    .wrapper .carousel {
        display: flex;
        white-space: nowrap;
        
    }
</style>