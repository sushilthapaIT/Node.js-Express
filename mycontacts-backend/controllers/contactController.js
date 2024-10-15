//@desc Get all contacts
//@route GET /api/contacts
//@access public 

const getContact = (req, res) => { //api call
    res.status(200).json({message: "Get all contacts"})
};

//@desc Create New Contacts
//@route Post /api/contacts
//@access public 

const createContact = (req, res) => { //to create
    console.log("The request body is" ,req.body);
    res.status(201).json({message: "Create Contact"})
};

//@desc Get Contacts
//@route GET /api/contacts
//@access public 

const getContacts = (req, res) => { //route for individual contact
    res.status(200).json({message: `Get contacts for ${req.params.id}`})
};

//@desc Update New Contacts
//@route PUT /api/contacts:id
//@access public 

const updateContact = (req, res) => { //to update
    res.status(200).json({message: `Update contacts for ${req.params.id}`})
};

//@desc Delete Contacts
//@route Delete /api/contacts:id
//@access public 

const deleteContact = (req, res) => { //to update
    res.status(200).json({message: `Update contacts for ${req.params.id}`})
};

module.exports = {getContacts, createContact, getContact, updateContact, deleteContact};