const express=require('express');
const { AddClients, FindAllClients, FindSingleClient, UpdateClients, DeleteClients } = require('../shcemas/clients.schema');
const router=express.Router()

/*add clients*/
router.post('/',AddClients)
/*find all clients*/
router.get('/',FindAllClients)
/*find single clients*/
router.get('/:id',FindSingleClient)
/*modify clients*/
router.put('/:id',UpdateClients)
/*delete clients*/
router.delete('/:id',DeleteClients)


module.exports=router