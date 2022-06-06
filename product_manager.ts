import { Product } from "./product";

export class ProductManager{
    private products: Product[] = [];
    constructor(){

    }
    get productAll(){
        return this.products;
    }
    add(product: Product){
        this.products.push(product);
    }
}

