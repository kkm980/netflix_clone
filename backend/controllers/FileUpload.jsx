const multer = require("multer");
const path = require("path");
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, "../uploads"))
    },
    filename: function (req, file, cb) {
        const uniquePrefix = Date.now() + '-' + Math.round(Math.random() * 1e9)
        cb(null, uniquePrefix + "-" + file.originalname)
    }
});




module.exports = multer({
    storage: storage,
})


