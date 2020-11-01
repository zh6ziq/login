const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const { sequelize } = require('./models');
const config = require('./config/config')

const app = express()

app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

//routes
require('./routes')(app)

//start database
sequelize.sync()
    .then(() => {
        app.listen(config.PORT)
        console.log(`Server started at ${config.PORT}`)
    })


