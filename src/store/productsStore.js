import { defineStore } from "pinia";
import { Product } from "../models/Product.js";
import { ProductDetails } from "../models/Product.js";
import items from "../data/products.json";
import productItems from "../data/productsDetails.json";
import router from "../router";


export const useProductsStore = defineStore({
    id: "useProductsStore",
    state: () => {
        return {
            products: [],
            selectedCategories: [],
            productDetails: [],
            thumbnailImage: "",
            similarProducts: []
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
                            items.products[i].wishlist,
                            items.products[i].tag
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
                        items.products[i].wishlist,
                        items.products[i].tag
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
                    e.wishlist = true
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
                    e.wishlist = false
                    removeWishItems.push(this.products[i])
                } else {
                    removeWishItems.push(this.products[i])
                }
            })
            this.products = removeWishItems;
        },
        wishListFilteredProducts(wishItems) {
            console.log(wishItems);
            let wishListItems = []
            items.products.forEach((e, i) => {
                if (wishItems === "wishlist" && e.wishlist) {
                    wishListItems.push(items.products[i])
                } else if (wishItems === "default") {
                    console.log("default");
                    wishListItems.push(items.products[i])
                }
            })
            this.products = wishListItems
            console.log(this.products);


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

        },
        filterByPrice(lowPrice, highPrice) {
            console.log(lowPrice, highPrice);
            this.products = items.products.filter((item) => item.discountPrice >= lowPrice && item.discountPrice <= highPrice)
        },
        selectProductByTag(tag) {
            let selectedItems = []
            // for (let i = 0; i < this.selectedCategories.length; i++) {
            for (let j = 0; j < items.products.length; j++) {
                if (items.products[j].tag.includes(tag)) {
                    console.log(items.products[j]);
                    selectedItems.push(items.products[j])
                }
            }
            // }
            this.products = selectedItems

        },
        getProductDetails(itemId) {
            this.thumbnailImage = '' // when we click on images in the details page, that image has to appear on the thumbnail place, 
            // but again if we click on prev and next buttons thumbnail is not changing so thumbnails is making is empty
            let productsdetails = []
            for (let i = 0; i < productItems.productsDetails.length; i++) {
                if (productItems.productsDetails[i].id == itemId) {
                    let details = new ProductDetails(
                        productItems.productsDetails[i].id,
                        productItems.productsDetails[i].thumbnails,
                        productItems.productsDetails[i].title,
                        productItems.productsDetails[i].originalPrice,
                        productItems.productsDetails[i].discountPrice,
                        productItems.productsDetails[i].category,
                        productItems.productsDetails[i].wishlist,
                        productItems.productsDetails[i].tag,
                        productItems.productsDetails[i].description,
                        productItems.productsDetails[i].rating,
                        productItems.productsDetails[i].reviews,
                        productItems.productsDetails[i].inStock
                    )
                    productsdetails.push(details);
                    this.productDetails = productsdetails;
                }

            }
        },
        addWishListDetailsPage(id) {
            let addWishItems = []
            this.productDetails.forEach((e, i) => {
                if (id === e.id) {
                    e.wishlist = true
                    addWishItems.push(this.productDetails[i])
                } else {
                    addWishItems.push(this.productDetails[i])
                }
            })
            this.productDetails = addWishItems;
        },
        removeWishListDetailPage(id) {
            let removeWishItems = []
            this.productDetails.forEach((e, i) => {
                if (id === e.id) {
                    e.wishlist = false
                    removeWishItems.push(this.productDetails[i])
                } else {
                    removeWishItems.push(this.productDetails[i])
                }
            })
            this.productDetails = removeWishItems;
        },
        getThumbnailImage(image) {
            this.thumbnailImage = image;
        },
        similarProductsHandler(categories) {
            let similarproducts = []
            if(categories.length > 0){
                items.products.forEach((el, i) => {
                    if (el.category.includes(categories)) {
                        similarproducts.push(el)
                    }
                })
                this.similarProducts = similarproducts;
            }
            
        }

    }
})