const swaggerAutogen = require('swagger-autogen')()

const outputFile = './src/swagger_output.json';
const endpointFiles = ['./src/app.js']

const doc = {
  info: {
      version: "1.0.0",
      title: "Desafio Luiza code - Squad C: ENIAC girls",
      description: "Projeto desenvolvido para o desafio final do Luiza code 3"
  },
  host: "localhost:3001",
  basePath: "/",
  schemes: ['http', 'https'],
  consumes: ['application/json'],
  produces: ['application/json'],
  tags: [
      { 
          "name": "Usuario",
          "description": "Endpoints relacionados ao recurso de usuario"
      },      
      { 
        "name": "Loja",
        "description": "Endpoints relacionados ao recurso de loja"
      },
      { 
          "name": "Produto",
          "description": "Endpoints relacionados ao recurso de produto"
      },
      { 
        "name": "Cliente",
        "description": "Endpoints relacionados ao recurso de cliente"
      },
      { 
        "name": "Compra",
        "description": "Endpoints relacionados ao recurso de compra"
      }
  ],
  definitions: {
    Usuario: {
      id: 1,
      nome: 'Nathaly',
      email: 'nathalykaubatz@gmail.com',
      senha: '123',
      createdAt: '2021-09-14T19:46:57.326Z',
      updatedAt: '2021-09-14T19:46:57.326Z'
    },
    NovoUsuario: {
      nome: 'Leticia Nunes',
      email: 'leticianunes@gmail.com',
      senha: '123',
    },
    Loja: {
      id: 1,
      cnpj: '00111222000133',
      nome: 'Loja Matriz',
      endereco: 'Rua Voluntários da Franca, 1000, Centro - Franca/SP',
      createdAt: '2021-09-14T03:00:00.000Z',
      updatedAt: '2021-09-14T03:00:00.000Z'
    },
    Produto: {
        id: 1,
        nome: 'Notebook Aspire 3',
        marca: 'Acer',
        categoria: 'Informática',
        preco: 5000.00,
    },
    Cliente: {
      id: 2,
      nome: 'Celiane Brasil',
      cpf: '12312312344',
      endereco: 'Ruuuuuuuua, 1 - Brasil',
      email: 'celiane@celiane.com',
      createdAt: '2021-09-14T20:34:33.574Z',
      updatedAt: '2021-09-14T20:34:33.574Z'
    },
    NovoCliente: {
      $nome: 'Celiane Brasil',
      $cpf: '12312312344',
      $endereco: 'Ruuuuuuuua, 1 - Brasil',
      $email: 'celiane@celiane.com',
    },
    Compra: {        
      id: 1,
      data: '2021-09-14T19:47:39.867Z',
      valorTotal: 0,
      pagamento: 'DINHEIRO',
      status: 'RETIRADO',
      createdAt: '2021-09-14T19:47:39.868Z',
      updatedAt: '2021-09-14T20:16:28.487Z',
      LojaId: 1,
      ClienteId: 1,                    
    },
    NovaCompra: {              
      $valorTotal: 0, 
      $pagamento: 'DINHEIRO', 
      $LojaId: 1,
      $ClienteId: 1,
      $ProdutoId: 1
    }    
                                  
  },
  securityDefinitions: {
    apiKeyAuth: {
      type: 'apiKey',
      in: 'header', // can be 'header', 'query' or 'cookie'
      name: 'authorization', // name of the header, query parameter or cookie
      description: 'Insira seu token para garantir acesso aos endpoints'
    }
  }
}

swaggerAutogen(outputFile, endpointFiles, doc)