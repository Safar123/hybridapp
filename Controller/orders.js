const express= require('express');
const mongoose= require('mongoose');

const Order= require('../Model/order.js');
const Product= require('../Model/products.js');

const router= express.Router();

const getOrders = async (req, res) => {
    try {
        const order= await Order.find();
        
        res.status(200).json(order);
    } catch(error) {
        res.status(404).json({message: error.message});
    }
}

const createorder =  async (req, res) => {
    //  res.status(201).json(req);
    const newOrder = new Order({
        name:req.body.name,
        phone:req.body.phone,
        address:req.body.address,
        products: await Product.findOne({PID: req.params.product_id})
    })
    try {
        await newOrder.save();

        res.status(201).json(newOrder);

    } catch(error) {
        res.status(400).json({ message : error.message});
    }

}

module.exports.getOrders= getOrders;
module.exports.createorder= createorder;
