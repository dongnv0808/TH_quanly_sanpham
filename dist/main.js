"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const product_1 = require("./product");
const product_manager_1 = require("./product_manager");
let product1 = new product_1.Product('Laptop', 1000);
let product2 = new product_1.Product('Mobile', 800);
let showAll = new product_manager_1.ProductManager();
showAll.add(product1);
showAll.add(product2);
console.log(showAll.productAll);
