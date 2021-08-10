const Router = require('express')
const router = new Router()
const controller = require('./authController')
const { check } = require('express-validator')

router.post('/registration', [
    check('username', "Can't been empty").notEmpty(),
    check('password', 'must been more than 4 symbol and less than 10 symbol').isLength({ min: 4, max: 10 })

], controller.registration)
router.post('/login', controller.login)
router.get('/users', controller.getUsers)

module.exports = router