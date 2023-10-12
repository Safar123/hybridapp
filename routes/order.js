
const express= require('express');

const order_Act = require("../Controller/orders");
const router = express.Router();
    router.all('/*', function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "X-Requested-With");
        next();
    });
    router.get('/', order_Act.getOrders);
    router.post('/:product_id', order_Act.createorder);
module.exports= router;
