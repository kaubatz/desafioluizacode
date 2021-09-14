const jwt = require('jsonwebtoken');
const JWTSecret = '::!Luiza<code>3::Squad-C::ENIACgirls!::';

const autenticacao = (req, res, next) =>{
    
    const tokenAutenticacao = req.headers['authorization'];
    const bearer = tokenAutenticacao.split(' ');
    const token = bearer[0];
    
    if(token != undefined) {
        jwt.verify(token,JWTSecret,(err, data) => {
            if(err){
                res.status(401).json('Token inválido!');
            } else {
                req.token = token;
                next();
            }
        })
    } else {
        res.status(401).json('Token inválido!');
    }
}

module.exports = autenticacao;