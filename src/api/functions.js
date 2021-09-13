const jwt = require('jsonwebtoken');
const JWTSecret = '::!Luiza<code>3::Squad-C::ENIACgirls!::';

const autenticacao = (req, res, next) =>{
    
    const tokenAutenticacao = req.headers['authorization'];
    //console.log(tokenAutenticacao);
    const bearer = tokenAutenticacao.split(' ');
    //console.log(bearer);
    const token = bearer[0];
    //console.log(token);
    
    if(token != undefined) {
        jwt.verify(token,JWTSecret,(err, data) => {
            if(err){
                res.status(401).json('Token inválido!');
            } else {
                req.token = token;
                //console.log(data);
                next();
            }
        })
    } else {
        res.status(401).json('Token inválido!');
    }
}

module.exports = autenticacao;