import { defineStore } from "pinia";
import { Product } from "../models/Product.js";
import items from "../data/products.json";


export const useProductsStore = defineStore({
    id: "useProductsStore",
    state: () => {
        return {
            products: [],
            // categories:[],
            selectedCategories: []
        }
    },
    actions: {
        getData(searchProduct) {
            let getItems = [];
            if (searchProduct) {
                for (let i = 0; i < items.products.length; i++) {
                    if (items.products[i].title.toLowerCase().includes(searchProduct.toLowerCase())) {
                        let d = new Product(
                            items.products[i].id,
                            items.products[i].thumbnails,
                            items.products[i].title,
                            items.products[i].originalPrice,
                            items.products[i].discountPrice,
                            items.products[i].category,
                            items.products[i].wishlist
                        );
                        getItems.push(d);
                        this.products = getItems
                    }

                }
            }
            else {
                for (let i = 0; i < items.products.length; i++) {
                    let d = new Product(
                        items.products[i].id,
                        items.products[i].thumbnails,
                        items.products[i].title,
                        items.products[i].originalPrice,
                        items.products[i].discountPrice,
                        items.products[i].category,
                        items.products[i].wishlist
                    );
                    getItems.push(d);
                    this.products = getItems
                }
            }

        },
        priceFilteredProducts(sortBy) {
            return this.products.sort((a, b) => {
                if (sortBy === "low-high") {
                    return a.discountPrice - b.discountPrice
                } else if (sortBy === "high-low") {
                    return b.discountPrice - a.discountPrice
                }
            })
        },
        addWishList(id) {
            let addWishItems = []
            this.products.forEach((e, i) => {
                if (id === e.id) {
                    this.products[i].wishlist = true
                    addWishItems.push(this.products[i])
                } else {
                    addWishItems.push(this.products[i])
                }
            })
            this.products = addWishItems;
        },
        removeWishList(id) {
            let removeWishItems = []
            this.products.forEach((e, i) => {
                if (id === e.id) {
                    this.products[i].wishlist = false
                    removeWishItems.push(this.products[i])
                } else {
                    removeWishItems.push(this.products[i])
                }
            })
            this.products = removeWishItems;
        },
        wishListFilteredProducts(show) {
            
        },
        paginationItems(currentPage, perPage) {
            const startIndex = (currentPage - 1) * perPage;
            const endIndex = startIndex + perPage;
            return this.products.slice(startIndex, endIndex);
        },

        getSelectedCategory() {
            let selectedItems = []
            for (let i = 0; i < this.selectedCategories.length; i++) {
                for (let j = 0; j < items.products.length; j++) {
                    if (items.products[j].category.includes(this.selectedCategories[i])) {
                        console.log(items.products[j]);
                        selectedItems.push(items.products[j])
                    }
                }
            }
            this.products = selectedItems

        }
    }
})