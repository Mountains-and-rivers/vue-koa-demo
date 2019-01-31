const router = require('koa-router')()
const register = require('./register')
const login = require('./login')
const logout = require('./logout')
const userTodo = require('./userTodo')

const mongoose = require('mongoose')

switch (process.env.NODE_ENV) {
  case 'test':
    mongoose.connect('mongodb://47.111.77.29:27017/vue_koa_todos',{ useNewUrlParser: true })
    break
  /* istanbul ignore next */
  case 'dev':
    mongoose.connect('mongodb://47.111.77.29:27017/vue_koa_todos',{ useNewUrlParser: true })
    break
  /* istanbul ignore next */
  default:
    mongoose.connect('mongodb://47.111.77.29:27017/vue_koa_todos',{ useNewUrlParser: true })
}
mongoose.connection.on('connected', () => { console.log('MongoDB connected success') })

router.post('/api/register', register)
router.use('/api/login', login.routes(), login.allowedMethods())
router.get('/api/logout', logout)
router.use('/api/todo', userTodo.routes(), userTodo.allowedMethods())

module.exports = router
