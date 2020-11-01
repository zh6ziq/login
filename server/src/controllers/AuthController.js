const {User} = require('../models')
const jwt = require('jsonwebtoken')
const config = require('../config/config')

function jwtSignUser (user) {
    const ONE_WEEK = 60 * 60 * 24 * 7
    return jwt.sign(user, config.authentication.jwtSecret, {
        expiresIn: ONE_WEEK
    })
}

module.exports = {
    async register (req, res) {
        try {
            //register new user
           const user = await User.create(req.body) 
           res.send(user.toJSON())
        } catch (err) {

            //check if email has been used
            res.status(400).send({
                error: 'This email account was already in use.'
            })
        }
    },
    
    async login (req, res) {
        try {
            //login user with registered email
            const {email, password} = req.body
            const user = await User.findOne({
                where: {
                    email: email
                }
            })
            
            //check if email is valid
            if (!user) {
                return res.status(403).send({
                    error: 'Invalid email address.'
                })
            }

            //check if password is invalid
            const isPasswordValid = await user.comparePassword(password)
            if (!isPasswordValid) {
                return res.status(403).send({
                    error: 'Invalid password.'
                })
            }

            const userJson = user.toJSON()
            res.send({
                user: userJson,
                token: jwtSignUser(userJson)
            })

        } catch (err) {

            //internal server error
            res.status(500).send({
                error: 'An error has occured trying to log in.'
            })
            console.log(err)
        }
    }
}
