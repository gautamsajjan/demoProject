// productroutes.js
const express = require('express');
const multer = require('multer');
const authenticate = require('../middleware/authMiddleware');
const {
  getProducts,
  addProduct,
  editProduct,
  deleteProduct,
  getProductsByCategory,
} = require('../controllers/productController');

const router = express.Router();

// Set up multer for image uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });

// Define routes
router.get('/', authenticate, getProducts);
router.post('/add', authenticate, upload.single('image'), addProduct);
router.put('/edit/:id', authenticate, upload.single('image'), editProduct);
router.delete('/delete/:id', authenticate, deleteProduct);

router.get('/category/:categoryName', getProductsByCategory);


module.exports = router;
