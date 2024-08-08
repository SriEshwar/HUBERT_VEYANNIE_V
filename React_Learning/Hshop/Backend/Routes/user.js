const express = require('express')
const { createUser, findUser } = require('../Controllers/userController')
const router = express.Router()

router.route('/signup').post(createUser)
router.route('/login').post(findUser)

module.exports = router