const express=require('express');
const { AddTypes, FindAllTypes, FindSingleTypes, UpdateTypes, DeleteTypes } = require('../shcemas/t.schemas');
const router=express.Router()

router.post('/',AddTypes)
router.get('/',FindAllTypes)
router.get('/:id',FindSingleTypes)
router.put('/:id',UpdateTypes)
router.delete('/:id',DeleteTypes)

module.exports=router