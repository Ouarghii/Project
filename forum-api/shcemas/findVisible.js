module.exports=function findVisible(populate){
    return function (next){
        if(!this.conditions.ignoreVisibility && typeof this._conditions.isVisible==='undefined'){
            this.where('isVisible').equals(true)
        }
        delete this._conditions.ignoreVisibility
        if(populate) {
            this.populate(populate)
        }
        next()
    }
}