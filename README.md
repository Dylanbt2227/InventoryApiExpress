# Inventory App

This is a simple inventory management application built with Node.js, Express, and MySQL.

## Project Structure

```
inventory-app
├── src
│   ├── server.js
│   ├── routes
│   │   ├── index.js
│   │   └── inventory.js
│   ├── controllers
│   │   └── inventoryController.js
│   ├── models
│   │   └── inventoryModel.js
│   └── views
│       ├── index.html
│       └── inventory.html
├── package.json
├── .env
└── README.md
```

## Files

### `src/server.js`

This file is the entry point of the application. It sets up the Express server, connects to the MySQL database, and listens for incoming requests.

### `src/routes/index.js`

This file exports a function `setRoutes` which sets up the routes for the application. It includes routes for the home page and the inventory page.

### `src/routes/inventory.js`

This file exports a function `inventoryRoutes` which defines the routes related to the inventory. It handles CRUD operations for managing the inventory.

### `src/controllers/inventoryController.js`

This file exports a class `InventoryController` which contains methods for handling the inventory routes. It interacts with the `inventoryModel` to perform database operations.

### `src/models/inventoryModel.js`

This file exports a class `InventoryModel` which provides methods for interacting with the MySQL database. It handles querying, inserting, updating, and deleting inventory data.

### `src/views/index.html`

This file is an HTML template for the home page. It displays a welcome message and provides links to navigate to other pages.

### `src/views/inventory.html`

This file is an HTML template for the inventory page. It displays the inventory data and provides forms for adding, updating, and deleting inventory items.

### `package.json`

This file is the configuration file for npm. It lists the dependencies and scripts for the project.

### `.env`

This file is used to store environment variables, such as the MySQL database connection details.

## Getting Started

1. Clone the repository.
2. Install the dependencies using `npm install`.
3. Set up the MySQL database and update the `.env` file with the database connection details.
4. Start the server using `npm start`.
5. Open your browser and navigate to `http://localhost:3000` to access the application.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.