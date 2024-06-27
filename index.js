
const express = require('express');
const app = express();

const configureRoutes = require('./routes');
const { globalMw } = require('./middlewares/exampleMW');

const port = process.env.PORT
//process.env.PORT
// /**"dev": "nodemon --env-file .env index.js",**/
//"start": "node --env-file .env --watch index.js"
app.use(express.json());
app.use(globalMw);

configureRoutes(app);


app.get('/', (req, res) => { 
    res.send('This is your main route');
});

app.listen(port, () => {
    console.log('Server running on' ,port);
}); 