const express =require('express');
const app = express();
const products = require("../products.json");
const getProducts = require("./getProducts");
const getProduct = require('./getProduct');



// app.get('/api/products', (req, res) => {
//     res.status(200).send(products);
//     });

app.get("/api/products", getProducts);

app.get("/api/product/:id", getProduct);

app.listen(3001, ()=>console.log("RUNNING"));

