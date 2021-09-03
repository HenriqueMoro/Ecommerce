const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StoreSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    
})

module.exports = mongoose.model("Store",StoreSchema);