const {catalogModel} = require('../models');

/**
 * Obtener lista base de datos
 * @param {*} req 
 * @param {*} res 
 */
const getItems = async (req, res) => {
    const data = await catalogModel.find({})
    res.send({ data })
}
/**
 * obtener detalle
 * @param {*} req 
 * @param {*} res 
 */
const getItem = (req, res) => {
    
}
/**
 * insertar un registro
 * @param {*} req 
 * @param {*} res 
 */
const createItem = async (req, res) => {
    const { body } = req
    console.log(body)
    const data = await catalogModel.create(body)
    res.send({data})
}
/**
 * actualizar un registro
 * @param {*} req 
 * @param {*} res 
 */
const updateItem = (req, res) => {
    
}
/**
 * Elimninar registro
 * @param {*} req 
 * @param {*} res 
 */
const deleteItem = (req, res) => {
    
}

module.exports = {getItems, getItem, updateItem, deleteItem, createItem};