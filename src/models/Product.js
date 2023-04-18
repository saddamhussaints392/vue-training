export class Product {
    constructor(id,thumbnails, title, originalPrice, discountPrice, category, wishlist, tag){
        this.id = id,
        this.thumbnails = thumbnails,
        this.title = title,
        this.originalPrice = originalPrice,
        this.discountPrice = discountPrice,
        this.category = category,
        this.wishlist = wishlist,
        this.tag = tag
    }
    
}

export class ProductDetails extends Product {
    constructor(id,thumbnails, title, originalPrice, discountPrice, category, wishlist,tag,description,  rating, reviews, inStock){
        super(id,thumbnails, title, originalPrice, discountPrice, category, wishlist,tag)
        this.description = description,
        this.rating = rating,
        this.reviews = reviews,
        this.inStock = inStock
    }
}