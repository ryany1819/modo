const cloudinary = require('cloudinary');
const multer = require('multer');

// cloudinary configuration
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET
})

const temp = multer({dest: 'temp/'})

module.exports = {
  uploadImage: (req, res, next) => {
    
    let filePath = res.locals.filePath;
    cloudinary.v2.uploader.upload(filePath, (error, result) => {
      if (error) {
        throw error;
      }

      res.send(locals);
    });
    // delete image
  }
}