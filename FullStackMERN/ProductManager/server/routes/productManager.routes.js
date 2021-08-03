const ProductManagerController = require('../controllers/productManager.controller');
module.exports = function(app){
    app.get('/api', ProductManagerController.index);
    app.get('/:id', ProductManagerController.findOneProduct);
    app.get('/api/pm', ProductManagerController.showAllPM);
    app.post('/api/pm/create', ProductManagerController.createPM);
    app.put('/:id', ProductManagerController.updateProduct);
    app.delete('/:id', ProductManagerController.deleteProduct);
}
