import { Product } from "./product";
import { ProductManager } from "./product_manager";

let product1 = new Product('Laptop', 1000);
let product2 = new Product('Mobile', 800);

let showAll = new ProductManager();
showAll.add(product1);
showAll.add(product2);
console.log(showAll.productAll);