// Endpoints for strings 
const String = require('./string');
const express = require("express");
const router = new express.Router();

// GET--- endpoint for getting all strings
router.get('/', async function (req, res, next) {
    try {
        let strings = String.getAllStrings();
        return res.json( { strings } );
    } catch (err) {
        return next(err);
    }
});

// POST--- endpoint for adding a string
router.post('/', async function (req, res, next) {
    try {
        console.log(req.body)
        let updatedStrings = String.addString(req.body.newString);
        return res.json( { updatedStrings } );
    } catch (err) {
        return next(err);
    }
});

module.exports = router;