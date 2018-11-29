const cloudinary = require('cloudinary');
const fs = require('fs');

// cloudinary configuration
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET
})

module.exports = {
  upload: (req, res, next) => {
    const path = __dirname + '/../../../' + req.file.path;
    cloudinary.v2.uploader.upload(path, (error, result) => {
      if (error) {
        throw error;
      }
      fs.unlink(path, (err) => {
        if (err)
          throw err;
        res.send(result);
      });
    });
  }
}