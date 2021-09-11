const { response, request } = require('express')
const bycrypt = require('bcryptjs')
const User = require('../models/users.models')

const getUsers = (req= request, res = response) => {
    const params = req.query;

    res.json({
        msg: 'get API - Controller',
        params
    })
  }
const postUsers = async(req, res = response) => {
    const {name, mail, password, role} = req.body;
    const user = new User({name, mail, password, role});

    //Verify exists mail


    //Encrypt password
    const salt = bycrypt.genSaltSync();
    user.password = bycrypt.hashSync( password, salt );
    
    //save on db
    await user.save();

    res.json({
        msg: 'post API - post',
        user
    })
}
const putUsers = (req, res = response) => {
    const {id} = req.params.id;
    res.json({
        msg: 'put API - Controller',
        id
    })
}
const patchUsers = (req, res = response) => {
    res.json({
        msg: 'patch API - Controller'
    })
}
const deleteUsers = (req, res = response) => {
    res.json({
        msg: 'delete API - Controller'
    })
}


module.exports = {
    getUsers,
    postUsers,
    putUsers,
    patchUsers,
    deleteUsers
}