var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var app = express();

const users = [
  {
    username: 'João',
    idade: 24,
    profissao: 'Engenheiro'
  },
  {
    username: 'angela',
    idade: 33,
    profissao: 'Advogada'
  },
  {
    username: 'bruno',
    idade: 24,
    profissao: 'Analista de sistemas'
  },
];

app.use(bodyParser.urlencoded({extended: false}));
app.use(cors());

app.get('/', (req, res) => {
  res.json({response: 'Home'});
});

app.get('/user', (req, res) => {
  res.json(users);
});

app.get('/user/:username', (req, res) => {
  var username = req.params.username;
  var hasUser = users.some( user => {
    return user.username === username;
  });

  if (hasUser) {
    return res.json(users.filter( user => {
      return user.username === username;
    }));
  }

  if(users[username])
    return res.json(users[username]);
  
  res.status(404).json({error: 'Usuário não encontrado!'});
});

app.post('/user', (req, res) => {
  var idade = req.body.idade;
  var profissao = req.body.profissao;
  var username = req.body.username;

  var hasUser = users.some( user => {
    return user.username === username;
  });

  if (!hasUser) {
    users.push({
      username: username, 
      idade: idade, 
      profissao: profissao
    });
  }

  res.json(users);
});

app.listen('3000');