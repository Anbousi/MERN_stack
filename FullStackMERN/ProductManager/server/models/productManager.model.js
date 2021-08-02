const mongoose = require('mongoose');
const ProductManagerSchema = new mongoose.Schema({
    title: { type: String },
    price: { type: Number },
    description: {type: String}
}, { timestamps: true });
module.exports.ProductManager = mongoose.model('ProductManager', ProductManagerSchema);
