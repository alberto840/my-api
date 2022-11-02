const {storageModel} = require('../models');
const PUBLIC_URL = process.env.PUBLIC_URL;

/**
 * Obtener lista base de datos
 * @param {*} req 
 * @param {*} res 
 */
const getItems = async (req, res) => {
    const data = await storageModel.find({})
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
    const { body , file} = req
    console.log(file)
    const fileData = {
        filename: file.filename,
        url: `${PUBLIC_URL}/${file.filename}`
    }
    const data = await storageModel.create(fileData)
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