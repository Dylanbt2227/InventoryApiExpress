const express = require('express');
const path = require('path');
const router = express.Router();
const InventoryController = require('../controllers/inventoryController');

router.get('/table', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'inventory.html')); 
});
  
router.get('/api/inventory', InventoryController.getAllItems); 
router.get('/api/inventory/:id', InventoryController.getItemById);
router.post('/api/inventory', InventoryController.addItem);
router.put('/api/inventory/:id', InventoryController.updateItem);
router.delete('/api/inventory/:id', InventoryController.deleteItem);

module.exports = router;