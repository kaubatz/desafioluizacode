const swaggerAutogen = require('swagger-autogen')()

const outputFile = './src/swagger_output.json';
const endpointFiles = ['./src/app.js']

const doc = {
  info: {
      version: "1.0.0",
      title: "Desafio Luiza<code> - Squad C: ENIAC girls",
      description: "Projeto desenvolvido para o desafio final do Luiza<code> 3"
  },
  host: "localhost:3001",
  basePath: "/",
  schemes: ['http', 'https'],
  consumes: ['application/json'],
  produces: ['application/json'],
  tags: [
      { 
          "name": "Produto",
          "description": "Endpoints relacionados ao recurso de produto"
      }
  ],
  definitions: {
      Produto: {
          id: 1,
          nome: 'Notebook Aspire 3',
          marca: 'acer',
          categoria: 'Informática',
          preco: 5000.00,
      },
      NovoProduto: {
          $nome: 'Monitor Pro Gamer',
          $marca: 'LG',
          $categoria: 'Informática',
          $preco: 1500.00        
      }
  },
  securityDefinitions: {
    apiKeyAuth: {
      type: 'apiKey',
      in: 'header', // can be 'header', 'query' or 'cookie'
      name: 'authorization', // name of the header, query parameter or cookie
      description: 'Insira seu token para garantir acesso aos endpoints'
    },
  },
}

swaggerAutogen(outputFile, endpointFiles, doc)