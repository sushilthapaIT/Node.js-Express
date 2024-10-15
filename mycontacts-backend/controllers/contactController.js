//@desc Get all contacts
//@route GET /api/contacts
//@access public 
const getContact = async (req, res) => { //api call
    res.status(200).json({message: "Get all contacts"})
};

//@desc Create New Contacts
//@route Post /api/contacts
//@access public 
const createContact = async (req, res) => { //to create
    console.log("The request body is" ,req.body);
    const {name, email, number} = req.body;
    if(!name || !email || !number){
        res.status(400);
        throw new Error("All fields are mandatory.")
    }
    res.status(201).json({message: "Create Contact"})
};

//@desc Get Contacts
//@route GET /api/contacts
//@access public 
const getContacts = async (req, res) => { //route for individual contact
    res.status(200).json({message: `Get contacts for ${req.params.id}`})
};

//@desc Update New Contacts
//@route PUT /api/contacts:id
//@access public 
const updateContact = async (req, res) => { //to update
    res.status(200).json({message: `Update contacts for ${req.params.id}`})
};

//@desc Delete Contacts
//@route Delete /api/contacts:id
//@access public 
const deleteContact = async (req, res) => { //to update
    res.status(200).json({message: `Update contacts for ${req.params.id}`})
};

module.exports = {getContacts, createContact, getContact, updateContact, deleteContact};