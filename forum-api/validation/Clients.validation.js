const isEmpty=require('./isEmpty');
const validator=require('validator')




module.exports=function Validateclient(data){
    let errors={}
    data.Email=!isEmpty(data.Email) ?data.Email:""
    data.Fullname=!isEmpty(data.Fullname) ?data.Fullname:""
    data.Cin=!isEmpty(data.Cin) ?data.Cin:""
    data.NumberPhone=!isEmpty(data.NumberPhone) ?data.NumberPhone:""
    data.Profession=!isEmpty(data.Profession) ?data.Profession:""

    data.status=!isEmpty(data.status) ?data.status:""
    if(!validator.isEmail(data.Email)){
        errors.Email="Format Email required"
    }
    if(validator.isEmpty(data.Email)){
    errors.Email="Required Email"
   }
   if(validator.isEmpty(data.Fullname)){
    errors.Fullname="Required Fullname"
   }
   if(validator.isEmpty(data.Cin)){
    errors.Cin="Required Cin"
   }
   if(validator.isEmpty(data.NumberPhone)){
    errors.NumberPhone="Required NumberPhone"
   }
   if(validator.isEmpty(data.Profession)){
    errors.Profession="Required Profession"
   }
   if(validator.isEmpty(data.status)){
    errors.status="Required status"
   }
   return {
    errors,
    isValid:isEmpty(errors)
   }
}