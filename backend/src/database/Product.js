const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new mongoose.Schema({
    name: String,
    description: String,
    price: Number,
    amount: Number,
    storeId: String 
        
    
})

module.exports = mongoose.model("Product",ProductSchema);