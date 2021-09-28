const multer = require('multer');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "./uploads");
    },
    filename: function (req, file, cb) {
      cb(null, new Date().valueOf() + file.originalname);
    },
  });

var upload = multer({ storage: storage });

module.exports = multer({storage: storage});