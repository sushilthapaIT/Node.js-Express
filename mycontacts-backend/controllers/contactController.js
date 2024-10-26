const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel");

//@desc Get all contacts
//@route GET /api/contacts
//@access private 
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
//@access private 
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
        user_id: req.user_id,
    });
    res.status(201).json(contact);
});

//@desc Get Contacts
//@route GET /api/contacts
//@access private 
const getContacts = asyncHandler(async(req, res) => { //api call
    const contacts = await Contact.find({user_id: req.user.id});
    res.status(200).json(contacts);
});


//@desc Update New Contacts
//@route PUT /api/contacts:id
//@access private 
const updateContact = asyncHandler(async(req, res) => { //to update
    const contact = await Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error("Contact not found.")
    }

    if(contact.user_id.toString() !== req.user.id){
        res.status(403);
        throw new Error("User do not have permission to update other user contacts.");
    }

    const updatedContact = await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new: true}
    );
    res.status(200).json(updateContact);
});

//@desc Delete Contacts
//@route Delete /api/contacts:id
//@access private 
const deleteContact = asyncHandler(async (req, res) => {
    const contact = await Contact.findByIdAndDelete(req.params.id);
    if (!contact) {
        res.status(404);
        throw new Error("Contact not found");
    }

    if(contact.user_id.toString() !== req.user.id){
        res.status(403);
        throw new Error("User do not have permission to update other user contacts.");
    }
    
    res.status(200).json({ message: `Contact ${req.params.id} deleted` });
});


module.exports = {getContacts, createContact, getContact, updateContact, deleteContact};