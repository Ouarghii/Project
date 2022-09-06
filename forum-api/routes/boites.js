const express=require('express');

const { AddBoites, FindAllBoites, FindSingleBoite, UpdateBoites, DeleteBoites } = require('../shcemas/boite.schema');
const router=express.Router()

/*add clients*/
router.post('/',AddBoites)
/*find all clients*/
router.get('/',FindAllBoites)
/*find single clients*/
router.get('/:id',FindSingleBoite)
/*modify clients*/
router.put('/:id',UpdateBoites)
/*delete clients*/
router.delete('/:id',DeleteBoites)


module.exports=router