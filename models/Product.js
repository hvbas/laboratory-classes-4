// Products array
const items = ['Ania', 'Marek', 'Kasia'];

class Product {
  constructor(name, desc) {
    this.name = name;
    this.desc = desc;
  }

  // Get all products
  static getAll() {
    return items;
  }

  // Add new product
  static add(name) {
    items.push(name);
  }

  // Find product by name
  static findByName(name) {
    return items.find(item => item === name);
  }

  // Delete product by name
  static deleteByName(name) {
    const idx = items.indexOf(name);
    if (idx !== -1) {
      items.splice(idx, 1);
      return true;
    }
    return false;
  }

  // Get last product
  static getLast() {
    return items.length > 0 ? items[items.length - 1] : null;
  }
}

module.exports = {
  getAll: Product.getAll,
  add: Product.add,
  findByName: Product.findByName,
  deleteByName: Product.deleteByName,
  getLast: Product.getLast
};
