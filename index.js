const express = require('express');

const app = express();


app.get('/', (req, res)=>{

    console.log('ROTA RAIZ DE VERBO HTTP GET!');
    res.send('ROTA RAIZ DE VERBO HTTP GET!');

});

app.get('/teste', (req, res)=>{

    console.log('ROTA DE TESTE DE VERBO HTTP GET!');
    res.send('ROTA DE TESTE DE VERBO HTTP GET!');

});


app.listen(3000, ()=>{
    console.log('SERVIDOR RODANDO EM: http://localhost:3000');
});