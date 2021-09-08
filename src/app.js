const express = require('express')
const routers = require('./api')
const { sequelize } = require('./models')
const app = express()
const swaggerUi = require('swagger-ui-express')
const swaggerFile = require('./swagger_output.json')

app.use(express.json())
app.use('/', routers)
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerFile))

sequelize.sync().then(() => {
  console.log('Banco conectado com sucesso!')
})

app.listen(3001, () => {
  console.log('Servidor em pé....!')
})