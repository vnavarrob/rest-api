get http://localhost:3000/api/v1/clients

post http://localhost:3000/api/v1/chefs

{
    "firstName": "Napoleon",
    "lastName": "Bonaparte",
    "speciality": "Peruan"

}

patch http://localhost:3000/api/v1/chefs/update-speciality/2
{
    "firstName": "Napoleon",
    "lastName": "Bonaparte",
    "speciality": "Mexican"

}


get http://localhost:3000/api/v1/restaurants/

post http://localhost:3000/api/v1/restaurants

get http://localhost:3000/api/v1/restaurants/

{
    "restaurants": {
        "1": {
            "Name": "Mayor",
            "Brand": "X"
        }
    },
    "message": "Here is the restaurants list"
}

http://localhost:3000/api/v1/restaurants/update-chef/2
{
    "idChef" : 1
}




or


-> have to supress .env / change the script "dev" to "start" no watch or nodemon / indicate engine - node <version> 
get api-rest-palm-cassowary-os.cfapps.us10-001.hana.ondemand.com/api/v1/chefs/  

{
    "chefs": {
        "1": {
            "firstName": "Napoleon",
            "lastName": "Bonaparte",
            "speciality": "French"
        }
    },
    "message": "Here is the chef list"
}
