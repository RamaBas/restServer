const { response, request } = require('express')
const User = require('../models/users.models')

const getUsers = (req= request, res = response) => {
    const params = req.query;

    res.json({
        msg: 'get API - Controller',
        params
    })
  }
const postUsers = async(req, res = response) => {
    const body = req.body;
    const user = new User(body);

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