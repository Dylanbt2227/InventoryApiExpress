const mysql = require('mysql');
const dotenv = require('dotenv');

dotenv.config();

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to database:', err);
    return;
  }
  console.log('Connected to database');
});

class InventoryModel {
  constructor() {
    this.connection = connection;
  }
  

  getAllItems() {
    return new Promise((resolve, reject) => {
      const query = 'SELECT * FROM inventory';
      this.connection.query(query, (error, results) => {
        if (error) {
          reject(error);
        } else {
          resolve(results);
        }
      });
    });
  }

  getItemById(id) {
    return new Promise((resolve, reject) => {
      const query = 'SELECT * FROM inventory WHERE id = ?';
      this.connection.query(query, [id], (error, results) => {
        if (error) {
          reject(error);
        } else {
          resolve(results[0]);
        }
      });
    });
  }

  addItem(item) {
    return new Promise((resolve, reject) => {
      const query = 'INSERT INTO inventory SET ?';
      this.connection.query(query, item, (error, results) => {
        if (error) {
          reject(error);
        } else {
          resolve(results.insertId);
        }
      });
    });
  }

  updateItem(id, item) {
    return new Promise((resolve, reject) => {
      const query = 'UPDATE inventory SET ? WHERE id = ?';
      this.connection.query(query, [item, id], (error, results) => {
        if (error) {
          reject(error);
        } else {
          resolve(results.affectedRows);
        }
      });
    });
  }

  deleteItem(id) {
    return new Promise((resolve, reject) => {
      const query = 'DELETE FROM inventory WHERE id = ?';
      this.connection.query(query, [id], (error, results) => {
        if (error) {
          reject(error);
        } else {
          resolve(results.affectedRows);
        }
      });
    });
  }
}

module.exports = InventoryModel;