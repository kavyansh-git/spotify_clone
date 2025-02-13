const express = require("express");
const router = express.Router();
const User = require("../../models/User");
const {getToken} = require("./utils/helpers");
const bcrypt = require("bcrypt");

// This POST route will help to register a user
router.post("/register", async (req, res) => {
    // This code is run when the /register API is called as POST request
    //My req.body will be of the format{email,password,firstName,lastname,username}
    const { email, password, firstName, lastName, username } = req.body;

    // Step 2 : Does a user with this email already exist? If yes, we throw an error.
    const user = await User.findOne({ email: email });
        if (user) {
            // status code by default is 200
            return res.status(403).json({error:"A user with this email already exists"});
            }
        
    
    // This is a valid request
    // Step 3: create a new user in the DB
    // Step 3.1: we do not store passwords in plain text.
    // xyz: we convert the plain text password to a hash.
    // xyz -->skjdhfkshdfkjshkdfhshdjkhkj
    // My hash of xyz depends on 2 parameters.
    // If i keep those 2 parameters same then xyz ALWAYS gives the same hash.
    
    const hashedPassword = await bcrypt.hash(password,10);
    const newUserData = { 
          email,
          password: hashedPassword,
          firstName,
          lastName,
          username };
    const newUser = await User.create(newUserData);

    // Step 4: we want to create a token to return to the user.
    const token = await getToken(email, newUser);

    //Step 5: return the result to the user.
    const userToReturn = {...newUser.toJSON(), token}; 
    delete userToReturn.password;
    return res.status(200).json(userToReturn); 


});

router.post("/login" , async(req , res) => {
    //Step1: get email and password sent by user from req.body
    const{email , password} = req.body;
    //Step2: Check if a user with the given email exists , if not then the credentials are invalid.
    const user = await User.findOne({email: email});
    if(!user) {
        return res.status(403).json({err: "Invalid credentials"});
    }
    // Step3: if the user exists , check if the password is correct, if not then the credentials are invaid.
    // This is a tricky step. Why? Because we have stored the original password in a hashed form which we cannot restore back to original form.
    // I cannot do: if(password === user.password)
    // bcrypt.compare enabled us to compare 1 password in plaintext (password from req.body) to a hashed password (the one in our db) securely.
    
    const isPasswordValid = await bcrypt.compare(password, user.password);
    // This will be true or false.
    if(!isPasswordValid) {
        return res.status(403).json({err: "Invalid credentials"});
    }
    // Step4: if the credentials are correct , return a token to the user.
    const token = await getToken(user.email, user);
    const userToReturn = {...user.toJSON(), token}; 
    delete userToReturn.password;
    return res.status(200).json(userToReturn); 
});

module.exports = router;