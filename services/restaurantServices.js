const restaurants = require('../libs/restaurants');

class Restaurants{
    constructor(){}
        
        static getAll(){
            const myRestaurants = restaurants;
            return myRestaurants;
        }
        
        static getOne(restaurantId){
            console.log(restaurantId);
            const restaurant = restaurants[restaurantId];
            return restaurant;
        }

        static create(info){
            const restaurantId = (Object.keys(restaurants)).length + 1;
            restaurants[restaurantId] = info;
            return true;
        }

        static updateName(restaurantId, name){
            restaurants[restaurantId].name = name;
            return true;
        }

        static updateChef(restaurantId, chefId){
            restaurants[restaurantId].chefId = chefId;
            return true;
        }

        static remove(restaurantId){
            delete restaurants[restaurantId];
            return true;
        }
    }
    module.exports = Restaurants;

