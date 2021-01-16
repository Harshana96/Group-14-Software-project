const { response } = require('express');
const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator/check');

router.post('/login', [
    check('name', 'Name is required')
], (request, response) => {
    console.log(request.body);
    response.send('User route')
});

module.exports = router;