const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  image: { type: String, required: [true, "A photo is required"]},
  name: { type: String, required : true },
  age: { type: Number, required: true },
  breed: { type: String, required: false },
  sex: { type: String, required: true },
  idealHome: { type: String, required: false },
  livingWithChildren: { type: Boolean, required: false },
  livingWithDogs: { type: Boolean, required: false },
  livingWithCats: { type: Boolean, required: false },
  about: {type: String, required: false}
}, { timestamps: true })

module.exports = mongoose.model('Cat', schema)