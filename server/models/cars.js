var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Car = new Schema({
    type: String,
    color: String,
    rating: Number,
});

mongoose.connect(process.env.MONGO_URI);
module.exports = mongoose.model('cars', Car);
