const mongoose = require("mongoose");

const addressSchema = new mongoose.Schema({
  street:{
    type:String,
    maxLength:264,
    required:true
  },
  state:{
    type:String,
    maxLength:128,
    required:true
  },
  country:{
    type:String,
    maxLength:128,
    required:true
  },
  pincode:{
    type:Number,
    min:100000,
    max:999999,
    required:true
  } 
},{timestamps:true});

const AddressModel = mongoose.model("address",addressSchema);

module.exports = AddressModel;