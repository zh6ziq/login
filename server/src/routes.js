const AuthController = require('./controllers/AuthController')
const AuthContPolicy = require('./policies/AuthContPolicy')


module.exports = (app) => {
    app.post('/register',
        AuthContPolicy.register,
        AuthController.register
    )
    app.post('/login',
        AuthController.login
    )
}
