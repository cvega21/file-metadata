var express = require('express');
var multer  = require('multer');
var upload = multer({ dest: 'uploads/' });
var router = express.Router();

/* GET users listing. */
router.post('/fileanalyse', upload.single('upfile'), function(req, res, next) {
  res.send({name: req.file.originalname, type: req.file.mimetype, size: req.file.size});
});

module.exports = router;
