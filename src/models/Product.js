export class Product {
    constructor(id,thumbnails, title, originalPrice, discountPrice, category, wishlist){
        this.id = id,
        this.thumbnails = thumbnails,
        this.title = title,
        this.originalPrice = originalPrice,
        this.discountPrice = discountPrice,
        this.category = category,
        this.wishlist = wishlist
    }
    
}

export class ProductDetails extends Product {
    constructor(description,  rating, reviews){
        this.description = description,
        this.rating = rating,
        this.reviews = reviews
    }
}