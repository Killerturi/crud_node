const express=require('express')
const { createUser, allUser, editUser, updateUser, deleteUser } = require('../controller/ApiController')


const Router=express.Router()

Router.post('/create/user',createUser)
Router.get('/all/user',allUser)
Router.get('/user/:id',editUser)
Router.post('/update/user/:id',updateUser)
Router.delete('/delete/user/:id',deleteUser)





module.exports=Router