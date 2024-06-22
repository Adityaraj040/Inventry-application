import express from 'express';
import ProductController from './src/controllers/product.controller.js';
import ejsLayouts from 'express-ejs-layouts';
import path from 'path';

const server = express();

// Setup view engine settings
server.set("view engine", "ejs");
// Path of our views
server.set("views", path.join(path.resolve(), "src", "views"));

// Use express-ejs-layouts
server.use(ejsLayouts);

// Create an instance of ProductController
const productController = new ProductController(); 
server.get('/', productController.getProducts);
server.get('/new', productController.getAddForm)
server.post('/', productController.addNewProduct)

// Serve static files from the 'src/views' directory
server.use(express.static('src/views'));

// Start the server
server.listen(3400, () => {
    console.log('Server is listening on port 3400');
});
