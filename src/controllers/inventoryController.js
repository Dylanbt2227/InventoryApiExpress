const InventoryModel = require('../models/inventoryModel');
const inventoryModel = new InventoryModel();

class InventoryController {
  static async getAllItems(req, res) {
    try {
      const items = await inventoryModel.getAllItems();
      res.json(items);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }

  static async getItemById(req, res) {
    const { id } = req.params;
    try {
      const item = await inventoryModel.getItemById(id);
      if (item) {
        res.json(item);
      } else {
        res.status(404).json({ error: 'Item not found' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }

  static  addItem(req, res) {
    const {product_name, quantity, price } = req.body;
    try {
      const newItem =  inventoryModel.addItem({product_name, quantity,price });
      res.status(201).json(newItem);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }

  static async updateItem(req, res) {
    const { id } = req.params;
    const { product_name, quantity, price } = req.body;
    try {
      const updatedItem = await inventoryModel.updateItem(id, { product_name, quantity, price });
      if (updatedItem) {
        res.json(updatedItem);
      } else {
        res.status(404).json({ error: 'Item not found' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }

  static async deleteItem(req, res) {
    const { id } = req.params;
    try {
      const deletedItem = await inventoryModel.deleteItem(id);
      if (deletedItem) {
        res.json({ message: 'Item deleted successfully' });
      } else {
        res.status(404).json({ error: 'Item not found' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }
}

module.exports = InventoryController;