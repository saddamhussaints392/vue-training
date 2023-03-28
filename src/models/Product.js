export class Product {
    constructor(id,thumbnails, title, originalPrice, discountPrice){
        this.id = id,
        this.thumbnails = thumbnails,
        this.title = title,
        this.originalPrice = originalPrice,
        this.discountPrice = discountPrice
    }
    
}

export class ProductDetails extends Product {
    constructor(description, quantity, rating, reviews){
        this.description = description,
        this.quantity = quantity,
        this.rating = rating,
        this.reviews = reviews
    }
    quantityIncrement(){
        console.log("quantityIncrement");
    }
    quantityDecrement(){
        console.log("quantityDecrement");
    }
}