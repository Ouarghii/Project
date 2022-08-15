const isEmpty = require('./isEmpty')
const validator = require('validator')






module.exports = function ValidateEntreprise(data){

    let errors ={}
    data.Email = !isEmpty(data.Email) ? data.Email : ""
    data.Name = !isEmpty(data.Name) ? data.Name : ""
    data.Matricule = !isEmpty(data.Matricule) ? data.Matricule: ""
    data.Status = !isEmpty(data.Status) ? data.Status: ""

    if(!validator.isEmail(data.Email)){
        errors.Email = "Format Email Required"
    }
    if(validator.isEmpty(data.Name)){
        errors.Name = "Required Name"
    }
    if(validator.isEmpty(data.Matricule)){
        errors.Matricule = "Required Matricule"
    }
    if(validator.isEmpty(data.Status)){
        errors.Status = "Required Status"
    }
    return{
        errors,
        isValid: isEmpty(errors)
    }

}