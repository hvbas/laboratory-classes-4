const { MENU_LINKS } = require('../constants/navigation');
const { STATUS_CODE } = require('../constants/statusCode');
const Product = require('../models/Product');

// Get all products
const getProductsView = (req, res) => {
  const list = Product.getAll();
  res.render('products.ejs', {
    headTitle: 'Shop - Products',
    path: '/products',
    menuLinks: MENU_LINKS,
    activeLinkPath: '/products',
    products: list
  });
};

// Show add product form
const getAddProductView = (req, res) => {
  res.render('add-product.ejs', {
    headTitle: 'Shop - Add Product',
    path: '/products/add',
    menuLinks: MENU_LINKS,
    activeLinkPath: '/products/add'
  });
};

// Handle new product
const addNewProduct = (req, res) => {
  const { name } = req.body;
  Product.add(name);
  res.redirect('/products/new');
};

// Show newest product
const getNewProductView = (req, res) => {
  const last = Product.getLast();
  res.render('new-product.ejs', {
    headTitle: 'Shop - New Product',
    path: '/products/new',
    menuLinks: MENU_LINKS,
    activeLinkPath: '/products/new',
    product: last
  });
};

// Show single product
const getProductView = (req, res) => {
  const { name } = req.params;
  const item = Product.findByName(name);
  
  if (!item) {
    return res.status(STATUS_CODE.NOT_FOUND).render('404.ejs', {
      headTitle: 'Shop - Product Not Found',
      path: '/products',
      menuLinks: MENU_LINKS,
      activeLinkPath: '/products'
    });
  }
  
  res.render('product.ejs', {
    headTitle: `Shop - ${item}`,
    path: `/products/${item}`,
    menuLinks: MENU_LINKS,
    activeLinkPath: '/products',
    product: item
  });
};

// Delete product
const deleteProduct = (req, res) => {
  const { name } = req.params;
  const ok = Product.deleteByName(name);
  
  if (ok) {
    return res.status(STATUS_CODE.OK).json({ success: true });
  }
  
  res.status(STATUS_CODE.NOT_FOUND).json({ success: false });
};

module.exports = {
  getProductsView,
  getAddProductView,
  addNewProduct,
  getNewProductView,
  getProductView,
  deleteProduct
};
