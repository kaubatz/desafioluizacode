const express = require('express')
const routers = require('./api')
const { sequelize } = require('./models')
const app = express()
const swaggerUi = require('swagger-ui-express')
const swaggerFile = require('./swagger_output.json')

app.use(express.json())
app.use('/', routers)
app.use('/documentacao', swaggerUi.serve, swaggerUi.setup(swaggerFile))

//{ force: true }
sequelize.sync().then(() => {
  console.log('Conectado ao banco de dados\n\n\n\n\n\n\n\n')
})


app.listen(3001, () => {
  console.log('Servidor pronto, escutando porta 3001!\n\n')
})