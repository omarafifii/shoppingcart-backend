const express = require('express')
const productRouter = require('./routes/product')
const couponRouter = require('./routes/coupon')

// const swaggerUi = require('swagger-ui-express');
// const YAML = require('yamljs');
// const swaggerDocument = YAML.load('./swagger.yaml');
var cors = require('cors')

require('dotenv').config()

const port = process.env.PORT || process.env.MY_PORT || 5000;

require('./db/db')

const app = express()

app.use(cors())
app.use(express.json())
app.use(productRouter)
app.use(couponRouter)

// app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.get('/', (req, res) => {
    res.send('Welcome to the Shopping Cart!')
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})