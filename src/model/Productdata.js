const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://userone:userone@ictakfiles.i0dhy.mongodb.net/MessyKitchen?retryWrites=true&w=majority');
const Schema = mongoose.Schema;

var NewProductSchema =  new Schema({
    productId : Number,
    productName : String,
    productType : String,
    price : Number,
    quantity : Number,
    description : String,
    location : String,
    imageUrl : String

});

var ProductData = mongoose.model('product', NewProductSchema);

module.exports =  ProductData;