const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const multer = require('multer');

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET
});

console.log('Cloudinary Config:', cloudinary.config());

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'shelter'
  },
});

module.exports = multer({ storage: storage });