const express = require("express");
const bcrypt = require('bcryptjs');
const router = express.Router();
const fileupload = require('../middlewares/fileupload');
const fs = require('fs');
const path = require('path');

const db = require('../config/database');
const User = require('../models/User');
const Details = require('../models/UserDetails');

router.post('/register', async (req, res) => {
    const {username, password} = req.body; 
    const salt = await bcrypt.genSalt(10);
    const encryptedPassword = await bcrypt.hash(password, salt);
    User.create({
        username,
        password: encryptedPassword
    })
    .then(user => {
        return res.status(201).json({
            msg: 'User Created Successfully!!',
            username: user.username
        })
    })
    .catch(err => console.log('err'));
});

router.post('/login', async (req, res) => {
    console.log(req.body);
    const {username, password} = req.body; 
    console.log(username);
    console.log(password);
    const user = await User.findOne({
        where: {
          username
        }
      });
      console.log(user);
    if(!user || user == null) {
        console.log("in");
        return res.status(401).json({
            msg: 'Invalid Credentials!!',

        });
    }
    const isValid = await bcrypt.compare(password, user.password);
    if(isValid) {
        return res.status(200).json({
            msg: 'Logged In Successfully!!',
            username: user.username

        });
    } else {
        return res.status(401).json({
            msg: 'Invalid Credentials!!',

        });
    }
});

router.post('/upload', fileupload.single('jsonFile'), async (req, res, next) => {
    
    try {
        console.log(req.file);
        const {filename} = req.file;
        const jsonString =  fs.readFileSync(path.join('uploads', filename));
        const userData = JSON.parse(jsonString);
        const resp = await Details.bulkCreate(userData);
        return res.status(200).json({
            msg: 'File Uploaded Successfully!!',
        });
      } catch (err) {
        console.log(err);
        return res.status(500).json({
            msg: 'Something Went Wrong!!'
        })
      }
    
});

router.get('/details', async (req, res) => {
    await Details.findAll()
    .then(details => {
        return res.status(200).json({
            'userDetails': details,
            'msg': 'Successful!!'
        })
    })
    .catch(err => {
        return res.status(500).json({
            'msg': 'Something Went Wrong!!'
        })
    });
});

module.exports = router;
