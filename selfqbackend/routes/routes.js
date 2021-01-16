const { request, response } = require('express')
const express = require('express')
const router = express.Router()
const singUpTemplateCopy = require('../models/SignUpModels')
const bcrypt = require('bcrypt')


router.post('/singup', async (request, response) =>{

    const saltPassword = await bcrypt.genSalt(10)
    const securePassword = await bcrypt.hash(request.body.password, saltPassword)

    const singedUpUser = new singUpTemplateCopy({
        fullName:request.body.fullName,
        username:request.body.username,
        email:request.body.email,
        password:securePassword
    })
    singedUpUser.save()
    .then(data =>{
        response.json(data)
    })
    .catch(error =>{
        response.json(error)
    })
})

router.get('/signin')
module.exports = router
