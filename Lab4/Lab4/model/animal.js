// Kyan M, Syed Hassnat A
// Lab 4
const mongoose = require('mongoose');
require('dotenv').config();

//  Connect to MongoDB
const conn = process.env.DB_STRING;

const connection = mongoose.createConnection(conn, {
	useNewUrlParser: true,
	useUnifiedTopology: true
});

// This will create a simple schema for an animal
const AnimalSchema = new mongoose.Schema({
	Zoo: {type: String, required: true},
    scientificName: {type: String, required: true},
    commonName: { type: String, required: true},
    givenName: {type: String, required: true},
    Gender: {type: String, required: true},
    DOB: {type: Date, required: true},
    Age: {type: Number, required: true},
    isTransportable: {type: Boolean, required: true}
});

const Animal = connection.model('Animal', AnimalSchema);
// Exposes our connection
module.exports = {connection, Animal};
