const { response, request } = require('express')

const getUsers = (req= request, res = response) => {
    const params = req.query;

    res.json({
        msg: 'get API - Controller',
        params
    })
  }
const postUsers = (req, res = response) => {
    const {name="no name", age} = req.body;
    res.json({
        msg: 'post API - post',
        name,
        age
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