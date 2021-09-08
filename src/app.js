<<<<<<< HEAD
const express = require('express');
const app = express();

const routers = require('./api');
const { sequelize } = require('./models');
=======
const express = require('express')
const routers = require('./api')
const { sequelize } = require('./models')
const app = express()
>>>>>>> dev-mellyssa
const swaggerUi = require('swagger-ui-express')
const swaggerFile = require('./swagger_output.json')

app.use(express.json())
app.use('/', routers)
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerFile))

<<<<<<< HEAD
//{ force: true }
sequelize.sync().then(() => {
  console.log('Conectado ao banco de dados')
})

app.listen(3001, () => {
  console.log('Servidor pronto!')
=======
sequelize.sync().then(() => {
  console.log('Banco conectado com sucesso!')
})

app.listen(3001, () => {
  console.log('Servidor em pé....!')
>>>>>>> dev-mellyssa
})