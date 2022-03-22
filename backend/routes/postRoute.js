const router = require('express').Router();
const postController = require('../controllers/postController');
var cors = require('cors')
/*
const multer = require("multer");
//stockage de limage
const storage= multer.diskStorage({
  destination:(req, file,callback)=>{
    callback(null , "./clients/public/uploads/")
  },
  filename:(req , file , callback) =>{
    callback(null,file.originalname);
  }
})
const upload = multer({storage : storage});*/
/*const multer = require('multer');

const MIME_TYPES = {
  'image/jpg': 'jpg',
  'image/jpeg': 'jpg',
  'image/png': 'png'
};

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, 'images');
  },
  filename: (req, file, callback) => {
    const name = file.originalname.split(' ').join('_');
    const extension = MIME_TYPES[file.mimetype];
    callback(null, name + Date.now() + '.' + extension);
  }
});

const upload = multer({storage : storage});;*/

router.put("/like" , postController.likePost);
router.put("/unlike" , postController.unlikePost);



router.post('/', postController.createPost);

router.delete('/:id' , postController.deletePost);

router.get('/',postController.readPost);

router.put('/:id',postController.updatePost);

router.get('/:id' , postController.readById);
module.exports = router;





























