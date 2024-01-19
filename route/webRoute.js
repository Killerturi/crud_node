const express=require('express')
const { Home, About, service } = require('../controller/WebController')

const Router=express.Router()

Router.get('/',Home)
Router.get('/about',About)
Router.get('/service',service)




module.exports=Router