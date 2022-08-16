const isEmpty=require('./isEmpty');
const validator=require('validator')




module.exports=function Validateautre(data){
    let errors={}
    data.Email=!isEmpty(data.Email) ?data.Email:""
    data.Fullname=!isEmpty(data.Fullname) ?data.Fullname:""
    
    data.Type=!isEmpty(data.Type) ?data.Type:""

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
   if(validator.isEmpty(data.Type)){
    errors.Type="Required Type"
   }
   
   if(validator.isEmpty(data.status)){
    errors.status="Required status"
   }
   return {
    errors,
    isValid:isEmpty(errors)
   }
}