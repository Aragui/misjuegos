const multer = require('multer');

const memoryStorage = multer.memoryStorage({
    destination: function(req, file, cb){
        cb(null, '');
    }
});

exports.uploader = multer({storage: memoryStorage});