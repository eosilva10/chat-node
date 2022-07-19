const express = require('express'); // FAZENDO A TRATATIVA PARA MOSTRAR UM ARQUIVO ESTATICO
const path = require('path'); // PADRÃO DO NODE.JS

const app = express(); // CRIANDO O APP
const server = require('http').createServer(app); // DEFININDO AS ROTAS
const io = require('socket.io')(server); // DEFININDO PROTOCOLO

app.use(express.static(path.join(__dirname, 'public'))); // DEFININFO PASTAS DO FRONT-END
app.set('views', path.join(__dirname, 'public')); // DEFININDO PASTAS DAS VIEWS
app.engine('html', require('ejs').renderFile); // DEFININDO ENGINE
app.set('view set', 'html'); // DEFININDO A VISUALIZAÇÃO DAS VIEWS EM HTML

// DEFININDO A ROTA PADRÃO DO APP
app.use('/', (req, res) => {
    res.render('index.html');
});

app.listen(3000); // PORTA