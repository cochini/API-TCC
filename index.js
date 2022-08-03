/* IMPORTAÇÕES DE PACOTES */
const express = require('express');

/* INSTANCIAS DE PACOTES */
//express:
const app = express();

app.listen(3000, ()=>{ 
    console.log('SERVIDOR RODANDO NA URL: http://localhost:3000'); 
});