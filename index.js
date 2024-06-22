import express from 'express';
import ProductController from './src/controllers/product.controller.js';
<<<<<<< HEAD
import ejsLayouts from 'express-ejs-layouts';
=======
import expressEjsLayouts from 'express-ejs-layouts';

>>>>>>> 2e12f3fa25d3870d6e502a93e3865acac4353ac5
import path from 'path';

const server = express();

// Setup view engine settings
server.set("view engine", "ejs");
// Path of our views
server.set("views", path.join(path.resolve(), "src", "views"));

<<<<<<< HEAD
// Use express-ejs-layouts
server.use(ejsLayouts);

// Create an instance of ProductController
=======
server.use(expressEjsLayouts)

// create an instance of ProductController
>>>>>>> 2e12f3fa25d3870d6e502a93e3865acac4353ac5
const productController = new ProductController(); 
server.get('/', productController.getProducts);
server.get('/new', productController.getAddForm)
server.post('/', productController.addNewProduct)

// Serve static files from the 'src/views' directory
server.use(express.static('src/views'));

<<<<<<< HEAD
// Start the server
server.listen(3400, () => {
    console.log('Server is listening on port 3400');
});
=======
server.listen(3400);
console.log('Server is listing at 3400');
>>>>>>> 2e12f3fa25d3870d6e502a93e3865acac4353ac5
