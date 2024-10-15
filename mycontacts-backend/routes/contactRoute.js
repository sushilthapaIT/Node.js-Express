const express = require("express");
const router = express.Router();

router.route('/').get((req, res) => { //api call
    res.status(200).json({message: "Get all contacts"})
});

router.route('/').post((req, res) => { //to create
    res.status(200).json({message: "Create Contact"})
});

router.route('/:id').get((req, res) => { //route for individual contact
    res.status(200).json({message: `Get contacts for ${req.params.id}`})
});

router.route('/:id').put((req, res) => { //to update
    res.status(200).json({message: `Update contacts for ${req.params.id}`})
});

router.route('/:id').delete((req, res) => { //to delete
    res.status(200).json({message: `Delete contacts for ${req.params.id}`})
});

module.exports = router;