const { Router } = require('express')
const UserController = require('./controllers/user.js')

const routes = Router()

routes.get('/users', UserController.index)
routes.post('/users', UserController.store)
routes.put('/users', UserController.update)
routes.delete('/users', UserController.delete)

module.exports = routes
