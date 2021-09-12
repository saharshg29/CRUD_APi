const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/VidoLy')
    .then(console.log('Connected successfull with MongoDB...'))
    .catch(err => console.error(`Connection with MongoDB failed ${err}`));


const schema = new mongoose.Schema({
    genreID: Number,
    name: String
});

const model = mongoose.model('VideoLy', schema);

module.exports = model;