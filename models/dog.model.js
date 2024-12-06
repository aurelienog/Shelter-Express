const mongoose = require('mongoose');
const schema = new mongoose.Schema({
  name: { type: String, required : true },
  age: { type: Number, required: true },
  breed: { type: String, required: true },
  sex: { type: String, required: true },
  size: { type: String, required: true },
  weight: { type: Number, required: false },
  idealHome: { type: String, required: false },
  livingWithChildren: { type: String, required: false },
  livingWithDogs: { type: String, required: false },
  livingWithCats: { type: String, required: false },
}, { timestamps: true })

module.exports = mongoose.model(Dog, schema)