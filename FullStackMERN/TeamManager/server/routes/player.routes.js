const PlayerController = require('../controllers/player.controller');
module.exports = function(app){
    app.get('/players', PlayerController.getAllPlayers);
    app.post('/players/addplayer', PlayerController.createPlayer);
    app.delete('/players/delete/:id', PlayerController.deletePlayer);

}
