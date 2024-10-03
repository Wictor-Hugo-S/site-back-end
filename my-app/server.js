// const express = require('express');
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
// const cors = require('cors');

// const app = express();
// const PORT = 5000;
// const SECRET_KEY = 'teste123'; // Mantenha isso seguro!

// app.use(cors());
// app.use(express.json());

// // Usuários simulados (em memória)
// let users = [
//   { id: 1, cpf: '710.510.354-06', senha: bcrypt.hashSync('senha1', 8) },
//   { id: 2, cpf: '710.510.354-07', senha: bcrypt.hashSync('senha2', 8) } // Mudei o CPF para não ter duplicatas
// ];

// // Rota de autenticação
// app.post('/auth/login', (req, res) => {
//   const { cpf, senha } = req.body; // Mudou de username para cpf e password para senha
//   const user = users.find(u => u.cpf === cpf); // Usando cpf para encontrar o usuário

//   if (user && bcrypt.compareSync(senha, user.senha)) { // Verifica a senha
//     const token = jwt.sign({ id: user.id }, SECRET_KEY, { expiresIn: '1h' });
//     res.status(200).json({ auth: true, token });
//   } else {
//     res.status(401).json({ auth: false, message: 'Credenciais inválidas' });
//   }
// });

// // Rota para verificar o token
// app.get('/auth/me', (req, res) => {
//   const token = req.headers['x-access-token'];

//   if (!token) return res.status(403).send({ auth: false, message: 'Token não fornecido.' });

//   jwt.verify(token, SECRET_KEY, (err, decoded) => {
//     if (err) return res.status(500).send({ auth: false, message: 'Falha ao autenticar o token.' });

//     res.status(200).send(decoded);
//   });
// });

// app.listen(PORT, () => {
//   console.log(`Servidor rodando na porta ${PORT}`);
// });


const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cors = require('cors');

const app = express();
const PORT = 5000;
const SECRET_KEY = 'teste123'; // Mantenha isso seguro!
const mongoose = require('mongoose');
const User = require('./models/User');


const MONGO_URI = 'mongodb://localhost:27017/teste';
mongoose.connect(MONGO_URI)
  .then(() => {
    console.log('Conectado ao MongoDB');
  })
  .catch((error) => {
    console.error('Erro ao conectar ao MongoDB:', error);
  });
app.use(cors());
app.use(express.json());
// Rota de autenticação

// const createUser = async () => {
//   const cpf = '710.510.354-07'
//   const senha = bcrypt.hashSync('senha2', 8)

//   const existirUser = await User.findOne({ cpf })

//   if (!existirUser) {
//     const newUser = new User({ cpf, senha })

//     try {
//       await newUser.save()
//       console.log('criado com sucesso')
//     } catch (e) {
//       console.log('erro', e)
//     }

//   }
//   else {
//     console.log('useruo ja existe')
//   }

// }
// createUser();
app.post('/auth/login', async (req, res) => {
  const { cpf, senha } = req.body;

  try {
    const user = await User.findOne({ cpf });

    if (!user) {
      return res.status(400).json({ auth: false, message: 'Usuario n encontrado' })
    }


    const validPassword = bcrypt.compareSync(senha, user.senha);
    if (!validPassword) {
      return res.status(401).json({ auth: false, message: 'Senha invalida' })
    }

    const token = jwt.sign({ id: user._id }, SECRET_KEY, { expiresIn: '1h' })
    res.status(200).json({ auth: true, token })

  } catch (err) {

    res.status(500).json({ auth: false, message: 'Erro no servidor' })
  }
})



app.post('/logout',async(req,res)=>{



res.status(200).json({message:"logou com sucesso"})
})



app.get('/auth/me', (req, res) => {
  const token = req.headers['authorization'];

  if (!token) {
    return res.status(403).send({ auth: false, message: 'Token não fornecido.' });
  }

  jwt.verify(token, SECRET_KEY, (err, decoded) => {
    if (err) {
      return res.status(500).send({ auth: false, message: 'Token inválido ou expirado.' });
    }

    res.status(200).send(decoded); // Token ainda válido
  });
});



app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
