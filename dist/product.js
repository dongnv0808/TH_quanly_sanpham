"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    get getName() {
        return this.name;
    }
    set setName(name) {
        this.name = name;
    }
    get getPrice() {
        return this.price;
    }
    set setPrice(price) {
        this.price = price;
    }
}
exports.Product = Product;
