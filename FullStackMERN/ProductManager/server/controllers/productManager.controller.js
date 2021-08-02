const { request, response } = require('express');
const {ProductManager} = require('../models/productManager.model');

module.exports.index = (request, response) => {
    response.json({
    message: "Hello World"
    });
}

module.exports.createPM = (request , response) => {
    const{title , price , description} = request.body;
    ProductManager.create({
        title,
        price,
        description
    })
    .then(pm => response.json(pm))
    .catch(err => response.json(err));
}

module.exports.showAllPM = (request , response)=> {
    ProductManager.find()
    .then(allPM => response.json({ ProductManagers: allPM }))
    .catch(err => response.json({ message: "Something went wrong", error: err }));
}


