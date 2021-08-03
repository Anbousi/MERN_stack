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
    .then(allPM => response.json( allPM ))
    .catch(err => response.json({ message: "Something went wrong", error: err }));
}

module.exports.findOneProduct = (req, res) => {
	ProductManager.findOne({ _id: req.params.id })
		.then(oneProduct => res.json(oneProduct))
		.catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.updateProduct = (req , res) => {
    console.log('updating...')
    ProductManager.findOneAndUpdate({_id: req.params.id} ,req.body , {new:true , runValidators:true})
    .then(updateProduct => res.json(updateProduct))
    .catch(err => res.json(err))
}

module.exports.deleteProduct = (req , res) => {
    ProductManager.deleteOne({ _id: req.params.id })
        .then(deleteConfirmation => res.json(deleteConfirmation))
        .catch(err => response.json(err))
}






