const Product = require('../models/product');

// Get all products for a pharmacy
const getProducts = async (req, res) => {
  try {
    const products = await Product.find({ pharmacyId: req.user._id });
    res.json(products);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Failed to fetch products.' });
  }
};

// Add a new product
const addProduct = async (req, res) => {
  try {
    const { name, description, price, quantity, dose, category } = req.body;

    const product = new Product({
      name,
      description,
      price,
      quantity,
      dose,
      category,
      image: req.file ? req.file.path : undefined,
      pharmacyId: req.user._id,
    });

    const savedProduct = await product.save();
    res.status(201).json({ product: savedProduct });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Failed to add product.' });
  }
};

// Edit an existing product
const editProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const updates = { ...req.body };

    if (req.file) {
      updates.image = req.file.path;
    }

    const updatedProduct = await Product.findOneAndUpdate(
      { _id: id, pharmacyId: req.user._id },
      updates,
      { new: true }
    );

    if (!updatedProduct) {
      return res.status(404).json({ message: 'Product not found or unauthorized.' });
    }

    res.json({ product: updatedProduct });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Failed to update product.' });
  }
};

// Delete a product
const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedProduct = await Product.findOneAndDelete({
      _id: id,
      pharmacyId: req.user._id,
    });

    if (!deletedProduct) {
      return res.status(404).json({ message: 'Product not found or unauthorized.' });
    }

    res.json({ message: 'Product deleted successfully.' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Failed to delete product.' });
  }
};


const getProductsByCategory = async (req, res) => {
    const { categoryName } = req.params;
    try {
      const products = await Product.find({ category: categoryName });
      res.json(products);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Failed to fetch products by category.' });
    }
  };



module.exports = {
  getProducts,
  addProduct,
  editProduct,
  deleteProduct,
  getProductsByCategory,
};
