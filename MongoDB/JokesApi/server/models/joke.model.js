const mongoose = require("mongoose");

const JokeSchema = new mongoose.Schema({
	setup: {
		type: String,
		required: [true, 'This field is required'],
		minlength:[10, 'Must be at least 10 chars'],
	},

	punchline:{
		type : String,
		required: [true, 'This field is required'],
		minlength:[3, 'Must be at least 3 chars'],
	} 
});

const Joke = mongoose.model("Joke", JokeSchema);

module.exports = Joke;