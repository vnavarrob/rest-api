const chefs = require('../libs/chefs')

class Chefs{
 constructor(){}
    static getAll(){
        const myChefs = chefs;
        return myChefs;
    }

    static getOne(chefId){
        const chef = chefs[chefId];
        return chef;
    }
    
    static create(info){
        const chefId = (Object.keys(chefs)).length + 1;
        chefs[chefId] = info;
        return true;
    }

    static updateSpeciality(chefId, speciality){
            chefs[chefId].speciality = speciality;
            console.log(speciality);
            return true;
    }

    static remove(chefId){
        delete chefs[chefId]
        return true;
    }
}

module.exports = Chefs;