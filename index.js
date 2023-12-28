const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true })); // Para parsear dados de formulário

app.get('/', (req, res) => {
  res.render('index');
});

// Rota para lidar com o cadastro de usuários
app.post('/cadastro', (req, res) => {
  const { nome, email, senha } = req.body;
  // Aqui você pode tratar os dados, como salvá-los em um banco de dados, por exemplo

  // Simulação do armazenamento em um "banco de dados" em memória
  const novoUsuario = {
    nome,
    email,
    senha,
  };

  console.log(`Novo cadastro: Nome - ${nome}, Email - ${email}, Senha - ${senha}`);
  // Pode redirecionar o usuário para outra página após o cadastro ser processado
  res.redirect('/obrigado');
});

app.get('/obrigado', (req, res) => {
  res.send('Obrigado por se cadastrar!');
});

app.listen(port, () => {
  console.log(`AppMode está rodando em http://localhost:${port}`);
});
