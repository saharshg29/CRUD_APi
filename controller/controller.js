const express = require('express');
const model = require('../modle/model')

const router = express.Router();

router.get('/', (req, res) => {
    res.send('Homepage')
});


router.post('/', (req, res) => {
    var { genreID, name } = req.body;
    const postData = new model({
        genreID: genreID,
        name: name
    });
    postData.save()
        .then(console.log('Posted successfully'))
        .catch(err => console.error(`${err}`));
})


router.patch('/:id', (req, res) => {
    const loadedData = model.findByIdAndUpdate(
        { _id: req.params.id },
        { $set: { name: req.body.name } },
        { new: true }
    )
        .then(console.log('Updated Sucessfully'))
        .catch(err => console.error(`${err}`));
})


router.delete('/:id', (req, res) => {
    const deletedData = model.findByIdAndDelete(req.params.id)
        .then(console.log(" Deleted Sucessfully"))
        .catch(err => console.error(`${err}`));
    console.log(deletedData);
})

module.exports = router;