const AuthorController = require('../controllers/author.controller');
module.exports = function(app){
    app.get('/api', AuthorController.index);
    app.post('/new', AuthorController.createAuthor);
    app.get('/authors' , AuthorController.getAllAuthors)
    app.get('/:id' , AuthorController.getOneAuthors)
    app.delete('/:id', AuthorController.deleteAuthor);
    app.put('/edit/:id', AuthorController.updateAuthor );
}


