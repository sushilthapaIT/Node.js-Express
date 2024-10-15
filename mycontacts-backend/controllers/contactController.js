const asyncHandler = require("express-async-handler");

//@desc Get all contacts
//@route GET /api/contacts
//@access public 
const getContact = asyncHandler((req, res) => { //api call
    res.status(200).json({message: "Get all contacts"})
});

//@desc Create New Contacts
//@route Post /api/contacts
//@access public 
const createContact = asyncHandler((req, res) => { //to create
    console.log("The request body is" ,req.body);
    const {name, email, number} = req.body;
    if(!name || !email || !number){
        res.status(400);
        throw new Error("All fields are mandatory.")
    }
    res.status(201).json({message: "Create Contact"})
});

//@desc Get Contacts
//@route GET /api/contacts
//@access public 
const getContacts = asyncHandler((req, res) => { //route for individual contact
    res.status(200).json({message: `Get contacts for ${req.params.id}`})
});

//@desc Update New Contacts
//@route PUT /api/contacts:id
//@access public 
const updateContact = asyncHandler((req, res) => { //to update
    res.status(200).json({message: `Update contacts for ${req.params.id}`})
});

//@desc Delete Contacts
//@route Delete /api/contacts:id
//@access public 
const deleteContact = asyncHandler((req, res) => { //to update
    res.status(200).json({message: `Update contacts for ${req.params.id}`})
});

module.exports = {getContacts, createContact, getContact, updateContact, deleteContact};