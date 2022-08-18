const express=require('express');
const { AddFournisseurs, FindAllFournisseurs, FindSingleFournisseurs, UpdateFournisseurs, DeleteFournisseurs } = require('../shcemas/fournisseurs.schema');
const router=express.Router()

router.post('/',AddFournisseurs)
router.get('/',FindAllFournisseurs)
router.get('/:id',FindSingleFournisseurs)
router.put('/:id',UpdateFournisseurs)
router.delete('/:id',DeleteFournisseurs)


module.exports=router