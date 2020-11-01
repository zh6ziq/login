const Joi = require('joi')

module.exports = {
    register (req, res, next) {
        const schema = Joi.object({
            // email: Joi.string().email()
            email: Joi.string()
                .email({
                    minDomainSegments: 2
                }),
            password: Joi.string()
                .regex(new RegExp(/^[-@./#&+\w\s]{8,30}$/))
                .required()


            // password: Joi.string().regex(
            //     new RegExp('^ [a - zA - Z0 - 9]{ 8, 32}$')
            // )
        })
        const { error } = schema.validate(req.body)
        // const schema = Joi.object({
        //     email: Joi.string().email(),
        //     password: Joi.string().pattern(
        //         new RegExp('^[a-zA-Z0-9]{3,30}$')
        //     )
        // })
        // const {error, value} = schema.validate({email: '', password: '', schema})
        
        if (error) {
            switch (error.details[0].context.key) {
                case 'email': 
                    res.status(400).send({
                        error: 'You must provide a valid email address'
                    })
                break
                case 'password':
                    res.status(400).send({
                        error: `The password provided failed to match the following rules: 
                        <br>
                        1. It must contain ONLY the following character: lower case, upper case. numerics.
                        <br>
                        2. It must be at least 8 characters in length.`
                    })
                break
                default:
                    res.status(400).send({
                        error: 'Invalid registration information'
                    })
            }
        } else {
            next() 
        }

        
    }
}