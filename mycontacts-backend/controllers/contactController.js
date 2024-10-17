const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel");

//@desc Get all contacts
//@route GET /api/contacts
//@access public 
const getContact = asyncHandler(async(req, res) => { //api call
    const contact= await Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error("Contact not found");
    }
    res.status(200).json(contact);
});

//@desc Create New Contacts
//@route Post /api/contacts
//@access public 
const createContact = asyncHandler(async(req, res) => { //to create
    console.log("The request body is" ,req.body);
    const {name, email, number} = req.body;
    if(!name || !email || !number){
        res.status(400);
        throw new Error("All fields are mandatory.")
    }
    const contact = await Contact.create({
        name,
        email,
        number,
    });
    res.status(201).json(contact);
});

//@desc Get Contacts
//@route GET /api/contacts
//@access public 
const getContacts = asyncHandler(async(req, res) => { //api call
    const contacts = await Contact.find();
    res.status(200).json(contacts);
});


//@desc Update New Contacts
//@route PUT /api/contacts:id
//@access public 
const updateContact = asyncHandler(async(req, res) => { //to update
    res.status(200).json({message: `Update contacts for ${req.params.id}`})
});

//@desc Delete Contacts
//@route Delete /api/contacts:id
//@access public 
const deleteContact = asyncHandler(async(req, res) => { //to update
    res.status(200).json({message: `Update contacts for ${req.params.id}`})
});

module.exports = {getContacts, createContact, getContact, updateContact, deleteContact};