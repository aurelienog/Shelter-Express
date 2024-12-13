const mongoose = require('mongoose');
const schema = new mongoose.Schema({
  image: { type: String, required: [true, "Image is required:"]},
  name: { type: String, required: [true, "Name is required:"] },
  age: { type: Number, required: [true, "Age is required:"] },
  breed: { type: String, required: false },
  sex: { type: String, required: [true, "Sex is required:"] },
  size: { type: String, required: [true, "Size is required:"] },
  weight: { type: Number, required: false },
  licence: { type: Boolean, required: [true, "License is required:"] },
  idealHome: { type: String, required: false },
  livingWithChildren: { type: Boolean, required: false },
  livingWithDogs: { type: Boolean, required: false },
  livingWithCats: { type: Boolean, required: false },
  user: { 
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: [true, "user is required"] 
    },
}, { timestamps: true })

module.exports = mongoose.model('Dog', schema);