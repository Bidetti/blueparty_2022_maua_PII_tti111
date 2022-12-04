const bcrypt = require ('bcrypt')
const cors = require('cors')
const express = require('express')
const jwt = require('jsonwebtoken')
const mongoose = require ('mongoose')
const uniqueValidator = require ('mongoose-unique-validator')

const app = express()
app.use(express.json())
app.use(cors())

async function conectarAoMongoDB() {
await
mongoose.connect(``)
}

const usuarioSchema = mongoose.Schema({
  login: {type: String, required: true, unique: true},
  password: {type: String, required: true}
})
usuarioSchema.plugin(uniqueValidator)
const Usuario = mongoose.model("Usuario", usuarioSchema)

app.get('/festas', async (req, res) => {
  const festas = await Festa.find()
  res.json(festas)
})

app.post('/signup', async (req, res) => {
  try{
    const login = req.body.login
    const password = req.body.password
    const senhaCriptografada = await bcrypt.hash(password, 10)
    const usuario = new Usuario({login, password: senhaCriptografada})
    const respMongo = await usuario.save()
    console.log(respMongo)
    res.status(201).end()
  }
  catch (erro){
    console.log('Erro', erro)
    res.status(409).end()
  }
})
app.post('/login', async (req, res) => {
  const {login, password} = req.body
  const u = await Usuario.findOne({login: login})
  if (!u){
    return res.status(401).json({mensagem: "login inválido"})
  }
  const senhaValida = await bcrypt.compare(password, u.password)
  if (!senhaValida)
    return res.status(401).json({mensagem: "senha inválida"})
  const token = jwt.sign({login: login}, 'chave-secreta', {expiresIn: '1h'})
  res.status(200).json({token})
})

// arrow function
app.listen(3000, () => {
  try{
    conectarAoMongoDB()
    console.log("Servidor em funcionamento...")
  }
  catch (e){
    console.log("Erro", e)
  }
})


