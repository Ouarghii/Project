const express=require('express');
const { AddAutres, FindAllAutres, FindSingleAutre, UpdateAutres, DeleteAutres } = require('../shcemas/autres.schema');
const router=express.Router()

/*add clients*/
router.post('/',AddAutres)
/*find all clients*/
router.get('/',FindAllAutres)
/*find single clients*/
router.get('/:id',FindSingleAutre)
/*modify clients*/
router.put('/:id',UpdateAutres)
/*delete clients*/
router.delete('/:id', DeleteAutres)


module.exports=router