const express = require('express');
const cors = require('cors')
require('./server/config/mongoose.config');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())
require('./server/routes/author.routes')(app);
const port = 8000;
    
app.listen(port, () => console.log(`Listening on port: ${port}`) );