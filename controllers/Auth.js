const Login = require('../models/Admin')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

module.exports.Signup = async (req, res) => {
  const username = req.body.username
  const password = req.body.password

  const user = await Login.findOne({ username: username }).exec()
  if (user) {
    return res.send({ error: true, message: 'Username est deja utilisé' })
  }
  const code = await bcrypt.genSalt(10)

  const admintosave = new Login()
  admintosave.username = username
  admintosave.password = await bcrypt.hash(password, code)
  admintosave
    .save()
    .then((ok) => {
      res.send({ error: false, message: 'un nouvelle admin a été ajouter' })
    })
    .catch((err) => {
      console.log(err)
      res.send({ error: true, message: 'error with adding new admin' })
    })
}

module.exports.Signin = async (req, res) => {
  const username = req.body.username
  const password = req.body.password

  const user = await Login.findOne({ username: username }).exec()
  //check if the user exist in our database
  if (!user) {
    return res.send({ error: true, message: 'Invalid Username' })
  }
  //check if password is correct
  const isValid = await bcrypt.compare(password, user.password)
  if (!isValid) {
    return res.send({ error: true, message: 'password not valid' })
  }

  let Token = jwt.sign({ username }, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: process.env.ACCESS_TOKEN_LIFE,
  })
  return res.send({error:false,message:'Is Login',Token:Token , Username:username})
}
