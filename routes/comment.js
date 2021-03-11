const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator/check');
const auth = require('../middleware/auth');

const contactModel = require('../models/Contact');
const User = require('../models/User');
const commentModel = require('../models/comment_model');


// @route    POST api/coments
// @desc     Create a contact comment
// @access   Private
// CREATE Comment






router.post("/:contactId/", [
    auth], function (req, res) {
        // res.send('lll')

        // INSTANTIATE INSTANCE OF MODEL
        const comment = new commentModel(req.body);

        // SAVE INSTANCE OF Comment MODEL TO DB
        comment
            .save()
            .then(comment => {
                return contactModel.findById(req.params.contactId);

            })
            .then(contact => {
                contact.comments.unshift(comment);
                return contact.save();
            })

            .catch(err => {
                console.log(err);
            });
    });
module.exports = router;
