const express = require('express');
const router = express.Router();
// const { check, validationResult } = require('express-validator/check');
// const auth = require('../middleware/auth');

const Contact = require('../models/Contact');
const User = require('../models/User');

// @route    GET api/contacts
// @desc     Get all contacts
// @access   Private

// router.get('/', async (req, res) => {
//     try {
//         const contacts = await Contact.find({ user: req.user.id }).sort({
//             date: -1
//         });
//         res.json(contacts);
//     } catch (err) {
//         console.error(err.message);
//         res.status(500).send('Server Error');
//     }
// });


// router.get('/', async (req, res) => {
//     await User.find({}, (err, users) => {

//         if (err) {
//             return res.status(422).send(err)
//         }

//         if (!users) {
//             return res.status(422).send({ error: "No data in the collection" })
//         }

//         res.send({ Allusers: users })

//     })
// })

router.get('/', function (req, res) {
    res.send('ssssss')
    // do something w/ req.body or req.files 
});


module.exports = router;
