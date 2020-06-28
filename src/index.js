const express = require('express')
const userController = require('./controllers/UserController')

const app = express()

app.use(express.json())
app.get('/users', userController.index)
app.post('/users', userController.storage)
app.delete('/users/:id', userController.delete)
app.put('/users/:id', userController.update)

app.listen(3333)
