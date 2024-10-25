const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

//@desc Register a user
//@route POST /api/users/register
//@access public
const registerUser = asyncHandler(async (req, res) => {
    const {username, email, password} = req.body;
    if(!username || !email || !password){
        res.status(400);
        throw new Error("All fields are mandatory!!!");
    }
    const userAvailable = await User.findOne({email});
    if(userAvailable){
        throw new Error("User already registered.")
    }

    //Hash password
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
        username,
        email,
        password: hashedPassword,
    }); //creating new user

    if(user){
        res.status(201).json({_id: user_id, email:user.email});
    }
    else{
        res.status(400);
        throw new Error("")
    }
    res.json({ message: "Register the user" });
});


//@desc Login a user
//@route POST /api/users/register
//@access public
const loginUser = asyncHandler(async (req, res) => {
    const {email, password} = request.body;
    if(!email || !password){
        res.status(400);
        throw new Error("All fields are mandatory!")
    }
    const user = await User.findOne({email});
    //comparing password with hashedpassword
    if(user &&(await bcrypt.compare(password, user.password))){
        const accessToken = jwt.sign({
            user: {
                username: user.username,
                email:    user.email,
                id:       user.id,
            },
        }, 
        process.env.ACCESS_TOKEN_SECRET,
        {expiresIn: "1m"} //expiry time of a token
    );
        res.status(200).json({accessToken}); //providing access token
    }else{
       res.status(401) 
       throw new Error("Email or Password is not valid");
    }
});

//@desc Current user information
//@route GET /api/users/current
//@access private
const currentUser = asyncHandler(async (req, res) => {
    res.json({ message: "Current user information" });
});

module.exports = {registerUser, loginUser, currentUser};