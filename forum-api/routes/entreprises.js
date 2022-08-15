const express=require('express');

const { AddEntreprises, FindAllEntreprises, FindSingleEntreprise, UpdateEntreprises, DeleteEntreprises } = require('../shcemas/entreprise.schema');
const router=express.Router()

/*add clients*/
router.post('/',AddEntreprises)
/*find all clients*/
router.get('/',FindAllEntreprises)
/*find single clients*/
router.get('/:id',FindSingleEntreprise)
/*modify clients*/
router.put('/:id',UpdateEntreprises)
/*delete clients*/
router.delete('/:id',DeleteEntreprises)


module.exports=router






