const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Conectar ao MongoDB
mongoose.connect('mongodb://localhost:27017/ecommerce', { useNewUrlParser: true, useUnifiedTopology: true });

// Configuração de middleware
app.use(bodyParser.json());
app.use(express.static('public'));

// Rotas para gerenciar produtos, pedidos e pagamentos
app.get('/products', (req, res) => {
    // Código para obter todos os produtos
});

app.post('/orders', (req, res) => {
    // Código para criar um novo pedido
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
